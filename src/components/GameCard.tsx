import { type Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <HStack my="4px">
            {game.platforms.map(({ platform }) => {
              return <PlatformIcon key={platform.id} platform={platform} />;
            })}
          </HStack>
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
