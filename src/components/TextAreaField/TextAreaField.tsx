import React, { TextareaHTMLAttributes } from 'react';

import styled from 'styled-components';

import { Colors } from 'colors';

const StyledTextArea = styled.textarea({
  background: Colors.white,
  border: `1px solid ${Colors.field_border_placeholder}`,
  borderRadius: 5,
  width: '100%',
  padding: '14px 20px',
  outline: 0,
  color: Colors.grey6,
  fontSize: 16,
  resize: 'none',
  boxSizing: 'border-box',
  ':hover': {
    borderColor: Colors.main_green,
  },
  ':focus': {
    borderColor: Colors.main_green,
  },
  ':active': {
    borderColor: Colors.main_green,
  },
  '::placeholder': {
    color: '#9DA4BE',
  },

  '&[data-has-error=true]': {
    ':hover': {
      borderColor: Colors.red_error,
    },
    ':focus': {
      borderColor: Colors.red_error,
    },

    ':active': {
      borderColor: Colors.red_error,
    },

    borderColor: Colors.red_error,
  },
});

export interface TextareaProps extends TextareaHTMLAttributes<HTMLElement> {
  placeholder?: string;
  rows?: number;
  resize?: boolean;
  hasError?: boolean;
}

export const defaultProps: TextareaProps = {
  placeholder: '',
  rows: 4,
  resize: false,
};

export const TextAreaField: React.FC<TextareaProps> = ({ rows = 4, hasError, ...props }) => (
  <StyledTextArea rows={rows} data-has-error={hasError} {...props} />
);

TextAreaField.defaultProps = defaultProps;
