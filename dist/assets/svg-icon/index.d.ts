import React from 'react';
import Icons, { RteIcons } from './icons';
declare const SvgIcon: React.FC<SvgIconProps>;
interface SvgIconProps {
    name: Icons | RteIcons;
    color?: string;
    size?: number | string;
    title?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
export { SvgIcon };
export type { SvgIconProps };
