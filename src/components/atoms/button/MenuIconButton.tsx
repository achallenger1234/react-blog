import { VFC } from "react";
import { IconButton } from "@chakra-ui/react";

import { 
    SettingsIcon,
    ArrowLeftIcon
} from '@chakra-ui/icons'

type Props = {
  onOpen: () => void;
  iconFlag: boolean
};

export const MenuIconButton: VFC<Props> = props => {
  const { onOpen, iconFlag} = props;
  return (

    <IconButton
      aria-label="editボタン"
      icon={iconFlag ? <SettingsIcon /> : <ArrowLeftIcon />}
      variant="unstyled"
      onClick={onOpen}
    />
  );
};