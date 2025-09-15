// This file is not yet implemented.
'use client';
import { useState } from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Phone, Smartphone, Battery, Camera, Cpu } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import PhoneDetails from './PhoneDetails';

const phones = [
  {
    id: '1',
    name: 'Pixel 8',
    display: '6.2" Actua Display',
    battery: '24-hour battery life',
    camera: 'Advanced 50MP camera',
    processor: 'Google Tensor G3',
  },
  {
    id: '2',
    name: 'iPhone 15',
    display: '6.1" Super Retina XDR',
    battery: 'All-day battery life',
    camera: '48MP Main camera',
    processor: 'A16 Bionic chip',
  },
  {
    id: '3',
    name: 'Galaxy S24',
    display: '6.2" Dynamic AMOLED 2X',
    battery: 'Long-lasting battery',
    camera: '50MP Wide-angle camera',
    processor: 'Snapdragon 8 Gen 3',
  },
];

export default function ComparisonTool() {
  const [selectedPhones, setSelectedPhones] = useState(
    new Set([phones[0].id, phones[1].id])
  );

  const togglePhoneSelection = (phoneId: string) => {
    setSelectedPhones((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(phoneId)) {
        if (newSelection.size > 2) {
          newSelection.delete(phoneId);
        }
      } else {
        if (newSelection.size < 3) {
          newSelection.add(phoneId);
        }
      }
      return newSelection;
    });
  };

  const comparisonPhones = phones.filter((p) => selectedPhones.has(p.id));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Comparar Teléfonos
      </h1>
      <div className="flex justify-center gap-4 mb-8">
        {phones.map((phone) => (
          <Button
            key={phone.id}
            onClick={() => togglePhoneSelection(phone.id)}
            variant={selectedPhones.has(phone.id) ? 'default' : 'outline'}
          >
            {phone.name}
          </Button>
        ))}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Característica</TableHead>
            {comparisonPhones.map((phone) => (
              <TableHead key={phone.id} className="text-center">
                {phone.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex items-center">
                <Smartphone className="mr-2" /> Pantalla
              </div>
            </TableCell>
            {comparisonPhones.map((phone) => (
              <TableCell key={phone.id} className="text-center">
                {phone.display}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center">
                <Battery className="mr-2" /> Batería
              </div>
            </TableCell>
            {comparisonPhones.map((phone) => (
              <TableCell key={phone.id} className="text-center">
                {phone.battery}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center">
                <Camera className="mr-2" /> Cámara
              </div>
            </TableCell>
            {comparisonPhones.map((phone) => (
              <TableCell key={phone.id} className="text-center">
                {phone.camera}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center">
                <Cpu className="mr-2" /> Procesador
              </div>
            </TableCell>
            {comparisonPhones.map((phone) => (
              <TableCell key={phone.id} className="text-center">
                {phone.processor}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Más información</TableCell>
            {comparisonPhones.map((phone) => (
              <TableCell key={phone.id} className="text-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link">Ver como modal</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{phone.name}</DialogTitle>
                    </DialogHeader>
                    <PhoneDetails phone={phone} />
                  </DialogContent>
                </Dialog>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
