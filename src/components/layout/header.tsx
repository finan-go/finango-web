import Link from 'next/link';
import { FinanGoLogo } from '@/components/logo';

export function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-card">
      <div className="mx-auto max-w-5xl">
        <Link href="/">
          <FinanGoLogo />
        </Link>
      </div>
    </header>
  );
}
