import React, { Component } from "react";
// import DISHES from "../../datas/dishes";
// import COMMENTS from "../../datas/comments";

import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import AddComment from "./AddComment";
import * as actionType from "../../redux/actionTypes";

const storeToProps = (state) => ({
  dishes: state.dishes,
  comments: state.comments,
});
const dispatchToProps = (dispatch) => ({
  addComment: ({ author, rating, comment, dishId }) =>
    dispatch({
      type: actionType.ADD_COMMENT,
      payload: { author, rating, comment, dishId },
    }),
});
class Menu extends Component {
  state = {
    // dishes: DISHES,
    // comments: COMMENTS,
    selectedDish: null,
    modalOpen: false,
  };
  componentDidMount() {
    console.log(this.props, "Menu");
  }
  render() {
    document.title = "Menu";
    const { selectedDish, modalOpen } = this.state;
    const { dishes, comments, addComment } = this.props;
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
          <Modal
            backdrop={true}
            isOpen={modalOpen}
            toggle={this.handleModalToggle.bind(this)}
          >
            <ModalBody>
              {selectedDish && (
                <div>
                  <DishDetails dish={selectedDish} comments={comments} />
                  <hr />
                  <AddComment
                    addComment={addComment}
                    dishId={selectedDish.id}
                  ></AddComment>
                </div>
              )}
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

export default connect(storeToProps, dispatchToProps)(Menu);
