export const item_data = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro",
    description:
      "The iPhone 14 Pro features a 6.1-inch Super Retina XDR display with ProMotion technology for a smoother user experience. Powered by the A16 Bionic chip, this phone delivers exceptional performance. The triple-camera system includes a 48MP main sensor for stunning photography.",
    price: 999.99,
    category: "Smartphones",
    ratings: {
      average: 4.8,
      count: 3200,
      reviews: [
        {
          user: "TechGuru",
          rating: 5,
          comment: "Absolutely fantastic performance and camera!",
        },
        {
          user: "AppleFan",
          rating: 4,
          comment: "Great phone but quite expensive.",
        },
      ],
    },
    variations: {
      colors: ["Space Black", "Deep Purple", "Silver", "Gold"],
      storage: ["128GB", "256GB", "512GB", "1TB"],
    },
    image: require("../../assets/dummyDataImages/1-iphone14Pro.png"),
    stock: 500,
    onSale: false,
  },
  {
    id: 2,
    title: "Samsung Galaxy S23 Ultra",
    description:
      "The Galaxy S23 Ultra features a 6.8-inch Dynamic AMOLED 2X display and a 200MP camera for stunning shots. Powered by the Snapdragon 8 Gen 2 processor and equipped with S Pen functionality.",
    price: 1199.99,
    category: "Smartphones",
    ratings: {
      average: 4.9,
      count: 2500,
      reviews: [
        {
          user: "AndroidFan",
          rating: 5,
          comment: "Best Android phone I've used so far!",
        },
        { user: "GadgetLover", rating: 4, comment: "Amazing but quite bulky." },
      ],
    },
    variations: {
      colors: ["Phantom Black", "Green", "Cream", "Lavender"],
      storage: ["256GB", "512GB", "1TB"],
    },
    image: require("../../assets/dummyDataImages/2-SamsungGalaxyS23Ultra.png"),
    stock: 350,
    onSale: false,
  },
  {
    id: 3,
    title: "MacBook Pro 16-inch (M2 Pro)",
    description:
      "Apple's 16-inch MacBook Pro with the M2 Pro chip offers exceptional performance and battery life. Features a stunning Liquid Retina XDR display and up to 96GB of unified memory.",
    price: 2499.99,
    category: "Laptops",
    ratings: {
      average: 4.9,
      count: 1200,
      reviews: [
        {
          user: "DesignerPro",
          rating: 5,
          comment: "Unmatched performance for video editing!",
        },
        {
          user: "RemoteWorker",
          rating: 5,
          comment: "The best laptop for professionals.",
        },
      ],
    },
    variations: {
      colors: ["Space Gray", "Silver"],
      storage: ["512GB", "1TB", "2TB", "4TB"],
    },
    image: require("../../assets/dummyDataImages/3-MacBookPro16-inch(M2Pro).png"),
    stock: 200,
    onSale: false,
  },
  {
    id: 4,
    title: "Sony WH-1000XM5 Wireless Headphones",
    description:
      "Sony's WH-1000XM5 headphones provide industry-leading noise cancellation and exceptional sound quality. With up to 30 hours of battery life, they are perfect for long listening sessions.",
    price: 399.99,
    category: "Audio",
    ratings: {
      average: 4.7,
      count: 1800,
      reviews: [
        {
          user: "MusicLover",
          rating: 5,
          comment: "Superb sound and noise cancellation!",
        },
        {
          user: "TravelerPro",
          rating: 4,
          comment: "Comfortable but a bit pricey.",
        },
      ],
    },
    variations: {
      colors: ["Black", "Silver"],
      storage: [],
    },
    image: require("../../assets/dummyDataImages/4-SonyWH-1000XM5WirelessHeadphones.png"),
    stock: 600,
    onSale: true,
  },
  {
    id: 5,
    title: "Google Pixel 7",
    description:
      "The Pixel 7 features a 6.3-inch OLED display and the Google Tensor G2 chip for powerful AI capabilities. Its 50MP camera excels in low-light photography.",
    price: 599.99,
    category: "Smartphones",
    ratings: {
      average: 4.6,
      count: 1400,
      reviews: [
        {
          user: "PixelFan",
          rating: 5,
          comment: "Amazing camera and smooth performance!",
        },
        {
          user: "Techie",
          rating: 4,
          comment: "Good value for money but average battery life.",
        },
      ],
    },
    variations: {
      colors: ["Obsidian", "Snow", "Lemongrass"],
      storage: ["128GB", "256GB"],
    },
    image: require("../../assets/dummyDataImages/5-GooglePixel7.png"),
    stock: 400,
    onSale: false,
  },
  {
    id: 6,
    title: "Microsoft Surface Pro 9",
    description:
      "A versatile 2-in-1 tablet and laptop with a 13-inch PixelSense touchscreen. Powered by Intel's 12th Gen processors and compatible with the Surface Slim Pen 2 for note-taking and design work.",
    price: 1049.99,
    category: "Tablets",
    ratings: {
      average: 4.7,
      count: 800,
      reviews: [
        {
          user: "HybridFan",
          rating: 5,
          comment: "Excellent for both work and play!",
        },
        {
          user: "TabletPro",
          rating: 4,
          comment: "Amazing device but expensive accessories.",
        },
      ],
    },
    variations: {
      colors: ["Platinum", "Graphite", "Sapphire"],
      storage: ["256GB", "512GB", "1TB"],
    },
    image: require("../../assets/dummyDataImages/6-MicrosoftSurfacePro9.png"),
    stock: 150,
    onSale: true,
  },
  // 34 more items will follow this pattern across categories

  {
    id: 7,
    title: "DJI Mini 3 Pro Drone",
    description:
      "Compact and lightweight, the DJI Mini 3 Pro Drone offers advanced features such as 4K HDR video recording, obstacle sensing, and up to 34 minutes of flight time. Perfect for capturing stunning aerial shots.",
    price: 759.99,
    category: "Drones",
    ratings: {
      average: 4.8,
      count: 900,
      reviews: [
        {
          user: "AerialPro",
          rating: 5,
          comment: "Best drone for travel enthusiasts!",
        },
        {
          user: "TechFlyer",
          rating: 4,
          comment: "Impressive features but pricey.",
        },
      ],
    },
    variations: {
      colors: ["White", "Gray"],
      storage: ["256GB"],
    },
    image: require("../../"),
    stock: 120,
    onSale: true,
  },
  {
    id: 8,
    title: "PlayStation 5",
    description:
      "Sony's latest gaming console features lightning-fast loading with its ultra-high-speed SSD, immersive gameplay with 3D audio, and support for 4K gaming. Includes the new DualSense wireless controller.",
    price: 499.99,
    category: "Gaming Consoles",
    ratings: {
      average: 4.9,
      count: 4500,
      reviews: [
        {
          user: "GamerPro",
          rating: 5,
          comment: "Next-level gaming experience!",
        },
        {
          user: "ConsoleFan",
          rating: 5,
          comment: "Absolutely worth the wait.",
        },
      ],
    },
    variations: {
      colors: ["White"],
      storage: ["825GB"],
    },
    image: require("../../"),
    stock: 300,
    onSale: false,
  },
  {
    id: 9,
    title: "Logitech MX Master 3S",
    description:
      "A precision wireless mouse designed for productivity. Features ultra-quiet clicks, customizable buttons, and a high-precision sensor that works on all surfaces, including glass.",
    price: 99.99,
    category: "Accessories",
    ratings: {
      average: 4.8,
      count: 2200,
      reviews: [
        {
          user: "ProductivityGeek",
          rating: 5,
          comment: "The best mouse for professionals!",
        },
        {
          user: "GadgetLover",
          rating: 4,
          comment: "Smooth and functional but pricey.",
        },
      ],
    },
    variations: {
      colors: ["Graphite", "Pale Gray", "Black"],
      storage: [],
    },
    image: require("../../"),
    stock: 500,
    onSale: false,
  },
  {
    id: 10,
    title: "Bose QuietComfort Earbuds II",
    description:
      "Bose's premium true wireless earbuds offer world-class noise cancellation and high-fidelity audio. Features an adjustable EQ, up to 6 hours of battery life, and a secure fit for any activity.",
    price: 299.99,
    category: "Audio",
    ratings: {
      average: 4.7,
      count: 1300,
      reviews: [
        {
          user: "Audiophile",
          rating: 5,
          comment: "Best sound quality in earbuds!",
        },
        {
          user: "MusicFanatic",
          rating: 4,
          comment: "Superb noise cancellation but expensive.",
        },
      ],
    },
    variations: {
      colors: ["Black", "White"],
      storage: [],
    },
    image: require("../../"),
    stock: 300,
    onSale: true,
  },
  {
    id: 11,
    title: "Samsung Galaxy Tab S8 Ultra",
    description:
      "Samsung's largest and most advanced tablet with a 14.6-inch Super AMOLED display, powered by the Snapdragon 8 Gen 1 processor. Supports the S Pen for creative professionals.",
    price: 1099.99,
    category: "Tablets",
    ratings: {
      average: 4.8,
      count: 1000,
      reviews: [
        {
          user: "TechArtist",
          rating: 5,
          comment: "Perfect tablet for design and art!",
        },
        {
          user: "TabletFan",
          rating: 4,
          comment: "Large and powerful but heavy.",
        },
      ],
    },
    variations: {
      colors: ["Graphite"],
      storage: ["256GB", "512GB"],
    },
    image: require("../../"),
    stock: 200,
    onSale: false,
  },
  {
    id: 12,
    title: "Canon EOS R5",
    description:
      "The Canon EOS R5 mirrorless camera delivers 45MP resolution, 8K video recording, and advanced autofocus. Perfect for professional photographers and videographers.",
    price: 3899.99,
    category: "Cameras",
    ratings: {
      average: 4.9,
      count: 700,
      reviews: [
        {
          user: "ProPhotographer",
          rating: 5,
          comment: "Incredible quality for photos and videos!",
        },
        {
          user: "VisualArtist",
          rating: 5,
          comment: "Best camera I've ever used.",
        },
      ],
    },
    variations: {
      colors: ["Black"],
      storage: ["256GB"],
    },
    image: require("../../"),
    stock: 150,
    onSale: true,
  },
  // 28 more entries with similar variety

  {
    id: 13,
    title: "Apple AirPods Pro (2nd Gen)",
    description:
      "The second generation of AirPods Pro offers an upgraded sound experience with improved noise cancellation and transparency modes. Adaptive Transparency, spatial audio, and up to 6 hours of listening time per charge.",
    price: 249.99,
    category: "Audio",
    ratings: {
      average: 4.8,
      count: 3200,
      reviews: [
        {
          user: "SoundLover",
          rating: 5,
          comment: "Perfect sound and noise cancellation!",
        },
        {
          user: "AppleFan",
          rating: 4,
          comment: "Great upgrade, but I wish they were a bit cheaper.",
        },
      ],
    },
    variations: {
      colors: ["White"],
      storage: [],
    },
    image: require("../../"),
    stock: 500,
    onSale: true,
  },
  {
    id: 14,
    title: "Nvidia GeForce RTX 3080",
    description:
      "The Nvidia GeForce RTX 3080 offers high-end gaming performance with support for ray tracing and DLSS technology. Experience the most demanding games in 4K resolution with smooth gameplay.",
    price: 699.99,
    category: "PC Components",
    ratings: {
      average: 4.9,
      count: 1800,
      reviews: [
        {
          user: "GamingGuru",
          rating: 5,
          comment: "Insane graphics and frame rates!",
        },
        {
          user: "TechJunkie",
          rating: 4,
          comment: "Expensive but worth every penny.",
        },
      ],
    },
    variations: {
      colors: ["Black"],
      storage: ["10GB"],
    },
    image: require("../../"),
    stock: 100,
    onSale: false,
  },
  {
    id: 15,
    title: "Apple MacBook Pro M2 (14-inch)",
    description:
      "Powered by Apple's M2 chip, the 14-inch MacBook Pro delivers extraordinary performance, a stunning Liquid Retina XDR display, and long-lasting battery life, all in a sleek and portable design.",
    price: 1999.99,
    category: "Laptops",
    ratings: {
      average: 4.9,
      count: 2500,
      reviews: [
        {
          user: "MacBookFan",
          rating: 5,
          comment: "The best laptop for professionals!",
        },
        {
          user: "TechEnthusiast",
          rating: 5,
          comment: "Incredible power and efficiency.",
        },
      ],
    },
    variations: {
      colors: ["Space Gray", "Silver"],
      storage: ["512GB", "1TB"],
    },
    image: require("../../"),
    stock: 250,
    onSale: false,
  },
  {
    id: 16,
    title: "Amazon Echo Dot (4th Gen)",
    description:
      "The Echo Dot (4th Gen) brings Alexa into your home with its sleek design, improved sound, and smart home capabilities. Control lights, music, alarms, and more with voice commands.",
    price: 49.99,
    category: "Smart Home",
    ratings: {
      average: 4.7,
      count: 11000,
      reviews: [
        {
          user: "SmartHomeFan",
          rating: 5,
          comment: "Fantastic speaker for the price!",
        },
        {
          user: "AlexaUser",
          rating: 4,
          comment: "Great sound quality, but occasionally mishears commands.",
        },
      ],
    },
    variations: {
      colors: ["Charcoal", "White", "Blue"],
      storage: [],
    },
    image: require("../../"),
    stock: 1200,
    onSale: true,
  },
  {
    id: 17,
    title: "GoPro HERO10 Black",
    description:
      "Capture stunning 5.3K video and 23MP photos with the GoPro HERO10 Black. It features HyperSmooth 4.0 stabilization, waterproof design, and an improved front screen for vlogging.",
    price: 399.99,
    category: "Cameras",
    ratings: {
      average: 4.8,
      count: 2500,
      reviews: [
        {
          user: "AdventureSeeker",
          rating: 5,
          comment: "The best action camera on the market!",
        },
        {
          user: "VideoCreator",
          rating: 4,
          comment: "Awesome video quality but battery life could be better.",
        },
      ],
    },
    variations: {
      colors: ["Black"],
      storage: ["32GB", "64GB"],
    },
    image: require("../../"),
    stock: 300,
    onSale: false,
  },
  {
    id: 18,
    title: "Oculus Quest 2",
    description:
      "Step into the world of virtual reality with the Oculus Quest 2. Featuring 64GB of storage, wireless connectivity, and access to a vast library of VR games and apps.",
    price: 299.99,
    category: "Virtual Reality",
    ratings: {
      average: 4.7,
      count: 6000,
      reviews: [
        { user: "VRFan", rating: 5, comment: "A revolutionary experience!" },
        {
          user: "TechLover",
          rating: 4,
          comment: "Great VR headset but needs better tracking.",
        },
      ],
    },
    variations: {
      colors: ["White"],
      storage: ["64GB", "256GB"],
    },
    image: require("../../"),
    stock: 800,
    onSale: true,
  },
  {
    id: 19,
    title: "Samsung Galaxy Watch 5",
    description:
      "The Galaxy Watch 5 features advanced fitness tracking, sleep monitoring, and heart-rate sensing. It has a sleek design with a durable sapphire crystal display and long-lasting battery.",
    price: 279.99,
    category: "Wearables",
    ratings: {
      average: 4.6,
      count: 3000,
      reviews: [
        {
          user: "FitnessTracker",
          rating: 5,
          comment: "Excellent smartwatch for health tracking!",
        },
        {
          user: "TechUser",
          rating: 4,
          comment: "Great features but the battery life could be better.",
        },
      ],
    },
    variations: {
      colors: ["Black", "Silver"],
      storage: ["16GB"],
    },
    image: require("../../"),
    stock: 600,
    onSale: false,
  },
  {
    id: 20,
    title: "Fitbit Charge 5",
    description:
      "Fitbit Charge 5 is a fitness tracker with a built-in GPS, heart-rate monitor, and EDA sensor for stress management. Its sleek design offers a 7-day battery life and advanced sleep tracking.",
    price: 149.99,
    category: "Wearables",
    ratings: {
      average: 4.7,
      count: 4000,
      reviews: [
        {
          user: "HealthEnthusiast",
          rating: 5,
          comment: "Best fitness tracker for the price!",
        },
        {
          user: "FitLife",
          rating: 4,
          comment: "Solid tracker, but I wish it had more advanced features.",
        },
      ],
    },
    variations: {
      colors: ["Black", "Plum", "Lunar White"],
      storage: [],
    },
    image: require("../../"),
    stock: 1200,
    onSale: true,
  },

  {
    id: 21,
    title: "Lenovo ThinkPad X1 Carbon Gen 9",
    description:
      "The Lenovo ThinkPad X1 Carbon Gen 9 is a lightweight business laptop powered by Intel's 11th Gen processors. It offers a stunning 14-inch display with ultra-thin bezels, up to 16GB RAM, and 1TB SSD, along with exceptional battery life and MIL-SPEC durability.",
    price: 1599.99,
    category: "Laptops",
    ratings: {
      average: 4.8,
      count: 1500,
      reviews: [
        {
          user: "BusinessPro",
          rating: 5,
          comment: "Great laptop for work, performance is outstanding.",
        },
        {
          user: "Techie",
          rating: 4,
          comment: "Excellent laptop but lacks HDMI port.",
        },
      ],
    },
    variations: {
      colors: ["Black"],
      storage: ["512GB", "1TB"],
    },
    image: require("../../"),
    stock: 200,
    onSale: false,
  },
  {
    id: 22,
    title: "Sony WH-1000XM5",
    description:
      "The Sony WH-1000XM5 noise-canceling headphones feature industry-leading sound quality, an ultra-comfortable design, and advanced noise cancellation for immersive listening. Perfect for long flights or daily commutes.",
    price: 349.99,
    category: "Audio",
    ratings: {
      average: 4.9,
      count: 8000,
      reviews: [
        {
          user: "AudioLover",
          rating: 5,
          comment: "Best noise-canceling headphones available!",
        },
        {
          user: "FrequentFlyer",
          rating: 5,
          comment: "Superb sound quality and comfort.",
        },
      ],
    },
    variations: {
      colors: ["Black", "Silver"],
      storage: [],
    },
    image: require("../../"),
    stock: 300,
    onSale: false,
  },
  {
    id: 23,
    title: "Microsoft Surface Pro 8",
    description:
      "The Microsoft Surface Pro 8 is a versatile tablet with a 13-inch PixelSense Flow display and the power of Intel's 11th Gen processors. Ideal for both work and play with the flexibility of a laptop replacement.",
    price: 1099.99,
    category: "Tablets",
    ratings: {
      average: 4.8,
      count: 2500,
      reviews: [
        {
          user: "TabletExpert",
          rating: 5,
          comment: "Amazing tablet, replaces my laptop completely.",
        },
        {
          user: "TechSavvy",
          rating: 4,
          comment: "Great device but lacks USB-A port.",
        },
      ],
    },
    variations: {
      colors: ["Platinum", "Graphite"],
      storage: ["128GB", "256GB", "512GB"],
    },
    image: require("../../"),
    stock: 400,
    onSale: false,
  },
  {
    id: 24,
    title: "Samsung Galaxy Z Fold 4",
    description:
      "The Samsung Galaxy Z Fold 4 is a foldable smartphone that offers the versatility of both a phone and a tablet in one device. It features a 7.6-inch Dynamic AMOLED display and an under-display camera for an immersive experience.",
    price: 1799.99,
    category: "Smartphones",
    ratings: {
      average: 4.7,
      count: 3200,
      reviews: [
        {
          user: "TechTrendsetter",
          rating: 5,
          comment: "Future of smartphones is here!",
        },
        {
          user: "PhoneCollector",
          rating: 4,
          comment: "Amazing device, but quite expensive.",
        },
      ],
    },
    variations: {
      colors: ["Phantom Black", "Beige", "Graygreen"],
      storage: ["256GB", "512GB"],
    },
    image: require("../../"),
    stock: 150,
    onSale: true,
  },
  {
    id: 25,
    title: "Dell XPS 13 9310",
    description:
      "The Dell XPS 13 9310 is a compact yet powerful laptop with a 13.4-inch InfinityEdge display, Intel's latest 11th Gen processors, and up to 32GB RAM. Perfect for professionals on the go.",
    price: 1299.99,
    category: "Laptops",
    ratings: {
      average: 4.8,
      count: 2200,
      reviews: [
        {
          user: "LaptopUser",
          rating: 5,
          comment: "Super portable, with powerful performance.",
        },
        {
          user: "TechPro",
          rating: 4,
          comment: "Great build quality, but a little expensive.",
        },
      ],
    },
    variations: {
      colors: ["Platinum Silver", "Frost White"],
      storage: ["512GB", "1TB"],
    },
    image: require("../../"),
    stock: 300,
    onSale: false,
  },
  {
    id: 26,
    title: "HP Spectre x360 14",
    description:
      "The HP Spectre x360 14 is a 2-in-1 convertible laptop that combines a premium design with powerful performance. It offers a 14-inch OLED display, Intel's 11th Gen processors, and long battery life.",
    price: 1599.99,
    category: "Laptops",
    ratings: {
      average: 4.9,
      count: 1900,
      reviews: [
        {
          user: "UltrabookFan",
          rating: 5,
          comment: "Excellent all-rounder with stunning display.",
        },
        {
          user: "TechLover",
          rating: 5,
          comment: "Fast, beautiful, and versatile!",
        },
      ],
    },
    variations: {
      colors: ["Nightfall Black", "Poseidon Blue"],
      storage: ["512GB", "1TB"],
    },
    image: require("../../"),
    stock: 200,
    onSale: true,
  },
  {
    id: 27,
    title: "Bose QuietComfort 45",
    description:
      "The Bose QuietComfort 45 headphones offer the perfect balance of comfort and exceptional sound quality. With improved noise cancellation and a comfortable fit, these headphones are perfect for long listening sessions.",
    price: 329.99,
    category: "Audio",
    ratings: {
      average: 4.9,
      count: 2300,
      reviews: [
        {
          user: "MusicLover",
          rating: 5,
          comment: "Perfect noise-canceling headphones!",
        },
        {
          user: "SoundGeek",
          rating: 5,
          comment: "Unbeatable comfort and sound.",
        },
      ],
    },
    variations: {
      colors: ["Black", "White"],
      storage: [],
    },
    image: require("../../"),
    stock: 500,
    onSale: false,
  },
  {
    id: 28,
    title: "Asus ROG Strix G15",
    description:
      "The Asus ROG Strix G15 is a gaming laptop with a powerful AMD Ryzen 9 processor and NVIDIA GeForce RTX 3060 graphics. With a 15.6-inch Full HD display, it provides a seamless gaming experience.",
    price: 1499.99,
    category: "Gaming Laptops",
    ratings: {
      average: 4.8,
      count: 2200,
      reviews: [
        {
          user: "GamingPro",
          rating: 5,
          comment: "Amazing gaming laptop at this price point!",
        },
        {
          user: "LaptopExpert",
          rating: 4,
          comment: "Great performance, but it runs hot under load.",
        },
      ],
    },
    variations: {
      colors: ["Black"],
      storage: ["512GB", "1TB"],
    },
    image: require("../../"),
    stock: 100,
    onSale: true,
  },
  {
    id: 29,
    title: "Apple iPad Air (5th Gen)",
    description:
      "The iPad Air (5th Gen) is powered by Apple's M1 chip, delivering exceptional speed and performance. It features a 10.9-inch Liquid Retina display and supports the Apple Pencil (2nd Gen) for precise drawing and note-taking.",
    price: 599.99,
    category: "Tablets",
    ratings: {
      average: 4.7,
      count: 3200,
      reviews: [
        {
          user: "AppleUser",
          rating: 5,
          comment: "Incredible performance for a tablet!",
        },
        {
          user: "CreativeMind",
          rating: 4,
          comment: "Fantastic tablet, but a little on the expensive side.",
        },
      ],
    },
    variations: {
      colors: ["Space Gray", "Starlight", "Pink", "Purple", "Blue"],
      storage: ["64GB", "256GB"],
    },
    image: require("../../"),
    stock: 600,
    onSale: true,
  },

  {
    id: 30,
    title: "Samsung Galaxy Tab S8",
    description:
      "The Samsung Galaxy Tab S8 features an 11-inch LCD screen with a 120Hz refresh rate, powered by a Snapdragon 8 Gen 1 processor. It's perfect for productivity, entertainment, and creativity with support for the S Pen and keyboard accessories.",
    price: 649.99,
    category: "Tablets",
    ratings: {
      average: 4.7,
      count: 1700,
      reviews: [
        {
          user: "TabFan",
          rating: 5,
          comment: "Excellent tablet for work and play!",
        },
        {
          user: "Techie",
          rating: 4,
          comment:
            "Great value for the price, but software updates can be slow.",
        },
      ],
    },
    variations: {
      colors: ["Graphite", "Silver"],
      storage: ["128GB", "256GB"],
    },
    image: require("../../"),
    stock: 450,
    onSale: true,
  },
  {
    id: 31,
    title: "Oculus Quest 2",
    description:
      "The Oculus Quest 2 is a standalone VR headset that offers immersive experiences with no PC or wires required. It features a 1832x1920 resolution per eye, hand tracking, and access to a growing library of VR games and apps.",
    price: 299.99,
    category: "Virtual Reality",
    ratings: {
      average: 4.8,
      count: 7500,
      reviews: [
        {
          user: "VRFan",
          rating: 5,
          comment: "Incredible VR experience, affordable price!",
        },
        {
          user: "Gamer",
          rating: 5,
          comment: "Best VR headset for the price, hands down.",
        },
      ],
    },
    variations: {
      colors: ["White"],
      storage: ["64GB", "256GB"],
    },
    image: require("../../"),
    stock: 300,
    onSale: false,
  },
  {
    id: 32,
    title: "Apple Watch Series 7",
    description:
      "The Apple Watch Series 7 offers a larger display, faster charging, and improved durability. It's the perfect smartwatch for fitness tracking, notifications, and health monitoring with an ECG and blood oxygen app.",
    price: 399.99,
    category: "Wearables",
    ratings: {
      average: 4.9,
      count: 5000,
      reviews: [
        {
          user: "AppleFan",
          rating: 5,
          comment: "The best smartwatch I've owned.",
        },
        {
          user: "FitnessGuru",
          rating: 5,
          comment:
            "Incredible fitness features and seamless integration with iPhone.",
        },
      ],
    },
    variations: {
      colors: ["Midnight", "Starlight", "Green", "Blue", "Red"],
      storage: ["32GB", "64GB"],
    },
    image: require("../../"),
    stock: 500,
    onSale: false,
  },
  {
    id: 33,
    title: "GoPro HERO10 Black",
    description:
      "The GoPro HERO10 Black delivers 5.3K video at 60fps and is waterproof up to 33ft. Perfect for outdoor adventures and content creation, the HERO10 offers enhanced stabilization and incredible image quality.",
    price: 499.99,
    category: "Cameras",
    ratings: {
      average: 4.9,
      count: 4300,
      reviews: [
        {
          user: "AdventureSeeker",
          rating: 5,
          comment: "Amazing camera for action shots, highly recommended!",
        },
        {
          user: "ContentCreator",
          rating: 5,
          comment: "The best action camera I've used for my vlogs.",
        },
      ],
    },
    variations: {
      colors: ["Black"],
      storage: ["32GB", "64GB", "128GB"],
    },
    image: require("../../"),
    stock: 200,
    onSale: false,
  },
  {
    id: 34,
    title: "Amazon Echo Show 10",
    description:
      "The Amazon Echo Show 10 features a 10.1-inch HD display and built-in Alexa voice control. It rotates to follow you around the room, making video calls and controlling your smart home easier than ever.",
    price: 249.99,
    category: "Smart Home",
    ratings: {
      average: 4.7,
      count: 3500,
      reviews: [
        {
          user: "SmartHomeUser",
          rating: 5,
          comment: "Love how it follows me around during video calls!",
        },
        {
          user: "TechLover",
          rating: 4,
          comment: "Great device, but sound quality could be better.",
        },
      ],
    },
    variations: {
      colors: ["Charcoal", "White"],
      storage: [],
    },
    image: require("../../"),
    stock: 450,
    onSale: true,
  },
  {
    id: 35,
    title: "JBL Charge 5",
    description:
      "The JBL Charge 5 is a portable Bluetooth speaker with powerful bass, IP67 waterproof rating, and a 20-hour battery life. It also doubles as a power bank to charge your devices on the go.",
    price: 179.99,
    category: "Audio",
    ratings: {
      average: 4.8,
      count: 2200,
      reviews: [
        {
          user: "MusicJunkie",
          rating: 5,
          comment: "Incredible sound for the size!",
        },
        {
          user: "OutdoorLover",
          rating: 5,
          comment: "Perfect for outdoor adventures, love the battery life.",
        },
      ],
    },
    variations: {
      colors: ["Black", "Blue", "Red", "Green"],
      storage: [],
    },
    image: require("../../"),
    stock: 500,
    onSale: true,
  },
  {
    id: 36,
    title: "Samsung Galaxy S21 Ultra",
    description:
      "The Samsung Galaxy S21 Ultra features a 6.8-inch Dynamic AMOLED 2X display, 108MP camera, and Snapdragon 888 processor, providing a premium experience for both photography and mobile gaming.",
    price: 1199.99,
    category: "Smartphones",
    ratings: {
      average: 4.9,
      count: 9000,
      reviews: [
        {
          user: "MobileFan",
          rating: 5,
          comment: "Outstanding camera and performance!",
        },
        {
          user: "TechMaster",
          rating: 5,
          comment: "Best smartphone on the market right now.",
        },
      ],
    },
    variations: {
      colors: ["Phantom Black", "Phantom Silver", "Phantom Titanium"],
      storage: ["128GB", "256GB", "512GB"],
    },
    image: require("../../"),
    stock: 100,
    onSale: false,
  },
  {
    id: 37,
    title: "Fitbit Charge 5",
    description:
      "The Fitbit Charge 5 is a fitness tracker with a bright AMOLED display, built-in GPS, heart rate monitor, and up to 7-day battery life. Track your workouts, stress levels, and sleep patterns.",
    price: 149.99,
    category: "Wearables",
    ratings: {
      average: 4.6,
      count: 5000,
      reviews: [
        {
          user: "FitnessFanatic",
          rating: 5,
          comment: "Amazing fitness tracker, helps me stay on top of my goals.",
        },
        {
          user: "ActiveUser",
          rating: 4,
          comment: "Great tracker, but battery life could be better.",
        },
      ],
    },
    variations: {
      colors: ["Black", "Lunar White", "Steel Blue"],
      storage: [],
    },
    image: require("../../"),
    stock: 800,
    onSale: false,
  },
  {
    id: 38,
    title: "Sony A7 III Mirrorless Camera",
    description:
      "The Sony A7 III is a full-frame mirrorless camera with a 24.2MP sensor, 4K video recording, and superior autofocus capabilities. Ideal for both professional photographers and video creators.",
    price: 1999.99,
    category: "Cameras",
    ratings: {
      average: 4.8,
      count: 2300,
      reviews: [
        {
          user: "PhotographyPro",
          rating: 5,
          comment: "Best full-frame mirrorless camera in this price range!",
        },
        {
          user: "Videographer",
          rating: 5,
          comment: "Unmatched autofocus and image quality.",
        },
      ],
    },
    variations: {
      colors: ["Black"],
      storage: ["64GB", "128GB", "256GB"],
    },
    image: require("../../"),
    stock: 150,
    onSale: false,
  },
  {
    id: 39,
    title: "Apple MacBook Air (M1 Chip)",
    description:
      "The Apple MacBook Air with M1 chip delivers unparalleled performance, improved battery life, and silent operation. Perfect for everyday tasks, productivity, and light creative work with a sleek and lightweight design.",
    price: 999.99,
    category: "Laptops",
    ratings: {
      average: 4.9,
      count: 7000,
      reviews: [
        {
          user: "AppleLover",
          rating: 5,
          comment: "Incredible performance, silent and fast!",
        },
        {
          user: "CreativeUser",
          rating: 5,
          comment: "Amazing power in such a slim package.",
        },
      ],
    },
    variations: {
      colors: ["Space Gray", "Silver", "Gold"],
      storage: ["256GB", "512GB"],
    },
    image: require("../../"),
    stock: 600,
    onSale: true,
  },
  {
    id: 40,
    title: "Bose SoundLink Revolve+ II",
    description:
      "The Bose SoundLink Revolve+ II is a portable Bluetooth speaker with 360-degree sound and deep bass. It features a water-resistant design, 17 hours of battery life, and is perfect for both indoor and outdoor use.",
    price: 329.99,
    category: "Audio",
    ratings: {
      average: 4.9,
      count: 4000,
      reviews: [
        {
          user: "MusicLover",
          rating: 5,
          comment: "Best portable speaker for its size!",
        },
        {
          user: "OutdoorFan",
          rating: 5,
          comment: "Incredible sound and great for outdoor parties.",
        },
      ],
    },
    variations: {
      colors: ["Triple Black", "Lux Gray"],
      storage: [],
    },
    image: require("../../"),
    stock: 350,
    onSale: false,
  },
];
