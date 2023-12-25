import {
  Button,
  Divider,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { SelectFile } from "../../../wailsjs/go/app/App";
import { app } from "../../../wailsjs/go/models";
import CommonDistroFields from "./CommonDistroFields";

type ImportTarballFormProps = {
  onSubmit: (values: app.CreateDistroFromTarFileRequest) => void;
};

const ImportTarballForm = ({ onSubmit }: ImportTarballFormProps) => {
  const [path, setPath] = useState("");
  const [distroName, setDistroName] = useState("");
  const [distroPath, setDistroPath] = useState("");

  const onFileSelectorClick = async () => {
    setPath(await SelectFile());
  };

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ path, distroName, distroPath });
  };

  return (
    <VStack as="form" gap={5} onSubmit={onFormSubmit}>
      <FormControl>
        <InputGroup>
          <InputLeftAddon>
            <Button onClick={onFileSelectorClick}>Select file</Button>
          </InputLeftAddon>
          <Input value={path} isReadOnly={true} />
        </InputGroup>
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

export default ImportTarballForm;
