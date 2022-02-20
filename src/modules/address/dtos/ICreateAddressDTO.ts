interface ICreateAddressDTO {
  place: string;
  number: number;
  complement?: string;
  district: string;
  city: string;
  state: string;
  zipcode: string;
}

export { ICreateAddressDTO };
