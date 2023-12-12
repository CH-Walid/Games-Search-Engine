import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery: { genre, platform } }: Props) => {
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading fontSize="5xl" mb="15px" as="h1">
      {heading}
    </Heading>
  );
};
export default GameHeading;
