/* eslint-disable no-useless-concat */
import React from "react";

const TextInput = ({
  label,
  placeholder,
  value,
  onChange,
  customClasses,
  icon,
  showIcon,
  showButton,
  errorMsg,
  iconLeft,
  type,
  limit,
  multiline,
  CustomebuttonClasses,
  buttonTitle,
  containerClass,
  titleClass,
  labelClassname,
}) => {
    
  const inputClasses = "w-full p-2" + " " + customClasses;
  const buttonClasses = "py-2 self-center" + " " + CustomebuttonClasses;
  const containerClasses = "flex items-center space-x-4" + " " + containerClass;
  const labelClass = "block text-sm my-4" + " " + labelClassname;

  return (
    <div className="mb-4">
      {label && <label className={labelClass}>{label}</label>}
      <div className={containerClasses}>
        {showIcon && <img src={iconLeft} alt="Logo" className="w-4 h-4" />}
        <input
          type="text"
          placeholder={placeholder}
          className={inputClasses}
          title={titleClass}
          label={label}
          aria-label={label}
          value={value}
          onChange={onChange}
          minLength={limit}
          aria-multiline={multiline}
          multiple={multiline}
          inputMode={type}
        />
        {showButton && <button className={buttonClasses}>{buttonTitle}</button>}
      </div>
    </div>
  );
};

export default TextInput;
