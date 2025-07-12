import axios from 'axios'
import React, { useEffect, useState } from 'react'
import randmImg from "../../assets/image 1.png"
const API_URL = 'https://dummyjson.com'
const limit = 8

const Products = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    
    
    useEffect(() => {
        setLoading(true)
        axios.get(`${API_URL}/products`, { params: { limit: limit } })
        .then(res => {
            setProducts(res.data.products);
        })
        .catch(err => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])




    return (
        <section className='mt-[90px]'>
            <div className="container">
                <div className="">
                    <h2 className='font-semibold mb-[15px] text-[40px] leading-[144%] text-center text-[#0b254b] tracking-[-0.02em]'>Products</h2>
                    <p className='font-medium text-[18px] leading-[153%] text-center text-[#5e6e89] tracking-[0.01em]'>Order it for you or for your beloved ones </p>
                </div>
                <div className="py-[60px] grid grid-cols-4 gap-[30px] mb-[65px]">
                    {products &&
                        products?.map((item) => (
                            <div className="flex flex-col items-center justify-center shadow-xl min-w-[255px] min-h-[230px] w-full h-full hover:scale-105 hover:shadow-2xl duration-300" key={item.id}>
                                <img src={item.thumbnail} alt="" className='w-[381px] h-[210px] bg-[#f7f8fa]' />
                                <div className="py-[13px] px-[26px] flex justify-between items-center w-full">
                                    <p className='font-medium text-[16px] leading-[173%] text-[#1d293f] tracking-[-0.06em]'>{item.title}</p>
                                    <p className='font-medium text-[20px] leading-[138%] text-[#56b280]'>${item.price}</p>
                                </div>
                            </div>
                        ))}
                    {/* <div className="flex flex-col items-center min-w-full min-h-full justify-center shadow-xl max-w-[255px] max-h-[230px] hover:scale-105 hover:shadow-2xl duration-300">
                        <img src={randmImg} alt="" className='w-[381px] h-[210px] bg-[#f7f8fa]' />
                        <div className="py-[13px] px-[26px] flex justify-between items-center w-full">
                            <p className='font-medium text-[16px] leading-[173%] text-[#1d293f] tracking-[-0.06em]'>Spiced Mint</p>
                            <p className='font-medium text-[20px] leading-[138%] text-[#56b280]'>97$</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Products