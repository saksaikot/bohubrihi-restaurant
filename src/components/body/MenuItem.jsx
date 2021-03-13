import React from "react";
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay } from "reactstrap";

export default function MenuItem(props) {
  const { dish, handleDishClick } = props;
  const { image, name } = dish;
  return (
    <div>
      <Card className="mx-auto my-3 cursor" onClick={handleDishClick}>
        <CardBody>
          <CardImg width="100%" src={image} alt="name" />

          <CardImgOverlay className="h-100 d-flex flex-column justify-content-end">
            <CardTitle className="menu-title" tag="h5">
              {name}
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
}
