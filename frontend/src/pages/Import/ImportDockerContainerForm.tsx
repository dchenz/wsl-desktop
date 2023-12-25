import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Select,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import { GetDockerContainers } from "../../../wailsjs/go/app/App";
import { app } from "../../../wailsjs/go/models";
import CommonDistroFields from "./CommonDistroFields";

type ImportDockerContainerFormProps = {
  onSubmit: (values: app.CreateDistroFromContainerRequest) => void;
};

const ImportDockerContainerForm = ({
  onSubmit,
}: ImportDockerContainerFormProps) => {
  const [containers, setContainers] = useState<app.Container[]>([]);
  const [distroName, setDistroName] = useState("");
  const [distroPath, setDistroPath] = useState("");
  const [selectedContainerId, setSelectedContainerId] = useState<string | null>(
    null
  );

  useEffect(() => {
    GetDockerContainers().then(setContainers);
  }, []);

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedContainerId) {
      onSubmit({ distroName, distroPath, containerId: selectedContainerId });
    }
  };

  return (
    <VStack as="form" gap={5} onSubmit={onFormSubmit}>
      <FormControl>
        <FormLabel>Container</FormLabel>
        <Select
          placeholder="Select a container"
          onChange={(e) => setSelectedContainerId(e.target.value)}
        >
          {containers.map(({ id, name }, index) => (
            <option key={index} value={id}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
      <Divider />
      <CommonDistroFields
        distroName={distroName}
        distroPath={distroPath}
        setDistroName={setDistroName}
        setDistroPath={setDistroPath}
      />
      <Button type="submit">Submit</Button>
    </VStack>
  );
};

export default ImportDockerContainerForm;
