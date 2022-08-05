import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "./selector";

const Cart = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cart = useSelector(cartSelector);

  const existCart = cart.length > 0;

  console.log(cart);

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
          {cart.map((cart,index) => {
            return (
              <div className="grid grid-cols-5 p-3 border rounded-xl shadow-md shadow-gray-100">
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
                    <TiDeleteOutline className="text-xl cursor-pointer" />
                  </div>
                  <div className="space-x-2">
                    <span className="text-[15px] text-[#D70018] ">
                      {cart.price}
                    </span>
                    <span className="text-[#777777]  text-[14px]">
                      {cart.price}
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
                        <span className="cursor-pointer">-</span>
                      </div>
                      <div className="w-[25px] ">
                        <input
                          className="outline-none w-[25px] text-[12px]"
                          type="number"
                        />
                      </div>
                      <div className="w-[25px] text-center">
                        <span className="cursor-pointer">+</span>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        "s"
      )}
    </div>
  );
};

export default Cart;
