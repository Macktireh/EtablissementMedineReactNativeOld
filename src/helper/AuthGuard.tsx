import React, { PropsWithChildren } from "react";

type PropsType = PropsWithChildren<{
  children: React.ReactNode;
}>;

export const AuthGuard: React.FC<PropsType> = ({ children }) => {
  return <>{children}</>;
};
