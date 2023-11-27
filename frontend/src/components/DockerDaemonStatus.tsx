import { Badge } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { IsDockerDaemonRunning } from "../../wailsjs/go/app/App";

const DockerDaemonStatus = () => {
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    IsDockerDaemonRunning().then(setRunning);
  }, []);

  return (
    <Badge colorScheme={isRunning ? "green" : "red"}>
      {isRunning ? "RUNNING" : "NOT RUNNING"}
    </Badge>
  );
};

export default DockerDaemonStatus;
