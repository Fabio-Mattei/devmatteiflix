import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display:flex;
  flex-direction: column;
  margin-bottom:10px;
  min-width: 100%;
  min-height: 35px;
  margin: ${props => props.size};
  padding: ${props => props.size};
  
`;

const TextArea = styled.textarea`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display:flex;
  flex-direction: column;
  margin-bottom:10px;
  min-width:100%;
  min-height: 70px;
  
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

function FormField({value, onChange, type, name, label}){
  if (type=="textarea"){
    return(
      <>
        <label>
          {label}:
          <TextArea
            type="text"
            name={name}
            value={value}
            onChange={onChange}
          />
        </label>
      </>
    )
  } else {
    return(
      <>
        <label>
          {label}:
          <Input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        </label>
       </>
    )
  }
}

export default FormField;