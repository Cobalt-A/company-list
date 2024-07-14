import { companiesSlice } from "@src/entities/companies";
import { deleteCompanies } from "@src/entities/companies";
import { useAppDispatch, useAppSelector } from "@src/shared/libs/reduxHooks";

export const useDeleteCompanies = (): (() => void) => {
  const { setCurrentCompanies, setIsCheckedAll } = companiesSlice.actions;
  const { currentCompanies } = useAppSelector((state) => state.rootReducer.companiesReducer);
  const dispatch = useAppDispatch();

  const deleteClickHandler = () => {
    dispatch(setCurrentCompanies(deleteCompanies(currentCompanies)));
    dispatch(setIsCheckedAll(false));
  };

  return deleteClickHandler;
};
