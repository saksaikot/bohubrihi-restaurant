import React, { Component } from "react";
// import DISHES from "../../datas/dishes";
// import COMMENTS from "../../datas/comments";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import AddComment from "./AddComment";
// import { dishStore, commentStore } from "../../redux/actionCreators";
import Loading from "./Loading";
import { commentsActions } from "../../redux/actionCreators/commentsActions";
import { dishesActions } from "../../redux/actionCreators/dishesActions";
// import { addComment } from "../../redux/actionCreators";

const mapStateToProps = (state) => ({
  dishesProps: state.dishes,
  commentsProps: state.comments,
});
const mapDispatchToProps = (dispatch) => ({
  ...commentsActions(dispatch),
  ...dishesActions(dispatch),
});
class Menu extends Component {
  state = {
    selectedDish: null,
    modalOpen: false,
  };
  componentDidMount() {
    this.props.dishesActions.fetchDishes();
  }
  render() {
    const { selectedDish, modalOpen } = this.state;

    const { dishLoading, dishes, loadDishesError } = this.props.dishesProps;

    // const { comments } = this.props.commentsProps;
    const { commentsActions, commentsProps } = this.props;

    if (dishLoading) return <Loading />;
    if (loadDishesError) {
      return <h3 className="text-center m-5 p-5 ">Dish loading failed</h3>;
    }
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
            fade={false}
          >
            <ModalBody>
              {selectedDish && (
                <div>
                  <DishDetails
                    dish={selectedDish}
                    commentsProps={commentsProps}
                  />
                  <hr />
                  <AddComment
                    addComment={commentsActions.addComment}
                    comments={commentsProps.comments}
                    addError={commentsProps.addError}
                    dishId={selectedDish.id}
                    fieldReset={commentsProps.fieldReset}
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
    this.props.commentsActions.fetchComments();
    this.setState({ selectedDish });
    this.handleModalToggle();
  }
  handleModalToggle() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
