import React, { FC } from "react";
import { Stack } from "@src/shared/ui/Stack/Stack";
import { Grid } from "@src/shared/ui/Grid/Grid";
import { GridItem } from "@src/shared/ui/GridItem/GridItem";
import { ICurrentCompany } from "@src/entities/companies/model/store";
import styles from "./CompanyItem.module.sass";
import { Input } from "@src/shared/ui/Input/Input";
import { classNames } from "@src/shared/libs/classNames";
import { useUpdateCompanyName } from "@src/features/companies";
import { useUpdateCompanyAddress } from "@src/features/companies";
import { useUpdateSelectCompany } from "@src/features/companies";

interface CompanyItemProps {
  company: ICurrentCompany;
}

export const CompanyItem: FC<CompanyItemProps> = ({ company }) => {
  const checkChangeHandler = useUpdateSelectCompany(company);

  const nameChangeHandler = useUpdateCompanyName(company);

  const addressChangeHandler = useUpdateCompanyAddress(company);

  return (
    <Grid
      className={
        company.active ? classNames([styles["company-item"], styles["company-item__active"]]) : styles["company-item"]
      }
      gap={20}
      gridColumns={12}
    >
      <GridItem gridSpan={4}>
        <Stack direction="row" align="center" wrap="no-wrap">
          <Input onChange={checkChangeHandler} checked={company.active} type="checkbox" />
          <Input onChange={nameChangeHandler} value={company.name} width={100} height={40} type="text" />
        </Stack>
      </GridItem>
      <GridItem gridSpan={8}>
        <Stack justify="center">
          <Input onChange={addressChangeHandler} value={company.address} width={100} height={40} type="text" />
        </Stack>
      </GridItem>
    </Grid>
  );
};
