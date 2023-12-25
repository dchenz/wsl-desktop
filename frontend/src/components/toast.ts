import { ToastId, useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export const useErrorToast = () => {
  const toast = useToast();
  return useCallback((error: unknown): ToastId => {
    return toast({
      title: "ERROR",
      description: `${error}`,
      status: "error",
      duration: 8000,
      isClosable: true,
    });
  }, []);
};
