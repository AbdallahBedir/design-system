import React, { LabelHTMLAttributes, PropsWithChildren } from 'react';
export interface LabelProps extends PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> {
    name?: string;
    optional?: boolean;
    infoIcon?: React.ReactNode;
    textStyles?: React.CSSProperties;
}
declare const FieldLabel: React.FC<LabelProps>;
declare const FieldErrorMessage: React.FC<PropsWithChildren<Record<string, unknown>>>;
export { FieldLabel, FieldErrorMessage };
