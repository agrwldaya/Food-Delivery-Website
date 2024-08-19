import React, { useState } from 'react'
import Banner from './components/Banner'
import ExploreMenu from './components/ExploreMenu'
import FoodDisplay from './components/FoodDisplay';
import AppDownload from './components/AppDownload';

export default function Home() {
  const [category,setCategory] = useState("All");
  return (
    <div>
      <Banner/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} /> 
      <AppDownload/>
    </div>
  )
}
