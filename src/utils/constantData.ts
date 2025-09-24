const tabsArr = [
  { _id: 1, title: "Home", type: "both", link: "/" },
  { _id: 2, title: "Category", type: "both", link: "/category" },
  { _id: 3, title: "My Cart", type: "login", link: "/cart" },
  { _id: 4, title: "About Us", type: "both", link: "/about" },
  { _id: 5, title: "Help & Support", type: "both", link: "/help" },
];

const bannerList = [
  {
    _id: 1,
    url: "https://static.vecteezy.com/system/resources/thumbnails/005/720/479/small_2x/banner-abstract-background-board-for-text-and-message-design-modern-free-vector.jpg",
  },
  {
    _id: 2,
    url: "https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg",
  },
  {
    _id: 3,
    url: "https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_1280.jpg",
  },
];

const shopByCategory = [
  {
    _id: 1,
    title: "Clothing",
    url: "https://t3.ftcdn.net/jpg/01/38/94/62/360_F_138946263_EtW7xPuHRJSfyl4rU2WeWmApJFYM0B84.jpg",
  },
  {
    _id: 2,
    title: "TV/Laptop",
    url: "https://media.istockphoto.com/id/185007194/photo/collection-of-electronic-devices-on-white-background.jpg?s=612x612&w=0&k=20&c=NJx7burKF9MZVCcVA4cZrTlNVOAL4WW4DeXHdW2mwPI=",
  },
  {
    _id: 3,
    title: "Mobile",
    url: "https://img.freepik.com/free-vector/flat-design-smartphone-different-perspectives_52683-52558.jpg",
  },
  {
    _id: 4,
    title: "Food Court",
    url: "https://images.picxy.com/cache/2020/11/24/bfbf1acd26e67aa7d1b0e0fb83b329e3.jpg",
  },
  {
    _id: 5,
    title: "Shoes",
    url: "https://hips.hearstapps.com/hmg-prod/images/mhl-052324-sandals-1979-6658d809e534a.jpg?crop=0.593xw:0.889xh;0.196xw,0.111xh&resize=1120:*",
  },
  {
    _id: 6,
    title: "Females Gowns",
    url: "https://images.textilecatalog.in/images/800/catalog/20230216/1676526080558757903-167646280697293928-z.jpeg",
  },
];

const newTrendProducts = [
  {
    _id: 1,
    title: "Cross T-Shirt Created in India",
    quantityAvailable: 10,
    price: 1299,
    discountPrice: 1099,
    productDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
    productImages: [
      "https://img.joomcdn.net/5e1a1431e3c2ee5984eb553d4d5c4cc6811e6bbc_original.jpeg",
    ],
    productIcon:
      "https://img.joomcdn.net/5e1a1431e3c2ee5984eb553d4d5c4cc6811e6bbc_original.jpeg",
    minQuantity: 1,
    maxQuantity: 10,
    deliveryDetails: [
      { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
      { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
      { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
      { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
    ],
    availableColors: [
      {
        _id: 1,
        color: "Red",
        images: [
          {
            _id: 1,
            image:
              "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Tshirt",
          },
          {
            _id: 2,
            image:
              "https://unsplash.com/photos/palm-tree-on-a-sandy-beach-with-boats-in-the-water-5bip5vxa5oU",
            title: "Tshirt",
          },
          {
            _id: 3,
            image:
              "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Tshirt",
          },
        ],
      },
      {
        _id: 2,
        color: "Blue",
        images: [
          {
            _id: 1,
            image:
              "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Tshirt",
          },
          {
            _id: 2,
            image:
              "https://unsplash.com/photos/palm-tree-on-a-sandy-beach-with-boats-in-the-water-5bip5vxa5oU",
            title: "Tshirt",
          },
          {
            _id: 3,
            image:
              "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Tshirt",
          },
        ],
      },
      {
        _id: 3,
        color: "Green",
        images: [
          {
            _id: 1,
            image:
              "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Tshirt",
          },
          {
            _id: 2,
            image:
              "https://unsplash.com/photos/palm-tree-on-a-sandy-beach-with-boats-in-the-water-5bip5vxa5oU",
            title: "Tshirt",
          },
          {
            _id: 3,
            image:
              "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Tshirt",
          },
        ],
      },
    ],
    category: {
      _id: 1,
      title: "Clothing",
    },
    subCategory: {
      _id: 1,
      title: "Mens",
    },
    productSpecification: {
      availableSizes: ["S", "M", "L", "XL"],
      availableServices: [
        { _id: 1, icon: "", title: "10 Day Return" },
        { _id: 2, icon: "", title: "Cash on Delivery" },
      ],
      packOf: 1,
      brand: "Aroma",
      isAvailable: true,
    },
    rating: 4.2,
    reviews: [],
  },
  {
    _id: 2,
    title: "Super Combed Cotton Men Solid Grey Track Pants",
    quantityAvailable: 10,
    price: 949,
    discountPrice: 465,
    productDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
    productImages: [
      "https://rukminim2.flixcart.com/image/704/844/xif0q/track-pant/v/v/b/-original-imahyz7ydygxsqhy.jpeg?q=90&crop=false",
      "https://rukminim2.flixcart.com/image/704/844/xif0q/track-pant/s/u/i/m-sp31-0103-pfgry-jockey-original-imahce4zvyb8zz3k.jpeg?q=90&crop=false",
      "https://rukminim2.flixcart.com/image/704/844/xif0q/track-pant/e/h/b/-original-imahy658fzdahfpr.jpeg?q=90&crop=false",
    ],
    productIcon:
      "https://rukminim2.flixcart.com/image/704/844/xif0q/track-pant/v/v/b/-original-imahyz7ydygxsqhy.jpeg?q=90&crop=false",
    minQuantity: 2,
    maxQuantity: 10,
    deliveryDetails: [
      { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
      { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
      { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
      { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
    ],
    availableColors: [
      { _id: 1, color: "Red", images: [] },
      { _id: 2, color: "Blue", images: [] },
      { _id: 3, color: "Green", images: [] },
    ],
    category: {
      _id: 1,
      title: "Clothing",
    },
    subCategory: {
      _id: 1,
      title: "Mens",
    },
    productSpecification: {
      availableSizes: ["S", "M", "L", "XL"],
      availableServices: [
        { _id: 1, icon: "", title: "10 Day Return" },
        { _id: 2, icon: "", title: "Cash on Delivery" },
        { _id: 3, icon: "", title: "E-Commerce Assured" },
      ],
      packOf: 1,
      brand: "Force NXT",
      isAvailable: true,
    },
    rating: 4.4,
    reviews: [
      {
        _id: 1,
        title: "Best in the market",
        rating: 5,
        description: "Good",
        user: "Gowri Sankar",
        isVerified: true,
      },
      {
        _id: 2,
        title: "Good part",
        rating: 4.2,
        description: "Good",
        user: "Testing User",
        isVerified: false,
      },
    ],
  },
  {
    _id: 3,
    title: "Men Slim Mid Rise Blue Jeans",
    quantityAvailable: 0,
    price: 2299,
    discountPrice: 422,
    productDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
    productImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUVuzmYUuLX7-AQHKpAcJUAxbrBWEFuYqvA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KaOqUCnPY84sav2kDYF1AIYwwjpBetpz85d1p3h_0tuFYTSIrgJkvDYJDZdz4SDXUE0&usqp=CAU",
    ],
    productIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUVuzmYUuLX7-AQHKpAcJUAxbrBWEFuYqvA&s",
    minQuantity: 2,
    maxQuantity: 10,
    deliveryDetails: [
      { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
      { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
      { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
      { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
    ],
    availableColors: [
      { _id: 1, color: "Red", images: [] },
      { _id: 2, color: "Blue", images: [] },
      { _id: 3, color: "Green", images: [] },
    ],
    category: {
      _id: 1,
      title: "Clothing",
    },
    subCategory: {
      _id: 1,
      title: "Mens",
    },
    productSpecification: {
      availableSizes: ["28", "30", "32", "34"],
      availableServices: [
        { _id: 1, icon: "", title: "10 Day Return" },
        { _id: 2, icon: "", title: "Cash on Delivery" },
        { _id: 3, icon: "", title: "E-Commerce Assured" },
      ],
      packOf: 1,
      brand: "Rasso",
      isAvailable: true,
    },
    rating: 4.4,
    reviews: [
      {
        _id: 1,
        title: "Best in the market",
        rating: 5,
        description: "Good",
        user: "Gowri Sankar",
        isVerified: true,
      },
      {
        _id: 2,
        title: "Good part",
        rating: 4.2,
        description: "Good",
        user: "Testing User",
        isVerified: false,
      },
    ],
  },
  {
    _id: 4,
    title: "Women Fit and Flare Pink Knee Length Dress",
    quantityAvailable: 10,
    price: 3199,
    discountPrice: 1598,
    productDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
    productImages: [
      "https://www.jaipuriadaah.com/cdn/shop/files/DSC_4076copy_600x.jpg?v=1719492417",
      "https://www.jaipuriadaah.com/cdn/shop/files/DSC_4106copy_600x.jpg?v=1719489929",
    ],
    productIcon:
      "https://www.jaipuriadaah.com/cdn/shop/files/DSC_4076copy_600x.jpg?v=1719492417",
    minQuantity: 1,
    maxQuantity: 10,
    deliveryDetails: [
      { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
      { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
      { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
      { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
    ],
    availableColors: [],
    category: {
      _id: 1,
      title: "Clothing",
    },
    subCategory: {
      _id: 2,
      title: "Women",
    },
    productSpecification: {
      availableSizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"],
      availableServices: [
        { _id: 1, icon: "", title: "Trending Style" },
        { _id: 2, icon: "", title: "Cash on Delivery" },
        { _id: 3, icon: "", title: "E-Commerce Assured" },
        { _id: 4, icon: "", title: "Best Prices" },
      ],
      packOf: 1,
      brand: "DIVENA",
      isAvailable: true,
    },
    rating: 0,
    reviews: [],
  },
];

const productInfo = {
  _id: 1,
  title: "Cross T-Shirt Created in India",
  quantityAvailable: 10,
  price: 1299,
  discountPrice: 1099,
  productDescription:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
  productImages: [
    "https://www.jaipuriadaah.com/cdn/shop/files/DSC_4076copy_600x.jpg?v=1719492417",
    "https://rukminim2.flixcart.com/image/704/844/xif0q/track-pant/v/v/b/-original-imahyz7ydygxsqhy.jpeg?q=90&crop=false",
    "https://img.joomcdn.net/5e1a1431e3c2ee5984eb553d4d5c4cc6811e6bbc_original.jpeg",
  ],
  productIcon:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUVuzmYUuLX7-AQHKpAcJUAxbrBWEFuYqvA&s",
  minQuantity: 1,
  maxQuantity: 10,
  deliveryDetails: [
    { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
    { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
    { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
    { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
  ],
  availableColors: [
    {
      _id: 1,
      color: "Red",
      images: [
        "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1622396636133-ba43f812bc35?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      _id: 2,
      color: "Blue",
      images: [
        "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://unsplash.com/photos/palm-tree-on-a-sandy-beach-with-boats-in-the-water-5bip5vxa5oU",
        "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      _id: 3,
      color: "Green",
      images: [
        "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://unsplash.com/photos/palm-tree-on-a-sandy-beach-with-boats-in-the-water-5bip5vxa5oU",
        "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
  ],
  category: {
    _id: 1,
    title: "Clothing",
  },
  subCategory: {
    _id: 1,
    title: "Mens",
  },
  productSpecification: {
    availableSizes: ["S", "M", "L", "XL"],
    availableServices: [
      {
        _id: 1,
        icon: "https://png.pngtree.com/png-clipart/20220930/original/pngtree-10-day-replacement-guarantee-badge-image-png-image_8646350.png",
        title: "10 Day Return",
      },
      {
        _id: 2,
        icon: "https://img.freepik.com/premium-vector/cash-delivery_569841-122.jpg?semt=ais_incoming&w=740&q=80",
        title: "Cash on Delivery",
      },
    ],
    packOf: 1,
    brand: "Aroma",
    isAvailable: true,
  },
  priceSection: [
    { _id: 1, title: "INR", price: 1299, discountPrice: 1099, symbol: "₹" },
    { _id: 2, title: "USD", price: 14.74, discountPrice: 12.47, symbol: "$" },
  ],
  rating: 4.2,
  reviews: [],
};

const wishlistData = [
  {
    _id: 1,
    title: "Cross T-Shirt Created in India",
    quantityAvailable: 10,
    price: 1299,
    discountPrice: 1099,
    isAvailable: true,
    productIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUVuzmYUuLX7-AQHKpAcJUAxbrBWEFuYqvA&s",
    minQuantity: 1,
    isWishlist: true,
    rating: 4.2,
  },
  {
    _id: 2,
    title: "Cross T-Shirt Created in India",
    quantityAvailable: 10,
    price: 1299,
    discountPrice: 1099,
    isAvailable: true,
    productIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUVuzmYUuLX7-AQHKpAcJUAxbrBWEFuYqvA&s",
    minQuantity: 1,
    isWishlist: true,
    rating: 4.2,
  },
  {
    _id: 3,
    title: "Cross T-Shirt Created in India",
    quantityAvailable: 10,
    price: 1299,
    discountPrice: 1099,
    isAvailable: true,
    productIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUVuzmYUuLX7-AQHKpAcJUAxbrBWEFuYqvA&s",
    minQuantity: 1,
    isWishlist: true,
    rating: 4.2,
  },
  {
    _id: 4,
    title: "Cross T-Shirt Created in India",
    quantityAvailable: 10,
    price: 1299,
    discountPrice: 1099,
    isAvailable: true,
    productIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUVuzmYUuLX7-AQHKpAcJUAxbrBWEFuYqvA&s",
    minQuantity: 1,
    isWishlist: true,
    rating: 4.2,
  },
];

const groceryTrendingProduct = [
  {
    _id: 1,
    title: "Pune Special Apples",
    quantityAvailable: 10,
    price: 1299,
    discountPrice: 1099,
    productDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
    productImages: [],
    productIcon:
      "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    minQuantity: 1,
    maxQuantity: 10,
    deliveryDetails: [
      { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
      { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
      { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
      { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
    ],
    availableColors: [],
    category: {
      _id: 1,
      title: "Grocery",
    },
    subCategory: {
      _id: 1,
      title: "Fruits",
    },
    productSpecification: {
      availableSizes: ["200GM", "250GM", "500GM", "1KG"],
      availableServices: [
        { _id: 1, icon: "", title: "10 Day Return" },
        { _id: 2, icon: "", title: "Cash on Delivery" },
      ],
      packOf: 1,
      brand: "DMart",
      isAvailable: true,
    },
    rating: 4.2,
    reviews: [],
  },
  {
    _id: 2,
    title: "Pune Special Guava",
    quantityAvailable: 10,
    price: 1299,
    discountPrice: 1099,
    productDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
    productImages: [],
    productIcon:
      "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    minQuantity: 1,
    maxQuantity: 10,
    deliveryDetails: [
      { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
      { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
      { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
      { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
    ],
    availableColors: [],
    category: {
      _id: 1,
      title: "Grocery",
    },
    subCategory: {
      _id: 1,
      title: "Fruits",
    },
    productSpecification: {
      availableSizes: ["200GM", "250GM", "500GM", "1KG"],
      availableServices: [
        { _id: 1, icon: "", title: "10 Day Return" },
        { _id: 2, icon: "", title: "Cash on Delivery" },
      ],
      packOf: 1,
      brand: "DMart",
      isAvailable: true,
    },
    rating: 4.2,
    reviews: [],
  },
  {
    _id: 3,
    title: "Pune Special Banana",
    quantityAvailable: 10,
    price: 1299,
    discountPrice: 1099,
    productDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
    productImages: [],
    productIcon:
      "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    minQuantity: 1,
    maxQuantity: 10,
    deliveryDetails: [
      { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
      { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
      { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
      { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
    ],
    availableColors: [],
    category: {
      _id: 1,
      title: "Grocery",
    },
    subCategory: {
      _id: 1,
      title: "Fruits",
    },
    productSpecification: {
      availableSizes: ["200GM", "250GM", "500GM", "1KG"],
      availableServices: [
        { _id: 1, icon: "", title: "10 Day Return" },
        { _id: 2, icon: "", title: "Cash on Delivery" },
      ],
      packOf: 1,
      brand: "DMart",
      isAvailable: true,
    },
    rating: 4.2,
    reviews: [],
  },
  {
    _id: 4,
    title: "Pune Special Mangoes",
    quantityAvailable: 10,
    price: 1299,
    discountPrice: 1099,
    productDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
    productImages: [],
    productIcon:
      "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    minQuantity: 1,
    maxQuantity: 10,
    deliveryDetails: [
      { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
      { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
      { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
      { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
    ],
    availableColors: [],
    category: {
      _id: 1,
      title: "Grocery",
    },
    subCategory: {
      _id: 1,
      title: "Fruits",
    },
    productSpecification: {
      availableSizes: ["200GM", "250GM", "500GM", "1KG"],
      availableServices: [
        { _id: 1, icon: "", title: "10 Day Return" },
        { _id: 2, icon: "", title: "Cash on Delivery" },
      ],
      packOf: 1,
      brand: "DMart",
      isAvailable: true,
    },
    rating: 4.2,
    reviews: [],
  },
];

const newTrendCategoryList = [
  {
    _id: 1,
    category: {
      _id: 11,
      name: "Men's Wear",
    },
    products: [
      {
        _id: 1,
        title: "Pune Special Apples",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
      {
        _id: 2,
        title: "Pune Special Guava",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
      {
        _id: 3,
        title: "Pune Special Banana",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
      {
        _id: 4,
        title: "Pune Special Banana",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
    ],
    isActive: true,
  },
  {
    _id: 2,
    category: {
      _id: 12,
      name: "Women's Wear",
    },
    products: [
      {
        _id: 1,
        title: "Pune Special Apples",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
      {
        _id: 2,
        title: "Pune Special Guava",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
      {
        _id: 3,
        title: "Pune Special Banana",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
      {
        _id: 4,
        title: "Pune Special Banana",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
    ],
    isActive: true,
  },
  {
    _id: 3,
    category: {
      _id: 13,
      name: "Mobiles",
    },
    products: [
      {
        _id: 1,
        title: "Pune Special Apples",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
      {
        _id: 2,
        title: "Pune Special Guava",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
      {
        _id: 3,
        title: "Pune Special Banana",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
      {
        _id: 4,
        title: "Pune Special Banana",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
    ],
    isActive: true,
  },
  {
    _id: 4,
    category: {
      _id: 14,
      name: "Accessories",
    },
    products: [
      {
        _id: 1,
        title: "Pune Special Apples",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
      {
        _id: 2,
        title: "Pune Special Guava",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
      {
        _id: 3,
        title: "Pune Special Banana",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
      {
        _id: 4,
        title: "Pune Special Banana",
        quantityAvailable: 10,
        price: 1299,
        discountPrice: 1099,
        productDescription:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eius dolorem quisquam saepe voluptates, modi excepturi minima? Qui quas voluptatibus explicabo corporis dicta aperiam consequatur aliquam id dolore iste nemo, expedita tenetur placeat autem, cupiditate alias est? Repellat perferendis rem delectus placeat nisi accusantium aliquam voluptate optio, enim sint sit, consequatur beatae vitae pariatur reiciendis? Repellat eveniet veniam cum in at temporibus corrupti iste commodi asperiores, quis placeat, aut numquam voluptas, aliquid distinctio corporis quas consequuntur necessitatibus esse odio recusandae ab. Cum porro molestias consequuntur, odit totam tempore perferendis accusamus aspernatur ab suscipit, illo deleniti quis, neque praesentium excepturi! Quo blanditiis aliquam, quibusdam quos explicabo necessitatibus neque. Maiores laborum minus iste architecto voluptate odio, autem nemo minima ad fugiat perspiciatis iure laudantium quam sequi perferendis quos mollitia est alias, sed rem reprehenderit, eum excepturi debitis repudiandae. Necessitatibus, nostrum eum ratione fuga, eaque odio facilis, voluptatibus dolorem suscipit iste deleniti aspernatur?",
        productImages: [],
        productIcon:
          "https://images.unsplash.com/photo-1756680967174-c0e19cf94f49?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        minQuantity: 1,
        maxQuantity: 10,
        deliveryDetails: [
          { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
          { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
          { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
          { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
        ],
        availableColors: [],
        category: {
          _id: 1,
          title: "Grocery",
        },
        subCategory: {
          _id: 1,
          title: "Fruits",
        },
        productSpecification: {
          availableSizes: ["200GM", "250GM", "500GM", "1KG"],
          availableServices: [
            { _id: 1, icon: "", title: "10 Day Return" },
            { _id: 2, icon: "", title: "Cash on Delivery" },
          ],
          packOf: 1,
          brand: "DMart",
          isAvailable: true,
        },
        rating: 4.2,
        reviews: [],
      },
    ],
    isActive: true,
  },
];

const optionsList = [
  {
    _id: 1,
    title: "My Orders",
    subContent: [],
    type: "navigate",
    path: "/order",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg==",
  },
  {
    _id: 2,
    title: "My Cart",
    subContent: [],
    type: "navigate",
    path: "/cart",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg==",
  },
  {
    _id: 3,
    title: "Account Settings",
    subContent: [
      { _id: 1, title: "Profile Information" },
      { _id: 2, title: "Manage Address" },
    ],
    type: "section",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4=",
  },
  // {
  //   _id: 4,
  //   title: "Payment",
  //   subContent: [
  //     { _id: 1, title: "Saved UPI" },
  //     { _id: 2, title: "Saved Card" },
  //   ],
  //   type: "section",
  //   icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIzIDIyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtOSkiPjxlbGxpcHNlIGN4PSIyMC41NTciIGN5PSIyMCIgcng9IjIwLjU1NyIgcnk9IjIwIi8+PHBhdGggZD0iTTcgNmgyOHYyOEg3eiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMxLjUgMjd2MS4xNjdhMi4zNCAyLjM0IDAgMCAxLTIuMzMzIDIuMzMzSDEyLjgzM2EyLjMzMyAyLjMzMyAwIDAgMS0yLjMzMy0yLjMzM1YxMS44MzNBMi4zMzMgMi4zMzMgMCAwIDEgMTIuODMzIDkuNWgxNi4zMzRhMi4zNCAyLjM0IDAgMCAxIDIuMzMzIDIuMzMzVjEzSDIxYTIuMzMzIDIuMzMzIDAgMCAwLTIuMzMzIDIuMzMzdjkuMzM0QTIuMzMzIDIuMzMzIDAgMCAwIDIxIDI3aDEwLjV6TTIxIDI0LjY2N2gxMS42Njd2LTkuMzM0SDIxdjkuMzM0em00LjY2Ny0yLjkxN2MtLjk3IDAtMS43NS0uNzgyLTEuNzUtMS43NXMuNzgtMS43NSAxLjc1LTEuNzVjLjk2OCAwIDEuNzUuNzgyIDEuNzUgMS43NXMtLjc4MiAxLjc1LTEuNzUgMS43NXoiLz48L2c+PC9zdmc+",
  // },
  {
    _id: 5,
    title: "My Stuff",
    subContent: [
      // { _id: 1, title: "My Coupons" },
      // { _id: 2, title: "My Reviews" },
      { _id: 3, title: "My Wishlist" },
      // { _id: 4, title: "My Notification" },
    ],
    type: "section",
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDIzIDE5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIwLjUgMi43NWgtOUw5LjI1LjVIMi41QTIuMjQ3IDIuMjQ3IDAgMCAwIC4yNiAyLjc1bC0uMDEgMTMuNUEyLjI1NyAyLjI1NyAwIDAgMCAyLjUgMTguNWgxOGEyLjI1NyAyLjI1NyAwIDAgMCAyLjI1LTIuMjVWNWEyLjI1NyAyLjI1NyAwIDAgMC0yLjI1LTIuMjV6bS01LjYyNSAzLjM3NWEyLjI1NyAyLjI1NyAwIDAgMSAyLjI1IDIuMjUgMi4yNTcgMi4yNTcgMCAwIDEtMi4yNSAyLjI1IDIuMjU3IDIuMjU3IDAgMCAxLTIuMjUtMi4yNSAyLjI1NyAyLjI1NyAwIDAgMSAyLjI1LTIuMjV6bTQuNSA5aC05VjE0YzAtMS40OTYgMy4wMDQtMi4yNSA0LjUtMi4yNXM0LjUuNzU0IDQuNSAyLjI1djEuMTI1eiIvPjxwYXRoIGQ9Ik0tMi00aDI3djI3SC0yeiIvPjwvZz48L3N2Zz4=",
  },
  { _id: 6, title: "LogOut", subContent: [], type: "logout", icon: "" },
];

const genderOption = [
  { _id: 1, name: "Male", value: "male" },
  { _id: 2, name: "Female", value: "female" },
];

const faqPersonal = [
  {
    _id: 1,
    title: "What happens when I update my email address (or mobile number)?",
    desc: "Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).",
  },
  {
    _id: 2,
    title:
      "When will my E-Commerce account be updated with the new email address (or mobile number)?",
    desc: "It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.",
  },
  {
    _id: 3,
    title:
      "What happens to my existing E-Commerce account when I update my email address (or mobile number)?",
    desc: "Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.",
  },
  {
    _id: 4,
    title:
      "Does my Seller account get affected when I update my email address?",
    desc: "E-Commerce has a 'single sign-on' policy. Any changes will reflect in your Seller account also.",
  },
];

const stateData = [
  { _id: 1, value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { _id: 2, value: "Uttar Pradesh", label: "Uttar Pradesh" },
];

const addressOption = [
  { _id: 1, name: "Home", value: "home" },
  { _id: 2, name: "Work", value: "work" },
];

const cartData = [
  {
    _id: 1,
    title: "Cross T-Shirt Created in India",
    inCartQty: 1,
    quantityAvailable: 10,
    price: 1299,
    discountPrice: 1099,
    productIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUVuzmYUuLX7-AQHKpAcJUAxbrBWEFuYqvA&s",
    minQuantity: 1,
    maxQuantity: 10,
    deliveryDetails: [
      { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
      { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
      { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
      { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
    ],
    selectedSize: "S",
    brand: "Aroma",
    isAvailable: true,
    priceSection: [
      { _id: 1, title: "INR", price: 1299, discountPrice: 1099, symbol: "₹" },
      { _id: 2, title: "USD", price: 14.74, discountPrice: 12.47, symbol: "$" },
    ],
  },
  {
    _id: 2,
    title: "Cross T-Shirt Created in India",
    inCartQty: 2,
    quantityAvailable: 10,
    price: 1209,
    discountPrice: 899,
    productIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUVuzmYUuLX7-AQHKpAcJUAxbrBWEFuYqvA&s",
    minQuantity: 1,
    maxQuantity: 10,
    deliveryDetails: [
      { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
      { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
      { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
      { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
    ],
    selectedSize: "S",
    selectedColor: "Red",
    brand: "Aroma",
    isAvailable: true,
    priceSection: [
      { _id: 1, title: "INR", price: 1299, discountPrice: 1099, symbol: "₹" },
      { _id: 2, title: "USD", price: 14.74, discountPrice: 12.47, symbol: "$" },
    ],
  },
];
const saveLaterData = [
  {
    _id: 1,
    title: "T-Shirt Created in India",
    inCartQty: 1,
    quantityAvailable: 10,
    price: 1299,
    discountPrice: 1099,
    productIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUVuzmYUuLX7-AQHKpAcJUAxbrBWEFuYqvA&s",
    minQuantity: 1,
    maxQuantity: 10,
    deliveryDetails: [
      { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
      { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
      { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
      { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
    ],
    selectedSize: "S",
    brand: "Aroma",
    isAvailable: true,
    priceSection: [
      { _id: 1, title: "INR", price: 1299, discountPrice: 1099, symbol: "₹" },
      { _id: 2, title: "USD", price: 14.74, discountPrice: 12.47, symbol: "$" },
    ],
  },
  {
    _id: 2,
    title: "Cross T-Shirt Created in India",
    inCartQty: 1,
    quantityAvailable: 10,
    price: 1209,
    discountPrice: 899,
    productIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUVuzmYUuLX7-AQHKpAcJUAxbrBWEFuYqvA&s",
    minQuantity: 1,
    maxQuantity: 10,
    deliveryDetails: [
      { _id: 1, pincode: "474001", estimateDeliveryInDays: 2 },
      { _id: 2, pincode: "474011", estimateDeliveryInDays: 3 },
      { _id: 3, pincode: "474006", estimateDeliveryInDays: 1 },
      { _id: 4, pincode: "474009", estimateDeliveryInDays: 4 },
    ],
    selectedSize: "S",
    brand: "Aroma",
    isAvailable: true,
    priceSection: [
      { _id: 1, title: "INR", price: 1299, discountPrice: 1099, symbol: "₹" },
      { _id: 2, title: "USD", price: 14.74, discountPrice: 12.47, symbol: "$" },
    ],
  },
];

export {
  tabsArr,
  bannerList,
  shopByCategory,
  newTrendProducts,
  groceryTrendingProduct,
  optionsList,
  genderOption,
  faqPersonal,
  stateData,
  addressOption,
  productInfo,
  wishlistData,
  cartData,
  saveLaterData,
  newTrendCategoryList,
};
