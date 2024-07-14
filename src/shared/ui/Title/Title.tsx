import React, { FC } from "react";
import { Text } from "../Text/Text";

interface TitleProps extends React.ComponentProps<"p"> {
  children: React.ReactNode;
  as?: React.ElementType<any> & keyof JSX.IntrinsicElements;
  size?: number;
  weight?: number;
  color?: "white" | "black";
}

export const Title: FC<TitleProps> = ({ children, className, as = "h2", size = 20, weight = 700, ...other }) => {
  return (
    <Text {...other} className={className} as={as} size={size} weight={weight}>
      {children}
    </Text>
  );
};
