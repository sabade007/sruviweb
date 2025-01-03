import React, { useEffect } from "react";

const Input = ({
  placeholder,
  title,
  asterisk,
  error,

  type,
  ...props
}) => {
  // This effect resets the input value to an empty string whenever the error state changes to true.
  // This is useful when we want to clear the input field when an error occurs.

  useEffect(() => {
    if (error) {
      props.onChange({ target: { value: "" } });
    }
  }, [error]);

  return (
    <div
      className="bg-inputbg-color dark:bg-inputbg-color-dark  shadow-sm rounded-lg p-2"
      {...props}
    >
      <h1
        className={`${error ? "text-error-color" : ""} ${
          error ? "animate-shake" : ""
        } px-2 pt-2`}
      >
        {title}
        {asterisk ? (
          <span className={`${error ? "text-error-color" : ""}`}>*</span>
        ) : (
          ""
        )}
      </h1>
      <input
        type={type}
        className="border-0 w-full pb-2 px-2 bg-transparent focus:ring-0 focus:outline-none"
        placeholder={placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
