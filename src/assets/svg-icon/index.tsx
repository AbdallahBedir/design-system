import React from 'react';

import Icons, { RteIcons } from './icons';

const SvgIcon: React.FC<SvgIconProps> = ({ name, color, size, title, style = {}, onClick }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 512 512'
    opacity={1}
    style={style}
    onClick={onClick}
  >
    <title>{title}</title>

    <path fill={color} d={name} />
  </svg>
);

interface SvgIconProps {
  name: Icons | RteIcons;
  color?: string;
  size?: number | string;
  title?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

SvgIcon.defaultProps = {
  color: '#fff',
  size: 24,
};

export { SvgIcon };

export type { SvgIconProps };
