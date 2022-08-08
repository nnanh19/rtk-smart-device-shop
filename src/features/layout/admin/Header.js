import React, { useEffect } from "react";
import {  AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { VscSignIn, VscSignOut} from "react-icons/vsc";
import { useDispatch } from "react-redux/es/exports";
import { setSearch } from "../../admin/products/productsManagerSlice";


const Header = () => {

  const navigate = useNavigate()


  const user = JSON.parse(localStorage.getItem('user'))

  const dispatch = useDispatch()

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/dang-nhap')
  }
  useEffect(() => {
    
  }, [])
  
  const handleSearchChange = (e) => {
    console.log(e.target.value);
  }
  const handleSearchEnter = (e) => {
    if(e.keyCode === 13){
      dispatch(setSearch(e.target.value))
    }
  }

  return (
    <div className="bg-[#00B0D7]">
      <div
        className="
            py-1
            px-5
            flex
            flex-row
            items-center
            justify-between
            max-w-[1536px]
            mx-auto
            "
      >
        <div className="flex items-center">
          <img 
            src="https://th.bing.com/th/id/OIP.msJ5-X_TC957GXCRltCiPAHaHa?pid=ImgDet&rs=1"
            alt="logo"
            className="w-16 cursor-pointer"
            onClick={() =>  navigate('/')}
          />
          <p className="text-white ml-5">Smart Device</p>
        </div>
        <div className="flex items-center bg-white rounded-full w-[500px] h-[34px]">
          <div className="text-white">
            <ImSearch className="text-black font-bold ml-2"/>
          </div>
          <input className="outline-none ml-2 w-[450px]" onKeyDown={(e) => handleSearchEnter(e)} onChange={(e) => handleSearchChange(e)}/>
        </div>
        {/* <div className="absolute top-[53px] ">
          <div className="h-[500px] w-[500px] bg-white rounded-xl">

          </div>
        </div> */}
        <div className="flex items-center gap-5">
          {user 
          ? 
          <div>
            <div className="flex space-x-1 cursor-pointer group">
              <AiOutlineUser className="text-white group-hover:text-[#2e4247]"/>
              <p className="text-xs text-white cursor-pointer group-hover:text-[#2e4247]">{user.email}</p>
            </div>
            <div className="flex space-x-1 cursor-pointer group">
              <VscSignOut className="text-white group-hover:text-[#2e4247]"/>
              <p className="text-xs text-white group-hover:text-[#2e4247]" onClick={() => handleLogout()}>Đăng xuất</p>
            </div>
          </div>
          :
          <div>
            <div className="flex space-x-1 cursor-pointer group">
              <AiOutlineUserAdd className="text-white group-hover:text-[#2e4247]"/>
              <p className="text-xs text-white cursor-pointer group-hover:text-[#2e4247]" onClick={() => navigate('/dang-ky')}>Đăng ký</p>
            </div>
            <div className="flex space-x-1 cursor-pointer group">
              <VscSignIn className="text-white group-hover:text-[#2e4247]"/>
              <p className="text-xs text-white group-hover:text-[#2e4247]" onClick={() => navigate('/dang-nhap')}>Đăng nhập</p>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
