import { Okr, Team } from './types';

export const teams: Team[] = [
    { id: 'all', name: 'Todo Data', description: 'OKRs consolidados que marcan la estrategia general de Data & AI.' },
    { id: 'dp', name: 'Data Platform & AI', description: 'OKRs del equipo de Data Platform & AI.' },
    { id: 'ml', name: 'Machine Learning', description: 'OKRs del equipo de Machine Learning.' },
    { id: 'da', name: 'Data Analytics', description: 'OKRs del equipo de Data Analytics.' },
];

export const okrsData: Okr[] = [
  // =======================================================================
  // == Consolidated OKRs (Team: 'all')
  // =======================================================================
  {
    id: 'data-mindset',
    teamId: 'all',
    emoji: '🧠',
    title: 'OKR Data Mindset',
    subtitle: 'Convertir a Ualá en una organización que respira datos',
    objective: 'Hacer que los datos fluyan naturalmente en la toma de decisiones, instalando un mindset donde los datos se consulten con la misma naturalidad con la que se opina en una reunión. Impulsar una cultura que combine autonomía, colaboración y estrategia en cada equipo, integrando capacidades, herramientas y personas bajo una misma visión.',
    tag: 'Data Mindset',
    tagColor: '#cc1b4a',
    companyObjectives: [
      { text: "Be on track to be a profitable 1B company in '27", countryCode: 'Latam' },
      { text: 'Build the Credit capabilities of Mexico', countryCode: 'MX' },
      { text: 'Consolidate net profitability with diversified business', countryCode: 'AR' },
    ],
    keyResults: [
      { title: 'data-shared', description: 'Al menos 3 equipos de negocio usando uala-data-shared y exposición de metadata semántica en 80% de tablas productivas. [DP2.1/DP2.2]', code: '[DP2.1/DP2.2]' },
      { title: 'gAI Self Service', description: 'Al menos 2 agentes de GenAI creados por equipos de negocio usando herramientas self-service. [DP2.3]', code: '[DP2.3]' },
      { title: 'Chronos', description: 'Lograr una adopción mensual activa de Chronos ≥10% consolidando su uso en equipos de negocio. [DA2.2/DA2.4]', code: '[DA2.2/DA2.4]' },
      { title: 'UalaNest', description: 'Aumentar el uso de Nest/Metrics como fuente principal de consultas y visualizaciones (+25pp de Crecimiento de usuarios y 30% del consumo BQ). [DA1.1]', code: '[DA1.1]' },
      { title: 'Data Ambassador', description: '70% de las áreas con al menos un data ambassador activo impulsando iniciativas data-driven. [DA2.1]', code: '[DA2.1]' },
      { title: 'Data Descentralizado', description: '100% de los equipos descentralizados integrados al framework de colaboración y trabajando en iniciativas conjuntas. [DA2.5/DA2.6]', code: '[DA2.5/DA2.6]' },
    ],
  },
  {
    id: 'data-excellence',
    teamId: 'all',
    emoji: '✨',
    title: 'OKR Data Excellence',
    subtitle: 'Elevar los estándares técnicos y de impacto de nuestra práctica de Data & AI',
    objective: 'Construir una plataforma de datos robusta, eficiente y confiable que permita escalar el uso de datos y AI con calidad técnica, velocidad y autonomía. Establecer estándares que aseguren performance, eficiencia operativa y una experiencia consistente en toda la organización — donde cada dato fluya con propósito, confianza y precisión.',
    tag: 'Data Excellence',
    tagColor: '#0054eb',
    companyObjectives: [
      { text: "Be on track to be a profitable 1B company in '27", countryCode: 'Latam' },
      { text: 'Become radically more efficient as we grow', countryCode: 'Latam' },
      { text: 'AI Capabilities', countryCode: 'Latam' },
      { text: 'Build the Credit capabilities of Mexico', countryCode: 'MX' },
      { text: 'Consolidate net profitability with diversified business', countryCode: 'AR' },
    ],
    keyResults: [
        { title: 'DW Eficiente', description: 'Optimizar performance y costos del DW: reducción de picos de slots, assets catalogados y entidades utilizadas en +80% [DP1.1/DP1.2/DP1.3].', code: '' },
        { title: 'Depuration Flows', description: 'Reducir en 30% el uso de recursos en los procesos de transformación de datos [DA5.1/DA5.2].', code: '' },
        { title: 'Plataforma Moderna', description: 'Escalar nuestra plataforma con herramientas y prácticas modernas: repositorios actualizados, infra versionada y reducción del time-to-deploy [DP3.1/DP3.2/DP3.4/DP3.5].', code: '' },
        { title: 'Capacidades Inteligentes', description: 'Implementar capacidades inteligentes: generación de agentes GenAI y detección automática de anomalías [DP3.7/DP3.2].', code: '' },
        { title: 'ML Operation', description: 'Establecer estándares de calidad técnica en ML: documentación centralizada, tableros por modelo y reducción de incidencias en 50% [ML4.1/ML4.2/ML4.4].', code: '' },
        { title: 'Impact', description: 'Asegurar impacto y adopción de la visualización: 90% de dashboards estratégicos en uso y 100% de productos nuevos con tableros desde su lanzamiento [DA4.1/DA4.2] y el uso de los modelos de ML desarrollados [ML4.6].', code: '' },
    ],
  },
  {
    id: 'data-boosted',
    teamId: 'all',
    emoji: '🚀',
    title: 'OKR Data Boosted',
    subtitle: 'Potenciar la estrategia del negocio con analítica de alto impacto',
    objective: 'Transformar cómo se toman decisiones estratégicas en Ualá, desarrollando soluciones analíticas diseñadas en conjunto con el negocio, que potencien la rentabilidad, reduzcan riesgos y aceleren el crecimiento. Que cada MVP, cada modelo, cada insight llegue a mover una métrica real.',
    tag: 'Data Boosted',
    tagColor: '#4591ff',
    companyObjectives: [
        { text: "Be on track to be a profitable 1B company in '27", countryCode: 'Latam' },
        { text: 'Invest in future business capabilities', countryCode: 'Latam' },
        { text: 'Set standards as trustworthy product and institution', countryCode: 'Latam' },
        { text: 'Scale business units with a view of ROI', countryCode: 'MX' },
        { text: 'Consolidate net profitability with diversified business', countryCode: 'AR' },
    ],
    keyResults: [
      { title: 'UalaShield', description: 'Reducir pérdidas y riesgos por fraude y PLD mediante modelos predictivos con métricas de efectividad claras (ej. F1 > 0.5, % bloqueos, contra cargos).', code: '[ML2.6]' },
      { title: 'Segmentacion/NBA', description: 'Desarrollar soluciones analíticas con impacto probado en modelos de segmentación y targeting, con métricas de calidad (KS, AUC) y proyectos cocreados con el negocio.', code: '[ML3.5]' },
      { title: 'Renta', description: 'Implementar soluciones analíticas que mejoren decisiones clave: modelo de rentabilidad, segmentaciones reutilizables y casos de IA con impacto medible.', code: '[DA3.1]' },
    ],
  },
  {
    id: 'ualascore',
    teamId: 'all',
    emoji: '📈',
    title: 'OKR UalaScore',
    subtitle: 'Evolucionar el ecosistema UaláScore, garantizando la inclusión y la rentabilidad',
    objective: 'Desarrollar modelos crediticio cada vez más precisos, escalables y alineados al negocio, que mejoren la toma de decisiones, impulsen la rentabilidad e impulsen el crecimiento de la compañía.',
    tag: 'UalaScore',
    tagColor: '#022a9b',
    keyResults: [
        { title: 'KR1: Tasa de NPL', description: 'Alcanzar una tasa de NPL 31–90 en Loans del 8% en Argentina y del 11% en México.', code: '' },
        { title: 'KR2: Cartera de usuarios', description: 'Consolidar una cartera de usuarios activos de créditos en Argentina superior a 500.000.', code: '' },
        { title: 'KR3: Spin rate', description: 'Mantener un spin rate de 2.5 en la gestión de cobranzas en Argentina y de 1.5 en México.', code: '' },
        { title: 'KR4: Reducción de reservas', description: 'Disminuir en un 30% las reservas generadas por tarjetas de crédito inactivas en México.', code: '' },
        { title: 'KR5: Calidad de modelos', description: 'Lograr un KS superior a 0.3 en modelos de aplicación y superior a 0.4 en modelos de comportamiento.', code: '' },
    ],
    initiatives: [
        { text: 'Desarrollar 4 Nuevos Modelos de Aplicación (Bancarizados Activos/Inactivos, No Bancarizados, Welcome).' },
        { text: 'Desarrollar 2 Modelos Comportamentales (BHV) para TdC, Loans y Cuotis.' },
        { text: 'Crear Nuevos Modelos de Cobranzas.' },
        { text: 'Desarrollar 3 Modelos de Aplicación para México (Hit, NoHit, Rejects).' },
        { text: 'Generar al menos 50 nuevas variables en Argentina.' },
        { text: 'Incorporar variables geoespaciales y de relaciones en modelos de Argentina.' },
        { text: 'Desarrollar el CreditMap de México e incorporarlo como variable explicativa.' },
    ]
  },
  {
    id: 'ai-product',
    teamId: 'all',
    emoji: '🤖',
    title: 'OKR AI Product',
    subtitle: 'Impactar en el negocio con implementación de productos de GenAI',
    objective: 'Transformar la experiencia de usuario y optimizar la eficiencia operativa en Ualá AR y MX, implementando capacidades avanzadas de AI (como Uali 3.0 y bot de Cobranzas), para fortalecer la satisfacción, retención y el engagement de nuestros usuarios.',
    tag: 'AI Product',
    tagColor: '#ff5874',
    keyResults: [
      { title: 'KR1: Collections', description: '85% de retención de usuarios no morosos que ingresan al chat de cobranzas.', code: '' },
      { title: 'KR2: Help', description: '70% de Retención de usuarios que ingresan al chat de la app.', code: '' },
      { title: 'KR3: Help', description: 'Lograr un 50% de satisfacción de los usuarios que se contactan con nosotros (CSAT).', code: '' },
      { title: 'KR4: CX', description: 'Accuracy respuesta: 80%.', code: '' },
      { title: 'KR5: CX', description: 'Accuracy derivación: 90%.', code: '' },
      { title: 'KR6: CX', description: 'Alcanzar 40% de deflection en el buscador de ayuda.', code: '' },
    ],
    initiatives: [
        { text: 'Implementar un chatbot en MX para consultas informativas y derivación.' },
        { text: 'Implementar un chatbot en AR con contexto en tiempo real.' },
        { text: 'Implementar un chatbot para atender a usuarios con productos de crédito activo.' },
        { text: 'Implementar un buscador inteligente en el hub de ayuda.' },
        { text: 'Implementar un agente con AI para clasificar y priorizar casos de CX.' },
        { text: 'Crear un agente con AI que infiera el CSAT.' },
        { text: 'Crear un agente que analice conversaciones con CSAT negativo.' },
        { text: 'Automatizar el monitoreo de chatbots en producción.' },
    ]
  },
  {
    id: 'data-team',
    teamId: 'all',
    emoji: '👥',
    title: 'OKR Data Team',
    subtitle: 'Consolidar un equipo de Data & AI conectado, con propósito y sostenible',
    objective: 'Posicionar al equipo de Data como un referente en la región, por su impacto estratégico en el negocio, su cultura colaborativa y su capacidad de atraer, desarrollar y retener talento excepcional.',
    tag: 'Data Team',
    tagColor: '#434343',
    companyObjectives: [
        { text: 'AI Capabilities', countryCode: 'Latam' },
        { text: 'Employee satisfaction', countryCode: 'Latam' },
        { text: 'Talent', countryCode: 'Latam' },
    ],
    keyResults: [
        { title: 'KR1: Liderazgo', description: '...', code: '' },
        { title: 'KR2: Equipo', description: '...', code: '' },
        { title: 'KR3: Retención', description: '...', code: '' },
    ],
    initiatives: [
        { text: 'Team building' },
        { text: 'Diseñar un espacio de aprendizaje entre líderes' },
        { text: 'Documentar y facilitar el proceso de onboarding con checklist, buddy y seguimiento a los 15 días.' },
        { text: 'Evento Data' },
        { text: 'Participación en Eventos' },
    ]
  },

  // =======================================================================
  // == Data Platform & AI OKRs (Team: 'dp')
  // =======================================================================
  {
    id: 'dp-1',
    teamId: 'dp',
    parentOkrId: 'data-excellence',
    emoji: '⚙️',
    title: 'Optimizar Data Warehouse',
    subtitle: 'Hacerlo más rápido, económico y confiable',
    objective: 'Contar con métricas e insights que permitan optimizar la performance, costos y detectar problemas de forma proactiva en BigQuery.',
    keyResults: [
        { title: 'KR1: Reducción picos de consumo', description: 'Reducir al menos un 15% los picos de consumos de slots en los horarios de mayor carga, reparticionando y reclusterizando las 100 tablas más consumidas del warehouse.', code: ''},
        { title: 'KR2: Catalogación de assets', description: '80% de nuestros assets existentes en uala-data, wilo-data y uala-data-shared catalogados.', code: ''},
        { title: 'KR3: Utilización de entidades', description: 'Lograr que el 80% de todas las entidades productivas sean utilizadas (1 query de algún usuario en los últimos 120 días).', code: ''},
        { title: 'KR4: Optimización licencias Tableau', description: 'Lograr una reducción proyectada de costos de al menos un 20% para 2026, sin afectar el acceso de usuarios clave.', code: ''},
    ],
    initiatives: [
        { text: 'Reparticionado y clustering en las 120 tablas más consultadas.' },
        { text: 'Agente para recomendaciones de optimización.' },
        { text: 'DataCup y nuevo catálogo de datos con metadatos impulsados por IA.' },
        { text: 'Persistencia diaria de métricas y dashboard de observabilidad.' },
        { text: 'Optimización de queries y limpieza de tablas no utilizadas.' },
        { text: 'Reducción y asignación dinámica de licencias Tableau.' },
    ]
  },
  {
    id: 'dp-2',
    teamId: 'dp',
    parentOkrId: 'data-mindset',
    emoji: '🚀',
    title: 'Evolucionar productos de Self-Service',
    subtitle: 'Hacer del self-service de datos una realidad en Ualá',
    objective: 'Lograr que nuestros servicios escalen en todo Ualá, promoviendo aún más la toma de decisiones autónoma en cada negocio basada en datos.',
    keyResults: [
        { title: 'KR1: Adopción uala-data-shared', description: 'Lograr que por lo menos 3 equipos de negocio utilicen uala-data-shared.', code: ''},
        { title: 'KR2: Adopción Catálogo de Datos', description: 'Alcanzar al menos 40 usuarios activos en nuestra propuesta de Catálogo de Datos.', code: ''},
        { title: 'KR3: Creación de agentes GenAI', description: 'Lograr que se creen como mínimo 2 agentes de GenAI en 2 equipos de negocio desde una user-friendly tool.', code: ''},
        { title: 'KR4: Adopción Chronos', description: 'Adopción en el uso de Chronos.', code: ''},
    ],
    initiatives: [
        { text: 'Publicar y comunicar los criterios mínimos para la publicación de tablas productivas.' },
        { text: 'Lanzar uala-data-shared con controles activos y onboardear a los primeros 3 equipos.' },
        { text: 'Flexibilizar / iterar uala-data-shared para permitir la publicación desde fuentes no conocidas (files).' },
        { text: 'Publicar un dashboard de optimización/mantenimiento para usuarios de Sandbox.' },
        { text: 'Consolidar a Chronos como la plataforma única para ingestas de datos (files, streaming, bases de datos, APIs) y modelado dimensional.' },
        { text: 'Crear un portal para administrar la generación de FAQs, descentralizando la responsabilidad.' },
        { text: 'Democratizar el acceso a GenAI para usuarios finales mediante un rollout progresivo.' },
    ]
  },
  {
    id: 'dp-3',
    teamId: 'dp',
    parentOkrId: 'data-excellence',
    emoji: '🏗️',
    title: 'Evolucionar Plataforma de Datos',
    subtitle: 'Garantizar la escalabilidad en la operación de los distintos equipos',
    objective: 'Modernizar nuestra infraestructura y generacion de herramientas para garantizar escalabilidad, robustez y agilidad en el desarrollo, despliegue y operación de soluciones analíticas y de Al en toda la organización.',
    keyResults: [
        { title: 'KR1: Evolución plataforma ML', description: 'Definir y medir la métrica para la evolución de la plataforma de ML (WorkInProg).', code: ''},
        { title: 'KR2: Plataforma de Agentes GenAI', description: 'Implementación de plataforma de construcción de Agentes para uso interno en GenAI.', code: ''},
        { title: 'KR4: Repositorios GitHub', description: '100% de repositorios de GitHub de Data actualizados con los roles, teams y permisología nuevos.', code: ''},
        { title: 'KR5: Infraestructura como Código', description: '100% de la infraestructura en GCP en la layer productiva de Data versionada en Terraform.', code: ''},
    ],
    initiatives: [
        { text: 'Modernizar la plataforma de ML (dag generator, Docker images, migración Feast/MLFlow).' },
        { text: 'Terraformear toda la infraestructura para evitar cambios manuales en producción.' },
        { text: 'Construir una plataforma para el desarrollo de agentes y productos GenAI.' },
        { text: 'Implementar monitoreo inteligente que detecte anomalías, spikes y cambios de tendencia.' },
        { text: 'Crear un servicio para centralizar, unificar y estandarizar la generación de logs.' },
    ]
  },
  {
    id: 'dp-4',
    teamId: 'dp',
    parentOkrId: 'ai-product',
    emoji: '🤖',
    title: 'OKR AI Product',
    subtitle: 'Impactar en el negocio con implementación de productos de GenAI',
    objective: 'Transformar la experiencia de usuario y optimizar la eficiencia operativa en Ualá AR y MX, implementando capacidades avanzadas de AI (como Uali 3.0 y bot de Cobranzas), para fortalecer la satisfacción, retención y el engagement de nuestros usuarios.',
    keyResults: [
      { title: 'KR1: Collections', description: '85% de retención de usuarios no morosos que ingresan al chat de cobranzas.', code: '' },
      { title: 'KR2: Help', description: '70% de Retención de usuarios que ingresan al chat de la app.', code: '' },
      { title: 'KR3: Help', description: 'Lograr un 50% de satisfacción de los usuarios que se contactan con nosotros (CSAT).', code: '' },
      { title: 'KR4: CX', description: 'Accuracy respuesta: 80%.', code: '' },
      { title: 'KR5: CX', description: 'Accuracy derivación: 90%.', code: '' },
      { title: 'KR6: CX', description: 'Alcanzar 40% de deflection en el buscador de ayuda.', code: '' },
    ],
    initiatives: [
        { text: 'Implementar un chatbot en MX para consultas informativas y derivación.' },
        { text: 'Implementar un chatbot en AR con contexto en tiempo real.' },
        { text: 'Implementar un chatbot para atender a usuarios con productos de crédito activo.' },
        { text: 'Implementar un buscador inteligente en el hub de ayuda.' },
        { text: 'Implementar un agente con AI para clasificar y priorizar casos de CX.' },
        { text: 'Crear un agente con AI que infiera el CSAT.' },
        { text: 'Crear un agente que analice conversaciones con CSAT negativo.' },
        { text: 'Automatizar el monitoreo de chatbots en producción.' },
    ]
  },
  // =======================================================================
  // == Machine Learning OKRs (Team: 'ml')
  // =======================================================================
   {
    id: 'ml-1',
    teamId: 'ml',
    parentOkrId: 'ualascore',
    emoji: '📈',
    title: 'OKR UalaScore',
    subtitle: 'Evolucionar el ecosistema UaláScore, garantizando la inclusión y la rentabilidad',
    objective: 'Desarrollar modelos crediticio cada vez más precisos, escalables y alineados al negocio, que mejoren la toma de decisiones, impulsen la rentabilidad e impulsen el crecimiento de la compañía.',
    keyResults: [
        { title: 'KR1: Tasa de NPL', description: 'Alcanzar una tasa de NPL 31–90 en Loans del 8% en Argentina y del 11% en México.', code: '' },
        { title: 'KR2: Cartera de usuarios', description: 'Consolidar una cartera de usuarios activos de créditos en Argentina superior a 500.000.', code: '' },
        { title: 'KR3: Spin rate', description: 'Mantener un spin rate de 2.5 en la gestión de cobranzas en Argentina y de 1.5 en México.', code: '' },
        { title: 'KR4: Reducción de reservas', description: 'Disminuir en un 30% las reservas generadas por tarjetas de crédito inactivas en México.', code: '' },
        { title: 'KR5: Calidad de modelos', description: 'Lograr un KS superior a 0.3 en modelos de aplicación y superior a 0.4 en modelos de comportamiento.', code: '' },
    ],
    initiatives: [
        { text: 'Desarrollar 4 Nuevos Modelos de Aplicación (Bancarizados Activos/Inactivos, No Bancarizados, Welcome).' },
        { text: 'Desarrollar 2 Modelos Comportamentales (BHV) para TdC, Loans y Cuotis.' },
        { text: 'Crear Nuevos Modelos de Cobranzas.' },
        { text: 'Desarrollar 3 Modelos de Aplicación para México (Hit, NoHit, Rejects).' },
        { text: 'Generar al menos 50 nuevas variables en Argentina.' },
        { text: 'Incorporar variables geoespaciales y de relaciones en modelos de Argentina.' },
        { text: 'Desarrollar el CreditMap de México e incorporarlo como variable explicativa.' },
    ]
  },
  {
    id: 'ml-2',
    teamId: 'ml',
    parentOkrId: 'data-boosted',
    emoji: '🛡️',
    title: 'Implantar gestión de Fraude/AML con ML',
    subtitle: 'Incrementar la confianza de nuestros usuarios',
    objective: 'Aplicar soluciones de ML en los procesos de fraude y AML para anticipar riesgos, mejorar la experiencia del usuario y fortalecer la confianza.',
    keyResults: [
        { title: 'KR1: Riesgo regulador', description: 'Bajar el Riesgo Frente al regulador (Métrica TBD).', code: '' },
        { title: 'KR4: Reducción Contra Cargos', description: 'ARG BIS Reducción del % de Contra Cargos en un 20%.', code: '' },
        { title: 'KR5: Eficiencia en alertas', description: 'Lograr una eficiencia operativa en el análisis de alertas fraudulentas en el onboarding de MX con ≥70% de revisiones que resulten en bloqueo de cuentas.', code: '' },
        { title: 'KR6: Calidad modelos de fraude', description: 'Superar 0.5 en la métrica F1 Score en los modelos de fraude totalmente desbalanceados.', code: '' },
    ],
    initiatives: [
        { text: 'Desarrollo de FraudScore TRX v1 para ARG.' },
        { text: 'Desarrollo de Early Merchant Safe para ARG.' },
        { text: 'Mejorar el modelo de priorización de alertas (AlertUP).' },
        { text: 'Desarrollar el modelo de generación de alertas (AlertDeep).' },
        { text: 'FraudScore ONB para MX.' },
        { text: 'MVP de AlertUP MX.' },
        { text: 'Incorporar variables de las imágenes de Onboarding en MX.' },
        { text: 'Incorporar variables de AFIP/ARCA en ARG.' },
        { text: 'Incorporar 20 variables provenientes de INCODE en ARG y en MX.' },
    ]
  },
  {
    id: 'ml-3',
    teamId: 'ml',
    parentOkrId: 'data-boosted',
    emoji: '🎯',
    title: 'Construir segmentaciones basadas en datos',
    subtitle: 'Incrementar el payback y mejorar la experiencia de nuestros usuarios',
    objective: 'Aplicar inteligencia de datos para definir audiencias más precisas que maximicen el valor del usuario y eleven la calidad de su experiencia.',
    keyResults: [
        { title: 'KR1: Crecimiento de usuarios', description: 'ARG Active Users (TAUs) >2 Millones y Active Users (RAUs) >4,8 Millones.', code: '' },
        { title: 'KR2: Productos por usuario', description: 'ARG Products per user >2.5.', code: '' },
        { title: 'KR3: Tasa de Aprobación TdC', description: 'MX Tasa de Aprobación de TdC Clásica >20%.', code: '' },
        { title: 'KR5: Calidad de modelos', description: 'Garantizar un KS de al menos 0.4 y una ROC AUC >0.7.', code: '' },
    ],
    initiatives: [
        { text: 'MVP recomendador de acciones/Productos.' },
        { text: 'MVP Segmentación temprana de los usuarios.' },
        { text: 'eLTV Implementado.' },
    ]
  },
  {
    id: 'ml-4',
    teamId: 'ml',
    parentOkrId: 'data-excellence',
    emoji: '🌟',
    title: 'Búsqueda constante de la excelencia en ML',
    subtitle: 'Mejorar, cada vez más, la práctica de ML',
    objective: 'Buscar de forma continua la excelencia en la práctica de Machine Learning, elevando la calidad de los desarrollos, la velocidad de respuesta a negocio, la colaboración y el impacto.',
    keyResults: [
        { title: 'KR1: Documentación', description: 'Tener la documentación simplificada y reunida en un único lugar. Desarrollar un Site de modelos disponibles.', code: '' },
        { title: 'KR2: Tableros de KPIs', description: '1 Modelo = 1 Tablero con KPIs con acceso a negocio/sth/partner/sponsor.', code: '' },
        { title: 'KR4: Mejora en plataforma ML', description: 'Bajar el número de incidencias un 50% (Alinear con DE).', code: '' },
        { title: 'KR5: Research', description: 'Desarrollar e implementar 2 researchs metodológicos y 4 técnicos.', code: '' },
    ],
    initiatives: [
        { text: 'Crear un Site de Catálogo de modelos.' },
        { text: 'Desarrollar e implementar una metodología de evaluación de modelos.' },
        { text: 'Realizar desarrollos de researchs técnicos y metodológicos.' },
        { text: 'Hacer un upgrade de la plataforma ML.' },
        { text: 'Incorporar al Feature Store variables Geoespaciales de Arg, de interconexión entre usuarios, de Buro de Mx y de imágenes de Onboarding MX.' },
        { text: 'Crear variables de aceleración/ratio para todos los modelos.' },
    ]
  },

  // =======================================================================
  // == Data Analytics OKRs (Team: 'da')
  // =======================================================================
   {
    id: 'da-1',
    teamId: 'da',
    parentOkrId: 'data-mindset',
    emoji: '👌',
    title: 'Hacer que el consumo de datos sea más simple, eficiente y adoptado',
    subtitle: 'A través de Ualá Nest/Metrics y transformación de datos',
    objective: 'Habilitar la toma de decisiones ágil y el desarrollo de soluciones analíticas avanzadas, convirtiendo a Ualá Nest/Metrics en el principal punto de acceso a una capa semántica de datos confiable y optimizada para el consumo e impulsar mediante la transformación de datos el desarrollo de los modelos de Machine Learning.',
    keyResults: [
        { title: 'KR1', description: 'Aumentar el % de usuarios activos que consumen Ualá Nest/Metrics en +25pp. (hoy tenemos un 21%)', code: '' },
        { title: 'KR2', description: 'Lograr que el 30% de las consultas provengan de Ualá Nest/Metrics en fin de 2025 (hoy tenemos un 7% al datamart)', code: '' },
        { title: 'KR3', description: 'Lograr que el 100% de los modelos productivos sean utilizados por negocio.', code: '' },
    ],
    initiatives: [
        {
            text: '1. Priorización y desarrollo de modelos',
            children: [
                { text: 'Priorización de nuevos modelos de alto impacto' },
                { text: 'Desarrollo de modelos' },
                { text: 'Relevamiento de queries actuales para identificar modelos prioritarios' },
                { text: 'Plan de comunicación para desarrollo de modelos' },
                { text: 'Refactor de modelos de bajo uso o redundantes' },
                { text: 'Reorganización de dataset Datamart' },
            ],
        },
        {
            text: '2. Trabajo en Conjunto con ML',
            children: [
                { text: 'Optimización y estandarización de datasets para consumo por modelos de ML.' },
                {
                    text: 'Credits',
                    children: [
                        { text: '🇦🇷 Chats collections' },
                        { text: '🇦🇷 Geocoding proceso productivo' },
                        { text: '🇲🇽 Ualá Score 3.0: transformación de info taktile' },
                    ],
                },
                {
                    text: 'Marketing',
                    children: [
                        { text: '🇲🇽 Envío Firebase MX con agregado TC' },
                    ],
                },
            ],
        },
        {
            text: '3. Modelos por vertical',
            children: [
                { text: 'BIS: 🇦🇷🇲🇽🇨🇴 Modelo transaccional BIS' },
                { text: 'Payments: 🇦🇷🇲🇽🇨🇴 Modelo transaccional Payments' },
                {
                    text: 'Wealth',
                    children: [
                        { text: '🇦🇷 Modelo transaccional Wealth' },
                        { text: '🇦🇷 Modelo de tenencia Cta Comitente' },
                        { text: '🇦🇷🇲🇽🇨🇴 Modelos de saldos' },
                    ]
                },
                { text: 'Credit: 🇦🇷🇲🇽 Modelo transaccional Credit (generar principales tablas de KPIs para unificar criterios)' },
                {
                    text: 'Cross',
                    children: [
                        { text: '🇦🇷🇲🇽🇨🇴 Dimensión de usuarios de Ualá: sociodemográficas e IDs' },
                        { text: '🇦🇷 Armar modelo de SAU y agregarlo a User Activity' },
                        { text: '🇦🇷🇲🇽🇨🇴 Iterar User Activity (mejorar proceso, escalabilidad y adaptabilidad a cambios)' },
                        { text: '🇦🇷🇲🇽 Armar principalidad' },
                        { text: '🇦🇷🇲🇽🇨🇴 Iterar modelo NSE y hacerlo histórico (mejorar variables y analizar histórico del indicador)' },
                        { text: '🇦🇷🇲🇽🇨🇴 Cerrar modelo de funnel con Product' },
                    ]
                }
            ],
        },
    ]
  },
  {
    id: 'da-2',
    teamId: 'da',
    parentOkrId: 'data-mindset',
    emoji: '🌐',
    title: 'Impulsar una cultura de uso de datos transversal en la organización',
    subtitle: 'Fomentar el uso de datos transversal en la organización',
    objective: 'Transformar la cultura de Ualá para que las decisiones se basen consistentemente en datos, fomentando la autonomía y el pensamiento analítico en todos los niveles, impulsando una adopción masiva y una colaboración efectiva en el ecosistema de datos.',
    keyResults: [
        { title: 'KR1', description: 'Lograr que al menos el 70% de las áreas de negocio cuenten con 1 data ambassador activo en 🇦🇷 y en 🇲🇽 que genere al menos 2 iniciativas data-driven cada uno con impacto durante el semestre.', code: '' },
        { title: 'KR2', description: 'Incrementar la adopción mensual activa de Chronos a al menos un 10% de usuarios únicos. (punto de partida 5%)', code: '' },
        { title: 'KR3', description: 'Incrementar la adopción mensual activa de BigQuery a ≥ 40% de usuarios únicos que ejecutan consultas. (punto de partida 30%)', code: '' },
        { title: 'KR4', description: 'Alcanzar un CSAT ≥ 70% en encuestas internas sobre capacitación y recursos de datos entregados.', code: '' },
        { title: 'KR5', description: 'Tener al 100% de los equipos descentralizados integrados al framework de colaboración.', code: '' },
        { title: 'KR6', description: 'Lograr al menos una iniciativa conjunta con cada equipo descentralizado.', code: '' },
    ],
    initiatives: [
        {
            text: '1. Medición y seguimiento',
            children: [{ text: 'Dashboard de medición de KPIs de cultura' }]
        },
        {
            text: '2. Programas y comunidad',
            children: [
                { text: '🇦🇷 Lanzamiento de un programa de Ambassadors por área' },
                { text: '🇲🇽 Lanzamiento de un programa de Ambassadors por área' },
                { text: '🇦🇷🇲🇽 Lanzamiento de la data-community con ambassadors como principales embajadores' },
            ]
        },
        {
            text: '3. Capacitación y onboarding',
            children: [
                { text: 'Construcción de una guía centralizada de uso de herramientas' },
                { text: 'Acompañamiento Operaciones MX' },
                { text: 'Capacitaciones ad-hoc para áreas estratégicas como ser Fraude MX' },
                { text: 'Construcción de best practices de Looker' },
                { text: 'Segmentación de usuarios data-driven' },
            ]
        },
        {
            text: '4. Documentación y recursos',
            children: [
                { text: 'Diccionario de BUs' },
                { text: 'Guía centralizada offline' },
            ]
        },
        {
            text: '5. Cultura Cross',
            children: [
                { text: 'Encuesta de Partnership Unificada' },
                { text: 'Implementación de charla de onboarding de datos' },
                { text: 'Capacitación Chronos a BUs estratégicas' },
            ]
        },
        {
            text: '6. we-are-data Framework',
            children: [
                { text: 'Mapa de stakeholders y responsables por cada BU.' },
                { text: 'Entrevistas de profundidad' },
                { text: 'Encuesta Stakeholders Clave & up' },
                { text: 'Rutina mensual de sync y seguimiento de iniciativas conjuntas.' },
                { text: 'Desarrollo de playbook para descentralizados (buenas prácticas, templates, governance).' },
                { text: 'Participación activa del equipo core en decisiones de stack, talento y métricas comunes.' },
            ]
        }
    ]
  },
  {
    id: 'da-3',
    teamId: 'da',
    parentOkrId: 'data-boosted',
    emoji: '💰',
    title: 'Impulsar el escalamiento rentable del negocio',
    subtitle: 'A través de soluciones analíticas estratégicas',
    objective: 'Acelerar el crecimiento rentable del negocio apalancándonos en soluciones analíticas que optimicen la rentabilidad, el retorno de inversión (payback) y la eficiencia del escalamiento.',
    keyResults: [
        { title: 'KR1', description: 'Habilitar la medición de Rentabilidad, Payback y Eficiencia de Adquisición para las principales palancas de crecimiento, resultando en al menos 3 decisiones de negocio optimizadas.', code: '' },
        { title: 'KR2', description: 'Validar la precisión del modelo de rentabilidad a nivel Gross Profit, logrando que su cálculo difiera en un ±5% máximo respecto a los datos financieros oficiales.', code: '' },
        { title: 'KR3', description: 'Lograr una eficiencia operativa en el análisis de alertas fraudulentas en el onboarding de 🇲🇽 con ≥70% de revisiones que resulten en bloqueo de cuentas.', code: '' },
        { title: 'KR4', description: 'Construir una solución de segmentación reutilizable y documentada, disponible para su uso por al menos 3 equipos de negocio para la personalización y medición de iniciativas.', code: '' },
        { title: 'KR5', description: 'Potenciar el uso de la Inteligencia Artificial en el negocio, impulsando al menos 3 iniciativas de analítica con IA junto a BUs estratégicas que generen un impacto medible.', code: '' },
    ],
    initiatives: [
        {
            text: '1. Proyectos estratégicos con impacto de negocio',
            children: [
                {
                    text: 'Fraude',
                    children: [
                        { text: '🇦🇷 Modelo de fraude transaccional' },
                        { text: '🇦🇷 Curado de orígenes fraude' },
                        { text: '🇲🇽 Modelo de cargos no reconocidos fraude' },
                        { text: '🇲🇽 Tablero Fraude desconocimiento de cargos' },
                        { text: '🇲🇽 Integración con Fraud Center Mastercard' },
                    ]
                },
                {
                    text: 'Modelo Rentabilidad',
                    children: [
                        { text: '🇦🇷 Tasas de transferencia (costo de fondeo créditos + interés sobre depósitos + PF)' },
                        { text: '🇲🇽 Costos Credit' },
                        { text: '🇲🇽 Ajustes Revenues/Costos BIS' },
                    ]
                },
                {
                    text: 'Segmentación',
                    children: [
                        { text: '🇦🇷 Segmentación' }
                    ]
                }
            ]
        },
        {
            text: '2. Innovación y casos de IA',
            children: [
                { text: 'Capacitación del equipo en herramientas de IA' },
                { text: 'Diagnóstico de necesidades y soluciones de IA en áreas estratégicas' },
                { text: '🇦🇷🇲🇽 Normalización de comercios' },
                { text: '🇦🇷 Detección de dispositivos con NFC' },
                { text: 'Resumen de ppales insights de reportes cross' },
            ]
        }
    ]
  },
  {
    id: 'da-4',
    teamId: 'da',
    parentOkrId: 'data-boosted',
    emoji: '📊',
    title: 'Potenciar al negocio brindando información y datos',
    subtitle: 'Para tomar decisiones de forma ágil y autónoma',
    objective: 'Equipar a los equipos de negocio con la autonomía y las herramientas necesarias para evaluar el impacto de sus iniciativas desde el inicio, acelerando el ciclo de aprendizaje y la iteración.',
    keyResults: [
        { title: 'KR1', description: 'Asegurar la adopción de los dashboards estratégicos clave, logrando que el 90% de los dashboards estratégicos en uso sean consultados mensualmente por al menos 3 stakeholders clave de cada BU.', code: '' },
        { title: 'KR2', description: 'Asegurar que el 100% de los nuevos productos lanzados por las BUs principales (BIS, Payments, Wealth) tengan un dashboard de KPIs predefinido y listo para medir su impacto desde el día de lanzamiento.', code: '' },
    ],
    initiatives: [
        {
            text: '1. Planificación',
            children: [
                { text: 'Revisión y governance del backlog trimestral con stakeholders' },
                { text: 'Integración de las iniciativas en el resumen de OKRs ejecutivos' },
                { text: 'Liderar los streams con responsables de cada área' },
            ]
        },
        {
            text: '2. Proyectos estratégicos con impacto de negocio',
            children: [
                {
                    text: 'BIS',
                    children: [
                        { text: '🇦🇷 Tablero de North Star Metric BIS' },
                        { text: '🇦🇷 Acompañamiento merchant safe por comercio' },
                        { text: '🇦🇷 Actualización Tablero de Fraude' },
                        { text: '🇲🇽 Tablero de rechazos' },
                        { text: '🇲🇽 Tablero de Farmers' },
                        { text: '🇲🇽 Tablero de Fraude' },
                        { text: '🇲🇽 Tablero de Retención' },
                    ]
                },
                {
                    text: 'Payments',
                    children: [
                        { text: '🇦🇷 Análisis de compras AR (NFC, Transporte, Merchants)' },
                        { text: '🇦🇷 Modelo dispositivos con NFC' },
                        { text: '🇲🇽 Análisis extracciones OXXO' },
                        { text: '🇦🇷 Inclusión de QR y Cash Out en uso de tarjetas' },
                        { text: '🇲🇽 Compras MX' },
                    ]
                },
                {
                    text: 'Wealth',
                    children: [
                        { text: '🇲🇽 Pagarés' },
                        { text: '🇦🇷🇲🇽 Cuenta Remunerada Plus' },
                    ]
                },
            ]
        }
    ]
  },
  {
    id: 'da-5',
    teamId: 'da',
    parentOkrId: 'data-excellence',
    emoji: '✨',
    title: 'Asegurar la excelencia técnica y la eficiencia operativa',
    subtitle: 'En las soluciones analíticas',
    objective: 'Garantizar la fiabilidad, escalabilidad y eficiencia de nuestra infraestructura y soluciones de datos, estableciendo estándares de excelencia técnica y optimizando los procesos operativos.',
    keyResults: [
        { title: 'KR1', description: 'Optimizar la eficiencia de los procesos de transformación de datos, reduciendo el consumo de recursos en un 30%.', code: '' },
        { title: 'KR2', description: 'Lograr que el 80% de todas las entidades productivas sean utilizadas.', code: '' },
        { title: 'KR3', description: 'Lograr que el 80% de todos los tableros sean utilizados.', code: '' },
    ],
    initiatives: [
        {
            text: '1. Optimización y eficiencia',
            children: [
                { text: 'Depurar y optimizar los recursos de Data' },
                { text: '🇦🇷🇲🇽🇨🇴 Depuración DAGs' },
                { text: '🇦🇷🇲🇽🇨🇴 Optimización queries con gran consumo' },
                { text: '🇦🇷🇲🇽🇨🇴 Depuración sandbox viz / BUs' },
                { text: '🇦🇷🇲🇽🇨🇴 Depuración de Tableros' },
                { text: '🇦🇷🇲🇽🇨🇴 Automatización procesamiento backup en streaming' },
                { text: '🇦🇷🇲🇽🇨🇴 Implementación nueva lambda en streaming' },
            ]
        }
    ]
  },
];
