import React, { Component } from "react";
import { Form, Input, Button } from "reactstrap";
import autoBind from "class-autobind";

class AddComment extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  initState = () => ({
    author: "",
    rating: "1",
    comment: "",
    submit: false,
  });
  state = this.initState();
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.fieldReset && prevState.submit) {
      return {
        author: "",
        rating: "1",
        comment: "",
        submit: false,
      };
    }
    return prevState;
  }
  handleOnsubmit = (e) => {
    e.preventDefault();
    const { author, rating, comment } = this.state;
    const newComment = { author, rating, comment, dishId: this.props.dishId };
    this.setState({ submit: true });
    this.props.addComment(newComment, this.props.comments);
  };
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { author, rating, comment } = this.state;
    const { handleOnsubmit, handleOnChange } = this;
    let errorMessage = <div></div>;
    if (this.props.addError)
      errorMessage = (
        <p className="text-center m-auto p-2 ">Submitting comment failed</p>
      );

    return (
      <div>
        {errorMessage}
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

export default AddComment;
