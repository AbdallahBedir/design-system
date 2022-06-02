import React, { LabelHTMLAttributes, PropsWithChildren } from 'react';

import styled from 'styled-components';

import { Colors } from 'colors';

const StyledLabel = styled.label({
  display: 'flex',
  flexDirection: 'column',
});

const StyledFieldError = styled.span({
  fontSize: '.75rem',
  color: '#FF1744',
  marginTop: '.5rem',
  marginBottom: '-1.25rem',
  alignSelf: 'flex-start',
});

export interface LabelProps extends PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> {
  name?: string;
  optional?: boolean;
  infoIcon?: React.ReactNode;
  textStyles?: React.CSSProperties;
}

const defaultProps: LabelProps = {
  name: '',
  optional: false,
  infoIcon: undefined,
};

const FieldLabel: React.FC<LabelProps> = ({
  name,
  children,
  infoIcon,
  optional = false,
  textStyles,
  ...props
}) => (
  <StyledLabel htmlFor={name} {...props}>
    <span
      style={{
        color: Colors.main_navy,
        fontSize: '.875rem',
        textTransform: 'capitalize',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        ...textStyles,
      }}
    >
      {children}

      {infoIcon}
    </span>

    {optional && (
      <span
        style={{
          color: Colors.grey_hint,
          fontSize: 14,
          marginTop: 7,
        }}
      >
        (Optional)
      </span>
    )}
  </StyledLabel>
);

const FieldErrorMessage: React.FC<PropsWithChildren<Record<string, unknown>>> = ({
  children,
  ...rest
}) => <StyledFieldError {...rest}>{children}</StyledFieldError>;

FieldLabel.defaultProps = defaultProps;

export { FieldLabel, FieldErrorMessage };
