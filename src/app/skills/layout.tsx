import { ReactNode } from "react";
import Navbar from "../components/Navbar"; // Adjust path as needed

interface WithNavbarLayoutProps {
  children: ReactNode;
}

export default function WithNavbarLayout({ children }: WithNavbarLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}