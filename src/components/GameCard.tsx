import { type Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";
import Emoji from '../components/Emoji'

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card boxShadow='md' cursor='pointer'>
      <Image src={getCroppedImageURL(game.background_image)} objectFit='cover' />
      <CardBody overflow='hidden'>
        <HStack justifyContent="space-between" mb={2}>
          <HStack my="4px">
            {game.platforms.map(({ platform }) => {
              return <PlatformIcon key={platform.id} platform={platform} />;
            })}
          </HStack>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"} >{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};
