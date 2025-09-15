import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { FinancialEntity } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';

type Props = {
  data: FinancialEntity[];
  title: string;
  onBack: () => void;
};

export default function ComparisonTable({ data, title, onBack }: Props) {
  const [selectedEntity, setSelectedEntity] = useState<FinancialEntity | null>(
    null
  );

  return (
    <Dialog
      open={!!selectedEntity}
      onOpenChange={(isOpen) => !isOpen && setSelectedEntity(null)}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-foreground/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver a la selección
          </Button>
          <h2 className="text-3xl font-bold font-headline text-primary">
            Comparación de {title}
          </h2>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm animate-in fade-in-50">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px] font-semibold text-foreground">
                  Entidad
                </TableHead>
                <TableHead className="text-right font-semibold text-foreground">
                  Tasa de Interés (TEA)
                </TableHead>
                <TableHead className="text-right font-semibold text-foreground">
                  Cuota Mensual
                </TableHead>
                <TableHead className="text-right font-semibold text-foreground">
                  Cuota Anual
                </TableHead>
                <TableHead className="w-[150px] text-center font-semibold text-foreground">
                  Acción
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((entity) => (
                <TableRow key={entity.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <entity.logo className="h-8 w-auto rounded-sm" />
                      <span className="font-semibold">{entity.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {entity.interestRate.toFixed(2)}%
                  </TableCell>
                  <TableCell className="text-right">
                    S/ {entity.monthlyFee.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    S/ {entity.annualFee.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-center">
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="bg-accent text-accent-foreground hover:bg-accent/90"
                        onClick={() => setSelectedEntity(entity)}
                      >
                        Más Info
                      </Button>
                    </DialogTrigger>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      {selectedEntity && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="flex items-center gap-3">
                <selectedEntity.logo className="h-10 w-auto rounded-md" />
                <span className="text-2xl">{selectedEntity.name}</span>
              </div>
            </DialogTitle>
            <DialogDescription>
              Detalles de la oferta de crédito.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="font-semibold">Tasa de Interés (TEA)</span>
              <span className="text-right">
                {selectedEntity.interestRate.toFixed(2)}%
              </span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="font-semibold">Cuota Mensual</span>
              <span className="text-right">
                S/ {selectedEntity.monthlyFee.toFixed(2)}
              </span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="font-semibold">Cuota Anual</span>
              <span className="text-right">
                S/ {selectedEntity.annualFee.toFixed(2)}
              </span>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cerrar</Button>
            </DialogClose>
            <Button asChild>
              <a
                href={selectedEntity.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al sitio web
              </a>
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}
