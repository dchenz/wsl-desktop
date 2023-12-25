import { useQuery } from "@tanstack/react-query";
import { IsDockerDaemonRunning } from "../../wailsjs/go/app/App";

const QUERY_KEY_DAEMON_STATUS = "DockerDaemonStatus";

export const useDockerDaemonIsRunning = () => {
  return useQuery<boolean>({
    queryKey: [QUERY_KEY_DAEMON_STATUS],
    queryFn: IsDockerDaemonRunning,
    staleTime: 3000,
  });
};
