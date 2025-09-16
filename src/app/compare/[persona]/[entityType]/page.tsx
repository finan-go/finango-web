"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { institutions, entityTypes, personas } from "@/lib/data";
import type { EntityType, Persona, Institution } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Building, Info, Star } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

export default function InstitutionListPage({
  params,
}: {
  params: { persona: Persona["id"]; entityType: EntityType["id"] };
}) {
  const [selectedInstitution, setSelectedInstitution] =
    useState<Institution | null>(null);

  const persona = personas.find((p) => p.id === params.persona);
  const entityType = entityTypes.find((e) => e.id === params.entityType);

  if (!persona || !entityType || !institutions(persona.id)) {
    notFound();
  }

  console.log("persona", persona);
  const institutionList = institutions(persona.id)[params.entityType];

  return (
    <>
      <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Button asChild variant="ghost" className="mb-4 -ml-4">
            <Link href={`/compare/${persona.id}`}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver a Tipos de Entidad
            </Link>
          </Button>
          <div className="text-center">
            <p className="text-base font-semibold text-primary">
              {persona.name}
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              {entityType.name} Disponibles
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Estas son las entidades que hemos encontrado para ti. Próximamente
              podrás comparar sus tasas aquí.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutionList.map((inst) => (
            <Card
              key={inst.id}
              className="transition-transform duration-300 hover:-translate-y-1 flex flex-col"
            >
              <CardHeader className="flex flex-row items-center justify-start gap-4 p-6 flex-1">
                <div className="bg-secondary p-3 rounded-lg">
                  <Building className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-lg font-semibold">
                  {inst.name}
                </CardTitle>
              </CardHeader>
              <div className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedInstitution(inst)}
                >
                  <Info className="mr-2 h-4 w-4" />
                  Más información
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedInstitution && (
        <Dialog
          open={!!selectedInstitution}
          onOpenChange={(isOpen) => !isOpen && setSelectedInstitution(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {selectedInstitution.name}
              </DialogTitle>
              <DialogDescription>
                {selectedInstitution.description}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <h3 className="font-semibold mb-2">
                Tasas de interés referenciales:
              </h3>
              <p className="text-sm text-muted-foreground bg-secondary p-3 rounded-md">
                {selectedInstitution.interestRateRange}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                * Las tasas son referenciales y pueden variar según evaluación
                crediticia.
              </p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cerrar</Button>
              </DialogClose>
              <Button asChild>
                <Link href="/premium-info">
                  <Star className="mr-2 h-4 w-4" />
                  Información Premium
                </Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
