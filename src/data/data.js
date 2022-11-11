const products = [
        {
            id: 1,
            title: "Torta de Chocolate",
            price: 4139,
            stock: 18,
            category: null,
            thumbnail: "/img/postr-291528.jpg",
            description: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
            id: 2,
            title: "Brownie",
            price: 4273,
            stock: 16,
            category: null,
            thumbnail: "/img/choclt-45202.jpg",
            description: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
        },
        {
            id: 3,
            title: "Macarons",
            price: 4683,
            stock: 7,
            category: null,
            thumbnail: "/img/macarons-121.jpg",
            description: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
            id: 4,
            title: "Muffin",
            price: 4111,
            stock: 9,
            category: null,
            thumbnail: "/img/muffin-913136.jpg",
            description: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
        },
        {
            id: 5,
            title: "Loquat",
            price: 4355,
            stock: 8,
            category: null,
            thumbnail: "/img/pastr-5419104.jpg",
            description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
        },
        {
            id: 6,
            title: "Pastel de Chocolate",
            price: 4140,
            stock: 8,
            category: null,
            thumbnail: "/img/cake-g381caea53_1280.jpg",
            description: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
        },
        {
            id: 7,
            title: "Muffin con Dulce de leche",
            price: 4318,
            stock: 17,
            category: null,
            thumbnail: "/img/postr-1055272.jpg",
            description: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
        },
        {
            id: 8,
            title: "Cheese Cake con Salsa de Frambuesa",
            price: 1553,
            stock: 15,
            category: null,
            thumbnail: "/img/ptort-1126359.jpg",
            description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
        },
        {
            id: 9,
            title: "postre",
            price: 1458,
            stock: 14,
            category: null,
            thumbnail: "/img/ptort-2144112.jpg",
            description: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
        },
        {
            id: 10,
            title: "Vatrushka",
            price: 2060,
            stock: 17,
            category: null,
            thumbnail: "/img/vatrushka-572.jpg",
            description: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
        },
        {
            id: 11,
            title: "Torta",
            price: 4198,
            stock: 19,
            category: null,
            thumbnail: "/img/cake-g317c9185a_1280.jpg",
            description: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
        },
        {
            id: 12,
            title: "Tiramisú",
            price: 1946,
            stock: 8,
            category: null,
            thumbnail: "/img/cake-gb846fba3f_1280.jpg",
            description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
        },
        {
            id: 13,
            title: "Torta",
            price: 3884,
            stock: 18,
            category: null,
            thumbnail: "/img/cake-gcbe86651b_1280.jpg",
            description: "Phasellus in felis. Donec semper sapien a libero. Nam dui."
        },
        {
            id: 14,
            title: "Pastel de Fruta",
            price: 4724,
            stock: 11,
            category: null,
            thumbnail: "/img/cake-gef06f76bc_1280.jpg",
            description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
        },
        {
            id: 15,
            title: "Pan Dulce",
            price: 4428,
            stock: 14,
            category: null,
            thumbnail: "/img/cupcake-gd1179a2c2_1280.jpg",
            description: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
        },
        {
            id: 16,
            title: "Pastel de Fruta",
            price: 1319,
            stock: 13,
            category: null,
            thumbnail: "/img/gugelhupf-g7ca98cb04_1280.jpg",
            description: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
            id: 17,
            title: "Torta de Naranja",
            price: 1313,
            stock: 15,
            category: null,
            thumbnail: "/img/orange-cake-g039b6a952_1280.jpg",
            description: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
        },
        {
            id: 18,
            title: "Pancakes",
            price: 2132,
            stock: 7,
            category: null,
            thumbnail: "/img/pancakes-g778afc158_1280.jpg",
            description: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
        },
        {
            id: 19,
            title: "Tarta de Requesón",
            price: 2458,
            stock: 14,
            category: null,
            thumbnail: "/img/quark-tart-g2d3117bc4_1280.jpg",
            description: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
        },
        {
            id: 20,
            title: "Tarta de Ricota",
            price: 1954,
            stock: 9,
            category: null,
            thumbnail: "/img/cheesecake-g85a220974_1280.jpg",
            description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
        },
]

export default products;