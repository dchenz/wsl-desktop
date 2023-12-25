import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { PAGES } from "../const";

const ActionToolbar = () => {
  return (
    <HStack mb={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDown />}>
          Import
        </MenuButton>
        <MenuList>
          <MenuItem as={Link} to={PAGES.importFromDocker}>
            From docker
          </MenuItem>
          <MenuItem as={Link} to={PAGES.importFromTarball}>
            From tarball
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default ActionToolbar;
