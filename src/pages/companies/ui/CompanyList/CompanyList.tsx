import React, { FC } from "react";
import { useAppSelector } from "@src/shared/libs/reduxHooks";
import { Stack } from "@src/shared/ui/Stack/Stack";
import styles from "./CompanyList.module.sass";
import { Container } from "@src/shared/ui/Container/Container";
import { CompanyHeader } from "../CompanyHeader/CompanyHeader";
import { CompanyItem } from "../CompanyItem/CompanyItem";
import { useScrollLoader } from "@src/features/companies";

export const CompanyList: FC = () => {
  const { currentCompanies } = useAppSelector((state) => state.rootReducer.companiesReducer);

  useScrollLoader();

  return (
    <Stack className={styles["company-list"]} gap={10}>
      <CompanyHeader />
      <Container>
        <Stack gap={10}>
          {currentCompanies.map((company) => (
            <CompanyItem key={company.id} company={company} />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};
