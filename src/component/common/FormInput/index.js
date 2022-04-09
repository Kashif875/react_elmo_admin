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
  onWheel = "",
  messages,
}) => {
  return (
    <>
      <input
        name={name}
        placeholder={placeholder}
        className="formInputBox"
        ref={register}
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