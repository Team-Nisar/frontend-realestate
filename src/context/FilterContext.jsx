import { createContext, useState } from "react";
import { properties } from "../Data/Data";

//create Context
export const FilterContext = createContext();

//Provide Context
export const FilterContextProvider = ({ children }) => {
    
  const [propertyData, setPropertyData] = useState(properties);

  //Currunt City
  const [curruntCity, setCurruntCity] = useState('')

  //calculating Min & Max Price
  const prices = [];
  propertyData.map((property) => prices.push(property.price));

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  //options
  const propertyTypes = [
    "Plot",
    "Apartment",
    "Villa",
    "Independent House",
    "Builder Floor",
    "Penthouse",
    "Land",
    "Office Space",
    "Shop",
    "Industrial Plot",
    "Showroom",
    "Warehouse",
    "Co-working Space",
  ];
  const BHK = ["1BHK", "2BHK", "1RK", "3BHK", "4BHK", "5BHK", "6BHK"];
  const stars = [1, 2, 3, 4, 5];
  const amenities = [
    "Fitness Center",
    "24/7 Security",
    "Visitor's Parking",
    "Power Backup",
    "Private Garden",
    "Central AC",
    "Swimming Pool",
    "Kids Play Area",
    "Intercom",
  ];

  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [filters, setFilters] = useState({
    min: minPrice,
    max: maxPrice,
    propertyType: [],
    BHK: "",
    amenities: [],
    rating: "",
    status: "",
  });

  //for "Checkboxes"
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prev) => {
      if (checked) {
        // Add the value to the array if checked
        return { ...prev, [name]: [...prev[name], value] };
      } else {
        // Remove the value from the array if unchecked
        return { ...prev, [name]: prev[name].filter((item) => item !== value) };
      }
    });
  };

  //for Amenities beacuse its a "array" of amenities
  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
  
    setSelectedAmenities((prev) =>
      checked ? [...prev, value] : prev.filter((amenity) => amenity !== value)
    );
  };

  //for "radio" and "select"
  const handleFilterSelect = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };


  //for price "range"
  const handlePriceChange = (value) => {
    setFilters({ ...filters, min: value[0], max: value[1] });
  };

  

  //Filteration Logic
  const filteredPropertiesData = propertyData
  .filter((item) => item.location.toLowerCase().includes(search.toLowerCase()))
  .filter((item) => filters.propertyType.length > 0 ? filters.propertyType.includes(item.propertyType) : true)
  .filter((item) => selectedAmenities.length > 0 ? selectedAmenities.every((amenity) => item.amenities.includes(amenity)): true)
  .filter((item) => filters.rating.length > 0 ? filters.rating.includes(item.rating) : true)
  .filter((item) => filters.BHK ? filters.BHK.includes(item.BHK) : true)
  .filter((item) => filters.status ? filters.status.includes(item.status) : true)
  .filter((item) => filters.min && filters.max ? filters.min <= item.price && filters.max >= item.price : true)
  .sort((a, b) => {
    if (sort === "Price: Low to High") return a.price - b.price;
    if (sort === "Price: High to Low") return b.price - a.price;
    return 0;
  });

  //Reseting Filters
  const resetFilter = () => {
    setSort("")
    setSearch("")
    setSelectedAmenities("")
    setFilters({
        min: minPrice,
        max: maxPrice,
        propertyType: [],
        BHK: "",
        amenities: [],
        rating: "",
        status: "",
      })
  }

  const value = {
    propertyData,
    propertyTypes,
    BHK,
    stars,
    amenities,
    search,setSearch,
    sort, setSort,
    handleCheckboxChange,
    handleFilterSelect,
    handlePriceChange,
    handleAmenityChange,
    selectedAmenities, setSelectedAmenities,
    minPrice, maxPrice,
    filters, setFilters,
    filteredPropertiesData,
    resetFilter,
    curruntCity, setCurruntCity,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
