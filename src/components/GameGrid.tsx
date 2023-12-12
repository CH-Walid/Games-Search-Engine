import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);
  const skeletonCards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}

      {isLoading && (
        <SimpleGrid columns={[1, 2, 2, 3, 4, 5]} spacing={3} p="10px">
          {skeletonCards.map((skeleton, index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}

      {!error && !isLoading && (
        <SimpleGrid columns={[1, 1, 2, 3, 4, 5]} spacing={3} p="10px">
          {games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};
export default GameGrid;
