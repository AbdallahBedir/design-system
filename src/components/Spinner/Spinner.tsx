import React, { PropsWithChildren } from 'react';

import styled, { keyframes } from 'styled-components';

export interface SpinnerProps {
  /** Spinner size
   * @default 60
   */
  size?: number;

  /** thickness
   * @default 5 (Math.ceil(60 * 0.08))
   */
  thickness?: number;

  ringColor?: string;

  spinnerColor?: string;

  /** to change Spinner to be inline element
   * @default false
   */
  inline?: boolean;

  style?: React.CSSProperties;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div<SpinnerProps>`
  display: block;
  box-sizing: border-box;
  border-radius: 50%;
  border: 0.4rem solid #00826e;
  animation: ${spin} 0.8s linear infinite;
  transform: translateZ(0);
  ${({ size = 60, thickness, ringColor = '#00826e', spinnerColor = '#fff' }) => ({
    width: size,
    height: size,
    borderWidth: thickness || Math.ceil(size * 0.08),
    borderColor: ringColor,
    borderTopColor: spinnerColor,
  })};
  ${({ inline }) => inline && { display: 'inline-block', verticalAlign: 'sub' }}
`;

export const Spinner = (props: PropsWithChildren<SpinnerProps>): React.ReactElement => (
  <StyledSpinner {...props} />
);
