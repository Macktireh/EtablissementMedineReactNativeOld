import { useAppSelector } from "#hooks/useDispatchAndSelector";
import React, { PropsWithChildren } from "react";

type PropsType = PropsWithChildren<{
  children: React.ReactNode;
}>;

export const AuthGuard: React.FC<PropsType> = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

  return <>{children}</>;
};
