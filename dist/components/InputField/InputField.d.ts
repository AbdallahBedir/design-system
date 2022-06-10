import React, { InputHTMLAttributes } from 'react';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'number' | 'currency' | 'email' | 'password' | 'dateOnly' | 'timeOnly' | 'dateTime' | 'button' | 'submit';
    placeholder?: string;
    hasError?: boolean;
    inputAddon?: string;
}
declare const InputField: React.FC<InputProps>;
declare const StyledFieldContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const StyledContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const StyledLabel: import("styled-components").StyledComponent<React.FC<import("./Label").LabelProps>, any, {}, never>;
declare const StyledActionButtons: import("styled-components").StyledComponent<"div", any, {}, never>;
export { InputField, StyledFieldContainer, StyledContainer, StyledLabel, StyledActionButtons };
