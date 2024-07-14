import { classNames } from "@src/shared/libs/classNames";
import React, { FC } from "react";
import styles from "./Container.module.sass";

interface ContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
}

export const Container: FC<ContainerProps> = ({ children, className, as = "div", ...other }) => {
  const Tag = as;

  return (
    <Tag {...other} className={classNames([styles["container"], className])}>
      {children}
    </Tag>
  );
};
