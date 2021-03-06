import React from "react";
import "./formInput.scss";

const FormInput = ({
  placeholder = "",
  register = {},
  value = "",
  type = "text",
  onChange,
  name = "",
  maxlength = "",
  error = "",
  icons = false,
  GB = false,
  disabled = false,
  onWheel = "",
  messages,
  style={}
}) => {
  return (
    <>
      <input
        name={name}
        placeholder={placeholder}
        className={"formInputBox font-regular-14 "+ (disabled ? 'formDiabled':'')}
        ref={register}
        disabled={disabled}
        style={style}
        defaultValue={value}
        type={type}
        maxlength={maxlength}
        onWheel={(event) => event.currentTarget.blur()}
      />
      <span className="text-danger fs-13">
        {error?.type && messages[error.type]}
      </span>
    </>
  );
};
export default FormInput;
