import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Slate({ children }: Props) {
  return <div className="slate">{children}</div>;
}
