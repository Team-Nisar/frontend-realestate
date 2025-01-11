import React, { useState } from "react";
import { properties } from "../Data";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GrLocation, GrOrganization  } from "react-icons/gr";
import { BiRupee } from "react-icons/bi";
import { MdOutlineLocalHotel } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const cities = [
  "All Cities",
  "Los Angeles",
  "Miami",
  "New York",
  "San Francisco",
  "Chicago",
  "Houston",
  "Seattle",
];

const HotSellings = () => {

  const [selectedCity, setSelectedCity] = useState("All Cities");
  const filteredProperties = selectedCity === "All Cities" ? properties : properties.filter((property) => property.city === selectedCity);

  return (
    <div className="bg-sup-light-purple text-dark-blue text-center flex flex-col gap-10 justify-center items-center max-w-[1740px] mx-auto pt-10">
      <h1 className="text-5xl font-bold">Hot Selling Properties</h1>
      <div className="flex flex-col justify-center w-[95%]">
        <div className="flex w-[90%] overflow-scroll no-scrollbar mx-auto justify-start gap-5 ">
          {cities.map((city, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedCity(city);
                setCurrentIndex(0); // Reset to the first property when city changes
              }}
              className={`${
                selectedCity === city ? "active" : "inactive"
              } px-10 py-2.5 rounded-md bg-white`}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <div className="px-5 md:px-0 lg:px-0 xl:px-0 2xl:px-0 mx-auto w-full">
            <Swiper
              slidesPerView={'auto'}
              centeredSlides={true}
              spaceBetween={10}
              breakpoints={{
                510: {
                  slidesPerView: 2,
                },
                830: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
                1324: {
                  slidesPerView: 4,
                },
              }}
              centeredSlidesBounds={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {filteredProperties.map((property) => (
                <SwiperSlide>
                  <div key={property.id} className="my-10">
                    <div className=" w-full lg:w-[22rem] p-3 flex flex-col justify-center items-start rounded-xl overflow-auto bg-white shadow">
                      <img
                        src={property.image}
                        className="w-full h-[15rem] rounded-lg mb-2 cover"
                      />
                      <div className="flex flex-col justify-center items-start">
                        <h1 className="font-semibold text-lg xl:text-xl 2xl:text-xl lg:text-xl leading-none text-start">
                          {property.name}
                        </h1>
                        <p className="text-sm flex gap-1 items-center"><GrLocation /> {property.location}</p>
                      </div>
                      <p className="text-[#1eb056] text-sm xl:text-md 2xl:text-md lg:text-md font-semibold flex gap-1 items-center">
                      <BiRupee className="text-dark-blue" size={16}/>{property.price}
                      </p>
                      <p className="text-sm flex gap-1 items-center"><GrOrganization size={13}/>{property.area}</p>
                      <p className="text-sm flex gap-1 items-center">
                        <MdOutlineLocalHotel size={16}/>{property.bedrooms} beds & {property.bathrooms}{" "}
                        bathrooms
                      </p>
                      <p className="flex justify-start py-1 text-blue-400 text-xs">
                        <div className="flex flex-wrap justify-start gap-1 items-center">
                          {property?.features?.map((feature, i) => (
                            <p className="px-2 py-1 rounded-full bg-rich-purple-100 text-white">
                              {feature}
                            </p>
                          ))}
                        </div>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotSellings;
