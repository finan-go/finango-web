import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { entityTypes, personas } from '@/lib/data';
import type { Persona } from '@/lib/data';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EntityTypePage({ params }: { params: { persona: Persona['id'] } }) {
  const persona = personas.find((p) => p.id === params.persona);

  if (!persona) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <Button asChild variant="ghost" className="mb-4 -ml-4">
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Volver
          </Link>
        </Button>
        <div className="text-center">
            <p className="text-base font-semibold text-primary">{persona.name}</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                Selecciona el tipo de entidad
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                ¿Dónde te gustaría buscar tu crédito?
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {entityTypes.map((entity) => (
          <Link key={entity.id} href={`/compare/${persona.id}/${entity.id}`} className="group block">
            <Card className="h-full hover:border-primary transition-colors duration-300 hover:shadow-2xl hover:-translate-y-1">
              <CardHeader className="p-8">
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <entity.Icon className="w-10 h-10 text-primary" />
                        <CardTitle className="text-xl font-bold">{entity.name}</CardTitle>
                        <CardDescription>{entity.description}</CardDescription>
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
