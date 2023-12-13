import { type Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, HStack, Flex } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";
import Emoji from "../components/Emoji";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card cursor="pointer" minHeight={'340px'}>
      <Image
        src={getCroppedImageURL(game.background_image)}
        objectFit="cover"
      />
      <CardBody overflow="hidden">
      <Flex flexDirection='column' gap={2}>
          <HStack justifyContent="space-between">
            <HStack>
              {game.platforms.map(({ platform }) => {
                return <PlatformIcon key={platform.id} platform={platform} />;
              })}
            </HStack>
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>
            {game.name.length > 30 ? game.name.slice(0, 30) + "..." : game.name}
          </Heading>
          <Emoji rating={game.rating_top} />
      </Flex>
      </CardBody>
    </Card>
  );
};
