import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProducts,SetFilteredProducts,SetFlag ,SetSearch} from "../features/ProductSlice";
import Products from '../Data/Products'
import { useParams } from "react-router-dom";
const Navbar = () => {
  let {page} = useParams();
  // const [search, setSearch] = useState("");
  const { Products: AllProducts, filteredProducts ,flag,search} = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
 
  const GetSearchProducts = (e) => {
    dispatch(SetSearch(e.target.value));  
  };
  console.log(flag);

  useEffect(()=>{
     if(search !== ""){
      dispatch(SetFlag(true));
      
    }
    else{
      dispatch(SetFlag(false));
     
      
     }
    const filtered = filteredProducts.filter((item) => {
      return item.Name.toLowerCase().includes(search.toLowerCase());
    });
    // console.log(filtered);
    dispatch(GetAllProducts(filtered));
  },[search,filteredProducts,flag])

  
  return (
    <nav className="flex bg-[#f0f3fa]  rounded-md gap-x-4 items-center shadow-md px-4 py-3 w-full m-auto text-[#7c859a]">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-lg w-[300px]"
          value={search}
          onChange={(e) => GetSearchProducts(e)}
        />
        <span className="absolute top-3 right-4 ">
          <BiSearch />
        </span>
      </div>
      <div className="flex items-center justify-center font-bold">
        <span>Relevance</span>
        <span className="mt-1">
          <MdKeyboardArrowDown />
        </span>
      </div>
      <div className="flex items-center justify-center font-bold">
        <span>All brands</span>
        <span className="mt-1">
          <MdKeyboardArrowDown />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
