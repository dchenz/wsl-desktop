import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, VStack } from "@chakra-ui/layout";
import { FormEvent, useState } from "react";
import { CreateDistroFromDockerImage } from "../../../wailsjs/go/app/App";
import CommonDistroFields from "./CommonDistroFields";

const ImportDockerImage = () => {
  const [repository, setRepository] = useState("");
  const [tag, setTag] = useState("latest");
  const [distroName, setDistroName] = useState("");
  const [distroPath, setDistroPath] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    CreateDistroFromDockerImage({ repository, tag, distroName });
  };

  return (
    <VStack as="form" onSubmit={onSubmit}>
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

export default ImportDockerImage;
