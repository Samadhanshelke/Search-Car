import React, { useEffect, useState } from "react";
import { GetAllProducts,SetFilteredProducts,SetFlag ,SetSearch} from "../features/ProductSlice";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Components/Card";
import Products from '../Data/Products'
import { useNavigate } from "react-router-dom";
import Pagination from '../Components/Pagination';
const HomePage = () => {
  const {Products:AllProducts,filteredProducts,flag,search} = useSelector((state) => state.product);
  const dispatch = useDispatch();

   const [currentPage,setCurrentPage] = useState(1)
   const [perPageItems,setPerPageItems] = useState(6)
   const navigate = useNavigate();
   
  
   useEffect(()=>{
    if(currentPage >10){
      setCurrentPage(10)
     }
     if(currentPage < 1){
      setCurrentPage(1)
     }
     dispatch(SetFlag(false))
     dispatch(SetSearch(""))
   },[currentPage])

  useEffect(() => {
    dispatch(SetFilteredProducts(Products));
    dispatch(GetAllProducts(Products));
  }, []);

    const start = (currentPage-1)*6;
    const end = perPageItems * currentPage  
  
  if (AllProducts?.length > 0 && flag === false) {
    return (
      <>
      <div className="my-8 grid grid-cols-3 gap-32">
        
        {AllProducts.slice(start,end).map((Product,index) => {
            return(
          <Card Product={Product} key={index}/>
            )
        })}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </>
    );
  }
  else{
    return(
    <>
      <div className="my-8 grid grid-cols-3 gap-32">
         
        {AllProducts.map((Product,index) => {
            return(
          <Card Product={Product} key={index}/>
            )
        })}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </>
  )}

};

export default HomePage;
