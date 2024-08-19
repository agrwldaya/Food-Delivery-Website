import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function List() {
  const [items,setItems] = useState([]) 
   const url = `http://localhost:4000/image/`
   const url1 = `http://localhost:4000/api/food/list`

   const fetchList= async ()=>{
         const response  = await axios(url1);
         if(response.data.success){
          setItems(response.data.data)
           
         }else{
          toast.error("error")
         }
   }
   const url2 = `http://localhost:4000/api/food/remove`;

  const removeItem = async (id) => {
    try {
      const response = await axios.post(url2, id);
      if (response.data.success) {
        toast.success(response.data.message);
        
        // Refresh the list after removing the item
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error removing the item");
      console.error("There was an error removing the item!", error);
    }
  };

   useEffect(()=>{
    fetchList();
   },[])
   
  return (
 
    <div className=' relative overflow-hidden md:w-[70%] w-[90%]  mx-auto  md:mx-6   mt-10 md:px-28'>
    <div className="">
      <table className="table">
        <thead className='text-base'>
          <tr>
            <th>Item</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td><img className="w-14 rounded" src={url+item.image} alt="" /></td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.category}</td>
              <td className='cursor-pointer'  onClick={()=>removeItem({id:item._id})}  >✖</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
       
      
      <div className='mt-40 items-center text-center  max-w-full   '>
        <h1 className='text-2xl mb-5'>Add Item in food list</h1>
         <Link to="/add"   className='bg-orange-500   px-4 py-2 rounded-md  text-lg font-medium hover:bg-orange-600 '>Add</Link>
      </div>
      
    </div>
  )
}
