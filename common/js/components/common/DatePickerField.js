import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DatePickerField = ({ name, value, onChange }) => {
  return (
    <InputWrapper>
      <DatePicker
        selected={(value && new Date(value)) || null}
        onChange={val => {
          const dt = new Date(val);
          dt.setHours( dt.getHours() -  dt.getTimezoneOffset()/60); // set timezone
          onChange(name, dt);
        }}
      />
    </InputWrapper>
  );
};

export default DatePickerField;