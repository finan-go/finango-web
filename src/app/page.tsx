import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { personas } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
          Encuentra tu mejor opción
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Compara tasas de crédito de manera rápida y sencilla. Empecemos por conocerte un poco mejor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {personas.map((persona) => (
          <Link key={persona.id} href={`/compare/${persona.id}`} className="group block">
            <Card className="h-full hover:border-primary transition-colors duration-300 hover:shadow-2xl hover:-translate-y-1">
              <CardHeader className="p-8">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <persona.Icon className="w-10 h-10 text-primary" />
                    <CardTitle className="text-xl font-bold">{persona.name}</CardTitle>
                    <CardDescription>{persona.description}</CardDescription>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 mt-1" />
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
