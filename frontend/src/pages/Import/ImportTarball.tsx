import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import {
  CreateDistroFromTarFile,
  SelectFile,
} from "../../../wailsjs/go/app/App";
import CommonDistroFields from "./CommonDistroFields";

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

  const onFileSelectorClick = async () => {
    setPath(await SelectFile());
  };

  return (
    <VStack as="form" onSubmit={onSubmit}>
      <FormControl>
        <InputGroup>
          <InputLeftAddon>
            <Button onClick={onFileSelectorClick}>Select file</Button>
          </InputLeftAddon>
          <Input value={path} isReadOnly={true} />
        </InputGroup>
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

export default ImportTarball;
