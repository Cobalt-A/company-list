import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { mockCompanies } from "./mockCompanies";

export interface ICompany {
  id: number;
  name: string;
  address: string;
}

export interface ICurrentCompany extends ICompany {
  active: boolean;
}

interface CompaniesStore {
  companies: ICompany[];
  currentCompanies: ICurrentCompany[];
  isCheckedAll: boolean;
}

const initialState: CompaniesStore = {
  companies: mockCompanies,
  currentCompanies: [],
  isCheckedAll: false,
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setCompanies: (state, action: PayloadAction<ICompany[]>) => {
      state.companies = action.payload;
    },
    setCurrentCompanies: (state, action: PayloadAction<ICurrentCompany[]>) => {
      state.currentCompanies = action.payload;
    },
    setIsCheckedAll: (state, action: PayloadAction<boolean>) => {
      state.isCheckedAll = action.payload;
    },
  },
});
