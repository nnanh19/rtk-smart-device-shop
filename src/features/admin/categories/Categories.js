import { BsPhone, BsBorderAll } from "react-icons/bs";
import { AiOutlineLaptop, AiOutlineTablet } from "react-icons/ai";
import { GiHeadphones } from "react-icons/gi";
import { VscWatch } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { fetchCategories } from "./categoriesManagerSlice";
import { setCategoryId } from "../products/productsManagerSlice";
// import { categoriesSelector } from "./selector";

const Categories = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  // const data = useSelector(categoriesSelector)

  const handleSelectProducts = (categoryId) => {
    dispatch(setCategoryId(categoryId))
  }

  return ( 
    <div className=" bg-white py-1 px-5" >
      <ul className=" space-y-3">
      <li className="flex justify-between items-center cursor-pointer" >
          <div className="flex items-center gap-2" onClick={() => {
            handleSelectProducts(null)
            navigate('/admin')
          }}>
            <BsBorderAll /> Tất cả sản phẩm
          </div>
        </li>
        <li className="flex justify-between items-center cursor-pointer" >
          <div className="flex items-center gap-2" onClick={() => handleSelectProducts(1)}>
            <BsPhone /> Điện thoại
          </div>
        </li>
        <li className="flex justify-between items-center cursor-pointer">
          <div className="flex items-center gap-2" onClick={() => handleSelectProducts(2)}>
            <AiOutlineLaptop />
            Laptop
          </div>
        </li>
        <li className="flex justify-between items-center cursor-pointer" onClick={() => handleSelectProducts(3)}>
          <div className="flex items-center gap-2">
            <AiOutlineTablet />
            Máy tính bảng
          </div>
        </li>
        <li className="flex justify-between items-center cursor-pointer" onClick={() => handleSelectProducts(4)}>
          <div className="flex items-center gap-2">
            <GiHeadphones /> Âm thanh
          </div>
        </li>
        <li className="flex justify-between items-center cursor-pointer" onClick={() => handleSelectProducts(5)}>
          <div className="flex items-center gap-2">
            <VscWatch /> Đồng hồ
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
