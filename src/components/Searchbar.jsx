import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/SearchBar.css";
import {searchBarData} from "../Data";

const SearchBar = ({ onSearch }) => {
  // const [type, setType] = useState("Buy");
  // const [propertyCategory, setPropertyCategory] = useState("Residential");
  // const [location, setLocation] = useState("");
  // const [city, setCity] = useState("");

  // const [rooms, setRooms] = useState("");
  // const [cities, setCities] = useState([]);
  // const [selectedCommercialTypes, setSelectedCommercialTypes] = useState([]);
  // const [selectedResidentialTypes, setSelectedResidentialTypes] = useState([]);

  //states
  const [select, setSelect] = useState("New Project");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [buyOrLease, setBuyOrLease] = useState("");
  const [chooseAgent, setChooseAgent] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [unitType, setUnitType] = useState("");

  const commercialTypes = [
    "Office Space",
    "Shop",
    "Land",
    "Industrial Plot",
    "Showroom",
    "Office Space in IT/SEZ",
    "Warehouse",
    "Co-working Space",
  ];

  const residentialTypes = [
    "Apartment",
    "Plot",
    "Builder Floor",
    "Independent House",
    "Villa",
    "Penthouse",
  ];

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const citiesRes = await axios.get("/api/cities");
        setCities(citiesRes.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, []);

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        axios
          .get(`/api/reverse-geocode?lat=${latitude}&lon=${longitude}`)
          .then((res) => setLocation(res.data.location))
          .catch((err) => console.error("Error fetching location:", err));
      },
      (error) => console.error("Geolocation error:", error)
    );
  };

  const handlePropertyTypeChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "commercial") {
      setSelectedCommercialTypes((prevState) =>
        checked
          ? [...prevState, value]
          : prevState.filter((item) => item !== value)
      );
    } else {
      setSelectedResidentialTypes((prevState) =>
        checked
          ? [...prevState, value]
          : prevState.filter((item) => item !== value)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParams = {
      type,
      propertyCategory,
      location,
      city,
      minBudget,
      maxBudget,
      rooms,
      selectedCommercialTypes,
      selectedResidentialTypes,
    };
    onSearch(searchParams);
  };

  return (
    <div className="flex justify-center items-center relative mt-auto min-h-auto bg-[#8a8a8a62] w-[90vw] md:w-[70vw] lg:w-[70vw] xl:w-[70vw] border text-black  rounded-xl">
      <div className="w-[100%] bg-[#323232a3] p-[1rem] rounded-2xl">
        <form onSubmit={handleSubmit} className="search-form">
          {/* Menu for Select */}
          <div className="absolute no-scrollbar w-[90%] sm:w-[80%] md:w-[80%] lg:w-[70%] xl:w-[70%] 2xl:w-[70%] overflow-x-scroll  bg-gray-900 text-white rounded-xl text-xs gap-10 px-10 py-6 flex justify-evenly items-start -top-10 left-[50%] translate-x-[-50%]">
            {searchBarData.map((data) => (
              <div onClick={() => setSelect(data.title)}>
                <div
                  className={`${
                    data.title === select && "border-b-2"
                  } p-2 flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all duration-200 text-justify`}
                >
                  <img src={data?.icon} className="w-8" />
                  <p className="text-center">{data.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-24">
            {searchBarData.map((data, i) => {
              return (
                data?.title === select && (
                  <div className="flex flex-col gap-2 md:flex-row lg:flex-row w-full">
                    <input
                      type="text"
                      className="rounded-md"
                      placeholder="Enter Here"
                    />
                    <div className="flex md:w-[80%] lg:w-[80%] rounded-md xl:w-[80%] 2xl:w-[80%]">
                      <select
                        // value={minBudget}
                        onChange={(e) => {
                          if (data.firstFilter.firstTitle === "Min")
                            setMinBudget(e.target.value);
                          else if (data.firstFilter.firstTitle === "Buy/Lease")
                            setBuyOrLease(e.target.value);
                          else if (
                            data.firstFilter.firstTitle === "Choose Agent"
                          )
                            setChooseAgent(e.target.value);
                        }}
                        className=""
                      >
                        {data?.firstFilter.firstTitle && (
                          <option selected disabled>
                            {data?.firstFilter?.firstTitle}
                          </option>
                        )}
                        {data?.firstFilter?.min?.map((value, i) => (
                          <option>{value}</option>
                        ))}
                      </select>
                      {data?.firstFilter?.max && (
                        <select
                          // value={maxBudget}
                          onChange={(e) => setMaxBudget(e.target.value)}
                          className=""
                        >
                          {data?.firstFilter.secondTitle && (
                            <option selected disabled>
                              {data?.firstFilter?.secondTitle}
                            </option>
                          )}
                          {data?.firstFilter?.max?.map((value, i) => (
                            <option>{value}</option>
                          ))}
                        </select>
                      )}
                      {data?.secondFilter && (
                        <select
                          onChange={(e) => {
                            if (
                              data?.secondFilter?.firstTitle === "Property Type"
                            )
                              setPropertyType(e.target.value);
                            else if (
                              data?.secondFilter?.firstTitle === "Unit Type"
                            )
                              setUnitType(e.target.value);
                          }}
                          className=""
                        >
                          <option selected disabled>
                            {data?.secondFilter?.firstTitle}
                          </option>
                          {data?.secondFilter?.Residential?.map((value, i) => (
                            <option>{value}</option>
                          ))}
                        </select>
                      )}
                    </div>
                    <button className="text-white bg-blue-600 px-4 py-2 rounded-lg">
                      Search
                    </button>
                  </div>
                )
              );
            })}
          </div>

          {/* First Row: Property Type & Category */}
          {/* <div className="search-row">
            <div className="input-group">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="input"
              >
                <option value="Buy">Buy</option>
                <option value="Rent">Rent</option>
              </select>
            </div>
            <div className="input-group">
              <select
                value={propertyCategory}
                onChange={(e) => setPropertyCategory(e.target.value)}
                className="input"
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
            Commercial/Residential Property Types
            {propertyCategory === "Commercial" && (
              <div className="checkbox-group">
                {commercialTypes.map((type) => (
                  <label key={type} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="commercial"
                      value={type}
                      checked={selectedCommercialTypes.includes(type)}
                      onChange={handlePropertyTypeChange}
                      className="checkbox-input"
                    />
                    {type}
                  </label>
                ))}
              </div>
            )}
          </div> */}

          {/* Second Row: Location, City, Budget */}
          {/* <div className="search-row">
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input"
              />
            </div>
            <div className="input-group">
              <button
                type="button"
                onClick={handleGetLocation}
                className="btn-nearme"
              >
                Near Me
              </button>
            </div>
            <div className="input-group">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="input"
              >
                <option value="">Select City</option>
                {cities.map((c) => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            Budget
            {(propertyCategory === "Plots" || type === "Buy") && (
              <div className="input-group">
                <select
                  value={minBudget}
                  onChange={(e) => setMinBudget(e.target.value)}
                  className="input"
                >
                  <option value="">Min Budget</option>
                  {[50000, 100000, 200000].map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
                <select
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(e.target.value)}
                  className="input"
                >
                  <option value="">Max Budget</option>
                  {[100000, 300000, 500000].map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div> */}

          {/* Submit Button
          <div className="submit-btn">
            <button type="submit" className="btn-submit">
              Search
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
