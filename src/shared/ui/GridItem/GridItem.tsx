import { classNames } from "@src/shared/libs/classNames";
import React, { FC } from "react";
import styles from "./GridItem.module.sass";

interface GridItemProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
  gridSpan?: number;
}

export const GridItem: FC<GridItemProps> = ({ children, className, as = "div", gridSpan, ...other }) => {
  const Tag = as;

  return (
    <Tag {...other} className={classNames([styles["grid-item"], className, styles[`grid-item_grid-span-${gridSpan}`]])}>
      {children}
    </Tag>
  );
};
