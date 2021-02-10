const products = [
    {
        id: 1,
        title: 'Notebook Asus',
        price: 80000,
        description: 'Esta notebook Asus ZenBook rompera todas las expectativas que puedas tener. Con su procesador Ryzen 5 contaras con todas las facilidades posibles cuando se trata de rendimiento. Asimismo, su potente tarjeta grafica integrada te permitira disfrutar de los ultimos juegos del mercado sin problemas',
        image: '/images/notebook.jpeg',
        stockItem: 5,
        category: 'notebooks'
    },
    {
        id: 2,
        title: 'Pantalla Samsung',
        price: 20000,
        image: '/images/pantalla.jpg',
        stockItem: 3,
        description: 'Pantalla con toda la ultima tecnologia disponible en el mercado. Disfruta de las mejores peliculas y series es un fabulosa calidad 4K',
        category: 'tvs'
    },
    {
        id: 3,
        title: 'Tablet Lenovo',
        price: 8000,
        image: '/images/tablet.jpg',
        stockItem: 7,
        description: 'Te gusta ser practico en tu dia a dia ? Entonces sin dudas este producto es para vos. Disfruta de la potencia de una computadora de escritorio en una simple tablet que puede entrar en cualquier mochila',
        category: 'notebooks'
    },
    {
        id: 4,
        title: 'Amazon Echo 3° Gen',
        price: 4000,
        image: '/images/alexa.jpg',
        stockItem: 1,
        description: 'LLeva la musica a todos lados con este parlante Amazon. De lo mas economico del mercado, pero no por eso de una mala calidad. Todo lo contrario ! Disfruta de un sonido envolvente con este Parlante Echo 3° Gen',
        category: 'parlantes'
    },
    {
        id: 5,
        title: "Demon's Souls PS5 ",
        price: 4000,
        image: '/images/demon.jpg',
        stockItem: 6,
        description: "De PlayStation Studios y Bluepoint Games llega un remake del clásico de PlayStation Demon's Souls. Completamente reconstruido desde cero y mejorado con maestría, este remake presenta los horrores de una tierra de fantasía oscura saturada de niebla a toda una nueva generación de jugadores.",
        category: 'juegos'
    },
    {
        id: 6,
        title: "Spiderman PS5 ",
        price: 6999,
        image: '/images/spiderman.jpg',
        stockItem: 8,
        description: "Descubre la historia arácnida completa con Marvel's Spider-Man: Miles Morales Edición Definitiva. Este paquete imperdible incluye Marvel's Spider-Man Remasterizado, el galardonado juego completo, con los tres capítulos de contenido descargable de la aventura Marvel's Spider-Man",
        category: 'juegos'
    },
    {
        id: 7,
        title: "Apple Mac Air",
        price: 152999,
        image: '/images/mac.jpg',
        stockItem: 2,
        description: "Disfruta de la ultima tecnologia en un producto completamente VIP. Nunca podras volver a usar otra notebook luego de hacerte con esta Mac Air",
        category: 'notebooks'
    },
    {
        id: 8,
        title: "Parlante Sony",
        price: 39599,
        image: '/images/sony.jpg',
        stockItem: 15,
        description: "Parlante Bluetooth Sony MHC-V02. Gracias al Jet Bass Booster permite que la música suene más potente llevando el sonido de graves a larga distancia.",
        category: 'parlantes'
    },
    {
        id: 9,
        title: "Parlante Sony",
        price: 69999,
        image: '/images/tvcurvo.jpg',
        stockItem: 10,
        description: "Un peldaño por debajo de la serie QLED de 2017, se sitúa el Samsung MU9005, un televisor con excelentes prestaciones para quien busque un televisor completo pero a un precio contenido",
        category: 'tvs'
    }

]

export default products