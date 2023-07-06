import { FC, PropsWithChildren } from "react";
import SlateProvider from "./SlateProvider";
import { SlateElementListProvider } from "./SlateElementListProvider";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SlateProvider>
      <SlateElementListProvider>
        {children}
      </SlateElementListProvider>
    </SlateProvider>
  )
};
export default Providers;