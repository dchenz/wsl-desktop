import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import {
  CreateDistroFromTarFile,
  SelectFile,
  SelectFolder,
} from "../../../wailsjs/go/app/App";

const ImportTarball = () => {
  const [path, setPath] = useState("");
  const [distroName, setDistroName] = useState("");
  const [distroPath, setDistroPath] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    CreateDistroFromTarFile({ distroName, distroPath, path }).catch(
      console.error
    );
  };

  return (
    <VStack as="form" onSubmit={onSubmit}>
      <FormControl>
        <InputGroup>
          <InputLeftAddon>
            <Button
              onClick={() => {
                SelectFile().then(setPath);
              }}
            >
              File
            </Button>
          </InputLeftAddon>
          <Input value={path} isReadOnly={true} />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Distro Name</FormLabel>
        <Input
          value={distroName}
          onChange={(e) => setDistroName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel></FormLabel>
        <InputGroup>
          <InputLeftAddon>
            <Button
              onClick={() => {
                SelectFolder().then(setDistroPath);
              }}
            >
              Distro Location
            </Button>
          </InputLeftAddon>
          <Input value={distroPath} isReadOnly={true} />
        </InputGroup>
      </FormControl>
      <Button type="submit">Submit</Button>
    </VStack>
  );
};

export default ImportTarball;
