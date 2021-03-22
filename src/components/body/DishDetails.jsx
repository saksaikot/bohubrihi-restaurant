import React from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";
import Comment from "./Comment";

export default function DishDetails(props) {
  const { name, image, price, description, id } = props.dish;

  const { commentLoading, loadError, comments } = props.commentsProps;
  let dishComments;
  if (loadError)
    dishComments = (
      <h3 className="text-center m-5 p-5 ">Comment loading failed</h3>
    );
  else if (commentLoading)
    dishComments = <h3 className="text-center m-5 p-5 ">Loading Comments</h3>;
  else
    dishComments = comments
      .filter((comment) => comment.dishId === id)
      .map((comment) => <Comment key={comment.id} details={comment} />);

  return (
    <Card className="mx-auto my-3">
      <CardImg top src={image} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <div className="card-text">
          <p>{description}</p>
          <p>price: {price}/-</p>
          <hr />

          {dishComments}
        </div>
      </CardBody>
    </Card>
  );
}
