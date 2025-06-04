import { FC, PropsWithChildren } from "react";
import { HeroUIProvider } from "@heroui/system";

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default MainProvider;
