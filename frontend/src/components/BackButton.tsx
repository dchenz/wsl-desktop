import { IconButton } from "@chakra-ui/react";
import { ArrowLeft } from "react-bootstrap-icons";
import { useLocation, useNavigate } from "react-router-dom";

const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.key === "default") {
    return null;
  }

  return (
    <IconButton
      aria-label="go-back"
      icon={<ArrowLeft />}
      onClick={() => navigate(-1)}
      size="sm"
      variant="ghost"
    />
  );
};

export default BackButton;
