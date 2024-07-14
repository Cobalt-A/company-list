import { companiesSlice, ICurrentCompany } from "@src/entities/companies";
import { setCompanyAddressById } from "@src/entities/companies";
import { useAppDispatch, useAppSelector } from "@src/shared/libs/reduxHooks";
import { ChangeEvent } from "react";

export const useUpdateCompanyAddress = (company: ICurrentCompany): ((event: ChangeEvent<HTMLInputElement>) => void) => {
  const { currentCompanies } = useAppSelector((state) => state.rootReducer.companiesReducer);
  const { setCurrentCompanies } = companiesSlice.actions;
  const dispatch = useAppDispatch();

  const addressChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const address = event.currentTarget.value;
    dispatch(setCurrentCompanies(setCompanyAddressById(currentCompanies, company.id, address)));
  };

  return addressChangeHandler;
};
