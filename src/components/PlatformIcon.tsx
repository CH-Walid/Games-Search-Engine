import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { Icon } from "@chakra-ui/react";
import { type Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

const PlatformIcon = ({ platform }: { platform: Platform }) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    playstation2: FaPlaystation,
    playstation4: FaPlaystation,
    xbox: FaXbox,
    "xbox-one": FaXbox,
    nintendo: SiNintendo,
    macos: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe2,
    android: FaAndroid,
  } as const;

  return iconMap[platform.slug] && <Icon as={iconMap[platform.slug]} color="gray.500" />;
};

export default PlatformIcon;
