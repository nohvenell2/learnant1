import React, { useState } from 'react';
import { Input } from 'antd';
const formatNumber = (value) => new Intl.NumberFormat().format(value);
const InputRealNumber = (props) => {
  const { value, onChange } = props;
  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
    console.log(inputValue);
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (!value){return}
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };
  const title = value ? (
    <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
  ) : (
    'Input a number'
  );
  return (
    <Input
    {...props}
    style = {{ width : 200, fontSize:"15px" }}
    onChange={handleChange}
    onBlur={handleBlur}
    placeholder="Input a number"
    maxLength={8}
    />
  );
};

export default InputRealNumber;