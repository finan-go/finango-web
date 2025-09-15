import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Landmark, Store, ArrowRight } from 'lucide-react';

type Props = {
  onSelect: (type: 'bancos' | 'cajas') => void;
};

export default function EntityTypeSelector({ onSelect }: Props) {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
          Selecciona el Tipo de Entidad Financiera
        </h2>
        <p className="mt-4 text-lg text-foreground/80">
          Elige si deseas comparar tasas de bancos tradicionales o cajas
          municipales de ahorro.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card
          onClick={() => onSelect('bancos')}
          className="cursor-pointer group h-full flex flex-col justify-between p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-primary"
        >
          <div>
            <CardHeader className="p-0">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Landmark className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-headline">Bancos</CardTitle>
              </div>
            </CardHeader>
            <CardDescription className="mt-4 text-base text-foreground/70">
              Compara tasas de los principales bancos nacionales e
              internacionales con una amplia gama de productos financieros.
            </CardDescription>
          </div>
          <div className="mt-6 flex items-center text-primary font-semibold transition-transform duration-300 group-hover:translate-x-1">
            Comparar Bancos <ArrowRight className="ml-2 w-5 h-5" />
          </div>
        </Card>

        <Card
          onClick={() => onSelect('cajas')}
          className="cursor-pointer group h-full flex flex-col justify-between p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-primary"
        >
          <div>
            <CardHeader className="p-0">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Store className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-headline">Cajas</CardTitle>
              </div>
            </CardHeader>
            <CardDescription className="mt-4 text-base text-foreground/70">
              Explora opciones de cajas municipales de ahorro, que a menudo
              ofrecen tasas competitivas y un enfoque en las comunidades
              locales.
            </CardDescription>
          </div>
          <div className="mt-6 flex items-center text-primary font-semibold transition-transform duration-300 group-hover:translate-x-1">
            Comparar Cajas <ArrowRight className="ml-2 w-5 h-5" />
          </div>
        </Card>
      </div>
    </div>
  );
}
