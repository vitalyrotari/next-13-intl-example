'use client';

import clsx from 'clsx';
import { Link, usePathname } from '@/navigation'
import type {ComponentProps} from 'react';

type NavigationLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export const NavigationLink = ({href, ...rest}: NavigationLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block px-2 py-3 transition-colors',
        isActive ? 'text-black cursor-default' : 'text-blue-800 hover:text-blue-600 hover:underline'
      )}
      href={href}
      {...rest}
    />
  );
}
