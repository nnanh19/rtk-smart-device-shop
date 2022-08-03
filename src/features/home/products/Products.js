import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsAsync, setMore } from "./productsSlice";
import { useSelector } from "react-redux/es/exports";
import { listProductSelector } from "./selectors";
import { MdNavigateNext } from "react-icons/md";

const Products = () => {
  const {products, status, more} = useSelector(listProductSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync())
  }, [])

  return (
    <div
      className="
            max-w-[1280px] 
            mx-auto 
            "
    >
      <h1 className="uppercase font-semibold text-xl mb-3">Điện thoại nổi bật</h1>
      <div className="flex flex-row flex-wrap justify-start gap-6">
        {products?.map((product, index) => {
          return (
              <div className="flex flex-col" key={index}>
                <div className="flex justify-center">
                  <img className="max-w-[160px] max-h-[160px]" src={product?.image} alt=""/>
                </div>
                <div className="text-center">
                  <p className="text-[14px] text-[#444444]">{product?.name}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">{product?.price}</span>
                  <del className="text-[14px]">{product?.price} </del>
                </div>
                <p className="text-[12px] bg-[#E5E7EB] max-w-[160px] p-1 rounded-[5px]">{product?.shortDescription}</p>
            </div>
          )
        })}
      </div>
      <div className="flex justify-center mb-3">
        <div className="flex items-center cursor-pointer my-3" onClick={() => dispatch(setMore())}>
            {more
            ? <>Hiển thị nhiều hơn <MdNavigateNext /><MdNavigateNext /></>
            : <>Hiển thị ít hơn <MdNavigateNext className="rotate-180"/><MdNavigateNext className="rotate-180" /></>  
            }
        </div>
      </div>

      <div>
        <div className="flex flex-row justify-between items-center mb-3">
          <h1 className="uppercase mb-0 font-semibold text-xl">Phụ kiện</h1>
          <p>Xem tất cả</p>
        </div>
        <div className="flex  justify-start">
          <div className="flex flex-col items-center cursor-pointer">
            <img className="max-w-[110px]" src="https://cdn.tgdd.vn//content/Donghothoitrang-128x129.png" alt=""></img>
            <p className="text-[14px]">Phụ kiện</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <img className="max-w-[110px]" src="https://cdn.tgdd.vn//content/Simthecao-129x129.png" alt=""></img>
            <p className="max-w-[110px]">Phụ kiện</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <img className="max-w-[110px]" src="https://cdn.tgdd.vn//content/Manhinhmaytinh-128x129.png" alt=""></img>
            <p className="max-w-[110px]">Phụ kiện</p>
          </div>
        </div>
      </div>


      <div>
        <div className="flex flex-row justify-between items-center mb-3">
          <h1 className="uppercase mb-0 font-semibold text-xl">Linh kiện</h1>
          <p>Xem tất cả</p>
        </div>
        <div className="flex  justify-start">
          <div className="flex flex-col items-center cursor-pointer">
            <img className="max-w-[110px]" src="https://cdn.tgdd.vn//content/Donghothoitrang-128x129.png" alt=""></img>
            <p className="text-[14px]">Phụ kiện</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <img className="max-w-[110px]" src="https://cdn.tgdd.vn//content/Simthecao-129x129.png" alt=""></img>
            <p className="max-w-[110px]">Phụ kiện</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <img className="max-w-[110px]" src="https://cdn.tgdd.vn//content/Manhinhmaytinh-128x129.png" alt=""></img>
            <p className="max-w-[110px]">Phụ kiện</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Products;
