import React, { ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: 'default' | 'secondary' | 'transparent' | 'subtle' | 'secondaryGrey' | 'error' | 'lightGreen';
    size?: 'default' | 'compact' | 'small';
    prefixIcon?: () => React.ReactNode;
    suffixIcon?: () => React.ReactNode;
    gtmId?: string;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
export type { ButtonProps };
