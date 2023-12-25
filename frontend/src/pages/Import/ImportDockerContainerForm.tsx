import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import CommonDistroFields from "./CommonDistroFields";

const ImportDockerContainerForm = () => {
  const [distroName, setDistroName] = useState("");
  const [distroPath, setDistroPath] = useState("");

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <VStack as="form" gap={5} onSubmit={onFormSubmit}>
      <FormControl>
        <FormLabel>Container</FormLabel>
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
