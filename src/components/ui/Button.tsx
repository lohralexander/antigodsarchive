import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  variant?: 'primary' | 'ghost';
};

export function Button({
  children,
  className = '',
  icon,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button className={`button button-${variant} ${className}`.trim()} {...props}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
