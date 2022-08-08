import React, { useEffect } from "react";
import { BiMessageAltAdd } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProductsManagerAsync, fetchUpdateFieldStatusProductAsync, setCategoryId } from "../productsManagerSlice";
import { listProductManagerSelector } from "../selector";
import { notify } from "../../../../utils/toastr";
import { categoriesSelector } from "../../categories/selector";
import { fetchCategories } from "../../categories/categoriesManagerSlice";

const List = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector(listProductManagerSelector);
  let products = [...data].sort((a,b) => -a.id + b.id)

  useEffect(() => {
    dispatch(fetchProductsManagerAsync());
  }, [dispatch]);

  const setFieldProductsStatus = (product) =>{
    if(product.status === false){
      notify('Ẩn sản phẩm thành công')
    }else{
      notify('Hiện sản phẩm thành công')
    }
    dispatch(fetchUpdateFieldStatusProductAsync(product))
  }

  const {categories} = useSelector(categoriesSelector)
  
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  const handleSelectProducts = (categoryId) => {
    dispatch(setCategoryId(categoryId))
  }
  
  return (
    <div className="m-5">
      <div className="flex justify-between items-center ">
        <p className="text-[20px] text-[#5F5E61] font-semibold">Điện thoại</p>
        <BiMessageAltAdd
          onClick={() => navigate("/admin/them-moi")}
          className="cursor-pointer mr-10 text-[#00B0D7] text-[32px]"
        />
      </div>
      <div className="flex space-x-5 items-center mt-5">
        <p className="text-[13px] text-[##5F5E61] font-semibold">Bộ lọc:</p>
        <div className="flex flex-col space-y-1">
          <p>Danh mục sản phẩm</p>
          <select onChange={(e) => handleSelectProducts(e.target.value)} className="h-[35px] w-[352px]  border border-gray-300 outline-none">
            {categories.map(category => {
              return (
                <option key={category.id} value={category.id} className="">{category.name}</option>
              )
            })}
          </select>
        </div>
      </div>
      <table className="mt-5">
        <thead className="">
          <tr className="border border-t-gray-500">
            <th className="px-6 py-2 text-xs text-black">ID</th>
            <th className="px-6 py-2 text-xs text-black">Tên sản phẩm</th>
            <th className="px-6 py-2 text-xs text-black">Thành tiền</th>
            <th className="px-6 py-2 text-xs text-black">Tính năng</th>
            <th className="px-6 py-2 text-xs text-black">Mô tả ngắn</th>
            <th className="px-6 py-2 text-xs text-black">Mô tả dài</th>
            <th className="px-6 py-2 text-xs text-black">Hình Ảnh</th>

            <th className="px-6 py-2 text-xs text-black">Ẩn/hiện</th>
            <th className="px-6 py-2 text-xs text-black">Thao tác</th>
          </tr>
        </thead>
        
        <tbody>
          {products?.map((product) => {
            return (
              <tr className="whitespace-nowrap " key={product.id}>
                <td className="px-6 py-4 text-sm text-black">{product.id}</td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{product.name}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-black">{product.price}</div>
                </td>
                <td className="px-6 py-4 text-sm text-black">{product.outstandingFeatures}</td>
                <td className="px-6 py-4 text-sm text-black">Mô tả ngắn</td> 
                {/* {product.shortDescription} */}
                <td className="px-6 py-4 text-sm text-black">Mô tả dài</td>
                <td className="px-6 py-4 text-sm text-black w-24"><img src={product.image} alt=''/></td>

                <td className="px-6 py-4 cursor-pointer text-[22px]" onClick={() => setFieldProductsStatus({id:product.id, status: !product.status})}>
                  {product.status ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
                </td>
                <td
                  className="px-6 py-4 cursor-pointer"
                  onClick={() => navigate("/admin/cap-nhat-san-pham/"+product.id)}
                >
                  <FaRegEdit />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
