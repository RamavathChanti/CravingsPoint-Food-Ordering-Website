import React, { useState } from 'react'
import "./Home1.css"
import Header from '../../assets/component/Header/Header1'
import ExploreMenu from '../../assets/component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../assets/component/FoodDisplay/FoodDisplay'
import AppDownload from '../../assets/component/AppDownload/AppDownload'
const Home1 = () => {

  const[category,setcategory]=useState("All");


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home1
