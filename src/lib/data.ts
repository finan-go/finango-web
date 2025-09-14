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

export const institutions: Record<EntityType['id'], { id: string, name: string }[]> = {
  bancos: [
    { id: "bbva", name: "BBVA" },
    { id: "bcp", name: "BCP" },
    { id: "interbank", name: "Interbank" },
    { id: "scotiabank", name: "Scotiabank" },
    { id: "banco-de-la-nacion", name: "Banco de la Nación" },
  ],
  cajas: [
    { id: "caja-cusco", name: "Caja Cusco" },
    { id: "caja-huancayo", name: "Caja Huancayo" },
    { id: "caja-trujillo", name: "Caja Trujillo" },
    { id: "caja-arequipa", name: "Caja Arequipa" },
    { id: "caja-piura", name: "Caja Piura" },
  ],
  ahorro: [
    { id: "coop-pacifico", name: "Cooperativa Pacífico" },
    { id: "coop-abaco", name: "Cooperativa Abaco" },
    { id: "financiera-confianza", name: "Financiera Confianza" },
  ],
};
