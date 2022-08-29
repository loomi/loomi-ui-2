import { Button, ButtonProps } from "@chakra-ui/react";

export type BaseButtonProps = {
  text?: string;
} & ButtonProps;

export const BaseButton = ({
  text = "Botão",
  ...restProps
}: BaseButtonProps) => {
  return (
    <Button colorScheme="cyan" rounded="md" w="50" h="30" {...restProps}>
      {text}
    </Button>
  );
};
