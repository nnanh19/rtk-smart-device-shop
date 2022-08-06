import React from 'react'

const Signin = () => {
  return (
    <div className='bg-[#dbcfcf] p-24 '>
        <div className='max-w-md mx-auto bg-white rounded-md'>
          <div className='grid grid-cols-3 '>
              <div className='col-span-2 space-y-3 p-8'> 
                  <div> 
                    <label className='block'>Email</label>
                    <input type='email' className='border border-gray-400 w-full h-[35px] outline-none pl-2 text-[17px]' />
                  </div>
                  <div> 
                    <label className='block'>Mật khẩu</label>
                    <input type='password' className='border border-gray-400 w-full h-[35px] outline-none pl-2 text-[17px]'/>
                  </div>
                  <div>
                    <button className='bg-[#FF424E] w-full h-[35px] outline-none pl-2 text-[17px] text-white rounded-sm'>Đăng nhập</button>
                  </div>
                  <div className='flex flex-col items-center justify-center space-y-3'>
                    <p className='text-[14px]'>Hoặc đăng nhập bằng</p>
                    <div className='flex space-x-3'>
                      <img className='w-[35px]' src='https://icones.pro/wp-content/uploads/2021/02/facebook-logo-icone.png' alt='' />
                      <img className='w-[35px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png' alt='' />
                    </div>
                  </div>
              </div>
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

export default Signin