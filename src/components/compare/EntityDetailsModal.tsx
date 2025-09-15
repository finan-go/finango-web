import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { FinancialEntity } from '@/lib/data';

type Props = {
  entity: FinancialEntity;
  onClose: () => void;
};

export default function EntityDetailsModal({ entity, onClose }: Props) {
  return (
    <Dialog open={!!entity} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <entity.logo className="h-10 w-auto rounded-sm" />
            <DialogTitle className="text-2xl font-headline">
              {entity.name}
            </DialogTitle>
          </div>
          <DialogDescription>
            Detalles de la oferta de crédito.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="font-semibold">Tasa de Interés (TEA):</span>
            <span className="text-right">{entity.interestRate.toFixed(2)}%</span>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="font-semibold">Comisión Mensual:</span>
            <span className="text-right">
              S/ {entity.monthlyFee.toFixed(2)}
            </span>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="font-semibold">Comisión Anual:</span>
            <span className="text-right">S/ {entity.annualFee.toFixed(2)}</span>
          </div>
        </div>
        <DialogFooter>
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href={entity.ctaLink} target="_blank" rel="noopener noreferrer">
              Visitar Sitio Web
            </a>
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
