import React from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";
import Comment from "./Comment";

export default function DishDetails(props) {
  const { name, image, price, description, comments } = props.details;
  return (
    <Card className="mx-auto my-3">
      <CardImg top src={image} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <div className="card-text">
          <p>{description}</p>
          <p>price: {price}/-</p>
          <hr />
          {comments.map((comment) => (
            <Comment key={comment.id} details={comment} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
