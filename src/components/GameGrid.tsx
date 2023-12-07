import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletonCards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}

      {isLoading && (
        <SimpleGrid columns={[1, 1, 2, 3, 4, 5]} spacing={10} px="10px">
          {skeletonCards.map((skeleton) => (
            <GameCardSkeleton key={skeleton} />
          ))}
        </SimpleGrid>
      )}

      {!error && !isLoading && (
        <SimpleGrid columns={[1, 1, 2, 3, 4, 5]} spacing={10} px="10px">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};
export default GameGrid;
