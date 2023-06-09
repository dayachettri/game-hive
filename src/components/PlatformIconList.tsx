import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { SiNintendo } from 'react-icons/si';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import Platform from '../entities/Platform';

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  const renderedPlatformIcons: JSX.Element[] = platforms.map(platform => (
    <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
  ));

  return <HStack marginY={1}>{renderedPlatformIcons}</HStack>;
}

export default PlatformIconList;
