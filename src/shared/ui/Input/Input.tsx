import React, { FC } from "react";
import { classNames } from "@src/shared/libs/classNames";
import styles from "./Input.module.sass";

interface InputProps extends React.ComponentProps<"input"> {
  className?: string;
  width?: number;
  height?: number;
}

export const Input: FC<InputProps> = ({ className, width, height, ...other }) => {
  return (
    <input
      className={classNames([
        className,
        styles["input"],
        styles[`input__width-${width}`],
        styles[`input__height-${height}`],
      ])}
      {...other}
    />
  );
};
