import { AiOutlineDown } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { AiOutlineLaptop, AiOutlineTablet } from "react-icons/ai";
import { GiHeadphones } from "react-icons/gi";
import { VscWatch } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { categoriesSelector } from "./selector";
import { toggleMobile, toggleLaptop, toggleTablet, toggleHeadphone, toggleWatch } from "./categoriesSlice";
import { setSearchText } from "../products/productsSlice";

const Catrgories = () => {
  const dispatch = useDispatch()
  const toggle = useSelector(categoriesSelector)

  const handleDropDown = (type) => {
    switch (type) {
      case 'mobile':
          dispatch(toggleMobile())
        break;
      case 'laptop':
          dispatch(toggleLaptop())
        break;
      case 'tablet':
          dispatch(toggleTablet())
        break;
      case 'headphone':
          dispatch(toggleHeadphone())
        break;
      case 'watch':
          dispatch(toggleWatch())
        break;
      default:
        console.log('')
        break;
    }
  }
  const handleSetSearchText = (text) => {
    dispatch(setSearchText(text))
  }
  return (
    <div className="w-[230px]">
      <ul className="">
      <li className="flex justify-between items-center cursor-pointer">
          <div className="flex items-center gap-2" onClick={()=> handleSetSearchText('')}>
            <BsPhone /> Tất cả sản phẩm
          </div>
        </li>
        <li className="flex justify-between items-center cursor-pointer" onClick={() => handleDropDown('mobile')}>
          <div className="flex items-center gap-2">
            <BsPhone /> Điện thoại
          </div>
          {toggle.toggleMobile ? <AiOutlineDown className="rotate-180"/> : <AiOutlineDown />}
        </li>
        {toggle.toggleMobile && 
          <div className="text-center cursor-pointer space-y-4">
            <p className="w-full shadow-sm shadow-red-300 p-1" onClick={()=> handleSetSearchText('Iphone')}>Iphone</p>
            <p className="w-full shadow-sm shadow-red-300 p-1" onClick={()=> handleSetSearchText('Samsung')}>Samsung</p>
            <p className="w-full shadow-sm shadow-red-300 p-1" onClick={()=> handleSetSearchText('Oppo')}>Oppo</p>
          </div>
        }
        <li className="flex justify-between items-center cursor-pointer" onClick={() => handleDropDown('laptop')}>
          <div className="flex items-center gap-2">
            <AiOutlineLaptop />
            Laptop
          </div>
          {toggle.toggleLaptop  ? <AiOutlineDown className="rotate-180"/> : <AiOutlineDown />}
        </li>
        {toggle.toggleLaptop && 
          <div className="text-center cursor-pointer space-y-4">
            <p className="w-full shadow-sm shadow-red-300 p-1" onClick={()=> handleSetSearchText('Macbook')}>Macbook</p>
            <p className="w-full shadow-sm shadow-red-300 p-1" onClick={()=> handleSetSearchText('Lenovo')}>Lenovo</p>
            <p className="w-full shadow-sm shadow-red-300 p-1" onClick={()=> handleSetSearchText('Dell')}>Dell</p>
          </div>
        }
        <li className="flex justify-between items-center cursor-pointer" onClick={() => handleDropDown('tablet')}>
          <div className="flex items-center gap-2">
            <AiOutlineTablet />
            Máy tính bảng
          </div>
          {toggle.toggleTablet ? <AiOutlineDown className="rotate-180"/> : <AiOutlineDown />}
        </li>
        <li className="flex justify-between items-center cursor-pointer" onClick={() => handleDropDown('headphone')}>
          <div className="flex items-center gap-2">
            <GiHeadphones /> Âm thanh
          </div>
          {toggle.toggleHeadphone ? <AiOutlineDown className="rotate-180"/> : <AiOutlineDown />}
        </li>
        <li className="flex justify-between items-center cursor-pointer" onClick={() => handleDropDown('watch')}>
          <div className="flex items-center gap-2">
            <VscWatch /> Đồng hồ
          </div>
          {toggle.toggleWatch ? <AiOutlineDown className="rotate-180"/> : <AiOutlineDown />}
        </li>
        {toggle.toggleWatch && 
          <div className="text-center cursor-pointer space-y-4">
            <p className="w-full shadow-sm shadow-red-300 p-1" onClick={()=> handleSetSearchText('Đồng hồ')}>Đồng hồ</p>
          </div>
        }
      </ul>
    </div>
  );
};

export default Catrgories;
