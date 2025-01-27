import Layout from "../components/Layout/Layout";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import CTABtn from "../components/common/CTABtn";
import { GoStar, GoStarFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import { useContext, useState } from "react";
import { FilterContext } from "../context/FilterContext";
import { RxCross2 } from "react-icons/rx";
import { IoChevronDownSharp, IoCloseOutline, IoOptionsOutline } from "react-icons/io5";

const PropertyListPage = () => {
  const {
    propertyTypes,
    BHK,
    stars,
    rating, status,
    amenities,
    search, setSearch,
    sort, setSort,
    filter, setFilters,
    handleCheckboxChange,
    handleFilterSelect,
    handlePriceChange,
    handleAmenityChange,
    setSelectedAmenities,
    minPrice,
    maxPrice,
    filters,
    filteredPropertiesData,
    resetFilter
  } = useContext(FilterContext);

  const [propertyTypeOpen, setPropertyTypeOpen] = useState(false);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [ratingsOpen, setRatingsOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <Layout title={"PropertyList"}>
      <div className="pt-14 lg:pt-20 flex flex-col pb-10">
        <div className="pr-10 pl-7 flex justify-between items-center md:hidden lg:hidden xl:hidden 2xl:hidden">
          <h1 className="text-2xl font-semibold text-rich-purple-100">Property List</h1>
          <div onClick={()=>setFilterOpen(!filterOpen)}>
            {filterOpen ? <RxCross2 size={20}/> : <IoOptionsOutline size={20} />}
          </div>
        </div>
        <div className="w-11/12 flex gap-x-5 items-center justify-between mx-auto h-20 rounded-xl ">
          {/* Search Input */}
          <input
            type="text"
            value={search}
            placeholder="Search by City or Location"
            className="w-[60%] lg:w-[35%] rounded-lg border"
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* Sorting */}
          <select
            value={sort}
            className="w-[30%] lg:w-[12%] border rounded-lg"
            onChange={(e) => setSort(e.target.value)}
          >
            <option disabled="true">Sort By</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="w-11/12 m-auto flex flex-col  md:flex-row lg:flex-row justify-between gap-10 items-start ">
          <div className={`filterproduct ${!filterOpen && "hidden" } md:block lg:block w-full lg:w-2/5 md:w-2/5 xl:w-2/5 2xl:w-2/5 bg-white border rounded-xl p-10`}>
            <div className="">
              <div className="">
                <h1 className="text-4xl font-semibold ">FILTER</h1>
              </div>
              {/*  PRICE RANGE SLIDER */}
              <div className="py-4 border-b">
                <h1 className="mb-3 text-xl font-semibold">By Price</h1>
                <div>
                  <Slider
                    trackStyle={[
                      { backgroundColor: "rgb(107 114 128)",height: "4px" }, // Tailwind gray-500
                    ]}
                    railStyle={{
                      backgroundColor: "rgb(209 213 219)",
                      height: "4px",
                    }}
                    handleStyle={[
                      {
                        backgroundColor: "rgb(139 92 246)",
                        borderColor: "rgb(139 92 246)",
                        height: "20px",
                        width: "20px",
                        marginTop: "-8px",
                      },
                      {
                        backgroundColor: "rgb(139 92 246)",
                        borderColor: "rgb(139 92 246)",
                        height: "20px",
                        width: "20px",
                        marginTop: "-8px",
                      },
                    ]}
                    min={minPrice}
                    max={maxPrice}
                    range
                    defaultValue={[filters.min, filters.max]}
                    onChange={handlePriceChange}
                  />

                  <div className="flex justify-between">
                    <span className="text-xs">₹{filters.min}</span>
                    <span className="text-xs">₹{filters.max}</span>
                  </div>
                </div>
              </div>

              {/*BY PROPERTY TYPE */}
              <div className="py-4 border-b">
                <div onClick={()=> setPropertyTypeOpen(!propertyTypeOpen)} className="flex justify-between items-center">
                  <h1 className="text-xl font-semibold">By Property Type</h1>
                  <IoChevronDownSharp className={`${propertyTypeOpen === true && "rotate-180"}`}/>
                </div>
                <div className={`mt-3 ${propertyTypeOpen === false && "hidden"}`}>
                  {propertyTypes.map((item, i) => (
                    <div className="flex items-center" key={i}>
                      <input
                        name="propertyType"
                        value={item}
                        type="checkbox"
                        className="w-10"
                        onChange={handleCheckboxChange}
                      />
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* BY BHK */}
              <div className="py-4 border-b">
                <h1 className="mb-3 text-xl font-semibold">By BHK</h1>
                <select
                  value={filters.BHK}
                  name="BHK"
                  className="border"
                  onChange={handleFilterSelect}
                >
                  {BHK.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
              </div>
              {/* BY AMENITIES */}
              <div className="py-4 border-b">
                <div onClick={()=> setAmenitiesOpen(!amenitiesOpen)} className="flex justify-between items-center">
                  <h1 className="text-xl font-semibold">By Amenities</h1>
                  <IoChevronDownSharp className={`${amenitiesOpen === true && "rotate-180"}`}/>
                </div>
                <div className={`mt-3 ${amenitiesOpen === false && "hidden"}`}>
                  {amenities.map((item, i) => (
                    <div className="flex items-center" key={i}>
                      <input
                        name="amenities"
                        value={item}
                        type="checkbox"
                        className="w-10"
                        onChange={handleAmenityChange}
                      />
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* BY RATINGS */}
              <div className="py-4 border-b">
              <div onClick={()=> setRatingsOpen(!ratingsOpen)} className="flex justify-between items-center">
                  <h1 className="text-xl font-semibold">By Rating</h1>
                  <IoChevronDownSharp className={`${ratingsOpen === true && "rotate-180"}`}/>
                </div>
                <div className={`mt-3 ${ratingsOpen === false && "hidden"}`}>
                  {stars.map((item, i) => (
                    <div
                      className="flex items-center"
                      key={i}
                      onChange={handleFilterSelect}
                    >
                      <input
                        type="radio"
                        id={item}
                        name={"rating"}
                        value={item}
                        className="w-10"
                      />
                        <label for={item}>{item} Star</label>
                    </div>
                  ))}
                </div>
              </div>
              {/* By STATUS */}
              <div className="py-4 border-b">
                <h1 className="mb-3 text-xl font-semibold">By Status</h1>
                <select
                  value={filters.status}
                  name="status"
                  className="border"
                  onChange={handleFilterSelect}
                >
                  <option>Under Construction</option>
                  <option>Ready to Move</option>
                </select>
              </div>

              <div>
                <button
                onClick={resetFilter}
                  className={`w-full flex gap-2 justify-center items-center py-2.5 px rounded-lg text-white bg-rich-purple-100 hover:scale-105 transition-all duration-300 ease-in-out`}
                >Reset
                </button>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-5">
              {filteredPropertiesData.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex flex-col lg:flex-row border rounded-xl overflow-hidden"
                >
                  <div className="lg:w-2/3 w-full overflow-hidden border">
                    <img
                      src={item.image}
                      className="object-cover h-[17rem] w-full"
                    />
                  </div>
                  <div className="p-5 w-full flex flex-col gap-1">
                    <h2 className="text-3xl font-semibold">{item.name}</h2>
                    <p className="flex gap-1 items-center">
                      <HiLocationMarker />
                      {item.location}
                    </p>
                    <p className="flex items-center text-rich-purple-100">
                      <GoStarFill />
                      <GoStarFill />
                      <GoStarFill />
                      <GoStarFill />
                      <GoStar /> {item.rating} Star Hotel
                    </p>
                    <div className="flex justify-between">
                      <p className="flex">{item.area}</p>
                      <p className="flex text-green-500 font-semibold text-xl">
                        ₹ {item.price} /-
                      </p>
                      {/* <div>{item?.propertyType}</div> */}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {item.amenities.map((feature, i) => (
                        <div
                          key={i}
                          className="bg-rich-purple-50 text-xs text-dark-blue px-3 py-1.5 rounded-full"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="w-full flex border-t-2 pt-3 mt-2">
                      <CTABtn
                        title={"View Place"}
                        bg={"rich-purple-100"}
                        text={"white"}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyListPage;
