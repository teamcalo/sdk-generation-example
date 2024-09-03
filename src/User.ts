import { AddressSchema } from "./schemas/v1/schemas";

export class User {
  constructor (
    private readonly _name: string,
    private readonly _email: string,
    private readonly _phoneNumber: string,
    private readonly _address: AddressSchema
  ) { }

  public get phoneNumber(): string {
    return this._phoneNumber;
  }
  
  public get email(): string {
    return this._email;
  }

  public get name(): string {
    return this._name;
  }

  public get address(): AddressSchema {
    return this._address;
  }
}