import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-extrabold text-primary tracking-tighter">404</h1>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Página no encontrada</h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  );
}
