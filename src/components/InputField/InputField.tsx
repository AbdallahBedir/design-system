import React, { InputHTMLAttributes, useState } from 'react';

import styled from 'styled-components';

import { Colors } from 'colors';

import { InputControlBase } from './types';
import HidePasswordIcon from 'assets/hide-password-icon.svg';
import ViewPasswordIcon from 'assets/view-password-icon.svg';
import { FieldLabel } from './Label';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?:
    | 'text'
    | 'number'
    | 'currency'
    | 'email'
    | 'password'
    | 'dateOnly'
    | 'timeOnly'
    | 'dateTime'
    | 'button'
    | 'submit';
  placeholder?: string;
  hasError?: boolean;
  inputAddon?: string;
}

const defaultProps: InputProps = {
  type: 'text',
  placeholder: '',
  hasError: false,
  inputAddon: undefined,
};

const StyledInput = styled.input<InputProps>`
  height: 2.5rem;
  background: #fff;
  border: 1px solid ${Colors.field_border_placeholder};
  border-radius: 5px;
  flex: 1;
  width: 100%;
  padding: 12px 16px;
  outline: 0;
  color: ${Colors.main_navy};
  font-size: 0.875rem;
  :hover,
  :focus,
  :active {
    border-color: ${Colors.main_green};
  }
  &[data-has-error='true'] {
    :hover,
    :focus,
    :active {
      border-color: ${Colors.red_error};
    }
    border-color: ${Colors.red_error};
  }
  ::placeholder {
    color: #9da4be;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const StyledPasswordInputwrapper = styled.div`
  height: 2.5rem;
  background: ${Colors.white};
  border: 1px solid ${Colors.field_border_placeholder};
  border-radius: 5px;
  flex: 1;
  padding: 0;
  outline: 0;
  color: ${Colors.grey6};
  font-size: 14px;
  display: flex;
  align-items: center;
  :hover,
  :focus,
  :active {
    border-color: ${Colors.main_green};
  }
  &[data-has-error='true'] {
    :hover,
    :focus,
    :active {
      border-color: ${Colors.red_error};
    }
    border-color: ${Colors.red_error};
  }
  ::placeholder {
    color: #9da4be;
  }
`;

const StyledPasswordInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 14px 20px;
  border-radius: 5px;
  border: none;
  flex: 1;
  :hover,
  :focus,
  :active {
    border: none;
    outline: 0;
  }
`;

const StyledTogglePasswordButton = styled.button((props) => ({
  background: 'transparent',
  border: 'none',
  outline: 0,
  cursor: props.disabled ? 'auto' : 'pointer',
  marginRight: 20,
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
}));

const LeftAddon = styled.span`
  font-size: 16px;
  color: #9da4be;
  display: inline-flex;
  align-items: center;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 0 12px;
`;

const AddonInputContainer = styled.div`
  position: relative;
`;

const getPasswordIcon = (isVisible: boolean) => {
  if (isVisible) {
    return <HidePasswordIcon />;
  }

  return <ViewPasswordIcon />;
};

const InputField: React.FC<InputProps> = ({ name, type, hasError, ...props }: InputProps) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const passwordInputType = isPasswordVisible ? 'text' : 'password';

  if (type === 'password') {
    return (
      <StyledPasswordInputwrapper data-has-error={hasError} style={{ display: 'flex' }}>
        <StyledPasswordInput name={name} type={passwordInputType} {...props} />

        <StyledTogglePasswordButton
          onClick={() => setPasswordVisible(!isPasswordVisible)}
          type='button'
          disabled={!props.value}
        >
          {getPasswordIcon(isPasswordVisible)}
        </StyledTogglePasswordButton>
      </StyledPasswordInputwrapper>
    );
  }

  const { inputAddon } = props as InputControlBase;

  if (inputAddon && type === 'number') {
    return (
      <AddonInputContainer>
        <LeftAddon>{inputAddon}</LeftAddon>

        <StyledInput
          name={name}
          type={type || 'text'}
          data-has-error={hasError}
          {...props}
          style={{ paddingLeft: '54px' }}
        />
      </AddonInputContainer>
    );
  }

  return <StyledInput name={name} type={type || 'text'} data-has-error={hasError} {...props} />;
};

InputField.defaultProps = defaultProps;

const StyledFieldContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginBottom: 40,
});

const StyledContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const StyledLabel = styled(FieldLabel)({
  fontSize: 18,
  display: 'flex',
  minWidth: 150,
});

const StyledActionButtons = styled(StyledFieldContainer)`
  padding-top: 41px;
  border-top: 1px solid #dee1e4;
  justify-content: center;
  margin: 0;
`;

export { InputField, StyledFieldContainer, StyledContainer, StyledLabel, StyledActionButtons };
