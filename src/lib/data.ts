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


const AHORRODATA = [
  {
    id: "caja-arequipa", name: "Caja Arequipa", description: "Caja Arequipa se destaca como una de las principales microfinancieras del Perú, orientada a apoyar a emprendedores y microempresarios.",
    interestRateRange: `En cuanto, al ahorro, Caja Arequipa fomenta la inclusión financiera con cuentas de ahorro que no requieren montos altos de apertura y ofrecen tasas de interés que fluctúan entre 0.5 % y 3 % anual. Sus productos están pensados para sectores populares y personas que desean guardar dinero con facilidad, además de ofrecer opciones de ahorro programado.`
  },
  {
    id: "scotiabank", name: "Scotiabank", description: "Banco de origen canadiense con fuerte presencia en el Perú.",
    interestRateRange: `Scotiabank brinda cuentas de ahorro tradicionales y digitales, con montos mínimos de apertura algo más elevados. Sus tasas suelen ser menores, alrededor de 0.2 % a 1.5 % anual, pero ofrecen beneficios adicionales como acceso a banca digital avanzada, tarjetas de débito internacionales y programas de puntos o millas. Esto lo convierte en una alternativa más atractiva para clientes que valoran servicios complementarios y facilidades digitales, más allá de la tasa de interés.`
  },
  {
    id: "caja-cusco", name: "Caja Cusco", description: `En la Caja Cusco, una persona natural sin negocio puede abrir una cuenta de ahorros de manera sencilla presentando únicamente su DNI vigente y depositando un monto mínimo de apertura de 20 soles o 20 dólares. Esta cuenta no cobra mantenimiento, permite realizar depósitos y retiros en cualquier momento y ofrece acceso a consultas de saldo y movimientos a través de la banca electrónica y la web, lo que asegura liquidez y comodidad para el cliente. En cuanto a la rentabilidad, las tasas de interés no son muy altas en comparación con otras opciones de inversión: la tasa efectiva anual se encuentra en torno al 1.54 % para cuentas en moneda nacional, aunque en algunos periodos o productos específicos se han registrado tasas menores, cercanas al 0.60 % o incluso al 0.30 %, dependiendo de las condiciones establecidas por la entidad. En todo caso, se trata de una alternativa de ahorro accesible, segura y sin costos de mantenimiento, pensada para personas que buscan resguardar su dinero con disponibilidad inmediata más que obtener una ganancia elevada por intereses.`,
    interestRateRange: "Varían según el tipo de crédito, el monto solicitado, el plazo y el perfil del cliente. Por ejemplo, en el caso de un crédito para local comercial, la tasa efectiva anual (TEA) se encuentra en un rango aproximado que va desde 13.08 % hasta 82.94 %, dependiendo de las condiciones y del riesgo crediticio evaluado. Tasas preferenciales a clientes con buen historial y continuidad en su actividad económica: en este caso, un préstamo comercial para persona natural recurrente en actividades de comercio, producción o servicios puede alcanzar una tasa alrededor de 18.4 % anual. Finalmente, en productos específicos como los créditos hipotecarios para vivienda, la tasa se sitúa en torno a 13.8 % anual.",
  },
  {
    id: "mi-banco", name: "Mi Banco", description: "MiBanco lanzó un nuevo crédito para MYPES con montos desde S/ 300 para capital de trabajo y S/ 1,000 para adquisición de equipos. ",
    interestRateRange: `Full Ahorro
                La Cuenta Full Ahorro está dirigida a personas naturales (incluyendo quienes tienen negocio propio, pero también no negocios) que quieran ahorrar con buenas tasas de interés. 

                Ofrece hasta ~ 4.00 % anual en soles, para saldos mayores o iguales a S/ 1,000. Si tienes menos de ese saldo promedio mensual, no remuneran intereses. 

                En dólares, la tasa es mucho más baja: alrededor de 0.40 % anual para los rangos altos de saldo. 

                No cobra mantenimiento si mantienes el saldo promedio mensual ≥ S/1,000 (o US$ 150) en la cuenta. 

                Incluye beneficios como retiros sin comisión en cajeros automáticos de la red BCP a nivel nacional y la primera tarjeta de débito gratis. 

                Ahorro Fácil

                Es otro producto de MiBanco que permite ahorrar con mayor flexibilidad. 

                No requiere un monto mínimo de apertura. 

                Ofrece una tasa de interés anual baja, hasta ~ 0.15 % en soles. 

                Puedes disponer de tus fondos en cualquier momento, tiene liquidez inmediata. 

                Otras campañas promocionales y depósitos a plazo fijo (DPF)

                MiBanco tiene campañas como “La nueva cuestión de confianza” donde ofrecen tasas promocionales para ciertos productos de ahorro y depósitos a plazo fijo. 

                El Depósito a Plazo Fijo permite ahorrar desde ~ S/ 350 soles, por plazos como 180-359 días, con tasas alrededor de 8.5 % anual. 

                Existe también el producto “Full Ahorro Plus” con tasas promocionales que han alcanzado ~ 6 % para ciertos montos y condiciones
                `
  },
  {
    id: "banco-de-la-nacion", name: "Banco de la Nación",
    description: "El banco del estado peruano, con enfoque en servicios al sector público.",
    interestRateRange:
      `
          Cuenta de Ahorros Multired Es la cuenta de ahorro más común del Banco de la Nación. Características:
          Permite depósitos y retiros en todas las agencias del BN y cajeros Multired.
          No exige monto mínimo de apertura.
          Puede manejarse con Tarjeta Débito Multired Global Débito para retirar en cajeros y pagar en establecimientos afiliados.
          Sirve como cuenta asociada para préstamos o para recibir sueldo/pensión.
          Beneficios:Cobertura nacional (más de 600 agencias y miles de cajeros).Acceso a Banca por Internet y app del BN.
          Sin costo por mantenimiento si cumples las condiciones mínimas (como mantener saldos o movimientos regulares).
          Cuenta de Ahorro con Ventanilla Orientada a personas que desean manejar su dinero solo en ventanilla.
          Generalmente no ofrece tarjeta de débito.
          Se usa para operaciones más simples (depósitos y retiros).
          Cuenta CTS (Compensación por Tiempo de Servicios)
          Depósitos de CTS obligatorios que hace el empleador.
          Puedes tenerla en el Banco de la Nación si tu entidad paga con ellos.
          Se generan intereses según el saldo.

          `
  },
  {
    id: "bbva", name: "BBVA", description: "Banco Bilbao Vizcaya Argentaria, es un banco español con presencia en más de 30 países.",
    interestRateRange:
      `
            1. Cuenta de Ahorro Digital
            Apertura 100 % en línea desde la app o web. No pide monto mínimo de apertura. Sin costo de mantenimiento si usas canales digitales. Incluye tarjeta débito digital y puedes pedir la física.
            2. Cuenta Independencia
            Diseñada para manejar tu dinero de manera libre. Permite retiros ilimitados en cajeros BBVA. Puede tener condiciones para exonerar el mantenimiento (ejemplo: saldo promedio mensual).
            4. Cuenta Joven
            Para clientes jóvenes (generalmente entre 18 y 25 años).Sin costo de mantenimiento. Manejo digital desde la app.

            `
  },
  {
    id: "caja-huancayo", name: "Caja Huancayo", description: "Una de las cajas municipales más grandes del Perú.",

    interestRateRange:
      `
          Cuentas Corrientes / Ahorro a la vista.
          Hay cuentas de ahorro donde el cliente puede disponer del dinero en cualquier momento. No tienen plazo fijo. (Menos “rentables” en términos de intereses, pero útiles por flexibilidad.) 
          En campañas, estas cuentas han tenido tasas más bajas, ya que el riesgo de disponibilidad inmediata es mayor para la entidad. 

          Productos especiales para menores (“Cuenta Futuro”).
          Caja Huancayo tiene un producto pensado para menores de edad, llamado Cuenta Futuro. 
          Beneficios incluyen tasa de interés preferencial, tarjeta Rapicard Futuro, seguro de vida gratuito para el apoderado, posibilidad de retiros/depositos en la red de agencias, etc.

          Ventajas

          Las tasas en campañas pueden superar ampliamente lo que ofrecen cuentas comunes de ahorro.

          Flexibilidad: hay opciones de ahorro programado, depósitos con abonos adicionales, modalidades con retiro de intereses anticipado, etc

          `
  }];
export const institutions = (typePerson: Persona["id"]) => {

  if (typePerson === "con-negocio")
    return {
      cajas: [
        {
          id: "caja-arequipa", name: "Caja Arequipa",
          description: "Caja Arequipa se destaca como una de las principales microfinancieras del Perú, orientada a apoyar a emprendedores y microempresarios. Ofrece créditos para capital de trabajo y crecimiento empresarial, con montos desde S/ 500 hasta más de S/ 30,000 dependiendo de la evaluación crediticia. Brinda asesoría cercana y requisitos menos exigentes que la banca tradicional, lo que favorece a los pequeños negocios de Cusco.", interestRateRange: "22 % y 48 % anual, variando según el historial del solicitante y el tipo de negocio."
        },
        {
          id: "caja-cusco", name: "Caja Cusco",
          interestRateRange: "Varían según el tipo de crédito, el monto solicitado, el plazo y el perfil del cliente. Por ejemplo, en el caso de un crédito para local comercial, la tasa efectiva anual (TEA) se encuentra en un rango aproximado que va desde 13.08 % hasta 82.94 %, dependiendo de las condiciones y del riesgo crediticio evaluado. Tasas preferenciales a clientes con buen historial y continuidad en su actividad económica: en este caso, un préstamo comercial para persona natural recurrente en actividades de comercio, producción o servicios puede alcanzar una tasa alrededor de 18.4 % anual. Finalmente, en productos específicos como los créditos hipotecarios para vivienda, la tasa se sitúa en torno a 13.8 % anual.",
          description: "Es importante considerar que la tasa exacta a aplicar dependerá de factores como el monto, el plazo, el tipo de garantía y el historial de pago del solicitante, por lo que el valor final puede ubicarse dentro de los rangos mencionados. Mínimo: alrededor de S/ 300 si es microempresa u otro préstamo pequeño.\n" +
            "Normal/Intermedio: alrededor de S/ 20,000 soles para negocios que requieren inversión moderada o remodelación.\n" +
            "Máximo: hasta S/. 100,000 soles, o más, si el proyecto es grande, se tiene buen historial, garantías, etc"
        },
        {
          id: "caja-huancayo", name: "Caja Huancayo", description: "Una de las cajas municipales más grandes del Perú.",

          interestRateRange: "Crédito “Micro-Micro”.\n" +
            "Orientado a microempresarios o personas que desean emprender, con o sin historial empresarial. \n" +
            "Montos: desde S/ 200 hasta S/ 10,000. Para emprendimientos que recién empiezan, puede ser hasta S/ 1,500. \n" +
            "Plazo: hasta 24 cuotas; para emprendimiento pequeño, hasta 12 cuotas. Hay un mes de gracia."
        },

        { id: "mi-banco", name: "Mi Banco", description: "MiBanco lanzó un nuevo crédito para MYPES con montos desde S/ 300 para capital de trabajo y S/ 1,000 para adquisición de equipos. ", interestRateRange: "La tasa de interés anual para este crédito parte de ≈ 20 % anual, y en promedio fluctúa entre 30 % y 35 % anual.\n" + " La “Línea de crédito” de MiBanco (producto dirigido a empresarios de micro y pequeña empresa persona natural) permite montos de S/ 300 hasta S/ 90,000 soles con plazos de 1 a 12 meses. " },
      ],
      bancos: [
        {
          id: "bbva", name: "BBVA", description: "Banco Bilbao Vizcaya Argentaria, es un banco español con presencia en más de 30 países.",
          interestRateRange:
            `Préstamo Digital Negocio
            Monto mínimo: S/ 2,000 Monto máximo: S/ 300,000 
            Plazo: de 6 a 24 meses Desembolso: se hace a la cuenta de negocio/emprendedor que tengas con BBVA 
            Elección de fecha de pago: puedes escoger qué día del mes te conviene pagar la cuota 
            Tasas moratorias: cuando atrasas pagos, aplica interés moratorio. Para otro producto ("Línea de Préstamo Digital") la tasa nominal anual de interés moratorio es ~ 15.28 % en soles. 
            Línea de Préstamo Digital (para negocio)
            Dirigido a: persona natural con negocio. 
            Monto de la línea: entre S/ 20,000 y S/ 100,000 
            Desembolsos dentro de la línea: puedes sacar montos desde S/1,200 hasta S/100,000 mientras la línea esté activa. 
            Vigencia de la línea: 365 días. Es decir, una vez activada la línea, tienes un año para usarla. 
            Plazo de los desembolsos: cada monto que saques dentro de la línea lo puedes pagar en plazos de 1 a 24 meses. 
            3. Costos y aspectos importantes
            Interés moratorio: si no pagas a tiempo, la tasa moratoria puede aplicarse ~ 15.28 % anual en soles. 
            No hay aval ni papeleos largos para estos productos digitales: la idea es que sea rápido
            Perfil crediticio: aunque BBVA no siempre publica la tasa TEA exacta para estos préstamos “negocio digital”, tu historial (ventas del negocio, pagos previos, cumplimiento) influye mucho en la tasa que te van a dar. Es probable que la tasa TEA sea más alta si tu negocio es nuevo, informal o con flujo irregular.`
        },
        // { id: "bcp", name: "BCP", description: "El Banco de Crédito del Perú es el banco más grande y antiguo del Perú.", interestRateRange: "12% - 28%" },
        //{ id: "interbank", name: "Interbank", description: "Uno de los principales bancos del Perú, enfocado en la banca minorista.", interestRateRange: "11% - 26%" },
        {
          id: "scotiabank", name: "Scotiabank", description: "Banco de origen canadiense con fuerte presencia en el Perú.",
          interestRateRange: `Scotiabank, ofrece líneas de crédito para negocios más consolidados, con montos que pueden superar los S/ 100,000. Sus productos están enfocados en empresarios que buscan financiamiento para expansión, compra de activos fijos o capital de trabajo a mayor escala. Las tasas de interés tienden a ser más competitivas para clientes con historial sólido, con plazos que pueden alcanzar hasta los 60 meses.`
        },
        // { id: "banco-de-la-nacion", name: "Banco de la Nación", description: "El banco del estado peruano, con enfoque en servicios al sector público.", interestRateRange: "9% - 22%" },
      ],

      ahorro: AHORRODATA
      ,
    }
  else
    return {
      cajas: [
        { id: "caja-arequipa", name: "Caja Arequipa", description: "Caja Arequipa ofrece préstamos personales de libre disponibilidad, con montos que van desde S/ 500 hasta S/ 20,000 aproximadamente, y plazos de hasta 24 meses. Estos créditos están diseñados para cubrir gastos inmediatos como educación, salud o consumo.", interestRateRange: "La TCEA promedio se encuentra alrededor del 34 %, aunque varía según el monto y el plazo." },
        {
          id: "caja-cusco", name: "Caja Cusco",
          description: "En la Caja Cusco, los préstamos personales de libre disponibilidad para personas naturales sin negocio presentan tasas que varían según el plazo, el monto solicitado, el historial crediticio del cliente y la zona donde se otorgue el crédito.",

          interestRateRange: "De acuerdo con el tarifario vigente, un crédito de consumo personal en moneda nacional puede registrar una tasa cercana al 14 % anual en su componente moratorio, mientras que, en la práctica, las tasas efectivas de los préstamos personales suelen ubicarse en un rango más amplio. Por ejemplo, para plazos mayores a 360 días se han identificado tasas alrededor del 17 a 18 % anual, mientras que en plazos más cortos, o en situaciones de mayor riesgo, las tasas pueden llegar a superar el 30 % y alcanzar aproximadamente un 33 % anual. En general, los clientes con mejor historial de pago y que cumplen con las condiciones preferenciales pueden acceder a tasas más bajas dentro del rango, mientras que quienes recién inician su relación crediticia o presentan mayor riesgo se ubican en la parte alta. En conclusión, una persona natural sin negocio que solicite un préstamo personal en Caja Cusco podría encontrar tasas que van desde aproximadamente 17 % hasta más de 30 % anual, dependiendo de su perfil y de las condiciones pactadas con la entidad. El monto mínimo que puedes pedir es S/ 300 soles. El monto máximo puede llegar hasta S/ 300,000 soles. El plazo máximo para pagar suele ser hasta 60 meses (5 años).",
        },
        {
          id: "caja-huancayo", name: "Caja Huancayo", description: "Una de las cajas municipales más grandes del Perú.",

          interestRateRange: "Préstamo Personal. Es para personas naturales, sin necesidad de negocio. Montos: desde aprox. S/ 200 hasta S/ 5,000 según perfil. Plazo: de 3 hasta 24 meses. Tasas de interés TEA: varían mucho, entre ~25.34 % hasta ~80-90 %, dependiendo monto, plazo y riesgo"
        },

        {
          id: "mi-banco", name: "Mi Banco",
          description: "En el producto “Préstamos Personales” que aparece en Comparabien, MiBanco ofrece desde ≈ 8.99 % TEA para algunos préstamos, bajo ciertas condiciones. ",
          interestRateRange: "para clientes independientes, la tasa mínima podría ser de ≈ 28.02 % y la máxima de ≈ 83.40 %. "
        },
      ],
      bancos: [
        {
          id: "bbva", name: "BBVA", description: "Banco Bilbao Vizcaya Argentaria, es un banco español con presencia en más de 30 países.",
          interestRateRange:
            `En el BBVA Perú, si eres persona natural sin negocio, puedes pedir un préstamo personal para lo que necesites (estudios, viaje, compras, deudas, etc.).
            Monto mínimo: desde S/ 700
            Monto máximo: hasta S/ 100,000
            Plazo: entre 6 meses y 60 meses (5 años)
            Tasa de interés (TEA): desde 8.99 % anual (según tu perfil puede estar entre 10 % y 16 %)
            Ventajas: no necesitas aval, puedes pedirlo en agencias o por la app, el desembolso es rápido y puedes pagar antes sin penalidades.
            En resumen: es un préstamo flexible, rápido y sin sustento de gasto, pensado para personas que necesitan dinero extra con cuotas adaptables.
            `
        },
        // { id: "bcp", name: "BCP", description: "El Banco de Crédito del Perú es el banco más grande y antiguo del Perú.", interestRateRange: "12% - 28%" },
        //{ id: "interbank", name: "Interbank", description: "Uno de los principales bancos del Perú, enfocado en la banca minorista.", interestRateRange: "11% - 26%" },
        {
          id: "scotiabank", name: "Scotiabank",
          description: "Banco de origen canadiense con fuerte presencia en el Perú.",
          interestRateRange: `Scotiabank dispone de préstamos personales de mayor alcance, que pueden llegar hasta S/ 150,000, con plazos entre 6 y 60 meses. Los clientes que reciben su sueldo en Scotiabank acceden a tasas más bajas y promociones especiales, lo que convierte a esta entidad en una opción atractiva para quienes buscan montos elevados o plazos más amplios.`
        },
        // { id: "banco-de-la-nacion", name: "Banco de la Nación", description: "El banco del estado peruano, con enfoque en servicios al sector público.", interestRateRange: "9% - 22%" },
      ],

      ahorro: AHORRODATA
    }

};
