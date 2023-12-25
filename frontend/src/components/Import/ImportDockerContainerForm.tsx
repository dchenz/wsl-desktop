import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Select,
  VStack
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { app } from "../../../wailsjs/go/models";
import { useDockerContainers } from "../../queries/docker";
import CommonDistroFields from "./CommonDistroFields";

type ImportDockerContainerFormProps = {
  onSubmit: (values: app.CreateDistroFromContainerRequest) => void;
};

const ImportDockerContainerForm = ({
  onSubmit,
}: ImportDockerContainerFormProps) => {
  const { data: containers, isLoading: isLoadingContainers } =
    useDockerContainers();
  const [distroName, setDistroName] = useState("");
  const [distroPath, setDistroPath] = useState("");
  const [selectedContainerId, setSelectedContainerId] = useState<string | null>(
    null
  );

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
          disabled={isLoadingContainers}
        >
          {containers?.map(({ id, name, image }, index) => (
            <option key={index} value={id}>
              {name} ({image})
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
