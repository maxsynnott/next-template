import { FC, ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

type Props = {
	children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
	return <NextUIProvider>{children}</NextUIProvider>;
};
