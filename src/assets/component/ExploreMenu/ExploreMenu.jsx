import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets'


const ExploreMenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Take a look at our menu</h1>
    <p className='explore-menu-text'>
    Select from a wide-ranging menu offering a delightful variety of dishes, aimed at fulfilling your cravings and enhancing your dining experience with each delicious meaty bite</p>
      <div className='explore-menu-list'>
        {menu_list.map((item) => {
            return (
                <div onClick={() =>setcategory(prev=>prev===item.menu_name ?"All":item.menu_name)} key="id" className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>

    </div>
  )
}

export default ExploreMenu
