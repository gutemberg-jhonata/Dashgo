import Link from "next/link";

import { ElementType } from "react";

import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps
} from "@chakra-ui/react";

type NavLinkProps = {
  icon: ElementType,
  children: string,
  href: string
} & ChakraLinkProps

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>
  )
}