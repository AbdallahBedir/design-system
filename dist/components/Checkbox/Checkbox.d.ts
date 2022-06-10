import React, { InputHTMLAttributes, PropsWithChildren } from 'react';
export interface CheckboxProps extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
    id: string;
    labelStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    checkboxLogoStyle?: React.CSSProperties;
    checkboxSize?: number;
}
declare const Checkbox: React.FC<CheckboxProps>;
export { Checkbox };
