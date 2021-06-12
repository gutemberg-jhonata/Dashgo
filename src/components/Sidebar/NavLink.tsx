import { ElementType } from "react";

import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps
} from "@chakra-ui/react";

type NavLinkProps = {
  icon: ElementType,
  children: string
} & ChakraLinkProps

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}