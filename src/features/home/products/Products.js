import React from "react";
import { useDispatch } from "react-redux";
import { fetchProductsAsync } from "./productsSlice";
import { useSelector } from "react-redux/es/exports";
import { listProductSelector } from "./selectors";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Products = () => {
  const state = useSelector(listProductSelector);
  console.log(state);

  // const dispatch = useDispatch();
  return (
    <div
      className="
            max-w-[1280px] 
            mx-auto 
            "
    >
      <h1 className="uppercase font-semibold text-xl mb-3">Điện thoại nổi bật</h1>
      <div className="flex flex-row flex-wrap justify-start gap-6">
          <div className="flex flex-col">
              <div className="flex justify-center">
                <img className="max-w-[160px] max-h-[160px]" src="https://cdn.tgdd.vn/Products/Images/42/262402/Samsung-Galaxy-A13-cam-thumb-600x600.jpg" alt=""/>
              </div>
              <div className="text-center">
                <p className="text-[14px] text-[#444444]">IPHONE 11</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">9.000.000</span>
                <del className="text-[14px]">10.000.000</del>
              </div>
              <p className="text-[12px] bg-[#E5E7EB] max-w-[160px] p-1 rounded-[5px]">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
          </div>
          <div className="flex flex-col">
              <div className="flex justify-center">
                <img className="max-w-[160px] max-h-[160px]" src="https://cdn.tgdd.vn/Products/Images/42/262402/Samsung-Galaxy-A13-cam-thumb-600x600.jpg" alt=""/>
              </div>
              <div className="text-center">
                <p className="text-[14px] text-[#444444]">IPHONE 11</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">9.000.000</span>
                <del className="text-[14px]">10.000.000</del>
              </div>
              <p className="text-[12px] bg-[#E5E7EB] max-w-[160px] p-1 rounded-[5px]">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
          </div>
          <div className="flex flex-col">
              <div className="flex justify-center">
                <img className="max-w-[160px] max-h-[160px]" src="https://cdn.tgdd.vn/Products/Images/42/262402/Samsung-Galaxy-A13-cam-thumb-600x600.jpg" alt=""/>
              </div>
              <div className="text-center">
                <p className="text-[14px] text-[#444444]">IPHONE 11</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">9.000.000</span>
                <del className="text-[14px]">10.000.000</del>
              </div>
              <p className="text-[12px] bg-[#E5E7EB] max-w-[160px] p-1 rounded-[5px]">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
          </div>
          <div className="flex flex-col">
              <div className="flex justify-center">
                <img className="max-w-[160px] max-h-[160px]" src="https://cdn.tgdd.vn/Products/Images/42/262402/Samsung-Galaxy-A13-cam-thumb-600x600.jpg" alt=""/>
              </div>
              <div className="text-center">
                <p className="text-[14px] text-[#444444]">IPHONE 11</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">9.000.000</span>
                <del className="text-[14px]">10.000.000</del>
              </div>
              <p className="text-[12px] bg-[#E5E7EB] max-w-[160px] p-1 rounded-[5px]">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
          </div>

          <div className="flex flex-col">
              <div className="flex justify-center">
                <img className="max-w-[160px] max-h-[160px]" src="https://cdn.tgdd.vn/Products/Images/42/262402/Samsung-Galaxy-A13-cam-thumb-600x600.jpg" alt=""/>
              </div>
              <div className="text-center">
                <p className="text-[14px] text-[#444444]">IPHONE 11</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">9.000.000</span>
                <del className="text-[14px]">10.000.000</del>
              </div>
              <p className="text-[12px] bg-[#E5E7EB] max-w-[160px] p-1 rounded-[5px]">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
          </div>
          <div className="flex flex-col">
              <div className="flex justify-center">
                <img className="max-w-[160px] max-h-[160px]" src="https://cdn.tgdd.vn/Products/Images/42/262402/Samsung-Galaxy-A13-cam-thumb-600x600.jpg" alt=""/>
              </div>
              <div className="text-center">
                <p className="text-[14px] text-[#444444]">IPHONE 11</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">9.000.000</span>
                <del className="text-[14px]">10.000.000</del>
              </div>
              <p className="text-[12px] bg-[#E5E7EB] max-w-[160px] p-1 rounded-[5px]">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
          </div>
          <div className="flex flex-col">
              <div className="flex justify-center">
                <img className="max-w-[160px] max-h-[160px]" src="https://cdn.tgdd.vn/Products/Images/42/262402/Samsung-Galaxy-A13-cam-thumb-600x600.jpg" alt=""/>
              </div>
              <div className="text-center">
                <p className="text-[14px] text-[#444444]">IPHONE 11</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">9.000.000</span>
                <del className="text-[14px]">10.000.000</del>
              </div>
              <p className="text-[12px] bg-[#E5E7EB] max-w-[160px] p-1 rounded-[5px]">[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
          </div>
      </div>
      <div className="flex justify-end my-3">
        <div className="flex items-center cursor-pointer"><span>Hiển thị nhiều hơn</span>  <MdNavigateNext /><MdNavigateNext /></div>
        {/* <div className="flex items-center cursor-pointer"><span>Hiển thị ít hơn</span>  <GrFormPrevious /><GrFormPrevious/></div> */}
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
