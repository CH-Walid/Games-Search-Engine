import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <SimpleGrid columns={[1,1, 2, 3, 4, 5]} spacing={10} px="10px">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};
export default GameGrid;
