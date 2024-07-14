import React, { FC } from "react";
import { Stack } from "@src/shared/ui/Stack/Stack";
import styles from "./CompanyHeader.module.sass";
import { Container } from "@src/shared/ui/Container/Container";
import { Button } from "@src/shared/ui/Button/Button";
import { Text } from "@src/shared/ui/Text/Text";
import { useCreateCompany, useDeleteCompanies, useSelectAllCompanies } from "@src/features/companies";
import { useAppSelector } from "@src/shared/libs/reduxHooks";

export const CompanyHeader: FC = () => {
  const { isCheckedAll } = useAppSelector((state) => state.rootReducer.companiesReducer);

  const checkAllChangeHandler = useSelectAllCompanies();

  const deleteClickHandler = useDeleteCompanies();

  const createClickHandler = useCreateCompany();

  return (
    <header className={styles["header"]}>
      <Container>
        <Stack className={styles["header__stack"]} gap={20} direction="row" align="center" justify="space-between">
          <Stack align="center" gap={20} direction="row">
            <Button variant={isCheckedAll ? "white" : "primary"} onClick={checkAllChangeHandler}>
              {isCheckedAll ? "Отменить выделение" : "Выделить все"}
            </Button>
          </Stack>
          <Stack align="center" gap={20} direction="row">
            <Text color="white">Действия:</Text>
            <Button variant="red" onClick={deleteClickHandler}>
              Удалить выбранное
            </Button>
            <Button variant="green" onClick={createClickHandler}>
              Добавить компанию (в верх списка)
            </Button>
          </Stack>
        </Stack>
      </Container>
    </header>
  );
};
