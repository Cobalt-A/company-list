import { companiesSlice, ICurrentCompany } from "@src/entities/companies";
import { setCompanyActiveById } from "@src/entities/companies";
import { useAppDispatch, useAppSelector } from "@src/shared/libs/reduxHooks";
import { ChangeEvent } from "react";

export const useUpdateSelectCompany = (company: ICurrentCompany): ((event: ChangeEvent<HTMLInputElement>) => void) => {
  const { currentCompanies } = useAppSelector((state) => state.rootReducer.companiesReducer);
  const { setCurrentCompanies, setIsCheckedAll } = companiesSlice.actions;
  const dispatch = useAppDispatch();

  const checkChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const active = event.currentTarget.checked;
    dispatch(setCurrentCompanies(setCompanyActiveById(currentCompanies, company.id, active)));
    dispatch(setIsCheckedAll(false));
  };

  return checkChangeHandler;
};
