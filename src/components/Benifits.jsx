import CTABtn from "./common/CTABtn";
import HouseVector from "../../public/assets/HouseVector.svg";
import icon1 from "../../public/assets/IconInsurance.svg";
import icon2 from "../../public/assets/IconBestPrice.svg";
import icon3 from "../../public/assets/IconLowestCommotion.svg";
import icon4 from "../../public/assets/IconOverallControll.svg";

const benifits = [
  {
    id: 1,
    icon: icon1,
    title: "Property Insurance",
    des: "We offer our customer property protection of liability coverage and insurance for their better life.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Best Price",
    des: "Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.",
  },
  {
    id: 1,
    icon: icon3,
    title: "Lowest Commission",
    des: "You no longer have to negotiate commissions and haggle with other agents it only cost 2%!",
  },
  {
    id: 1,
    icon: icon4,
    title: "Overall Control",
    des: "Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.",
  },
];

const Benifits = () => {
  return (
    <>
      <div className="w-screen flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-start  justify-center gap-10 lg:gap-20 my-5 max-w-[1740px] mx-auto px-5 py-5 lg:py-10 bg-white">
        <div className="w-full lg:w-[26rem] xl:w-[26rem] 2xl:w-[26rem] h-[31rem] flex flex-col justify-between pt-7 pl-7 border-2 border-rich-purple-50 rounded-lg bg-[#F7F7FD]">
          <h1 className="text-[2rem] text-dark-blue font-semibold leading-8 pr-7">
            The new way to find your new home
          </h1>
          <p className="text-[1rem] text-dark-blue pr-7">
            Find your dream place to live in with more than 10k+ properties
            listed.
          </p>
          <CTABtn title={"Browse Properties"} link={"/"} />
          <img loading="lazy" src={HouseVector} />
        </div>
        <div className="flex lg:flex-wrap flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center w-full lg:w-[50%] gap-[1.5rem]">
          {benifits.map((benifit) => (
            <div
              key={benifit.id}
              className="w-[19.25rem] h-[13.62rem] flex flex-col gap-[0.5rem] text-dark-blue"
            >
              <img
                src={benifit.icon}
                className="w-[3rem] lg:w-[4rem] xl:w-[4rem]"
              />
              <h2 className="text-2xl font-semibold">{benifit.title}</h2>
              <h2 className="text-md text-[#4D5461]">{benifit.des}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Benifits;
