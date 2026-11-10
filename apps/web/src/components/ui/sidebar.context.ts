import * as React from "react";
import type { ResponsiveSidebarState } from "./sidebarState";

export type SidebarContextProps = {
  state: ResponsiveSidebarState;
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  mobileSheetMounted: boolean;
  setMobileSheetElement: (element: HTMLDivElement | null) => void;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
  /** Runs before the desktop sidebar collapses. */
  onCollapse: (listener: () => void) => () => void;
};

export const SidebarContext = React.createContext<SidebarContextProps | null>(null);

// Throws outside a SidebarProvider, as React context hooks do.
export function useSidebar() {
  const context = React.use(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}
