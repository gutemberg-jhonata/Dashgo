import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link"
import { cloneElement, ReactElement } from "react"

type ActiveLinkProps = {
  children: ReactElement,
  shouldMatchExactHref?: boolean
} & LinkProps

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {

  const { asPath } = useRouter();
  const { href, as } = rest;

  let isActive = false;

  if (shouldMatchExactHref && (asPath === href || asPath === as)) {
    isActive = true;
  }

  if (!shouldMatchExactHref &&
    (asPath.startsWith(String(href)) || asPath.startsWith(String(as)))) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}