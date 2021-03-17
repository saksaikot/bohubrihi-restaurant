import React from "react";

export default function Loading() {
  return (
    <div className="col-12 m-auto text-center">
      <i className="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
