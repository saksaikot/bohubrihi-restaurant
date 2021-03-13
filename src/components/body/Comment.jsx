import React from "react";
import dateFormat from "dateformat";
export default function Comment(props) {
  const { author, rating, date, comment } = props.details;
  return (
    <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">
        {author}
        <p className="card-text">
          <small className="text-muted">
            {dateFormat(date, "dddd, mmmm dS, yyyy, h:MM TT")}
          </small>
        </p>
      </div>
      <div className="card-body">
        <p className="card-text">{comment}</p>
        <small className="text-muted float-right">Rated: {rating}</small>
      </div>
    </div>
  );
}
