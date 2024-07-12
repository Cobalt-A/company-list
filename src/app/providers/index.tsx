import React, { FC, ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: FC<ProvidersProps> = ({children}) => {
  return (
    <StoreProvider>{children}</StoreProvider>
  );
};
