import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsAsync} from "./productsSlice";
import { useSelector } from "react-redux/es/exports";
import {  listProductsSelector } from "./selectors";
import { useNavigate } from "react-router-dom";
import { numberFormat } from "../../../utils/numberFormat";

const Products = () => {

  const navigate = useNavigate()

  const products = useSelector(listProductsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync())
  }, [dispatch])

  return (
    <div
      className="
            max-w-[1280px] 
            mx-auto 
            "
    >
      <h1 className="uppercase font-semibold text-xl mb-3">Sản phẩm</h1>
      <div className="flex flex-row flex-wrap justify-start gap-6">
        {products?.map((product, index) => {
          return (
              <div className="flex flex-col " key={index} >
                <div className="flex justify-center cursor-pointer h-[150px]">
                  <img onClick={() => navigate(`/chi-tiet-san-pham/${product.id}`)} className="max-w-[160px] max-h-[160px]" src={product?.image} alt="" />
                </div>
                <div className="text-center cursor-pointer">
                  <p onClick={() => navigate(`/chi-tiet-san-pham/${product.id}`)} className="text-[14px] text-[#444444]">{product?.name}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">{numberFormat.format(product?.price)}</span>
                  <del className="text-[14px]">{numberFormat.format(product?.price * ((100 - product.promotion)/100)) } </del>
                </div>
                <p className="text-[12px] bg-[#E5E7EB] max-w-[160px] p-1 rounded-[5px]">{product?.shortDescription}</p>
            </div>
          )
        })}
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
