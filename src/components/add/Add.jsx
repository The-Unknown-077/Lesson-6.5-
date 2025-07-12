import React from 'react'
import svg from "../../assets/checkmark-circle-outline 1.svg"
import image2 from "../../assets/image.svg"


const Add = () => {
  return (
    <section className='bg-[#F7F8FA] min-h-screen flex items-center justify-center'>
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="">
                    <h2 className='font-medium mb-[15px] text-[40px] leading-[116%] text-[#1d252c] tracking-[-0.02em] max-w-[350px]'>Clean and fragrant soy wax</h2>
                    <p className='font-normal text-[18px] leading-[142%] text-[#56b280] mb-[38px]'>Made for your home and for your wellness</p>
                    <div className="flex justify-center items-center relative mb-[10px]">
                        <img className='size-[20px] absolute left-[-220px] top-[3px]' src={svg} alt="" />
                        <div className="flex justify-center items-center pl-[30px]">
                            <p className='font-bold text-[16px] leading-[180%]'>Eco-sustainable: </p>
                            <h2 className='flex justify-center text-left items-center gap-[1px]'> All recyclable materials, 0% CO2 emissions</h2>
                        </div>
                    </div>
                    <div className="flex justify-center items-center relative mb-[10px]">
                        <img className='size-[20px] absolute left-[-220px] top-[3px]' src={svg} alt="" />
                        <div className="flex justify-center items-center pl-[13px]">
                            <p className='font-bold text-[16px] leading-[180%]'>Hyphoallergenic: </p>
                            <h2 className='flex justify-center text-left items-center gap-[1px]'> 100% natural, human friendly ingredients</h2>
                        </div>
                    </div>
                    <div className="flex justify-center items-center relative mb-[10px]">
                        <img className='size-[20px] absolute left-[-220px] top-[3px]' src={svg} alt="" />
                        <div className="flex justify-center items-center pr-[50px]">
                            <p className='font-bold text-[16px] leading-[180%]'>Handmade: </p>
                            <h2 className='flex justify-center text-left items-center gap-[1px]'> All candles are craftly made with love.</h2>
                        </div>
                    </div>
                    <div className="flex justify-center items-center relative mb-[68px]">
                        <img className='size-[20px] absolute left-[-220px] top-[3px]' src={svg} alt="" />
                        <div className="flex justify-center items-center pr-[30px]">
                            <p className='font-bold text-[16px] leading-[180%]'>Long burning: </p>
                            <h2 className='flex justify-center text-left items-center gap-[1px]'> No more waste. Created for last long.</h2>
                        </div>
                    </div>
                    <button className='py-[8px] px-[44px] text-white bg-[#56b280] rounded-[4px] duration-300 hover:bg-[#3e7256]'>Learn more</button>
                </div>
                <div className="">
                    <img src={image2} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Add