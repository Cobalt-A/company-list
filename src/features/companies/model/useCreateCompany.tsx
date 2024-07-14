import { companiesSlice } from "@src/entities/companies";
import { createCompany } from "@src/entities/companies";
import { useAppDispatch, useAppSelector } from "@src/shared/libs/reduxHooks";

export const useCreateCompany = (): (() => void) => {
  const { setCurrentCompanies } = companiesSlice.actions;
  const { currentCompanies } = useAppSelector((state) => state.rootReducer.companiesReducer);
  const dispatch = useAppDispatch();

  const createClickHandler = () => {
    dispatch(setCurrentCompanies(createCompany(currentCompanies)));
  };

  return createClickHandler;
};
