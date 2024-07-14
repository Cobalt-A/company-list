import { classNames } from "@src/shared/libs/classNames";
import React, { FC } from "react";
import styles from "./Button.module.sass";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  variant?: "red" | "green" | "gray" | "white" | "primary";
}

export const Button: FC<ButtonProps> = ({ children, className, variant, ...other }) => {
  return (
    <button {...other} className={classNames([styles["button"], className, styles[`button__variant-${variant}`]])}>
      {children}
    </button>
  );
};
