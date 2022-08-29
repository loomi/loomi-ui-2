import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import React from "react";

export type LinkProps =
  | Omit<RouterLinkProps, "to"> & {
      to: string;
      children: string | React.ReactNode;
    } & ChakraLinkProps;

export const Link = ({ to, children, ...restProps }: LinkProps) => {
  return (
    <ChakraLink as={RouterLink} to={to} {...restProps}>
      {children}
    </ChakraLink>
  );
};
