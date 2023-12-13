import { Flex } from "@chakra-ui/react";
import { IoStar } from "react-icons/io5";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
return (
  <Flex opacity={0.4} my={2}>
  {rating === 3 &&  <><IoStar/><IoStar/><IoStar/></>}
  {rating === 4 &&  <><IoStar/><IoStar/><IoStar/><IoStar/></>}
  {rating === 5 &&  <><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></>}
  </Flex>
);
  
};
export default Emoji;
