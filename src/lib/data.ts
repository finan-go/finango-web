import type { LucideIcon } from "lucide-react";
import { Landmark, Warehouse, PiggyBank, Briefcase, User } from "lucide-react";

export type Persona = {
  id: "con-negocio" | "sin-negocio";
  name: string;
  description: string;
  Icon: LucideIcon;
};

export const personas: Persona[] = [
  {
    id: "con-negocio",
    name: "Persona Natural con Negocio",
    description: "Para emprendedores y dueños de pequeñas empresas.",
    Icon: Briefcase,
  },
  {
    id: "sin-negocio",
    name: "Persona Natural sin Negocio",
    description: "Para empleados y personas independientes.",
    Icon: User,
  },
];

export type EntityType = {
  id: "bancos" | "cajas" | "ahorro";
  name: string;
  description: string;
  Icon: LucideIcon;
};

export const entityTypes: EntityType[] = [
  {
    id: "bancos",
    name: "Bancos",
    description: "Entidades bancarias tradicionales.",
    Icon: Landmark,
  },
  {
    id: "cajas",
    name: "Cajas",
    description: "Cajas de ahorro y crédito.",
    Icon: Warehouse,
  },
  {
    id: "ahorro",
    name: "Ahorro",
    description: "Otras entidades y cooperativas.",
    Icon: PiggyBank,
  },
];

export type Institution = {
  id: string;
  name: string;
  description: string;
  interestRateRange: string;
};

export const institutions: Record<EntityType['id'], Institution[]> = {
  bancos: [
    { id: "bbva", name: "BBVA", description: "Banco Bilbao Vizcaya Argentaria, es un banco español con presencia en más de 30 países.", interestRateRange: "10% - 25%" },
    { id: "bcp", name: "BCP", description: "El Banco de Crédito del Perú es el banco más grande y antiguo del Perú.", interestRateRange: "12% - 28%" },
    { id: "interbank", name: "Interbank", description: "Uno de los principales bancos del Perú, enfocado en la banca minorista.", interestRateRange: "11% - 26%" },
    { id: "scotiabank", name: "Scotiabank", description: "Banco de origen canadiense con fuerte presencia en el Perú.", interestRateRange: "13% - 27%" },
    { id: "banco-de-la-nacion", name: "Banco de la Nación", description: "El banco del estado peruano, con enfoque en servicios al sector público.", interestRateRange: "9% - 22%" },
  ],
  cajas: [
    { id: "caja-cusco", name: "Caja Cusco", description: "Caja municipal de ahorro y crédito con sede en Cusco.", interestRateRange: "15% - 35%" },
    { id: "caja-huancayo", name: "Caja Huancayo", description: "Una de las cajas municipales más grandes del Perú.", interestRateRange: "16% - 38%" },
    { id: "caja-trujillo", name: "Caja Trujillo", description: "Caja municipal con importante presencia en el norte del país.", interestRateRange: "14% - 36%" },
    { id: "caja-arequipa", name: "Caja Arequipa", description: "Caja municipal líder en la región sur del Perú.", interestRateRange: "15% - 37%" },
    { id: "caja-piura", name: "Caja Piura", description: "Caja municipal con fuerte enfoque en microfinanzas.", interestRateRange: "17% - 40%" },
  ],
  ahorro: [
    { id: "coop-pacifico", name: "Cooperativa Pacífico", description: "Cooperativa de ahorro y crédito de la comunidad peruano-japonesa.", interestRateRange: "10% - 20%" },
    { id: "coop-abaco", name: "Cooperativa Abaco", description: "Una de las cooperativas de ahorro y crédito más grandes del país.", interestRateRange: "11% - 22%" },
    { id: "financiera-confianza", name: "Financiera Confianza", description: "Entidad de microfinanzas enfocada en el desarrollo de la base de la pirámide.", interestRateRange: "20% - 50%" },
  ],
};
