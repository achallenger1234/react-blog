import { VFC } from "react";
import { IconButton } from "@chakra-ui/react";

import { 
    SettingsIcon,
} from '@chakra-ui/icons'

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: VFC<Props> = props => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="editボタン"
      icon={<SettingsIcon />}
      size="sm"
      variant="unstyled"
      onClick={onOpen}
    />
  );
};