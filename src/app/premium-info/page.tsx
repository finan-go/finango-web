'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

export default function PremiumInfoPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted for premium info:', email);
    setSubmitted(true);
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  return (
    <div className="container mx-auto max-w-lg py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[calc(100vh-10rem)]">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold tracking-tight text-foreground">
            Asesoría Premium
          </CardTitle>
          <CardDescription className="mt-2 text-lg text-muted-foreground">
            Obtén información detallada y personalizada.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="text-center p-8">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
              <h3 className="mt-4 text-2xl font-semibold">¡Gracias!</h3>
              <p className="mt-2 text-muted-foreground">
                Nos comunicaremos contigo pronto para la asesoría premium.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-semibold">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-base"
                />
              </div>
              <Button type="submit" className="w-full text-lg py-6">
                Solicitar Información
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
