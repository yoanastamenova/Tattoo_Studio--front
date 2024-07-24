import React from "react";

export const CInput = (
  { 
      type = 'text', 
      name = "", 
      placeholder = "", 
      emitFunction,
      clickFunction,
      className = "",
      value,
      label
  }
) => {
return (
  <>
    <div>
      <label htmlFor="">{label}</label>
    </div>
    <input 
    type={type} 
    name={name} 
    placeholder={placeholder} 
    onChange={emitFunction} 
    onClick={clickFunction} 
    value={value} 
    className={className}
    />
  </>
)
}
