import React, { FC } from "react";
import { Providers } from "@src/app/providers";
import { CompanyList } from "@src/pages/companies";
import "./index.sass";

export const App: FC = () => {
  return (
    <Providers>
      <CompanyList />
    </Providers>
  );
};
