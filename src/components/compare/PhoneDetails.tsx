'use client';

import Image from 'next/image';

type Phone = {
  id: string;
  name: string;
  display: string;
  battery: string;
  camera: string;
  processor: string;
};

export default function PhoneDetails({ phone }: { phone: Phone }) {
  return (
    <div>
      <div className="flex justify-center mb-4">
        <Image
          src={`https://picsum.photos/seed/${phone.id}/200/300`}
          alt={phone.name}
          width={200}
          height={300}
          data-ai-hint={`${phone.name} photo`}
          className="rounded-lg"
        />
      </div>
      <p>
        <strong>Pantalla:</strong> {phone.display}
      </p>
      <p>
        <strong>Batería:</strong> {phone.battery}
      </p>
      <p>
        <strong>Cámara:</strong> {phone.camera}
      </p>
      <p>
        <strong>Procesador:</strong> {phone.processor}
      </p>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h4 className="font-bold mb-2">Resumen de la IA</h4>
        <p className="text-sm">
          [Aquí se mostrará una descripción detallada generada por IA de las
          características y el rendimiento del teléfono.]
        </p>
      </div>
    </div>
  );
}
