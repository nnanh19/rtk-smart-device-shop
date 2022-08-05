import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetailAsync } from "./productdetailSlice";
import { productDetailSelector } from "./selectors";
import { AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import { addToCart } from "../cart/cartSlice";

const ProductsDetail = () => {
  const navigate = useNavigate();

  const data = useSelector(productDetailSelector);

  const { product } = data.product;

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetailAsync(id));
  }, [dispatch, id]);


  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    navigate('/chi-tiet-san-pham/'+product.id)
  }

  return (
    <div>
      <div className="shadow-md shadow-grey-500/50 h-10">
        <ul className="flex justify-start gap-5  max-w-[1280px] mx-auto  ">
          <li onClick={() => navigate("/")} className="cursor-pointer">
            Trang chủ
          </li>
          <li>Điện thoại</li>
          <li>Sam sung</li>
          <li>Sam sung x</li>
        </ul>
      </div>

      <div className="flex justify-start gap-5  max-w-[1280px] mx-auto my-3">
        <h1>{product?.name}</h1>
      </div>

      <hr className="shadow-grey-500/50 my-3" />

      <div className="grid grid-cols-3  max-w-[1280px] mx-auto my-3">
        <div className="col-span-1">
          <div>
            <img
              className="max-w-[350px] max-h-[350px]"
              src={product.image}
              alt=""
            />
          </div>
          <div className="flex mt-5 ">
            <div className="flex flex-col items-center border border-gray-500 rounded-md  text-gray-500 p-1 cursor-pointer">
              <AiOutlineStar className="text-[15px]" />
              <p className="text-center text-[8px]">
                Tính năng <br /> nổi bật
              </p>
            </div>
            <div className="cursor-pointer">
              <img
                className="max-w-[48px] max-h-[48px]"
                src={product.image}
                alt=""
              />
            </div>
            <div className="cursor-pointer">
              <img
                className="max-w-[48px] max-h-[48px]"
                src={product.image}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-between">
          <div>
            <div className="">
              <span className="text-[#D70018] text-[24px]">
                {product.price}đ
              </span>
              <span className="text-[#707070] text-[14px] ml-5">
                {product.price}đ
              </span>
            </div>
            <div>
              <div>{product.shortDescription}</div>
            </div>
          </div>
          <div className="flex justify-start">
            <button className="bg-[#FF3945] w-[233px] h-[48px] rounded-md text-white  cursor-pointer">
              Mua Ngay
            </button>
            <div className="flex justify-start items-center ml-10  cursor-pointer" onClick={() => handleAddToCart(product)}>
              <div className="border border-[#FF3945] rounded-md p-2">
                <AiOutlineShoppingCart className="text-2xl text-[#FF3945] " />
              </div>
              <span className=" ml-3" >
                Thêm vào <br /> giỏ hàng
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="my-10">
            <h3 className="text-[18px] uppercase">Sản phẩm cùng loại</h3>
          </div>
          <div className="flex gap-3">
            <div className="shadow-md shadow-grey-500/50 p-5 max-w-[230px]">
              <div>
                <img className="max-w-[160px]" src={product.image} alt="" />
              </div>
              <div>
                <p className="text-[#0A263C] leading-10">{product.name}</p>
              </div>
              <div className="flex gap-2">
                <span className="text-[14px] text-[#D70018]">
                  {product.price}
                </span>
                <span className="text-[11px] text-[#707070]">
                  {product.price}
                </span>
              </div>
            </div>
            <div className="shadow-md shadow-grey-500/50 p-5 max-w-[230px]">
              <div>
                <img className="max-w-[160px]" src={product.image} alt="" />
              </div>
              <div>
                <p className="text-[#0A263C] leading-10">{product.name}</p>
              </div>
              <div className="flex gap-2">
                <span className="text-[14px] text-[#D70018]">
                  {product.price}
                </span>
                <span className="text-[11px] text-[#707070]">
                  {product.price}
                </span>
              </div>
            </div>
            <div className="shadow-md shadow-grey-500/50 p-5 max-w-[230px]">
              <div>
                <img className="max-w-[160px]" src={product.image} alt="" />
              </div>
              <div>
                <p className="text-[#0A263C] leading-10">{product.name}</p>
              </div>
              <div className="flex gap-2">
                <span className="text-[14px] text-[#D70018]">
                  {product.price}
                </span>
                <span className="text-[11px] text-[#707070]">
                  {product.price}
                </span>
              </div>
            </div>
            <div className="shadow-md shadow-grey-500/50 p-5 max-w-[230px]">
              <div>
                <img className="max-w-[160px]" src={product.image} alt="" />
              </div>
              <div>
                <p className="text-[#0A263C] leading-10">{product.name}</p>
              </div>
              <div className="flex gap-2">
                <span className="text-[14px] text-[#D70018]">
                  {product.price}
                </span>
                <span className="text-[11px] text-[#707070]">
                  {product.price}
                </span>
              </div>
            </div>
            <div className="shadow-md shadow-grey-500/50 p-5 max-w-[230px]">
              <div>
                <img className="max-w-[160px]" src={product.image} alt="" />
              </div>
              <div>
                <p className="text-[#0A263C] leading-10">{product.name}</p>
              </div>
              <div className="flex gap-2">
                <span className="text-[14px] text-[#D70018]">
                  {product.price}
                </span>
                <span className="text-[11px] text-[#707070]">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto my-3">
        <div className="my-10 p-5 rounded-md bg-[#F2F2F2]">
          <div className="text-center">
            <h3 className="text-[18px] uppercase leading-[25px]">Đặc điểm nổi bật</h3>
          </div>
          <ul>
            <li className="text-[14px] text-[#444444] leading-[22px]">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</li>
            <li className="text-[14px] text-[#444444] leading-[22px]">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</li>
            <li className="text-[14px] text-[#444444] leading-[22px]">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</li>
            <li className="text-[14px] text-[#444444] leading-[22px]">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</li>
            <li className="text-[14px] text-[#444444] leading-[22px]">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</li>
            <li className="text-[14px] text-[#444444] leading-[22px]">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ProductsDetail;
