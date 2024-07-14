import { companiesSlice } from "@src/entities/companies";
import { uncheckAllCompanies } from "@src/entities/companies";
import { useAppDispatch, useAppSelector } from "@src/shared/libs/reduxHooks";
import { useEffect, useState } from "react";
import { loaderPerPageLimit } from "../config";

export const useScrollLoader = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { companies, currentCompanies } = useAppSelector((state) => state.rootReducer.companiesReducer);
  const { setCurrentCompanies, setIsCheckedAll } = companiesSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentCompanies(uncheckAllCompanies(companies.slice(0, 20))));
  }, [companies, dispatch, setCurrentCompanies]);

  useEffect(() => {
    const scrollHandler = (event: Event) => {
      const scrollHeight = (event.target as Document).documentElement.scrollHeight;
      const scrollTop = (event.target as Document).documentElement.scrollTop;
      const innerHeight = window.innerHeight;
      if (scrollHeight - (scrollTop + innerHeight) <= 100) {
        dispatch(
          setCurrentCompanies([
            ...currentCompanies,
            ...uncheckAllCompanies(
              companies.slice((currentPage + 1) * loaderPerPageLimit, (currentPage + 2) * loaderPerPageLimit)
            ),
          ])
        );
        dispatch(setIsCheckedAll(false));
        setCurrentPage(currentPage + 1);
      }
    };

    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [companies, currentCompanies, currentPage, dispatch, setCurrentCompanies, setIsCheckedAll]);
};
