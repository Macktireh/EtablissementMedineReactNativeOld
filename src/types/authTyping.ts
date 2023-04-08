export type AuthLoginType = {
  email: string;
  password: string;
};

export type AuthSignupType = AuthLoginType & {
  name: string;
  phone: string;
  confirmPassword: string;
};

export type AuthTokenType = {
  access: string;
  refresh: string;
};

export type UserReducer = {
  isAuthenticated: boolean;
  user: UserType | null;
};

export type UserType = {
  publicId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type TokenPayloadType = {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  public_id: string;
};
