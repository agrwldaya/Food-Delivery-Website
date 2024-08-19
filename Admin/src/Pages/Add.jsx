import React, { useRef, useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
 
export default function Add() {
  const url = `http://localhost:4000/api/food/add`;

  const [image, setImage] = useState(false);

  console.log(image);
  
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleData = async () => {
    const formData = new FormData();
    
    formData.append('name', nameRef.current.value);
    formData.append('description', descriptionRef.current.value);
    formData.append('price', priceRef.current.value);
    formData.append('category', categoryRef.current.value);
    formData.append('image', image);
    
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
          toast.success(response.data.message)
        console.log('Data added to the list successfully');
      } else {
        toast.error(response.data.message)
        console.log('Data not added to the list successfully');
      }
    } catch (error) {
      toast.error(response.data.message)
      console.error('An error occurred while adding the data', error);
    }

    //Resetting the form fields
    nameRef.current.value = '';
    descriptionRef.current.value = '';
    priceRef.current.value = '';
    categoryRef.current.value = 'Salad';
    imageRef.current.value = null;
    setImage(false);
  };

  return (
    
    <div className='mx-10 mt-10 md:w-1/2'>
      <div className='flex-col mb-5 w-auto'>
        <p className='mb-2'>Upload Image</p>
        <label htmlFor='image'>
          <img className='w-28' src={image ? URL.createObjectURL(image) : assets.upload_area} alt='Upload' />
        </label>
        <input ref={imageRef} onChange={handleImageChange} type='file' id='image' hidden required />
      </div>

      <div className='flex-col mb-5'>
        <p className='mb-2'>Product Name</p>
        <input
          ref={nameRef}
          className='border w-full md:w-1/2 outline-none py-2 px-3 border-black'
          type='text'
          placeholder='type here'
        />
      </div>

      <div className='flex-col mb-5'>
        <p className='mb-2'>Product Description</p>
        <textarea
          ref={descriptionRef}
          className='border h-28 outline-none w-full md:w-1/2 py-2 px-3 border-black'
          placeholder='type here'
        />
      </div>

      <div className='flex justify-between gap-3 items-center md:w-1/2'>
        <div className='flex-col mb-5'>
          <p className='mb-2'>Product Category</p>
          <select
            ref={categoryRef}
            className='border w-full outline-none py-2 px-3 border-black'
          >
            <option value='Salad'>Salad</option>
            <option value='Rools'>Rools</option>
            <option value='Deserts'>Deserts</option>
            <option value='Sandwich'>Sandwich</option>
            <option value='Pure veg'>Pure veg</option>
            <option value='Pasta'>Pasta</option>
            <option value='Noodles'>Noodles</option>
          </select>
        </div>
        <div className='flex-col mb-5 w-1/2'>
          <p className='mb-2'>Product Price</p>
          <input
            ref={priceRef}
            className='border w-full outline-none py-2 px-3 border-black'
            type='number'
            placeholder='$20'
          />
        </div>
      </div>

      <button onClick={handleData} type='submit' className='px-10 py-2 bg-black text-white'>Add</button>
    </div>
  );
}
