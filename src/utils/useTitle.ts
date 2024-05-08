import { useEffect } from "react";

export const useTitle = (title: string): null => {
  useEffect(() => {
    document.title = `${title} - WritePad`;
  }, [title]);

  return null;
};
