import { useEffect } from "react";

export function useSaveCurrentTab(currentTab: number) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", currentTab.toString());

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [currentTab]);
}
