import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetailAsync, fetchSameProductsAsync } from "./productdetailSlice";
import { productDetailSelector } from "./selectors";
import { AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import { addToCart } from "../cart/cartSlice";
import { numberFormat } from "../../utils/numberFormat";
import { notify } from '../../../src/utils/toastr'


const ProductsDetail = () => {
  const navigate = useNavigate();

  const data = useSelector(productDetailSelector);
  const { product, sameProducts } = data.product;
  console.log(sameProducts);

  console.log(product.categoryId)
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetailAsync(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchSameProductsAsync(product.categoryId))
  }, [dispatch, product.categoryId]) 


  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    navigate('/chi-tiet-san-pham/'+product.id)
    notify('Thêm vào giỏ hàng thành công')
  }

  return (
    <div>
      <div className="shadow-md shadow-grey-500/50 h-10">
        <ul className="flex justify-start gap-5  max-w-[1280px] mx-auto  ">
          <li onClick={() => navigate("/")} className="cursor-pointer">
            Trang chủ
          </li>
    
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
                {numberFormat.format(product.price)}
              </span>
              <span className="text-[#707070] text-[14px] ml-5">
              {numberFormat.format(product?.price * ((100 - product.promotion)/100))}
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
            {sameProducts?.map(product => {
              return (
                <div className="shadow-md shadow-grey-500/50 p-5 max-w-[230px] cursor-pointer" onClick={() => navigate('/chi-tiet-san-pham/'+product.id)}>
                    <div>
                      <img className="max-w-[160px]" src={product.image} alt="" />
                    </div>
                    <div>
                      <p className="text-[#0A263C] leading-10">{product.name}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[14px] text-[#D70018]">
                        {numberFormat.format(product.price)}
                      </span>
                      <span className="text-[11px] text-[#707070]">
                        {numberFormat.format(product?.price * ((100 - product.promotion)/100))}
                      </span>
                    </div>
                </div>
              )
            })}
            
    
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
            <li className="text-[14px] text-[#444444] leading-[22px]">Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà</li>
            <li className="text-[14px] text-[#444444] leading-[22px]">Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</li>
            <li className="text-[14px] text-[#444444] leading-[22px]">Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</li>
          </ul>
        </div>
        <div>
          <p className="text-[15px]">Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!</p>
          <div>
            <h3 className="text-[21px] font-semibold">Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h3>
            <p>Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc</p>
          </div>
          <div>
            <h4 className="text-[18px] font-semibold">Thiết kế sang trọng, màn hình Super AMOLED</h4>
            <p className="text-[15px]">Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào. <br/>Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[330px] h-[30px] border border-black text-center rounded-lg ">
          <span className="text-[#000000] text-[14px]">Xem thêm</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
