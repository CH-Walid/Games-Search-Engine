import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      overflow='hidden'
      borderRadius={10}
    >
      {children}
    </Box>
  );
};
export default GameCardContainer;
