"use client";

import React from "react";
const useReactPath = () => {
  const [href, setHref] = React.useState(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "";
  });
  const listenToPopstate = () => {
    if (typeof window !== "undefined") {
      const winPath = window.location.href;
      setHref(winPath);
    }
  };
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("popstate", listenToPopstate);
      return () => {
        window.removeEventListener("popstate", listenToPopstate);
      };
    }
  }, []);
  return href;
};
export { useReactPath };
