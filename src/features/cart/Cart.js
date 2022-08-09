import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "./selector";
import { decreaseCart, increaseCart, removeCart  } from "./cartSlice";
import { numberFormat } from "../../utils/numberFormat";

const Cart = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cart = useSelector(cartSelector);


  const existCart = cart.myCart.length > 0;

  const handleRemoveCart = (id) =>{
    dispatch(removeCart({id: id}))
  }
  const handleIncreaseCart = (id) =>{
    dispatch(increaseCart({id: id}))
  }
  const handleDecreaseCart = (id) =>{
    dispatch(decreaseCart({id: id}))
  }

  return (
    <div className="max-w-lg mx-auto">
      <div>
        <div className="flex items-center cursor-pointer">
          <GrFormPrevious />
          <span className="text-[#D70018] text-xs" onClick={() => navigate(-1)}>
            Trở về
          </span>
        </div>
        <div className="text-center">
          <span className="text-[#D70018] text-[18px] font-semibold">
            Giỏ hàng
          </span>
        </div>
      </div>
      {existCart ? (
        <div className="flex flex-col space-y-3">
          {cart.myCart.map((cart,index) => {
            return (
              <div className="grid grid-cols-5 p-3 border rounded-xl shadow-md shadow-gray-100" key={cart.id}>
                <div className="col-span-2">
                  <img
                    src={cart.image}
                    alt=""
                  />
                </div>
                <div className="col-span-3">
                  <div className="flex justify-between items-center">
                    <p className="text-[15px] text-[#0E2431]">
                      {cart.name}
                    </p>
                    <TiDeleteOutline className="text-xl cursor-pointer" onClick={() => handleRemoveCart(cart.id)}/>
                  </div>
                  <div className="space-x-2">
                    <span className="text-[15px] text-[#D70018] ">
                      {numberFormat.format(cart.price)}
                    </span>
                    <span className="text-[#777777]  text-[14px]">
                      {numberFormat.format(cart?.price * ((100 - cart.promotion)/100))}
                    </span>
                    <span className="bg-red-600 text-white rounded-[5px] text-[12px] p-[4px]">
                    Giảm {cart.promotion} %
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <div>
                      <span className="text-xs">Chọn số lượng: </span>
                    </div>
                    <div className="border border-gray-200 flex items-center justify-center">
                      <div className="w-[25px]  text-center">
                        <span className="cursor-pointer" onClick={() => handleDecreaseCart(cart.id)}>-</span>
                      </div>
                      <div className="w-[25px] ">
                        <input
                          className="outline-none w-[25px] text-[12px]"
                          value={cart.quantity}
                          type="number"
                        />
                      </div>
                      <div className="w-[25px] text-center">
                        <span className="cursor-pointer" onClick={() => handleIncreaseCart(cart.id)}>+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center ">
            <p>Bạn chưa có sản phẩm nào trong giỏ hàng!</p>
        </div>
      )}
      <hr className="text-gray-400 my-5"/>
      <div  className="space-y-3">
        <div className="flex justify-between">
          <span className="text-[#0E2431] text-[16px]">Tổng tiền tạm tính</span>
          <span className="text-[#D70018] text-[16px]">{numberFormat.format(cart.temporaryTotal)}</span>
        </div>
        <div className="space-y-3">
          <button className="bg-[#D70018] text-[16px] text-white rounded-md w-[515px] h-[60px] ">Tiến hành đặt hàng</button>
          <button className="border border-[#D70018] text-[#DC3545] rounded-md text-[16px] w-[515px] h-[60px]" onClick={() => navigate('/')}>Chọn thêm sản phẩm khác</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
