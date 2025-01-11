import React from 'react'
import IconVideo from "../../public/assets/IconVideo.svg"
import IconBestDeal from "../../public/assets/IconBestDeal.svg"
import IconDocs from "../../public/assets/IconDocs.svg"

const TenantsAndLandlords = () => {

  const cardData = [
    {
      icon:IconVideo,
      bg:"rich-purple-800",
      title:"Virtual home tour",
      des:"You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property."
    },
    {
      icon:IconBestDeal,
      bg:"white",
      title:"Find the best deal",
      des:"Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!"
    },
    {
      icon:IconDocs,
      bg:"rich-purple-100",
      title:"Get ready to apply",
      des:"Find your dream house? You just need to do a little to no effort and you can start move in to your new dream home!"
    },
  ]
  return (
    <>
      <div className='w-full bg-dark-blue flex flex-col items-center text-white px-5 lg:px-20 py-10'>
        <div className='flex w-[90%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] mx-auto gap-y-2 flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center'>
          <h1 className='w-full md:w-[55%] lg:w-[35%] xl:w-[35%] 2xl:w-[35%] text-4xl font-semibold'>We make it easy for <span className='text-rich-purple-100'>tenants</span> and <span className='text-rich-purple-100'>landlords</span>.</h1>
          <p className='w-full md:w-[40%] lg:w-[25%] xl:w-[25%] 2xl:w-[25%] opacity-80 text-xs'>Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.</p>
        </div>
        <div className='flex flex-col gap-y-2 md:flex-row gap-2 lg:flex-row w-[90%] mx-auto justify-evenly items-center py-10'>
          {
            cardData.map((card, i)=>(
              <div key={i} className={`bg-${card.bg} ${card.bg == "white" && "text-dark-blue"} p-6 flex gap-5 w-full rounded-lg sm:w-full md:w-full lg:w-[30%]`}>
                <div>
                  <img src={card.icon} className='w-[8rem]'/>
                </div>
                <div className='flex flex-col gap-y-3'>
                  <h2 className='text-xl font-semibold'>{card.title}</h2>
                  <p className='text-sm'>{card.des}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className='w-full border-t py-10'>
          <div className='flex flex-col sm:flex-row md:flex-row xl:flex-row 2xl:flex-row lg:flex-row gap-y-10 justify-center text-center'>
            <div className='flex flex-col justify-center items-center gap-2 px-20'>
              <h1 className='text-3xl font-semibold'>71.5%</h1>
              <p className='text-sm opacity-80'>Property Return Rate</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 px-20  sm:border-x md:border-x lg:border-x xl:border-x 2xl:border-x'>
              <h1 className='text-3xl font-semibold'>3,856</h1>
              <p className='text-sm opacity-80'>Property in Sell & Rent</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 px-20'>
              <h1 className='text-3xl font-semibold'>2,540</h1>
              <p className='text-sm opacity-80'>Daily Completed Transactions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TenantsAndLandlords