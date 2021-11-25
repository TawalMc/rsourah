import { Box } from "@chakra-ui/react";

export default function MainBackground(props) {
  // bgGradient="linear-gradient(90deg, rgba(22,16,55,1) 100%, rgba(9,9,121,1) 100%, rgba(39,40,96,1) 100%)"
  return (
    <Box
      width="100%"
      minHeight="100vh"
      background="#2b384f"
      padding="10px"
      paddingRight="20px"
      paddingLeft="20px"
    >
      {props.children}
    </Box>
  );
}
