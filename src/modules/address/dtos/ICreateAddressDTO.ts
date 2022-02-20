interface ICreateAddressDTO {
  place: string;
  number: number;
  complement?: string;
  district: string;
  city: string;
  state: string;
  zipcode: string;
  client_id: number;
}

export { ICreateAddressDTO };
