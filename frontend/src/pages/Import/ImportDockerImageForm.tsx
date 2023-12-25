import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, VStack } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { app } from "../../../wailsjs/go/models";
import CommonDistroFields from "./CommonDistroFields";

type ImportDockerImageFormProps = {
  onSubmit: (values: app.CreateDistroFromImageRequest) => void;
};

const ImportDockerImageForm = ({ onSubmit }: ImportDockerImageFormProps) => {
  const [repository, setRepository] = useState("");
  const [tag, setTag] = useState("latest");
  const [distroName, setDistroName] = useState("");
  const [distroPath, setDistroPath] = useState("");

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ repository, tag, distroName });
  };

  return (
    <VStack as="form" gap={5} onSubmit={onFormSubmit}>
      <FormControl>
        <FormLabel>Image</FormLabel>
        <HStack>
          <Input
            placeholder="Ex: ubuntu"
            value={repository}
            onChange={(e) => setRepository(e.target.value)}
          />
          <Input
            placeholder="Ex: latest"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </HStack>
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

export default ImportDockerImageForm;
