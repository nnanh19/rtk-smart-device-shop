import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { fetchSignupAsync } from '../usersSlice'

const Signup = () => {

  const {handleSubmit, register,formState: {errors} } = useForm() 

  const dispatch = useDispatch()
  const onSubmit = (data) => {
    dispatch(fetchSignupAsync(data))
  }

  return (
    <div className='bg-[#dbcfcf] p-24 '>
        <div className='max-w-md mx-auto bg-white rounded-md'>
          <div className='grid grid-cols-3 '>
              <form onSubmit={handleSubmit(onSubmit)} className='col-span-2 space-y-3 p-8'> 
                  <div> 
                    <label className='block'>Email</label>
                    <input {...register("email", {required: true })} type='email' className='border border-gray-400 w-full h-[35px] outline-none pl-2 text-[17px]' />
                    {errors.email && <span>Bạn cần nhập email</span>}
                  </div>
                  <div> 
                    <label className='block'>Số điện thoại</label>
                    <input {...register("phone", {required: true })}  type='number' className='border border-gray-400 w-full h-[35px] outline-none pl-2 text-[17px]'/>
                    {errors.phone && <span>Bạn cần nhập số điện thoại</span>}

                  </div>
                  <div> 
                    <label className='block'>Mật khẩu</label>
                    <input {...register("password", {required: true })}  type='password' className='border border-gray-400 w-full h-[35px] outline-none pl-2 text-[17px]'/>
                    {errors.password && <span>Bạn cần nhập password</span>}
                  </div>
                  <div>
                    <button type='submit' className='bg-[#FF424E] w-full h-[35px] outline-none pl-2 text-[17px] text-white rounded-sm'>Đăng ký</button>
                  </div>
                  <div className='flex flex-col items-center justify-center space-y-3'>
                    <p className='text-[14px]'>Hoặc đăng nhập bằng</p>
                    <div className='flex space-x-3'>
                      <img className='w-[35px]' src='https://icones.pro/wp-content/uploads/2021/02/facebook-logo-icone.png' alt='' />
                      <img className='w-[35px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png' alt='' />
                    </div>
                  </div>
              </form>
              <div className='col-span-1 flex justify-center items-center bg-[#F8F8F8] rounded-r-md'> 
                    <img 
                    src="https://th.bing.com/th/id/OIP.msJ5-X_TC957GXCRltCiPAHaHa?pid=ImgDet&rs=1"
                    alt="logo"
                    className="w-16 cursor-pointer"
                  />
              </div>
              
          </div>
      </div>
    </div>
  )
}

export default Signup