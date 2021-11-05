import React, { useMemo } from "react";
const SideLeft = ({ data }) => {
  return (
    <div className="left-side">
      {data.map((item) => {
        return (
          <div
            className="side-item"
            key={item.id}
            style={{ height: `${item.subCount * 40}px` }}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default SideLeft;
