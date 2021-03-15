import React, { Component } from "react";
import dishesData from "../../datas/dishes";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import { Modal, ModalBody, ModalFooter, Button, CardColumns } from "reactstrap";
class Menu extends Component {
  state = {
    dishes: dishesData,
    selectedDish: null,
    modalOpen: false,
  };
  render() {
    const { dishes, selectedDish, modalOpen } = this.state;
    return (
      <div className="container">
        <div className="row">
          {dishes.map((dish) => (
            <MenuItem
              dish={dish}
              key={dish.id}
              handleDishClick={() => this.handleDishClick(dish)}
            />
          ))}
          <Modal isOpen={modalOpen} onClick={this.handleModalToggle.bind(this)}>
            <ModalBody>
              {selectedDish && <DishDetails details={selectedDish} />}
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={this.handleModalToggle.bind(this)}
              >
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
  handleDishClick(selectedDish) {
    this.setState({ selectedDish });
    this.handleModalToggle();
  }
  handleModalToggle() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }
}

export default Menu;
