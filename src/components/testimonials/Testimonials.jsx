import React from 'react'
import bg1 from "../../assets/bg.png"
import bg2 from "../../assets/bg2.png"
import bg3 from "../../assets/bg3.png"
import stars from "../../assets/Stars.svg"
import stars2 from "../../assets/Stars2.svg"


const Testimonials = () => {
    return (
        <section className='bg-[#56b27f28] pt-[90px] pb-[90px] mb-[90px]'>
            <div className="container">
                <h2 className='font-medium text-[40px] leading-[144%] tracking-[-0.02em] text-center text-[#0b254b] mb-[15px]'>Testimonials</h2>
                <p className='text-[18px] font-medium leading-[153%] tracking-[0.01em] text-center text-[#5e6e89] mb-[27px]'>Some quotes from our happy customers</p>
                <div className="grid grid-cols-3 gap-[30px]">
                    <div className="w-[350px] h-[295px] py-[33px] px-[23px] bg-white rounded-[6px] duration-300 hover:scale-105 hover:shadow-2xl">
                        <img
                            src={bg1}
                            alt=""
                            style={{
                                width: "84px",
                                height: "84px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                display: "block",
                                margin: "0 auto 14px",
                            }}
                        />
                        <img src={stars} alt="" style={{
                            display: "block",
                            margin: "0 auto",
                            width: "145px",
                            height: "24px",
                            marginBottom: "22px",
                        }} />
                        <p className='font-medium text-[22px] leading-[131%] text-center text-[#1d293f] mb-[6px] max-w-[274px] mx-auto'>“I love it! No more air fresheners”</p>
                        <p className='font-normal text-[18px] text-center text-[#7c8087]'>Luisa</p>

                    </div>
                    <div className="w-[350px] h-[295px] py-[33px] px-[23px] bg-white rounded-[6px] duration-300 hover:scale-105 hover:shadow-2xl">
                        <img
                            src={bg2}
                            alt=""
                            style={{
                                width: "84px",
                                height: "84px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                display: "block",
                                margin: "0 auto 14px",
                            }}
                        />
                        <img src={stars2} alt="" style={{
                            display: "block",
                            margin: "0 auto",
                            width: "145px",
                            height: "24px",
                            marginBottom: "22px",
                        }} />
                        <p className='font-medium text-[22px] leading-[131%] text-center text-[#1d293f] mb-[6px] max-w-[274px] mx-auto'>“Raccomended for everyone”</p>
                        <p className='font-normal text-[18px] text-center text-[#7c8087]'>Edoardo</p>

                    </div>
                    <div className="w-[350px] h-[295px] py-[33px] px-[23px] bg-white rounded-[6px] duration-300 hover:scale-105 hover:shadow-2xl">
                        <img
                            src={bg3}
                            alt=""
                            style={{
                                width: "84px",
                                height: "84px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                display: "block",
                                margin: "0 auto 14px",
                            }}
                        />
                        <img src={stars} alt="" style={{
                            display: "block",
                            margin: "0 auto",
                            width: "145px",
                            height: "24px",
                            marginBottom: "22px",
                        }} />
                        <p className='font-medium text-[22px] leading-[131%] text-center text-[#1d293f] mb-[6px] max-w-[274px] mx-auto'>“Looks very natural, the smell is awesome”</p>
                        <p className='font-normal text-[18px] text-center text-[#7c8087]'>Mart</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials