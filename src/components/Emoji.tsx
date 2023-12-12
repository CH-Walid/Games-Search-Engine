import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: bullsEye, alt: "recommended", boxSize: "35px" },
    5: { src: thumbsUp, alt: "exceptional", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} mt={2} />;
};
export default Emoji;
