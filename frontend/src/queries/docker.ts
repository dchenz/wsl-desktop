import { useQuery } from "@tanstack/react-query";
import {
  GetDockerContainers,
  IsDockerDaemonRunning,
} from "../../wailsjs/go/app/App";
import { app } from "../../wailsjs/go/models";

const QUERY_KEY_DAEMON_STATUS = "DockerDaemonStatus";
const QUERY_KEY_CONTAINERS = "Containers";

export const useDockerDaemonIsRunning = () => {
  return useQuery<boolean>({
    queryKey: [QUERY_KEY_DAEMON_STATUS],
    queryFn: IsDockerDaemonRunning,
    staleTime: 3000,
  });
};

export const useDockerContainers = () => {
  return useQuery<app.Container[]>({
    queryKey: [QUERY_KEY_CONTAINERS],
    queryFn: GetDockerContainers,
  });
};
