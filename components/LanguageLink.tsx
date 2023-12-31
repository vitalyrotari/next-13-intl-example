'use client';

import clsx from 'clsx';
import { Link, usePathname, locales } from '@/navigation'
import {useLocale} from 'next-intl';
import type {ComponentProps} from 'react';

type LanguageLinkProps = Omit<ComponentProps<typeof Link>, 'href' | 'locale'> & {
  locale: typeof locales[number];
};

export const LanguageLink = ({locale, ...rest}: LanguageLinkProps) => {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const isActive = locale === currentLocale

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block px-2 py-3 transition-colors',
        isActive ? 'text-black cursor-default' : 'text-blue-800 hover:text-blue-600 hover:underline'
      )}
      href={pathname}
      locale={locale}
      {...rest}
    />
  );
}
