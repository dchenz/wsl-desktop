import { useQuery } from "@tanstack/react-query";
import { app } from "../../wailsjs/go/models";
import { GetDistros } from "../../wailsjs/go/app/App";

const QUERY_KEY_DISTRO = "Distros";

export const useDistros = () => {
  return useQuery<app.Distro[]>({
    queryKey: [QUERY_KEY_DISTRO],
    queryFn: GetDistros,
  });
};
