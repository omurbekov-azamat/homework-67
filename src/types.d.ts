export interface GotValue {
  value: string;
}

export interface GotPassword extends GotValue{
  password: string;
  check: string;
}