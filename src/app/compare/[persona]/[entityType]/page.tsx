import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { institutions, entityTypes, personas } from '@/lib/data';
import type { EntityType, Persona } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Building } from 'lucide-react';

export default function InstitutionListPage({ params }: { params: { persona: Persona['id']; entityType: EntityType['id'] } }) {
  const persona = personas.find((p) => p.id === params.persona);
  const entityType = entityTypes.find((e) => e.id === params.entityType);

  if (!persona || !entityType || !institutions[params.entityType]) {
    notFound();
  }

  const institutionList = institutions[params.entityType];

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <Button asChild variant="ghost" className="mb-4 -ml-4">
          <Link href={`/compare/${persona.id}`}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Volver a Tipos de Entidad
          </Link>
        </Button>
        <div className="text-center">
            <p className="text-base font-semibold text-primary">{persona.name}</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                {entityType.name} Disponibles
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Estas son las entidades que hemos encontrado para ti. Próximamente podrás comparar sus tasas aquí.
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {institutionList.map((inst) => (
          <Card key={inst.id} className="transition-transform duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-start gap-4 p-6">
                <div className="bg-secondary p-3 rounded-lg">
                    <Building className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-lg font-semibold">{inst.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
