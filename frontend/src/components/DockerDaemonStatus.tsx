import { Badge } from "@chakra-ui/layout";
import { useDockerDaemonIsRunning } from "../queries/docker";

const DockerDaemonStatus = () => {
  const { data: isRunning } = useDockerDaemonIsRunning();
  return (
    <Badge colorScheme={isRunning ? "green" : "red"}>
      {isRunning ? "DAEMON RUNNING" : "DAEMON NOT RUNNING"}
    </Badge>
  );
};

export default DockerDaemonStatus;
