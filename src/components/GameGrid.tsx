import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const skeletonCards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}

      {isLoading && (
        <SimpleGrid columns={[1, 1, 2, 3, 4, 5]} spacing={10} px="10px">
          {skeletonCards.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}

      {!error && !isLoading && (
        <SimpleGrid columns={[1, 1, 2, 3, 4, 5]} spacing={10} px="10px">
          {games.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};
export default GameGrid;
