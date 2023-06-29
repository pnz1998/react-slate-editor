import { FC, PropsWithChildren } from "react";
import SlateProvider from "./SlateProvider";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SlateProvider>
      {children}
    </SlateProvider>
  )
};
export default Providers;