import React from "react";

export const CInput = ({
  type = "text",
  name = "",
  placeholder = "",
  emitFunction,
  clickFunction,
  value,
}) => {
  return (
  <>
    <input 
    type={type} 
    name={name} 
    placeholder={placeholder} 
    emitFunction={emitFunction} 
    clickFunction={clickFunction}
    value={value}
    id={id} />
  </>
  )
};
