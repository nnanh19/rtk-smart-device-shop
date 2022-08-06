import { AiOutlineDown } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { AiOutlineLaptop, AiOutlineTablet } from "react-icons/ai";
import { GiHeadphones } from "react-icons/gi";
import { VscWatch } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { categoriesSelector } from "./selector";
import { toggleMobile, toggleLaptop, toggleTablet, toggleHeadphone, toggleWatch } from "./categoriesSlice";

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
  return (
    <div className="w-[230px]">
      <ul className="">
        <li className="flex justify-between items-center cursor-pointer" onClick={() => handleDropDown('mobile')}>
          <div className="flex items-center gap-2">
            <BsPhone /> Điện thoại
          </div>
          {toggle.toggleMobile ? <AiOutlineDown className="rotate-180"/> : <AiOutlineDown />}
        </li>
        {toggle.toggleMobile && 
          <div className="text-center cursor-pointer space-y-4">
            <p>Iphone</p>
            <p>Iphone</p>
            <p>Iphone</p>
          </div>
        }
        <li className="flex justify-between items-center cursor-pointer" onClick={() => handleDropDown('laptop')}>
          <div className="flex items-center gap-2">
            <AiOutlineLaptop />
            Laptop
          </div>
          {toggle.toggleLaptop  ? <AiOutlineDown className="rotate-180"/> : <AiOutlineDown />}
        </li>
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
      </ul>
    </div>
  );
};

export default Catrgories;
