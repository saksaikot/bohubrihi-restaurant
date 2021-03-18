import React, { Component } from "react";
import DISHES from "../../datas/dishes";
// import COMMENTS from "../../datas/comments";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import AddComment from "./AddComment";
import { dishStore, commentStore } from "../../redux/actionCreators";
import Loading from "./Loading";
// import { addComment } from "../../redux/actionCreators";

const mapStateToProps = (state) => ({
  dishes: state.dishes.dishes,
  dishLoading: state.dishes.dishLoading,
  comments: state.comments,
});
const mapDispatchToProps = (dispatch) => ({
  ...dishStore(dispatch),
  ...commentStore(dispatch),
});
class Menu extends Component {
  state = {
    selectedDish: null,
    modalOpen: false,
  };
  componentDidMount() {
    this.props.fetchDishes(DISHES);
  }
  render() {
    document.title = "Menu";
    console.log("menu rendering ", this.props);
    if (this.props.dishLoading) return <Loading />;

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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
