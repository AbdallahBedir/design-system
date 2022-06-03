declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  import React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<HTMLImageElement> & { title?: string } & any
  >;

  const src: string;
  export default ReactComponent;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.pdf';
