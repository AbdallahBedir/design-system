import React, { InputHTMLAttributes, PropsWithChildren, useRef } from 'react';

import styled from 'styled-components';

import { Colors } from 'colors';

import { SvgIcon } from 'assets/svg-icon';
import Icons from 'assets/svg-icon/icons';

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  margin: 0;
  z-index: -1;

  &:checked + span {
    background-color: ${Colors.main_green};
    border-color: ${Colors.main_green};
  }
`;

const StyledCheckLogo = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.grey4};
  border-radius: 4px;
  &:checked {
    background-color: ${Colors.main_green};
  }
`;

const StyledCheckBoxLabelText = styled.span({
  marginLeft: 20,
  lineHeight: '18px',
  color: Colors.main_navy,
  userSelect: 'none',
  fontSize: 16,
  fontWeight: 500,
});

const StyledCheckBoxLabel = styled.label`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  align-items: center;

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export interface CheckboxProps extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  id: string;
  labelStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  checkboxLogoStyle?: React.CSSProperties;
  checkboxSize?: number;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    children,
    checked = false,
    disabled,
    labelStyle,
    containerStyle,
    checkboxLogoStyle,
    checkboxSize = 24,
    id,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledCheckBoxLabel htmlFor={id} style={containerStyle}>
      <StyledInput
        id={id}
        type='checkbox'
        checked={checked}
        disabled={disabled}
        ref={inputRef}
        {...rest}
      />

      <StyledCheckLogo
        style={{
          ...checkboxLogoStyle,
          minWidth: checkboxSize,
          width: checkboxSize,
          height: checkboxSize,
        }}
      >
        {checked && <SvgIcon name={Icons.Checkmark} color={Colors.white} size={checkboxSize} />}
      </StyledCheckLogo>

      {children && <StyledCheckBoxLabelText style={labelStyle}>{children}</StyledCheckBoxLabelText>}
    </StyledCheckBoxLabel>
  );
};

export { Checkbox };
