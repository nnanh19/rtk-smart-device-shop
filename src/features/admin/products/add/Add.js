import React, { useEffect, useRef, useState } from 'react'
import {BiMessageAltAdd} from 'react-icons/bi'
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { categoriesSelector } from '../../categories/selector'
import { fetchCategories } from '../../categories/categoriesManagerSlice'
import { notify } from '../../../../utils/toastr'
import axios from 'axios'
import { fetchCreateProductAsync } from '../productsManagerSlice'
import { useNavigate } from 'react-router-dom'

const Add = () => {

  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm()

  const [imgSrc, setImgSrc] = useState('')


  const imgRef = useRef()
  const onSubmit = (data) => {
    if(imgSrc){
      dispatch(fetchCreateProductAsync({...data,image:imgSrc}))
      notify('Thêm thành công!')
      navigate('/admin/danh-sach')
    }else{
      imgRef.current.click()
    }
  }

  const dispatch = useDispatch()

  const {categories} = useSelector(categoriesSelector)

  const formData = new FormData();
  const API = 'https://api.cloudinary.com/v1_1/ph-th/image/upload';
  const preset = 'rjbb3yjz';
  const handleImageChange = async (files) => {
    if(files[0].size > 500000){
      if(files[0].size >= 1024){
         let size = (files[0].size / 1024).toFixed(0) + " KB"
         notify(`Chỉ cho phép kích thước ảnh nhỏ hơn 500kb, ảnh của bạn ${size}`)
      }
    }else{
      formData.append('file' , files[0] );
      formData.append('upload_preset', preset );
      const {data} = await axios.post(API, formData)
      setImgSrc(data.url)
    }
  };
  
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])
  return (
    <div className='m-5'>
      <p>Thêm mới</p>
      <div className='text-center border border-b-gray-300 py-3'>
        <p className='text-[16px] text-[#3D5170]'>Thông tin sản phẩm</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-3 gap-5 items-center'>
        <div className='col-span-1'>
            <div>
              <label htmlFor='image' className='flex flex-col justify-center items-center p-24'>
                {imgSrc ?
                <img src={imgSrc} className='w-24' alt='' />  :
                <><BiMessageAltAdd className='cursor-pointer text-[#00B0D7] text-[32px]'/> Thêm ảnh</>
                }
              </label>
              <input type='file' ref={imgRef} id="image" onChange={(e) => handleImageChange(e.target.files)} className='hidden cursor-default'/>
            </div>
            <div className='space-y-2 mt-3 '>
                <label>Mô tả ngắn</label>
                <textarea {...register('shortDescription')} className='w-full bg-[#E5E5E5] shadow-sm shadow-slate-400 outline-none rounded-md'></textarea>
             </div>
        </div>
        <div className='col-span-2'>
            <div className='space-y-2 mt-3'>
              <label>Tên sản phẩm</label>
              <input {...register('name', {required: true})} className='w-full bg-[#E5E5E5] border border-gray-300 outline-none rounded-md' type={'text'}/>
            </div>
            {errors.name && <p className='text-red-500'>Bạn chưa điền sản phẩm</p>}
            <div className='flex '>
              <div className='space-y-2 mt-3 w-full'>
                <label>Giá gốc</label>
                <input {...register('price' , {required: true})} type={'number'}  className='w-full bg-[#E5E5E5] border border-gray-300 outline-none rounded-md'/>
                {errors.name && <p className='text-red-500'>Bạn chưa điền giá gốc</p>}
              </div>
              <div className='space-y-2 mt-3 w-full space-x-2'>
                <label>Khuyễn mại</label>
                <input {...register('promotion')} type={'number'} className='w-full bg-[#E5E5E5] border border-gray-300 outline-none rounded-md'/>
              </div>
            </div>
            <div className='space-y-2 mt-3 w-[50%]'>
                <label>Danh mục</label>
                <select {...register('categoryId', {required: true})} className='w-full bg-[#E5E5E5] border border-gray-300 outline-none rounded-md'>
                    <option className='hidden'></option>
                    {categories.map(category => <option value={category.id} key={category.id}>{category.name}</option>)}
                </select>
                {errors.categoryId && <p className='text-red-500'>Bạn chưa chọn danh mục sản phẩm</p>}
            </div>
            <div className='space-y-2 mt-3 '>
                <label>Đặc điểm nổi bật</label>
                <textarea {...register('outstandingFeatures')} className='w-full bg-[#E5E5E5] border border-gray-300 outline-none rounded-md'></textarea>
             </div>
             <div className='space-y-2 mt-3 '>
                <label>Mô tả dài</label>
                <textarea {...register('longDescription')}  className='w-full bg-[#E5E5E5] border border-gray-300 outline-none rounded-md'></textarea>
             </div>
             <button className='bg-[#00B0D7] w-[100px] h-[30px] text-[12px] text-white rounded-md'>Thêm mới</button>
        </div>
          
      </form>
    </div>
  )
}

export default Add