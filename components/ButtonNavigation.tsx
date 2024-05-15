// components/ButtonLinkWithIcon.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonNavigationProps {
  text: string;
  href: string;
  className?: string;
}

const ButtonNavigation: React.FC<ButtonNavigationProps> = ({ text, href, className }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <Link href={href} className="flex flex-row items-center gap-2 border-solid border-2 bg-bleuHerouville text-white font-bold py-2 px-5 rounded-full">
        {text}
        <svg
          width="22"
          height="12"
          viewBox="0 0 22 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989593 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM1 6.75H21V5.25H1V6.75Z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  );
};

ButtonNavigation.defaultProps = {
  className: 'mt-[5%]',
};

export default ButtonNavigation;
