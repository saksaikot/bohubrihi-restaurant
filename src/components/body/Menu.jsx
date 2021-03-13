import React, { Component } from "react";
import dishesData from "../../datas/dishes";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
class Menu extends Component {
  state = {
    dishes: dishesData,
    selectedDish: null,
  };
  render() {
    const { dishes, selectedDish } = this.state;
    return (
      <div className="row">
        <div className="col-6">
          {dishes.map((dish) => (
            <MenuItem
              dish={dish}
              key={dish.id}
              handleDishClick={() => this.handleDishClick(dish)}
            />
          ))}
        </div>
        <div className="col-6">
          {selectedDish && <DishDetails details={selectedDish} />}
        </div>
      </div>
    );
  }
  handleDishClick(selectedDish) {
    this.setState({ selectedDish });
  }
}

export default Menu;
