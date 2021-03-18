import React from "react";

export default function Loading() {
  return (
    <div className="d-flex">
      <div className="ssc ssc-card" style={{ maxWidth: "30%" }}>
        <div className="ssc-wrapper">
          <div className="ssc-square mb"></div>
          <div className="flex align-center justify-between">
            <div className="ssc-head-line w-100"></div>
          </div>
        </div>
      </div>
      <div className="ssc ssc-card" style={{ maxWidth: "30%" }}>
        <div className="ssc-wrapper">
          <div className="ssc-square mb"></div>
          <div className="flex align-center justify-between">
            <div className="ssc-head-line w-100"></div>
          </div>
        </div>
      </div>
      <div className="ssc ssc-card" style={{ maxWidth: "30%" }}>
        <div className="ssc-wrapper">
          <div className="ssc-square mb"></div>
          <div className="flex align-center justify-between">
            <div className="ssc-head-line w-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
