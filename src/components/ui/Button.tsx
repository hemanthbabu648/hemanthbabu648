import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  external = false,
}: ButtonProps) {
  const baseStyles = variant === 'primary' ? 'np-btn-primary' : 'np-btn-secondary';
  const styles = `${baseStyles} ${className} inline-block text-sm font-medium`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
