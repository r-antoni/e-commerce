import {useState, createContext} from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {
  const [open, setOpen] = useState(false);
  const closeSidebar = () => {
    setOpen(false);
  };
  return <SidebarContext.Provider value={{open, setOpen, closeSidebar}}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
