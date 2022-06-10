import React, { TextareaHTMLAttributes } from 'react';
export interface TextareaProps extends TextareaHTMLAttributes<HTMLElement> {
    placeholder?: string;
    rows?: number;
    resize?: boolean;
    hasError?: boolean;
}
export declare const defaultProps: TextareaProps;
export declare const TextAreaField: React.FC<TextareaProps>;
