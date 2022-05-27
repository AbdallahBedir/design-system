import React, { ButtonHTMLAttributes } from "react";

import styled from "styled-components";

import { Colors } from "colors";

const StyledButton = styled.button({
  height: "2.5rem",
  border: "1px solid transparent",
  borderRadius: 5,
  cursor: "pointer",
  fontSize: "0.75rem",
  padding: "16px 25px",
  outline: "transparent",
  textTransform: "uppercase",
  backgroundColor: Colors.main_green,
  color: "#fff",
  letterSpacing: 0.96,
  lineHeight: "19px",
  minWidth: "auto",
  whiteSpace: "nowrap",
  transition:
    "color .2s ease, background-color .2s ease, border-color .2s ease",

  "&[data-btn-size='compact']": {
    height: "2rem",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: 0.8,
    lineHeight: "16px",
    padding: "10px 24px",
  },
  "&[data-btn-size='small']": {
    height: "1rem",
    fontSize: 9,
    fontWeight: 600,
    padding: 0,
    letterSpacing: 0,
  },

  ":hover": {
    backgroundColor: "#026B5B",
  },
  ":active": {
    backgroundColor: "#064946",
  },
  ":focus": {
    borderColor: "#80B2FF",
  },
  ":disabled": {
    backgroundColor: Colors.green_disabled,
    cursor: "not-allowed",
    opacity: 0.25,
  },

  "&[data-btn-type='secondary']": {
    backgroundColor: "#fff",
    color: Colors.main_green,
    border: `2px solid ${Colors.main_green}`,

    ":hover": {
      backgroundColor: Colors.main_green,
      color: "#fff",
    },
    ":active": {
      color: "#fff",
      backgroundColor: "#064946",
    },
    ":focus": {
      borderColor: "#064946",
    },
  },

  "&[data-btn-type='secondaryGrey']": {
    backgroundColor: "#fff",
    color: Colors.grey6,
    border: `2px solid ${Colors.grey6}`,

    ":hover": {
      backgroundColor: Colors.grey6,
      color: "#fff",
    },
    ":active": {
      color: "#fff",
      backgroundColor: "#064946",
    },
    ":focus": {
      borderColor: "#064946",
    },
  },

  "&[data-btn-type='transparent']": {
    backgroundColor: "transparent",
    color: Colors.main_green,
    borderColor: "transparent",

    ":hover": {
      backgroundColor: "#EBEDF0",
    },
    ":active": {
      backgroundColor: "#D9DDE4",
    },
    ":focus": {
      borderColor: "#80B2FF",
    },
  },
  "&[data-btn-type='subtle']": {
    color: "#00234BA8",
    backgroundColor: "#EBEBED",
    border: "1px solid transparent",
    outline: "transparent",
    ":hover": { backgroundColor: "#dcdde1" },
    ":focus": {
      borderColor: "#80B2FF",
    },
  },
  "&[data-btn-type='lightGreen']": {
    backgroundColor: Colors.tertiary_green,
    color: Colors.main_green,
    "&:hover": {
      backgroundColor: Colors.tertiary_green,
    },
  },
  "&[data-btn-type='error']": {
    backgroundColor: Colors.error,
    color: Colors.white,
    "&:hover": {
      backgroundColor: Colors.error,
    },
  },
});

// Needed for safari because it has issues with flex inside buttons
const StyledContentWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

const StyledIconWrapper = styled.span({
  marginRight: "8px",
  display: "flex",
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?:
    | "default"
    | "secondary"
    | "transparent"
    | "subtle"
    | "secondaryGrey"
    | "error"
    | "lightGreen";
  size?: "default" | "compact" | "small";
  prefixIcon?: () => React.ReactNode;
  suffixIcon?: () => React.ReactNode;
  gtmId?: string;
}

const defaultProps: ButtonProps = {
  btnType: "default",
  size: "default",
  prefixIcon: undefined,
  suffixIcon: undefined,
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type,
      onClick,
      disabled,
      prefixIcon,
      suffixIcon,
      btnType = "default",
      size = "default",
      children,
      id,
      gtmId,
      ...props
    },
    ref
  ) => (
    <StyledButton
      data-btn-type={btnType}
      data-btn-size={size}
      type={type || "button"}
      disabled={disabled}
      onClick={(e) => {
        if (!disabled && onClick) {
          onClick(e);
          e.currentTarget.blur();
        }
      }}
      ref={ref}
      id={id || gtmId}
      {...props}
    >
      <StyledContentWrapper>
        {prefixIcon && <StyledIconWrapper>{prefixIcon()}</StyledIconWrapper>}

        {children}

        {suffixIcon && <StyledIconWrapper>{suffixIcon()}</StyledIconWrapper>}
      </StyledContentWrapper>
    </StyledButton>
  )
);

Button.displayName = "Button";
Button.defaultProps = defaultProps;

export { Button };

export type { ButtonProps };
