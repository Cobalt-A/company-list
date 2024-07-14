import React, { FC } from "react";
import { classNames } from "@src/shared/libs/classNames";
import styles from "./Stack.module.sass";

interface StackProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
  gap?: number;
  gapMd?: number;
  direction?: "column" | "row";
  directionMd?: "column" | "row";
  wrap?: "wrap" | "no-wrap";
  justify?: string;
  align?: string;
  draggable?: boolean;
  width?: "full";
}

export const Stack: FC<StackProps> = ({
  children,
  className,
  gap = 20,
  gapMd,
  directionMd,
  direction = "column",
  as = "div",
  wrap,
  justify,
  align,
  width,
  ...other
}) => {
  const Tag = as;

  return (
    <Tag
      {...other}
      className={classNames([
        styles["stack"],
        className,
        styles[`stack_gap-${gap}`],
        styles[`stack_gap-md-${gapMd}`],
        styles[`stack_direction-${direction}`],
        styles[`stack_direction-md-${directionMd}`],
        styles[`stack_justify-${justify}`],
        styles[`stack_align-${align}`],
        styles[`stack_${wrap}`],
        styles[`stack_width-${width}`],
      ])}
    >
      {children}
    </Tag>
  );
};
