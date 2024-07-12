import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICompany {
  id: string
  name: string
  address: string
}

interface CompaniesStore {
  companies: ICompany[]
}

const initialState: CompaniesStore = {
  companies: []
};

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setCompanies: (state, action: PayloadAction<ICompany[]>) => {
     state.companies = action.payload
    },
  },
});
