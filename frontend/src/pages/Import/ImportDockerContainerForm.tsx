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

const ImportDockerContainerForm = () => {
  const [containers, setContainers] = useState<app.Container[]>([]);
  const [distroName, setDistroName] = useState("");
  const [distroPath, setDistroPath] = useState("");

  useEffect(() => {
    GetDockerContainers().then(setContainers);
  }, []);

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <VStack as="form" gap={5} onSubmit={onFormSubmit}>
      <FormControl>
        <FormLabel>Container</FormLabel>
        <Select placeholder="Select a container">
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
