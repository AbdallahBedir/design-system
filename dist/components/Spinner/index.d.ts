import React, { PropsWithChildren } from 'react';
interface SpinnerProps {
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
export declare const Spinner: (props: PropsWithChildren<SpinnerProps>) => React.ReactElement;
export {};
