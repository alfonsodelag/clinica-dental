export const servicePages = [
  {
    id: 1,
    slug: 'odontologia-general',
    title: 'Odontologia General',
    navTitle: 'Odontologia General',
    eyebrow: 'Prevencion y diagnostico',
    heroImage: '/img/dentist-7.jpg',
    icon: 'uil-stethoscope',
    summary:
      'La odontologia general es el punto de partida para cuidar la salud bucal de ninos y adultos: evaluacion, diagnostico, restauraciones, control de caries, orientacion preventiva y seguimiento periodico.',
    intro:
      'En Odonto Panama, este servicio funciona como la puerta de entrada para entender el estado de tu boca y definir un plan claro. Una consulta general puede incluir revision clinica, evaluacion de encias, identificacion de caries, indicacion de radiografias cuando sea necesario y recomendaciones de higiene personalizadas.',
    highlights: [
      'Evaluacion dental integral para detectar caries, desgaste, sensibilidad o molestias.',
      'Restauraciones esteticas en resina cuando existe perdida de estructura dental.',
      'Orientacion preventiva para mejorar cepillado, limpieza interdental y habitos diarios.',
      'Plan de tratamiento por etapas si se detectan necesidades de ortodoncia, endodoncia, protesis o cirugia.'
    ],
    idealFor: [
      'Dolor, sensibilidad o molestias al masticar.',
      'Chequeo preventivo si ha pasado tiempo desde tu ultima visita.',
      'Restauraciones antiguas, fracturadas o con filtracion.',
      'Pacientes que quieren organizar un plan dental completo.'
    ],
    process: [
      'Revision clinica y conversacion sobre sintomas, antecedentes y expectativas.',
      'Diagnostico inicial con apoyo de imagenes o radiografias si el caso lo requiere.',
      'Explicacion de hallazgos y prioridades de tratamiento.',
      'Agenda de procedimientos y controles segun urgencia, presupuesto y objetivos.'
    ],
    faq: [
      {
        question: 'Cada cuanto debo hacerme una revision dental?',
        answer:
          'Depende de tu historial de caries, encia, restauraciones y habitos. En general, una revision periodica ayuda a detectar problemas temprano antes de que avancen.'
      },
      {
        question: 'Una caries siempre duele?',
        answer:
          'No. Muchas caries empiezan sin dolor. Por eso una evaluacion clinica y controles regulares son importantes para tratarlas antes de que comprometan mas estructura dental.'
      }
    ],
    related: ['limpieza-dental-y-profilaxis', 'endodoncia', 'estetica-dental'],
    sources: [
      {
        label: 'MouthHealthy / ADA - Cavities',
        url: 'https://www.mouthhealthy.org/all-topics-a-z/cavities'
      }
    ]
  },
  {
    id: 2,
    slug: 'limpieza-dental-y-profilaxis',
    title: 'Limpieza Dental y Profilaxis',
    navTitle: 'Limpieza Dental y Profilaxis',
    eyebrow: 'Prevencion profesional',
    heroImage: '/img/dentist-6.jpg',
    icon: 'uil-shield-check',
    summary:
      'La limpieza dental profesional remueve placa, calculo y manchas superficiales en zonas donde el cepillo y el hilo dental no siempre alcanzan.',
    intro:
      'La profilaxis ayuda a mantener dientes y encias saludables. Durante la cita se revisa el estado de la encia, se retiran depositos acumulados, se pule la superficie dental y se refuerzan instrucciones de higiene para tu caso.',
    highlights: [
      'Remocion de placa bacteriana y calculo dental acumulado.',
      'Pulido para disminuir manchas superficiales y dejar una sensacion de frescura.',
      'Revision de encia para detectar sangrado, inflamacion o signos de enfermedad periodontal.',
      'Recomendaciones de cepillado, hilo dental, cepillos interdentales o irrigadores segun necesidad.'
    ],
    idealFor: [
      'Sangrado al cepillarte o usar hilo dental.',
      'Mal aliento persistente o sensacion de acumulacion.',
      'Manchas superficiales por cafe, te, vino o tabaco.',
      'Mantenimiento antes o despues de ortodoncia, implantes o protesis.'
    ],
    process: [
      'Evaluacion de encia, placa y calculo visible.',
      'Limpieza con instrumental profesional.',
      'Pulido dental y recomendaciones de higiene.',
      'Definicion de frecuencia de mantenimiento segun riesgo individual.'
    ],
    faq: [
      {
        question: 'La limpieza dental duele?',
        answer:
          'Puede sentirse sensibilidad si hay inflamacion o mucho calculo, pero normalmente es un procedimiento bien tolerado. El equipo puede ajustar la tecnica segun tu comodidad.'
      },
      {
        question: 'La limpieza blanquea los dientes?',
        answer:
          'La limpieza retira manchas externas y puede mejorar el brillo, pero no cambia el color interno del diente como un blanqueamiento dental profesional.'
      }
    ],
    related: ['odontologia-general', 'blanqueamiento-dental', 'ortodoncia'],
    sources: [
      {
        label: 'MouthHealthy / ADA - Flossing',
        url: 'https://www.mouthhealthy.org/all-topics-a-z/flossing'
      },
      {
        label: 'MouthHealthy / ADA - Cavities',
        url: 'https://www.mouthhealthy.org/all-topics-a-z/cavities'
      }
    ]
  },
  {
    id: 3,
    slug: 'odontopediatria',
    title: 'Odontopediatria',
    navTitle: 'Odontopediatria',
    eyebrow: 'Cuidado dental infantil',
    heroImage: '/img/dentist-8.jpg',
    icon: 'uil-smile',
    summary:
      'La odontopediatria acompana la salud bucal de bebes, ninos y adolescentes con un enfoque preventivo, amable y adaptado a cada edad.',
    intro:
      'La atencion infantil busca que el nino construya una relacion positiva con el dentista. Se revisa crecimiento dental, higiene, habitos, caries tempranas, traumatismos y necesidades preventivas como sellantes o fluor cuando aplique.',
    highlights: [
      'Primera visita y adaptacion del nino al entorno odontologico.',
      'Control de caries infantil y educacion para padres.',
      'Prevencion con higiene guiada, orientacion de dieta y seguimiento.',
      'Evaluacion de habitos como chupon, dedo o respiracion oral cuando afectan la mordida.'
    ],
    idealFor: [
      'Primeros dientes o primera visita dental.',
      'Dolor, manchas, caries o fracturas en dientes temporales.',
      'Ninos con miedo al dentista que necesitan una experiencia gradual.',
      'Padres que quieren prevenir problemas antes de que aparezcan.'
    ],
    process: [
      'Recibimiento y adaptacion segun edad y personalidad del nino.',
      'Revision clinica con lenguaje sencillo y acompanamiento de los padres.',
      'Plan preventivo o tratamiento si se detecta caries, dolor o trauma.',
      'Indicaciones de higiene y controles recomendados.'
    ],
    faq: [
      {
        question: 'Cuando debe ser la primera visita al dentista?',
        answer:
          'La AAPD recomienda la primera visita cuando aparece el primer diente o no mas tarde del primer cumpleanos.'
      },
      {
        question: 'Los dientes de leche son importantes?',
        answer:
          'Si. Ayudan a masticar, hablar y guardar espacio para los dientes permanentes. Tambien pueden doler o infectarse si una caries avanza.'
      }
    ],
    related: ['limpieza-dental-y-profilaxis', 'ortodoncia', 'odontologia-general'],
    sources: [
      {
        label: 'American Academy of Pediatric Dentistry - FAQ',
        url: 'https://www.aapd.org/resources/parent/faq/'
      }
    ]
  },
  {
    id: 4,
    slug: 'ortodoncia',
    title: 'Ortodoncia',
    navTitle: 'Ortodoncia',
    eyebrow: 'Alineacion y mordida',
    heroImage: '/img/dentist-7.jpg',
    icon: 'uil-medkit',
    summary:
      'La ortodoncia corrige dientes apiñados, espacios, mordidas alteradas y problemas de alineacion que pueden afectar estetica, higiene, masticacion y salud oral.',
    intro:
      'Un tratamiento de ortodoncia inicia con un diagnostico completo. Segun el caso, puede requerir brackets, alineadores u otros aparatos. La meta no es solo una sonrisa mas armonica, sino tambien una mordida funcional y mas facil de mantener limpia.',
    highlights: [
      'Evaluacion de posicion dental, mordida y crecimiento facial.',
      'Planificacion de tratamiento segun edad, severidad y objetivos esteticos.',
      'Seguimiento periodico para mover los dientes de forma controlada.',
      'Retencion al finalizar para conservar la nueva posicion.'
    ],
    idealFor: [
      'Dientes apiñados, separados o fuera de posicion.',
      'Mordida cruzada, abierta, profunda o molestias al masticar.',
      'Adolescentes en etapa de crecimiento.',
      'Adultos que desean mejorar alineacion y funcion.'
    ],
    process: [
      'Valoracion clinica y registros diagnosticos.',
      'Explicacion de opciones y tiempo estimado.',
      'Inicio de aparatologia y controles programados.',
      'Fase de retencion para mantener resultados.'
    ],
    faq: [
      {
        question: 'La ortodoncia es solo estetica?',
        answer:
          'No. Ademas de mejorar la sonrisa, ayuda a corregir mordidas que pueden dificultar higiene, masticacion o generar desgaste dental.'
      },
      {
        question: 'Un adulto puede usar ortodoncia?',
        answer:
          'Si. Mientras haya salud periodontal y un diagnostico adecuado, los dientes adultos pueden moverse con tratamiento profesional.'
      }
    ],
    related: ['odontopediatria', 'limpieza-dental-y-profilaxis', 'estetica-dental'],
    sources: [
      {
        label: 'MouthHealthy / ADA - Braces',
        url: 'https://www.mouthhealthy.org/all-topics-a-z/braces'
      }
    ]
  },
  {
    id: 5,
    slug: 'estetica-dental',
    title: 'Estetica Dental',
    navTitle: 'Estetica Dental',
    eyebrow: 'Armonia de sonrisa',
    heroImage: '/img/dentist-4.jpg',
    icon: 'uil-star',
    summary:
      'La estetica dental busca mejorar color, forma, proporcion y armonia de la sonrisa sin perder de vista la salud y funcion de los dientes.',
    intro:
      'Antes de cualquier cambio estetico es importante evaluar caries, encia, mordida, restauraciones previas y expectativas. Segun el diagnostico, el plan puede incluir limpieza, blanqueamiento, resinas esteticas, carillas u otros procedimientos restauradores.',
    highlights: [
      'Analisis de sonrisa, color, forma y proporcion dental.',
      'Restauraciones esteticas para pequenas fracturas, desgastes o espacios.',
      'Planificacion de cambios progresivos y conservadores cuando sea posible.',
      'Integracion con blanqueamiento, ortodoncia o protesis si el caso lo requiere.'
    ],
    idealFor: [
      'Dientes manchados, desgastados o con restauraciones visibles.',
      'Pequenas fracturas o bordes irregulares.',
      'Espacios o diferencias de forma que afectan la sonrisa.',
      'Pacientes que quieren mejorar su sonrisa con un plan guiado.'
    ],
    process: [
      'Evaluacion de salud dental y expectativas esteticas.',
      'Definicion de opciones conservadoras y restauradoras.',
      'Tratamiento por fases segun prioridad clinica.',
      'Indicaciones de mantenimiento para conservar color y brillo.'
    ],
    faq: [
      {
        question: 'Necesito blanqueamiento antes de restauraciones esteticas?',
        answer:
          'Muchas veces se recomienda definir primero el color deseado, porque las resinas, carillas o coronas no blanquean igual que el diente natural.'
      },
      {
        question: 'La estetica dental reemplaza la salud dental?',
        answer:
          'No. Una sonrisa estetica debe apoyarse en dientes y encias sanas. Por eso la evaluacion inicial es clave.'
      }
    ],
    related: ['blanqueamiento-dental', 'odontologia-general', 'ortodoncia'],
    sources: [
      {
        label: 'MouthHealthy / ADA - Teeth Whitening',
        url: 'https://www.mouthhealthy.org/all-topics-a-z/teeth-whitening'
      }
    ]
  },
  {
    id: 6,
    slug: 'blanqueamiento-dental',
    title: 'Blanqueamiento Dental',
    navTitle: 'Blanqueamiento Dental',
    eyebrow: 'Color y brillo',
    heroImage: '/img/dentist-6.jpg',
    icon: 'uil-sun',
    summary:
      'El blanqueamiento dental puede aclarar el color de dientes naturales mediante agentes blanqueadores indicados y supervisados profesionalmente.',
    intro:
      'No todos los tipos de manchas responden igual. Antes de blanquear, conviene revisar caries, sensibilidad, restauraciones, coronas o manchas por medicamentos o trauma. Asi se elige una opcion segura y realista para tu sonrisa.',
    highlights: [
      'Evaluacion del color inicial y causas de la pigmentacion.',
      'Revision de sensibilidad, caries o restauraciones antes de iniciar.',
      'Opciones en consultorio o con cubetas indicadas por el profesional, segun disponibilidad clinica.',
      'Consejos de mantenimiento para prolongar el resultado.'
    ],
    idealFor: [
      'Dientes naturales amarillentos o con manchas externas.',
      'Pacientes que desean mejorar el brillo antes de un evento.',
      'Sonrisas que necesitan un cambio conservador antes de restauraciones esteticas.',
      'Personas que quieren evitar productos sin supervision.'
    ],
    process: [
      'Evaluacion de salud oral, color y sensibilidad.',
      'Limpieza previa si hay placa, calculo o manchas superficiales.',
      'Indicacion de tecnica adecuada y explicacion de expectativas.',
      'Control y recomendaciones para sensibilidad temporal.'
    ],
    faq: [
      {
        question: 'El blanqueamiento funciona en coronas o resinas?',
        answer:
          'No cambia el color de coronas, carillas o restauraciones. Si tienes trabajos visibles, puede ser necesario planificar el color con cuidado.'
      },
      {
        question: 'Puede causar sensibilidad?',
        answer:
          'Algunas personas presentan sensibilidad temporal. Por eso conviene hacerlo con evaluacion y seguimiento profesional.'
      }
    ],
    related: ['limpieza-dental-y-profilaxis', 'estetica-dental', 'odontologia-general'],
    sources: [
      {
        label: 'MouthHealthy / ADA - Teeth Whitening',
        url: 'https://www.mouthhealthy.org/all-topics-a-z/teeth-whitening'
      }
    ]
  },
  {
    id: 7,
    slug: 'endodoncia',
    title: 'Endodoncia',
    navTitle: 'Endodoncia',
    eyebrow: 'Tratamiento de conducto',
    heroImage: '/img/dentist-8.jpg',
    icon: 'uil-clipboard-notes',
    summary:
      'La endodoncia, conocida como tratamiento de conducto, permite tratar infecciones o inflamaciones profundas de la pulpa dental para conservar el diente.',
    intro:
      'Cuando una caries profunda, trauma o fractura compromete el nervio del diente, puede aparecer dolor intenso, sensibilidad prolongada, inflamacion o absceso. La endodoncia limpia y sella los conductos internos para eliminar la infeccion y permitir la restauracion posterior.',
    highlights: [
      'Diagnostico de dolor dental, infecciones y lesiones profundas.',
      'Tratamiento para salvar piezas que de otro modo podrian requerir extraccion.',
      'Uso de radiografias para evaluar raices y hueso alrededor del diente.',
      'Restauracion posterior con resina o corona segun la perdida de estructura.'
    ],
    idealFor: [
      'Dolor espontaneo o sensibilidad intensa al frio o calor.',
      'Inflamacion, absceso o molestia al morder.',
      'Caries profunda cercana al nervio.',
      'Dientes fracturados o golpeados.'
    ],
    process: [
      'Evaluacion clinica y radiografica.',
      'Anestesia local y aislamiento del diente.',
      'Limpieza, desinfeccion y sellado de conductos.',
      'Restauracion definitiva para proteger el diente tratado.'
    ],
    faq: [
      {
        question: 'La endodoncia duele?',
        answer:
          'Se realiza con anestesia local. Segun la ADA, suele haber poco o ningun dolor durante el procedimiento, y la molestia previa deberia mejorar despues del tratamiento.'
      },
      {
        question: 'Despues necesito corona?',
        answer:
          'Depende de cuanta estructura dental queda. En molares o dientes muy debilitados, una corona puede proteger mejor la pieza.'
      }
    ],
    related: ['odontologia-general', 'protesis-dentales', 'implantes-dentales'],
    sources: [
      {
        label: 'MouthHealthy / ADA - Root Canals',
        url: 'https://www.mouthhealthy.org/all-topics-a-z/root-canals'
      }
    ]
  },
  {
    id: 8,
    slug: 'protesis-dentales',
    title: 'Protesis Dentales',
    navTitle: 'Protesis Dentales',
    eyebrow: 'Rehabilitacion oral',
    heroImage: '/img/dentist-4.jpg',
    icon: 'uil-smile-beam',
    summary:
      'Las protesis dentales ayudan a recuperar dientes perdidos, mejorar masticacion, pronunciacion, soporte facial y confianza al sonreir.',
    intro:
      'Una protesis puede ser removible, fija o apoyada en implantes segun el caso. El plan depende de cuantos dientes faltan, estado de encias y hueso, salud general, presupuesto y expectativas esteticas.',
    highlights: [
      'Evaluacion de dientes faltantes, encia, mordida y soporte oseo.',
      'Opciones removibles, parciales, completas o combinadas con implantes.',
      'Diseno orientado a funcion, comodidad y apariencia natural.',
      'Controles de ajuste para evitar molestias y mejorar adaptacion.'
    ],
    idealFor: [
      'Perdida de uno o varios dientes.',
      'Dificultad para masticar o hablar por ausencia dental.',
      'Protesis antiguas flojas, incomodas o fracturadas.',
      'Necesidad de rehabilitar despues de extracciones o implantes.'
    ],
    process: [
      'Diagnostico de boca, mordida y tejidos de soporte.',
      'Discusion de alternativas fijas, removibles o implantosoportadas.',
      'Toma de registros, pruebas y ajustes.',
      'Entrega, instrucciones de cuidado y controles.'
    ],
    faq: [
      {
        question: 'Una protesis nueva se siente rara al inicio?',
        answer:
          'Si, es normal necesitar un periodo de adaptacion. Los controles permiten ajustar puntos de presion y mejorar comodidad.'
      },
      {
        question: 'Las protesis requieren limpieza diaria?',
        answer:
          'Si. Deben limpiarse todos los dias, y tambien se debe cuidar la encia, lengua y paladar para evitar irritacion y mal aliento.'
      }
    ],
    related: ['implantes-dentales', 'odontologia-general', 'cirugias-dentales'],
    sources: [
      {
        label: 'MouthHealthy / ADA - Dentures',
        url: 'https://www.mouthhealthy.org/all-topics-a-z/dentures'
      }
    ]
  },
  {
    id: 9,
    slug: 'implantes-dentales',
    title: 'Implantes Dentales',
    navTitle: 'Implantes Dentales',
    eyebrow: 'Reposicion dental',
    heroImage: '/img/dentist-6.jpg',
    icon: 'uil-hospital',
    summary:
      'Los implantes dentales son una opcion para reemplazar dientes perdidos mediante postes colocados en el hueso que sirven de soporte para coronas, puentes o protesis.',
    intro:
      'Antes de colocar un implante se evalua salud general, encia, hueso disponible, habitos y necesidades protesicas. El objetivo es planificar una restauracion estable, funcional y estetica.',
    highlights: [
      'Evaluacion de hueso, encia y condiciones medicas relevantes.',
      'Planificacion de la posicion del implante segun la futura corona o protesis.',
      'Fase de cicatrizacion y osteointegracion antes de la restauracion definitiva.',
      'Mantenimiento periodico para cuidar encia, higiene y estabilidad.'
    ],
    idealFor: [
      'Perdida de un diente individual.',
      'Ausencia de varios dientes con necesidad de mayor estabilidad.',
      'Protesis removibles incomodas o con poca retencion.',
      'Pacientes con buena salud general y condiciones adecuadas de hueso.'
    ],
    process: [
      'Valoracion clinica y radiografica.',
      'Planificacion quirurgica y protesica.',
      'Colocacion del implante y periodo de cicatrizacion.',
      'Colocacion de corona, puente o protesis sobre implantes.'
    ],
    faq: [
      {
        question: 'Todos pueden colocarse implantes?',
        answer:
          'No siempre. La salud general, el hueso disponible, ciertas enfermedades y el tabaco pueden influir en la cicatrizacion y el pronostico.'
      },
      {
        question: 'Cuanto tarda el proceso?',
        answer:
          'Puede variar. La integracion del implante con el hueso puede tomar meses antes de colocar la restauracion definitiva, segun el caso.'
      }
    ],
    related: ['protesis-dentales', 'cirugias-dentales', 'odontologia-general'],
    sources: [
      {
        label: 'MouthHealthy / ADA - Implants',
        url: 'https://www.mouthhealthy.org/all-topics-a-z/implants'
      }
    ]
  },
  {
    id: 10,
    slug: 'cirugias-dentales',
    title: 'Cirugias Dentales',
    navTitle: 'Cirugias Dentales',
    eyebrow: 'Procedimientos quirurgicos',
    heroImage: '/img/dentist-3.jpg',
    icon: 'uil-hospital-square-sign',
    summary:
      'Las cirugias dentales incluyen procedimientos como extracciones simples o complejas, manejo de terceros molares y apoyo quirurgico para rehabilitaciones.',
    intro:
      'Toda cirugia dental debe iniciar con diagnostico, radiografias cuando corresponda y explicacion de riesgos, cuidados y alternativas. En Odonto Panama se orienta al paciente para tomar decisiones informadas y agendar el procedimiento adecuado.',
    highlights: [
      'Evaluacion de dolor, infeccion, fracturas o dientes sin posibilidad de restauracion.',
      'Extracciones indicadas por caries avanzada, enfermedad periodontal o trauma.',
      'Valoracion de terceros molares cuando hay dolor, infeccion, caries o falta de espacio.',
      'Indicaciones claras de cuidado postoperatorio y control.'
    ],
    idealFor: [
      'Dolor o infeccion asociada a muelas del juicio.',
      'Dientes fracturados o con caries que no pueden restaurarse.',
      'Preparacion para ortodoncia, protesis o implantes.',
      'Inflamacion, abscesos o molestias al morder.'
    ],
    process: [
      'Consulta diagnostica y revision de historia medica.',
      'Radiografia o imagen indicada para planificar.',
      'Explicacion del procedimiento, anestesia y cuidados.',
      'Cirugia, seguimiento y recomendaciones de recuperacion.'
    ],
    faq: [
      {
        question: 'Siempre hay que sacar las muelas del juicio?',
        answer:
          'No siempre. Se indica extraccion cuando hay dolor, infeccion, caries, dano a dientes vecinos, quistes u otros hallazgos clinicos.'
      },
      {
        question: 'Necesito radiografia antes de una cirugia?',
        answer:
          'Frecuentemente si. Las imagenes ayudan a ver posicion de raices, hueso y estructuras cercanas para planificar con mayor seguridad.'
      }
    ],
    related: ['implantes-dentales', 'protesis-dentales', 'endodoncia'],
    sources: [
      {
        label: 'MouthHealthy / ADA - Wisdom Teeth',
        url: 'https://www.mouthhealthy.org/all-topics-a-z/wisdom-teeth'
      }
    ]
  }
];

export const servicePageMap = servicePages.reduce((acc, service) => {
  acc[service.slug] = service;
  return acc;
}, {});

export const getServiceHref = slug => `/servicios/${slug}`;
