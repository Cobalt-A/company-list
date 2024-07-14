import { companiesSlice, ICurrentCompany } from "@src/entities/companies";
import { setCompanyNameById } from "@src/entities/companies";
import { useAppDispatch, useAppSelector } from "@src/shared/libs/reduxHooks";
import { ChangeEvent } from "react";

export const useUpdateCompanyName = (company: ICurrentCompany): ((event: ChangeEvent<HTMLInputElement>) => void) => {
  const { currentCompanies } = useAppSelector((state) => state.rootReducer.companiesReducer);
  const { setCurrentCompanies } = companiesSlice.actions;
  const dispatch = useAppDispatch();

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.value;
    dispatch(setCurrentCompanies(setCompanyNameById(currentCompanies, company.id, name)));
  };

  return nameChangeHandler;
};
