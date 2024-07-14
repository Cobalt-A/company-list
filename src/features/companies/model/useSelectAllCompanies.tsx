import { companiesSlice } from "@src/entities/companies";
import { checkAllCompanies, uncheckAllCompanies } from "@src/entities/companies";
import { useAppDispatch, useAppSelector } from "@src/shared/libs/reduxHooks";

export const useSelectAllCompanies = (): (() => void) => {
  const { setCurrentCompanies, setIsCheckedAll } = companiesSlice.actions;
  const { currentCompanies, isCheckedAll } = useAppSelector((state) => state.rootReducer.companiesReducer);
  const dispatch = useAppDispatch();

  const checkAllChangeHandler = () => {
    if (!isCheckedAll) {
      dispatch(setCurrentCompanies(checkAllCompanies(currentCompanies)));
      dispatch(setIsCheckedAll(true));
      return;
    }
    dispatch(setCurrentCompanies(uncheckAllCompanies(currentCompanies)));
    dispatch(setIsCheckedAll(false));
  };

  return checkAllChangeHandler;
};
