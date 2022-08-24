import { VFC } from "react";
import { IconButton } from "@chakra-ui/react";

import { AiOutlineLogout } from 'react-icons/ai';

type Props = {
  onOpen: () => void;
};

export const LogoutButton: VFC<Props> = props => {
  const { onOpen } = props;
  return (

    <IconButton
      aria-label="editボタン"
      icon={<AiOutlineLogout />}
      variant="unstyled"
      onClick={onOpen}
    />
  );
};