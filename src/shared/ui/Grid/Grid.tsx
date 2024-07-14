import { classNames } from "@src/shared/libs/classNames";
import React, { FC } from "react";
import styles from "./Grid.module.sass";

interface GridProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
  gap?: number;
  gridColumns?: number;
}

export const Grid: FC<GridProps> = ({ children, className, as = "div", gap, gridColumns, ...other }) => {
  const Tag = as;

  return (
    <Tag
      {...other}
      className={classNames([
        styles["grid"],
        className,
        styles[`grid_gap-${gap}`],
        styles[`grid_columns-${gridColumns}`],
      ])}
    >
      {children}
    </Tag>
  );
};
