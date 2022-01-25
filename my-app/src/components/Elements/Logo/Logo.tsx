import clsx from 'clsx';

import defaultLogo from '@/assets/logo.svg';

export type LogoProps = {
  src?: string;
  spin?: boolean;
};

export const Logo = ({ src = defaultLogo, spin = true }: LogoProps) => {
  return (
    <img
      src={src}
      className={clsx(
        'h-80',
        'pointer-events-none',
        spin && 'animate-spin-slow'
      )}
      alt='logo'
    />
  );
};
