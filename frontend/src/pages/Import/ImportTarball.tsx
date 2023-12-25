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
import {
  CreateDistroFromTarFile,
  SelectFile,
} from "../../../wailsjs/go/app/App";
import Layout from "../../components/Layout";
import { useErrorToast } from "../../components/toast";
import CommonDistroFields from "./CommonDistroFields";

const ImportTarball = () => {
  const reportError = useErrorToast();
  const [path, setPath] = useState("");
  const [distroName, setDistroName] = useState("");
  const [distroPath, setDistroPath] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await CreateDistroFromTarFile({ distroName, distroPath, path });
    } catch (e) {
      reportError(e);
    }
  };

  const onFileSelectorClick = async () => {
    setPath(await SelectFile());
  };

  return (
    <Layout>
      <VStack as="form" gap={5} onSubmit={onSubmit}>
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
    </Layout>
  );
};

export default ImportTarball;
