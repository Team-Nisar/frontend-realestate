import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../styles/SearchBar.css";
import { RiSearchLine } from "react-icons/ri";
import CTABtn from "../components/CTABtn"
import { searchBarData } from "../Data";

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
    <div className="flex justify-center items-center relative mt-auto min-h-auto w-[90vw] md:w-[80vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[70vw] text-dark-blue rounded-xl max-w-[1740px] mx-auto">
      <div className="w-[100%] p-[1rem] rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col-reverse md:flex-col lg:flex-col xl:flex-col 2xl:flex-col gap-y-2"
        >
          {/* Menu for Select */}
          <div className="w-full text-white text-xs p-1 gap-2 flex flex-wrap justify-center items-center">
            {searchBarData.map((data) => (
              <div onClick={() => setSelect(data.title)}>
                <div
                  className={`${
                    data.title === select
                      ? "bg-rich-purple-100 text-white"
                      : "bg-white text-dark-blue"
                  } px-3 py-2 justify-center items-center rounded-md cursor-pointer transition-all duration-200 text-justify`}
                >
                  <p className="text-center">{data.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex p-2 bg-white text-gray-600 rounded-lg">
            {searchBarData.map((data, i) => {
              return (
                data?.title === select && (
                  <div className="flex flex-col gap-2 lg:flex-row w-full">
                    <input
                      type="text"
                      className="lg:w-[50%] border-b-2 lg:border-b-0 xl:border-b-0 2xl:border-b-0"
                      placeholder="Search"
                    />
                    <div className="flex lg:border-l-2 gap-3 lg:w-[50%] xl:w-[80%] 2xl:w-[80%]">
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
                        className="border-r-2"
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
                          className="border-r-2"
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
                    {/* <div className="w-[12rem]">
                      <CTABtn title={"Search"} link={"/"} bg={"rich-purple-100"} icon={<RiSearchLine size={20}/>} text={"white"}/>
                    </div> */}
                    <button className="bg-primary text-white bg-rich-purple-100 hover:scale-105 transition-all duration-300 flex gap-2 justify-center items-center ease-in-out px-6 py-2 rounded-md">
                      <RiSearchLine />
                      Search
                    </button>
                  </div>
                )
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
