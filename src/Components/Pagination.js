import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'
const Pagination = ({currentPage,setCurrentPage}) => {
    let {page} = useParams();
    // const {flag} = useSelector((state) => state.product);
  return (
    <div className='flex bg-[#f0f3fa] justify-between mb-5  rounded-md gap-x-4 items-center shadow-md px-4 py-3 w-full m-auto text-[#7c859a]'>
         <div>
            {currentPage} from 10
         </div>
         <div className='flex gap-4 items-center'>
         
         <Link to={`/page/${currentPage-1 ===0 ? 1:currentPage-1}`}> <button className='pagination_btn' onClick={()=>setCurrentPage(currentPage - 1)}><BsArrowLeft/></button> </Link>
         <Link to='/page/1'><button className='pagination_btn' onClick={()=>setCurrentPage(1)}>1</button> </Link>
         <Link to='/page/2'><button className='pagination_btn' onClick={()=>setCurrentPage(2)}>2</button> </Link>
         <Link to='/page/3'><button className='pagination_btn' onClick={()=>setCurrentPage(3)}>3</button> </Link>
         <Link to='/page/4'><button className='pagination_btn' onClick={()=>setCurrentPage(4)}>4</button> </Link>
         <Link to='/page/5'><button className='pagination_btn' onClick={()=>setCurrentPage(5)}>5</button> </Link>
         <Link to='/page/6'> <button className='pagination_btn' onClick={()=>setCurrentPage(6)}>6</button>  </Link>
         <Link to='/page/7'><button className='pagination_btn' onClick={()=>setCurrentPage(7)}>7</button>  </Link>
         <Link to='/page/8'><button className='pagination_btn' onClick={()=>setCurrentPage(8)}>8</button>  </Link>
         <Link to='/page/9'><button className='pagination_btn' onClick={()=>setCurrentPage(9)}>9</button>  </Link>
         <Link to='/page/10'><button className='pagination_btn' onClick={()=>setCurrentPage(10)}>10</button>  </Link>
         <Link to={`/page/${currentPage+1 ===11 ? 10 : currentPage+1}`}><button className='pagination_btn' onClick={()=>setCurrentPage(currentPage + 1)}><BsArrowRight/></button> </Link>
         </div>
    </div>
  )
}

export default Pagination