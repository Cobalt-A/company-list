import React, { FC } from "react";
import { classNames } from "@src/shared/libs/classNames";
import styles from "./Text.module.sass";

interface TextProps extends React.ComponentProps<"p"> {
  children: React.ReactNode;
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
  size?: number;
  weight?: number;
  color?: "white" | "black";
}

export const Text: FC<TextProps> = ({ children, className, as = "p", size, weight, color = "black", ...other }) => {
  const Tag = as;

  return (
    <Tag
      {...other}
      className={classNames([
        styles["text"],
        className,
        styles[`text_color-${color}`],
        styles[`text_size-${size}`],
        styles[`text_weight-${weight}`],
      ])}
    >
      {children}
    </Tag>
  );
};
