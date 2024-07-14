import { ICompany, ICurrentCompany } from "./store";

export const setCompanyActiveById = (companies: ICurrentCompany[], id: number, active: boolean): ICurrentCompany[] => {
  return companies.map((company) => {
    if (company.id === id) {
      const newCompany: ICurrentCompany = JSON.parse(JSON.stringify(company));
      newCompany.active = active;
      return newCompany;
    }
    return company;
  });
};

export const setCompanyNameById = (companies: ICurrentCompany[], id: number, name: string): ICurrentCompany[] => {
  return companies.map((company) => {
    if (company.id === id) {
      const newCompany: ICurrentCompany = JSON.parse(JSON.stringify(company));
      newCompany.name = name;
      return newCompany;
    }
    return company;
  });
};

export const setCompanyAddressById = (companies: ICurrentCompany[], id: number, address: string): ICurrentCompany[] => {
  return companies.map((company) => {
    if (company.id === id) {
      const newCompany: ICurrentCompany = JSON.parse(JSON.stringify(company));
      newCompany.address = address;
      return newCompany;
    }
    return company;
  });
};

export const deleteCompanies = (companies: ICurrentCompany[]): ICurrentCompany[] => {
  return companies.filter((company) => company.active !== true);
};

export const createCompany = (companies: ICurrentCompany[]): ICurrentCompany[] => {
  const newCompany: ICurrentCompany = { id: Math.round(Math.random() * 100000), name: "", address: "", active: false };
  const newCompanies = JSON.parse(JSON.stringify(companies));
  newCompanies.unshift(newCompany);
  return newCompanies;
};

export const uncheckAllCompanies = (companies: ICompany[]) => {
  return companies.map((company) => {
    const newCompany: ICurrentCompany = JSON.parse(JSON.stringify(company));
    newCompany.active = false;
    return newCompany;
  });
};

export const checkAllCompanies = (companies: ICurrentCompany[]): ICurrentCompany[] => {
  return companies.map((company) => {
    const newCompany: ICurrentCompany = JSON.parse(JSON.stringify(company));
    newCompany.active = true;
    return newCompany;
  });
};
