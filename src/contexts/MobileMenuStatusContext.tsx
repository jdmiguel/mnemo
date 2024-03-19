"use client";

import {
  type ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";
import { usePathname } from "next/navigation";

const MobileMenuStatusContext = createContext({
  isOpen: false,
  updateStatus: () => {},
});

const MobileMenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const updateStatus = () => setIsOpen((prevStatus) => !prevStatus);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const value = {
    isOpen,
    updateStatus,
  };

  return (
    <MobileMenuStatusContext.Provider value={value}>
      {children}
    </MobileMenuStatusContext.Provider>
  );
};

const useMobileMenuStatus = () => useContext(MobileMenuStatusContext);

export { MobileMenuContextProvider, useMobileMenuStatus };

export default MobileMenuStatusContext;
