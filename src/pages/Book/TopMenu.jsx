import { useContext } from 'react'
import { BookContext } from '../../context/BookContext';

export default function TopMenu() {

    const {dispatch} = useContext(BookContext);

    const handleType = (e)=>{ 
       const type = e.target.value;  
      // console.log("set type",e.target.value)
       dispatch({type:'SET_TYPE',payload:type});
    }

    const handlePage = (e) =>{
        const page = parseInt(e.target.value);
        dispatch({type:'SET_PER_PAGE',payload:page});
      //  console.log("per page  ",e.target.value);
    }

  return (
     <div className="flex gap-x-10 justify-end mb-[60px]">
              <div className="md:flex items-center gap-x-3.5">
                <span className="inline-block text-base  text-[#767676]">
                  Sort By:
                </span>
                <select
                onChange={handleType}
                  id="countries"
                  className=" font-dm font-regular text-base border border-[#F0F0F0] text-gray-900  rounded-lg focus:border-black-500 block md:w-[239px] p-2.5"
                >
                  <option selected>Select Type</option>
                  <option value="new">New Book</option>
                  <option value="old">Old Book </option>
                </select>
              </div>
              <div className="md:flex items-center gap-x-3.5">
                <span className="inline-block text-base  text-[#767676]">
                  Show
                </span>
                <select
                  onChange={handlePage}
                  id="countries"
                  className=" font-dm font-regular text-base border border-[#F0F0F0] text-gray-900  rounded-lg focus:border-black-500 block md:w-[139px] p-2.5"
                >
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="48">48</option>
                </select>
              </div>
            </div>
  )
}
