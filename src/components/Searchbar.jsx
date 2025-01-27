import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { searchBarData } from "../Data/Data";
import {cities} from "../components/Navbar/Mylinks"

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

  // useEffect(() => {
  //   const fetchCities = async () => {
  //     try {
  //       const citiesRes = await axios.get("/api/cities");
  //       setCities(citiesRes.data);
  //     } catch (error) {
  //       console.error("Error fetching cities:", error);
  //     }
  //   };
  //   fetchCities();
  // }, []);

  // const handleGetLocation = () => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       axios
  //         .get(`/api/reverse-geocode?lat=${latitude}&lon=${longitude}`)
  //         .then((res) => setLocation(res.data.location))
  //         .catch((err) => console.error("Error fetching location:", err));
  //     },
  //     (error) => console.error("Geolocation error:", error)
  //   );
  // };

  // const handlePropertyTypeChange = (e) => {
  //   const { name, value, checked } = e.target;
  //   if (name === "commercial") {
  //     setSelectedCommercialTypes((prevState) =>
  //       checked
  //         ? [...prevState, value]
  //         : prevState.filter((item) => item !== value)
  //     );
  //   } else {
  //     setSelectedResidentialTypes((prevState) =>
  //       checked
  //         ? [...prevState, value]
  //         : prevState.filter((item) => item !== value)
  //     );
  //   }
  // };

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

  

  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  // Update suggestions based on input
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value) {
      const filtered = cities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Add city as a chip
  const addCity = (city) => {
    if (!selectedCities.includes(city)) {
      setSelectedCities([...selectedCities, city]);
    }
    setInput("");
    setSuggestions([]);
  };

  // Remove city from selected list
  const removeCity = (cityToRemove) => {
    setSelectedCities(selectedCities.filter((city) => city !== cityToRemove));
  };

  return (
    <div className="flex justify-center items-center relative mt-auto min-h-auto w-[90vw] md:w-[80vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[70vw] text-dark-blue rounded-xl max-w-[1740px] mx-auto">
      <div className="w-[100%] p-[1rem] rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col gap-y-2"
        >
          {/* Menu for Select */}
          <div className="w-full text-white text-xs p-1 gap-2 flex flex-wrap justify-center items-center">
            {searchBarData.map((data) => (
              <div key={data} onClick={() => setSelect(data.title)}>
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
                  <div key={i} className="relative flex flex-col gap-2 lg:flex-row w-full">
                    <input
                      type="text"
                      value={input}
                      onChange={handleInputChange}
                      className="lg:w-[50%] border-b-2 lg:border-b-0 xl:border-b-0 2xl:border-b-0"
                      placeholder="Search by Cities"
                    />
                    {/* Suggestions Dropdown */}
                    {suggestions.length > 0 && (
                      <ul className="absolute overflow-y-scroll top-36 lg:top-14 xl:top-14 2xl:top-14 -left-2 w-full lg:w-2/5 max-h-44 bg-white border rounded-xl shadow-lg z-10">
                        {suggestions.map((city) => (
                          <li
                            key={city}
                            onClick={() => addCity(city)}
                            className="p-2 cursor-pointer hover:bg-rich-purple-50"
                          >
                            {city}
                          </li>
                        ))}
                      </ul>
                    )}
                    {/* Selected Cities */}
                    <div className="absolute top-32 lg:top-10 xl:top-10 2xl:top-10 mt-4 flex flex-wrap gap-2">
                      {selectedCities.map((city) => (
                        <div
                          key={city}
                          className="flex items-center text-xs md:text-sm lg:text-md xl:text-md 2xl:text-md  bg-white text-rich-purple-200 px-3 py-1 rounded-full"
                        >
                          {city}
                          <button
                            onClick={() => removeCity(city)}
                            className="ml-2 text-rich-purple-100 hover:text-rich-purple-200"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
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
                            <option key={i}>{value}</option>
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
