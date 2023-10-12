import React,{useEffect, useState} from 'react';
import img2 from "../../Images/d16.png";
import {useNavigate} from "react-router-dom";
import Baseurl from '../../Baseurl';
import axios from 'axios';

const AllCategoryProducts = ({id}) => {
    console.log(id);
    const navigate=useNavigate();

const product_id="651e5d25b53b201b2a359766";
 // Category Product
  const [singleData,setSingleData]=useState([]);
  const getSingleProducts = async() => {
    console.log("ls",(localStorage.getItem("boon")))
    let url = `${Baseurl()}api/v1/product/${product_id}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      console.log("product from product product id",res.data.products);
      setSingleData(res.data.products);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {  
    getSingleProducts();    
  }, [id]);


    return (
        <>
            <div className="fashioncont" style={{backgroundColor:"#fff"}}>
                <h3 >Top Offers</h3>
                <div className="fashioncont1" >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={()=>navigate("/fashion-view")}
                            src={img2}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={()=>navigate("/fashion-view")}
                            src={img2}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={()=>navigate("/fashion-view")}
                            src={img2}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={()=>navigate("/fashion-view")}
                             src={img2}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={()=>navigate("/fashion-view")}
                            src={img2}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            src={img2}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="fashioncont" style={{backgroundColor:"#fff"}}>
                <h3>Popular</h3>
                <div className="fashioncont1" >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                        {
                            singleData.map((item,i)=>(
                                <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={()=>navigate(`/singleprodoctview/${item._id}`)}
                            src={item?.images?.[0]}
                            alt={item.name}
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            {item.name}
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">{item.price}</h3>  
                        </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className="fashioncont" style={{backgroundColor:"#fff"}}>
                <h3>Men's Popular</h3>
                <div className="fashioncont1" >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            // src={img7}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            // src={img6}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            // src={img6}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            // src={img7}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            // src={img6}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                        <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
                            <img
                            onClick={() => {
                                //navigate("/product-view", { state: "e" });
                            }}
                            // src={img7}
                            alt="e.title"
                            className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
                            />
                            <h2 className="text-lg font-medium mb-2">
                            Product Name
                            {/*e.title.length >= 20 ? "..." : ""*/}
                            </h2>
                        
                            <h3 className="text-base">₹ 999</h3>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllCategoryProducts;
