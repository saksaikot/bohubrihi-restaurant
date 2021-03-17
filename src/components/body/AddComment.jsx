import React, { Component } from "react";
import { Form, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import autoBind from "class-autobind";

const dispatchToProps = (dispatch) => ({
  addComment: ({ author, rating, comment, dishId }) =>
    dispatch({
      type: "ADD_COMMENT",
      payload: { author, rating, comment, dishId },
    }),
});

class AddComment extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  initState = () => ({
    author: "",
    rating: "1",
    comment: "",
  });
  state = this.initState();

  handleOnsubmit = (e) => {
    e.preventDefault();
    this.setState(this.initState());

    // const comment = {
    //   ...this.state,
    //   dishId: this.props.dishId,
    // };
    this.props.addComment({ ...this.state, dishId: this.props.dishId });
  };
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { author, rating, comment } = this.state;
    const { handleOnsubmit, handleOnChange } = this;
    return (
      <div>
        <h4>Add your comment</h4>
        <Form onSubmit={handleOnsubmit}>
          <Input
            className="py-2 my-2"
            type="text"
            name="author"
            value={author}
            placeholder="Author name"
            onChange={handleOnChange}
          />
          <Input
            className="py-2 my-2"
            type="select"
            name="rating"
            value={rating}
            onChange={handleOnChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <Input
            className="py-2 my-2"
            type="textarea"
            name="comment"
            value={comment}
            placeholder="Your comment"
            onChange={handleOnChange}
          />
          <Button color="primary" className="py-2 my-2" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, dispatchToProps)(AddComment);
