import { useEffect } from "react";

type Callback = (e: KeyboardEvent) => any;

const useShortcut = (key: string, callback: Callback) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) {
        callback(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
};

export default useShortcut;
