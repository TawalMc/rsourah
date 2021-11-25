import { Box } from "@chakra-ui/react";
import Menu from "../components/Menu";

export default function MainContainer(props) {
  return (
    <Box minHeight="85vh" paddingX="20px">
      <Menu />
      {props.children}
    </Box>
  );
}
