import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 100px;
  }
`;

const Label = styled.label``;
Label.Text = styled.span`
  color: #bbbbbb;
  height: 55px;
  position: absolute;
  top: 0px;
  left: 17px;
  
  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 22px;
  font-style: normal;
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: whitesmoke;
  display: block;
  width: 95%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 10px solid #53585D; 
  border-bottom: 3px solid #53585D;

  padding: 16px 16px;
  margin-bottom: 35px;

  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--linhaDoMenu);
  }

  &:focus + span {
    transform: scale(.7) translateY(-10px);
  }

  ${({ hasValue }) => hasValue && css`
    & + span {
      transform: scale(.7) translateY(-10px);
    }
  `}
`;

function FormField({ name, label, value, onChange, type }) {
  const fieldId = `id_${name}`;
  const isTextarea = type === "textarea";
  const tag = isTextarea ? "textarea" : "input"

  const hasValue = Boolean(value.length);

  return(
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >

        <Input 
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
          />

          <Label.Text>
            {label}
          </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired, 
  type: PropTypes.string,
  name: PropTypes.string.isRequired, 
  value: PropTypes.string, 
  onChange: PropTypes.func, 
};

export default FormField;