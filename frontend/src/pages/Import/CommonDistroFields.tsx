import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { SelectFolder } from "../../../wailsjs/go/app/App";

type CommonDistroFieldsProps = {
  distroName: string;
  setDistroName: (name: string) => void;
  distroPath: string;
  setDistroPath: (location: string) => void;
};

const CommonDistroFields = ({
  distroName,
  distroPath,
  setDistroName,
  setDistroPath,
}: CommonDistroFieldsProps) => {
  const onFolderSelectorClick = async () => {
    setDistroPath(await SelectFolder());
  };

  return (
    <>
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
            <Button onClick={onFolderSelectorClick}>Distro Location</Button>
          </InputLeftAddon>
          <Input value={distroPath} isReadOnly={true} />
        </InputGroup>
      </FormControl>
    </>
  );
};

export default CommonDistroFields;
