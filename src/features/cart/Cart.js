import React from 'react'
import {GrFormPrevious} from 'react-icons/gr'
import {TiDeleteOutline} from 'react-icons/ti'
import { useNavigate} from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
  return (
    <div className='max-w-lg mx-auto'>
        <div> 
            <div className='flex items-center cursor-pointer'>
                <GrFormPrevious /><span className='text-[#D70018] text-xs' onClick={() => navigate(-1)}>Trở về</span>
            </div>
            <div className='text-center'>
                <span className='text-[#D70018] text-[18px] font-semibold'>Giỏ hàng</span>
            </div>
        </div>
        <div className='flex flex-col space-y-3'>
            <div className='grid grid-cols-5 p-3 border rounded-xl shadow-md shadow-gray-100'>
                <div className='col-span-2'>
                    <img src='https://cdn.tgdd.vn/Products/Images/42/270471/xiaomi-redmi-note-11-pro-trang-thumb-600x600.jpg' alt=''/>
                </div>
                <div className='col-span-3'>
                    <div className='flex justify-between items-center'>
                        <p className='text-[15px] text-[#0E2431]'>Samsung Galaxy S22-Đen</p>
                        <TiDeleteOutline className='text-xl cursor-pointer'/>
                    </div>
                    <div className='space-x-2'>
                        <span className='text-[15px] text-[#D70018] '>16.090.000 ₫</span>
                        <span className='text-[#777777]  text-[14px]'>16.090.000 ₫</span>
                        <span className='bg-red-600 text-white rounded-[5px] text-[12px] p-[4px]'>Giảm 10%</span>
                    </div>
                    <div className='flex space-x-3'>
                        <div>
                            <span className='text-xs'>Chọn số lượng: </span>
                        </div>
                        <div className='border border-gray-200 flex items-center justify-center'>
                            <div className='w-[25px]  text-center'>
                                <span className='cursor-pointer'>-</span>
                            </div>
                            <div className='w-[25px] '>
                                <input  className='outline-none w-[25px] text-[12px]' type='number'/>
                            </div>
                            <div className='w-[25px] text-center'>
                                <span className='cursor-pointer'>+</span>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Cart