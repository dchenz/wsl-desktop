import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, VStack } from "@chakra-ui/layout";
import { FormEvent, useState } from "react";
import { CreateDistroFromDockerImage } from "../../../wailsjs/go/app/App";
import { Button } from "@chakra-ui/button";

const FromImage = () => {
  const [repository, setRepository] = useState("");
  const [tag, setTag] = useState("latest");
  const [distroName, setDistroName] = useState("");

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
      <FormControl>
        <FormLabel>Distro Name</FormLabel>
        <Input
          value={distroName}
          onChange={(e) => setDistroName(e.target.value)}
        />
      </FormControl>
      <Button type="submit">Submit</Button>
    </VStack>
  );
};

export default FromImage;
