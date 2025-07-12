import React from 'react'
import "./Hero.css"
import photo from "../../assets/bg-image.svg"


const Hero = () => {
  return (
    <section className='hero min-h-[calc(100vh-76px)]' style={{backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="container">
            <div className="w-[730px] py-[33px] px-[95px] h-[349px] bg-[#f7f8fae9] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="">
                    <p className='font-medium text-[40px] leading-[144%] text-center text-[#1d252c]'>🌱</p>
                    <h2 className='font-medium text-[46px] leading-[144%] text-center text-[#1d252c]'>The nature candle</h2>
                </div>
                <p className='font-normal max-w-[537px] mb-[45px] text-[18px] leading-[142%] text-center text-[#1d252c]'>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
                <button className='py-[8px] px-[44px] text-white bg-[#56b280] mx-auto font-medium text-[20px] text-center grid items-center mb-[40px] duration-300 hover:bg-[#3e7256]'>Discovery our collection</button>
            </div>
        </div>
    </section>
  )
}

export default Hero