import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PAGES } from "../const";

const ActionToolbar = () => {
  return (
    <HStack>
      <Button as={Link} to={PAGES.dockerImport}>
        Import from Docker
      </Button>
    </HStack>
  );
};

export default ActionToolbar;
