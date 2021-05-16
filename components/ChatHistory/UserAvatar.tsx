import { Avatar, AvatarBadge, Tooltip } from "@chakra-ui/react";

type Props = {
  name: string;
}

const UserAvatar = ({ name }: Props) => {
  return (
    <Tooltip label={name}>
      <Avatar name={name}>
        <AvatarBadge boxSize={4} bg="green.500" />
      </Avatar>
    </Tooltip>
  )
};

export default UserAvatar;
