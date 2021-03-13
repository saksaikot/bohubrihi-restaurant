import React, { Component } from 'react';
import dishesData from '../../datas/dishes';
import MenuItem from './MenuItem';
class Menu extends Component {
  state={
    dishes:dishesData
  }
  render() {
    const {dishes}=this.state;
    return (
      
      <div>
        {
          dishes.map(dish=>(
            <MenuItem dish={dish} key={dish.id}/>
          ))
        }
      </div>
    );
  }
git

}

export default Menu;
