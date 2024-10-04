import React from "react";
import "./Orders.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { assets } from "../../assets/assets";
const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllorders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

const statusHandler = async (e,orderId) =>{
          const response =await axios.post(url+'/api/order/status',{
            orderId,
            status: e.target.value
          })
          if(response.data.success){

            await fetchAllorders();
          }

}




  useEffect(() => {
    fetchAllorders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " X " + item.quantity;
                  } else {
                    return item.name + " X " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}{" "}
              </p>
              <div className="order-item-address">
                <p>{order.address.street + ", "} </p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    "," +
                    order.address.zipcode}{" "}
                </p>
              </div>
              <p className="order-item-mobile">
                +91 {order.address.mobile - 1}
              </p>
            </div>
            <p>Items:{order.items.length}</p>
            <p>&#8377; {order.amount}</p>
            <select onChange={(e)=>statusHandler(e,order._Id)} value={order.status}>
              <option className="Food-Processing">Food Processing</option>
              <option className="Out for delivery">Out for Delivery</option>
              <option className="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
