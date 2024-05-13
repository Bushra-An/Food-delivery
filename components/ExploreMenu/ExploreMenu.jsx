import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eligendi veritatis. Minus impedit quia qui reprehenderit dolorem? Eum quas, quae laudantium eligendi fuga fugiat debitis impedit dolorem nobis. Odit, soluta.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev => prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img src={item.menu_image} className={category === item.menu_name?"active":""} alt="No img" />
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