'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Courses', [
      {
        title: 'Semipermanete',
        subtitle: 'Aprenderas todos sobre la belleza de manos',
        description: 'Descubre el arte de la belleza duradera con nuestro curso de semipermanente. Aprende las técnicas más avanzadas para realzar la apariencia natural de tus clientes mediante cejas, labios y ojos perfectamente definidos. Nuestros expertos te guiarán en el uso de productos de alta calidad y te enseñarán cómo crear resultados impresionantes y de larga duración. ¡Inscríbete ahora y conviértete en un profesional en el mundo del maquillaje semipermanente!',
        duration: 90,
        start_date: '2023-10-15',
        capacity: 70,
        price: 4000,
        due: 6,
        has_surcharge: true,
        surcharge_percentage: 21,
        modality: 'Presencial',
        schedules: 'Lunes y Viernes de 17hs a 21hs',
        banner: 'https://i.ibb.co/3cFPBC2/Tipos-de-manicura-img3.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Velas',
        subtitle: 'Aprenderas a realizar velas aromaticas y creativas ',
        description: '¿Alguna vez te has preguntado cómo crear velas hermosas y aromáticas desde cero? ¿Te gustaría aprender a decorar tu hogar con velas hechas por ti mismo y experimentar sus beneficios calmantes? ¡Entonces nuestro curso "Arte y Ciencia de las Velas" es perfecto para ti!.Este curso te sumergirá en el apasionante mundo de las velas, desde los conceptos básicos de su fabricación hasta técnicas avanzadas de diseño y aromaterapia. Aprenderás a mezclar fragancias, elegir los mejores materiales, y crear velas únicas que reflejen tu estilo personal. También explorarás cómo usar las velas para mejorar tu bienestar y crear un ambiente relajante en tu hogar.',
        duration: 90,
        start_date: '2023-10-10',
        capacity: 60,
        price: 3500,
        due: 6,
        has_surcharge: true,
        surcharge_percentage: 21,
        modality: 'Online',
        schedules: 'Martes y Jueves de 17hs a 21hs',
        banner: 'https://i.ibb.co/qg1pxrv/aprende-a-hacer-velas-gratis-curso-online.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Lenceria',
        subtitle: 'Aprenderas a realizar bodys',
        description: '¿Te apasiona la moda íntima y siempre has querido aprender a diseñar y confeccionar tu propia lencería hermosa y cómoda? ¡Entonces nuestro curso "Creación de Lencería" es la elección perfecta para ti!. Este curso te guiará a través de los fundamentos de la creación de lencería, desde la elección de telas y patrones hasta técnicas de costura avanzadas. Aprenderás a diseñar sujetadores, bragas, camisones y otros elementos de lencería que se ajusten a tu estilo personal y te hagan sentir segura y elegante. Descubre el arte de combinar comodidad y belleza en cada prenda que crees.',
        duration: 90,
        start_date: '2023-10-01',
        capacity: 40,
        price: 3000,
        due: 6,
        has_surcharge: true,
        surcharge_percentage: 21,
        modality: 'Presencial',
        schedules: 'Lunes y Viernes de 09hs a 11hs',
        banner: 'https://i.ibb.co/DQcwxrD/images1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Tejido croche y macrame',
        subtitle: 'Aprenderas a realizar artesanias y mucho mas',
        description: 'Este curso te enseñará las técnicas esenciales de macramé, desde los nudos básicos hasta proyectos más avanzados. Aprenderás a combinar cuerdas y crear intrincados diseños de encaje de macramé, todo mientras exploras tu creatividad. ¡Descubre el arte de dar vida a tus ideas con hilos y nudos!',
        duration: 60,
        start_date: '2023-10-28',
        capacity: 50,
        price: 2000,
        due: 6,
        has_surcharge: true,
        surcharge_percentage: 21,
        modality: 'Online',
        schedules: 'Martes y Jueves de 11hs a 13hs',
        banner: 'https://i.ibb.co/n18HTVy/istockphoto-1270751874-612x612.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Jabones',
        subtitle: 'Una buena actividad para pasar tu tiempos libres',
        description: 'En este curso, explorarás las técnicas tradicionales y modernas de fabricación de jabones, aprenderás sobre ingredientes naturales y seguros, y descubrirás cómo decorar y presentar tus creaciones de manera elegante. Ya sea para uso personal o para regalos únicos y personalizados, este curso te dará las habilidades y la confianza para convertirte en un maestro jabonero.',
        duration: 30,
        start_date: '2023-10-12',
        capacity: 80,
        price: 3000,
        due: 6,
        has_surcharge: true,
        surcharge_percentage: 21,
        modality: 'Presencial',
        schedules: 'Lunes y Viernes de 17hs a 21hs',
        banner: 'https://i.ibb.co/9w07tFt/Sin-t-tulo5.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Slime',
        subtitle: 'Una hermosa actividad sensorial y divertida',
        description: 'En este curso, aprenderás las técnicas esenciales para hacer slimes seguros y entretenidos, desde la elección de ingredientes hasta la decoración y el almacenamiento. Explorarás una variedad de recetas y estilos de slimes, y disfrutarás de horas de diversión mientras creas tus propios slimes. ¡Sumérgete en el mundo mágico de los slimes y desata tu creatividad',
        duration: 120,
        start_date: '2023-10-20',
        capacity: 70,
        price: 4000,
        due: 6,
        has_surcharge: true,
        surcharge_percentage: 21,
        modality: 'Online',
        schedules: 'Lunes y Viernes de 17hs a 21hs',
        banner: 'https://i.ibb.co/ssn36L2/images6.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Sahumerios',
        subtitle: 'Aprenderas sobre aromas y ambientes',
        description: 'En este curso, aprenderás las técnicas esenciales para crear sahumerios con fragancias únicas, desde la elección de ingredientes hasta la mezcla y el proceso de secado. Explorarás la historia y los usos espirituales de los sahumerios en diferentes culturas y aprenderás a incorporarlos en tu práctica personal. ¡Descubre el arte de transformar simples ingredientes en aromas que elevan el espíritu!',
        duration: 45,
        start_date: '2023-10-04',
        capacity: 70,
        price: 4000,
        due: 6,
        has_surcharge: true,
        surcharge_percentage: 21,
        modality: 'Online',
        schedules: 'Martes y Jueves de 09hs a 11hs',
        banner: 'https://i.ibb.co/ZxsVnMw/Sin-t-tulo4.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Diseño y reciclaje',
        subtitle: 'Materializacion de productos y envoltorios ecologicos',
        description: 'En este curso, explorarás las bases del diseño sostenible y aprenderás a identificar y seleccionar materiales reciclables. Descubrirás cómo transformar objetos cotidianos en piezas de diseño únicas y cómo contribuir a la conservación del medio ambiente. ¡Únete a nosotros y dale nueva vida a lo que otros consideran desechos!',
        duration: 90,
        start_date: '2023-10-19',
        capacity: 70,
        price: 20000,
        due: 6,
        has_surcharge: true,
        surcharge_percentage: 21,
        modality: 'Online',
        schedules: 'Lunes y Viernes de 20hs a 22hs',
        banner: 'https://i.ibb.co/qsWC3jQ/6282986c8ac93-950x512-700x394.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Sublimacion',
        subtitle: 'Podras aplicarlo en distintos productos como tazas, gorras, llaveros entre otros',
        description: 'En este curso, aprenderás los conceptos fundamentales de la sublimación, desde la elección de diseños y colores hasta la técnica de transferencia. Descubrirás cómo trabajar con prensas de calor y tintas de sublimación, y crearás tus propios productos personalizados. ¡Explora tu lado creativo y da vida a tus ideas con la sublimación!',
        duration: 50,
        start_date: '2023-11-15',
        capacity: 50,
        price: 25000,
        due: 6,
        has_surcharge: true,
        surcharge_percentage: 21,
        modality: 'Presencial',
        schedules: 'Martes y Miércoles de 20hs a 22hs',
        banner: 'https://i.ibb.co/jzGK20h/ss-static-01-esmsv.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Courses', null, {});
  },
};