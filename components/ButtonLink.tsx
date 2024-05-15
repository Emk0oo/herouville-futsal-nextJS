// components/ButtonLink.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonLinkProps {
  text: string;
  href: string;
  className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ text, href, className }) => {
  return (
    <Link href={href} className={`border-solid border-2 border-bleuHerouville text-bleuNuitHerouville font-bold py-2 px-5 rounded-full ${className}`}>
      {text}
    </Link>
  );
};

ButtonLink.defaultProps = {
  className: 'mt-[5%]',
};

export default ButtonLink;
