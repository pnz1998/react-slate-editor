import { FC, PropsWithChildren } from "react";
import SlateProvider from "./SlateProvider";
import { SlateElementListProvider } from "./SlateElementListProvider";
import { TableStateProvider } from "./TableStateProvider";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SlateProvider>
      <SlateElementListProvider>
        <TableStateProvider>
          {children}
        </TableStateProvider>
      </SlateElementListProvider>
    </SlateProvider>
  )
};
export default Providers;