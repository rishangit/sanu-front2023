import React from "react";

const Image = ( props : any) => {
  return (
    <div>
      <img src={props?.src} alt={props?.alt ?? ""}  />
    </div>
  );
};

export default Image;
