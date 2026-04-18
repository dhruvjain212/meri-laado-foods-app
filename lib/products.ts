export interface Product {
  slug: string
  name: string
  tagline: string
  image: string
  gallery: string[]
  description: string
  longDescription: string
  benefits: string[]
  ingredients: string[]
  usage: string
  storage: string
  price: number
  originalPrice?: number
  unit: string
  waMsg: string
  reviews: {
    name: string
    initials: string
    role: string
    rating: number
    comment: string
  }[]
}

export const products: Product[] = [
  {
    slug: "dry-fruits-laddoo",
    name: "Dry Fruits Aata Laddoo",
    tagline: "Traditional postpartum superfood",
    image: "/images/product-laddoo.jpg",
    gallery: ["/images/product-laddoo.jpg"],
    description:
      "Our traditional dry fruit laddoos are packed with iron, calcium, and fenugreek goodness. A postpartum staple that aids recovery and boosts lactation.",
    longDescription:
      "Dry Fruits Laddoo is a time-honored Indian recipe passed down through generations of mothers. Each laddoo is carefully handcrafted using premium fenugreek seeds (methi), whole wheat flour, pure desi ghee, jaggery, dry fruits, and edible gum (gond). This nourishing treat is specifically designed to support new mothers during their postpartum recovery, helping to boost lactation, replenish lost nutrients, and provide sustained energy throughout the day. Our recipe follows the traditional method used by grandmothers across North India, ensuring authentic taste and maximum nutritional benefits.",
    benefits: [
      "Boosts lactation naturally",
      "Rich in iron & calcium",
      "Aids postnatal recovery",
      "Provides sustained energy",
      "Strengthens bones & joints",
      "Improves digestion",
    ],
    ingredients: [
      "Cashew, Almonds, Raisins",
      "Whole wheat flour (Atta)",
      "Pure desi ghee",
      "Jaggery (Gud)",
      "Edible gum (Gond)",
      "Almonds & Cashews",
      "Dry coconut",
      "Fennel seeds",
    ],
    usage:
      "Take 1-2 laddoos daily, preferably in the morning with warm milk. New mothers can start consuming from the first week after delivery.",
    storage:
      "Store in an airtight container in a cool, dry place. Best consumed within 30 days. Can be refrigerated for longer shelf life.",
    price: 699,
    originalPrice: 799,
    unit: "500g (approx. 12 pieces)",
    waMsg: "Hi, I want to order Dry Fruits Laddoo (500g - Rs.599) from Meri Laado Foods",
    reviews: [
      {
        name: "Priya Sharma",
        initials: "PS",
        role: "New mother, Delhi",
        rating: 5,
        comment:
          "The dry fruit laddoos are exactly what my mother used to make after my delivery. I was surprised how fresh and authentic they tasted. My recovery has been so much better this time.",
      },
      {
        name: "Sneha Kapoor",
        initials: "SK",
        role: "Mother of twins, Mumbai",
        rating: 5,
        comment:
          "With twins, I needed extra nutrition. These laddoos have been my daily companion. The taste is perfect - not too sweet, and you can tell the ghee is pure.",
      },
      {
        name: "Meera Nair",
        initials: "MN",
        role: "Second-time mom, Bangalore",
        rating: 5,
        comment:
          "I ordered these for my second pregnancy and they are even better than what I had last time from another brand. The freshness is unmatched!",
      },
    ],
  },
  {
    slug: "panjeeri",
    name: "Dry Fruits Gond Panjeeri",
    tagline: "Strength-building dry mix",
    image: "/images/product-panjeeri.jpg",
    gallery: ["/images/product-panjeeri.jpg"],
    description:
      "A nourishing dry mix of whole wheat, ghee, nuts, and warming spices. Traditionally given to new mothers to rebuild strength and energy.",
    longDescription:
      "Panjeeri is a traditional North Indian postpartum superfood that has been trusted by mothers for centuries. Our Panjeeri is a carefully crafted blend of roasted whole wheat flour, generous amounts of pure desi ghee, premium dry fruits, warming spices, and natural sweeteners. This energy-dense powder is designed to restore strength, improve metabolism, and provide essential nutrients that new mothers need during their recovery period. Each batch is freshly prepared in small quantities to ensure maximum freshness and nutritional value.",
    benefits: [
      "Restores energy & strength",
      "Warming & strengthening",
      "Made with pure desi ghee",
      "Improves metabolism",
      "Rich in essential nutrients",
      "Supports bone health",
    ],
    ingredients: [
      "Roasted whole wheat flour",
      "Pure desi ghee",
      "Almonds & Cashews",
      "Melon seeds (Magaz)",
      "Dry dates (Chhuhara)",
      "Edible gum (Gond)",
      "Mishri (Rock sugar)",
      "Cardamom & Nutmeg",
    ],
    usage:
      "Take 2-3 tablespoons daily with warm milk or water. Can also be eaten dry. Best consumed in the morning or evening.",
    storage:
      "Store in an airtight container in a cool, dry place. Refrigeration recommended for extended freshness. Best consumed within 45 days.",
    price: 649,
    originalPrice: 749,
    unit: "400g",
    waMsg: "Hi, I want to order Panjeeri (400g - Rs.549) from Meri Laado Foods",
    reviews: [
      {
        name: "Ananya Verma",
        initials: "AV",
        role: "Expectant mother, Gurugram",
        rating: 5,
        comment:
          "I was looking for homemade panjeeri for my pregnancy cravings and stumbled upon Meri Laado Foods. The quality is beyond what I expected. You can tell it is made with genuine care.",
      },
      {
        name: "Ritika Joshi",
        initials: "RJ",
        role: "New mother, Chandigarh",
        rating: 5,
        comment:
          "The aroma when you open the pack is heavenly! Reminds me of my nani's kitchen. I have it every morning with warm milk.",
      },
      {
        name: "Deepika Malhotra",
        initials: "DM",
        role: "Mother, Lucknow",
        rating: 5,
        comment:
          "Ordered for my daughter-in-law after delivery. She loved it so much that we have ordered three times now. Highly recommend!",
      },
    ],
  },
  {
    slug: "gud-bars",
    name: "Gud Bars",
    tagline: "Natural energy on the go",
    image: "/images/product-gudbar.jpg",
    gallery: ["/images/product-gudbar.jpg"],
    description:
      "Wholesome jaggery and sesame bars — a natural energy boost loaded with minerals. Perfect as a healthy sweet craving satisfier during pregnancy.",
    longDescription:
      "Our Gud Bars are the perfect guilt-free snack for expectant and new mothers. Made with pure organic jaggery, roasted sesame seeds, peanuts, and dry fruits, these bars provide an instant energy boost without any refined sugar or artificial additives. Jaggery is known for its iron content and blood-purifying properties, while sesame seeds are packed with calcium and healthy fats. Each bar is carefully crafted to satisfy your sweet cravings while nourishing your body with essential minerals and nutrients.",
    benefits: [
      "Natural energy boost",
      "Rich in iron & calcium",
      "No refined sugar",
      "Satisfies sweet cravings",
      "Easy to carry & eat",
      "Supports healthy digestion",
    ],
    ingredients: [
      "Organic jaggery (Gud)",
      "Roasted sesame seeds",
      "Peanuts",
      "Dry coconut flakes",
      "Almonds",
      "Cardamom powder",
      "Pure desi ghee",
    ],
    usage:
      "Enjoy 1-2 bars as a mid-morning or evening snack. Perfect for on-the-go nutrition or whenever you crave something sweet.",
    storage:
      "Store in an airtight container in a cool, dry place away from direct sunlight. Best consumed within 30 days.",
    price: 349,
    originalPrice: 399,
    unit: "250g (approx. 8 bars)",
    waMsg: "Hi, I want to order Gud Bars (250g - Rs.349) from Meri Laado Foods",
    reviews: [
      {
        name: "Ritu Patel",
        initials: "RP",
        role: "Postpartum mother, Ahmedabad",
        rating: 5,
        comment:
          "The gud bars became my go-to snack through breastfeeding. Not too sweet, perfectly crunchy, and so satisfying. My toddler loves them too!",
      },
      {
        name: "Sunita Rao",
        initials: "SR",
        role: "Pregnant, Hyderabad",
        rating: 5,
        comment:
          "Finally found a healthy snack for my pregnancy cravings! These bars are delicious and I feel good about eating them.",
      },
      {
        name: "Pooja Gupta",
        initials: "PG",
        role: "Working mom, Noida",
        rating: 5,
        comment:
          "I keep these in my office bag. Perfect 4pm snack when energy dips. Love that they are all natural ingredients.",
      },
    ],
  },
  {
    slug: "desi-ghee",
    name: "Pure Desi Ghee",
    tagline: "Traditional bilona method",
    image: "/images/product-ghee.jpg",
    gallery: ["/images/product-ghee.jpg"],
    description:
      "Handcrafted pure desi ghee made with the traditional bilona method. Essential for fetal development and postnatal nourishment.",
    longDescription:
      "Our Pure Desi Ghee is crafted using the ancient Bilona method, where curd is hand-churned to extract butter, which is then slow-cooked on a low flame to produce the purest form of clarified butter. This traditional process preserves all the natural nutrients and gives the ghee its signature golden color and rich, nutty aroma. Desi ghee has been an integral part of Indian maternal nutrition for centuries, supporting fetal brain development during pregnancy and aiding in postpartum recovery. Our ghee is made from the milk of grass-fed cows, ensuring the highest quality and purity.",
    benefits: [
      "Traditional bilona method",
      "Supports brain development",
      "100% pure & natural",
      "Rich in vitamins A, D, E, K",
      "Aids nutrient absorption",
      "Boosts immunity",
    ],
    ingredients: [
      "Pure milk",
      "Traditional bilona churning process",
      "Slow-cooked on low flame",
      "No additives or preservatives",
    ],
    usage:
      "Add 1-2 teaspoons to dal, rice, rotis, or any dish. Can also be consumed directly with warm milk. Safe for daily use during pregnancy and postpartum.",
    storage:
      "Store in a cool, dry place. No refrigeration needed. Ghee naturally preserves itself for months when stored properly. Use clean, dry spoon always.",
    price: 799,
    originalPrice: 899,
    unit: "500ml",
    waMsg: "Hi, I want to order Pure Desi Ghee (500ml - Rs.899) from Meri Laado Foods",
    reviews: [
      {
        name: "Kavita Singh",
        initials: "KS",
        role: "Mother of two, Jaipur",
        rating: 5,
        comment:
          "The desi ghee is absolutely pure — you can smell the difference the moment you open the jar. The granular texture confirms it is made the traditional way.",
      },
      {
        name: "Neha Agarwal",
        initials: "NA",
        role: "Expecting mom, Delhi",
        rating: 5,
        comment:
          "My doctor recommended A2 ghee during pregnancy. This ghee has that authentic bilona taste my grandmother used to make. Worth every rupee!",
      },
      {
        name: "Lakshmi Iyer",
        initials: "LI",
        role: "New mother, Chennai",
        rating: 5,
        comment:
          "I use this ghee for all my cooking now. The flavor it adds to food is incomparable. My baby is healthy and I credit this pure ghee for it.",
      },
    ],
  },
  {
  slug: "dry-fruits-namkeen",
  name: "Premium Dry Fruits Namkeen",
  tagline: "Healthy guilt-free snacking for everyday nutrition",
  image: "/images/product-namkeen.jpg",
  gallery: ["/images/product-namkeen.png"],
  description:
    "A wholesome mix of crunchy peanuts, seeds, and light spices, our dry fruits namkeen is a perfect balance of taste and nutrition for healthy snacking.",
  longDescription:
    "Our Premium Dry Fruits Namkeen is a thoughtfully crafted blend of nutrient-rich ingredients designed for those who want to snack without compromising on health. Made in small batches using high-quality peanuts, flax seeds, pumpkin seeds, chia seeds, chivda, and roasted chana, this mix is lightly seasoned with balanced spices to enhance taste without overpowering its natural goodness. Roasted to perfection and prepared using minimal oil, it offers a crunchy, satisfying experience while providing essential nutrients like healthy fats, fiber, and plant-based protein. Ideal for pregnant women, new mothers, or anyone looking for a clean and nourishing snack option, this namkeen brings together tradition and modern nutrition in every bite.",
  benefits: [
    "Rich in healthy fats & omega-3",
    "High in protein & fiber",
    "Supports digestion",
    "Boosts energy levels",
    "Helps in maintaining overall nutrition",
    "Guilt-free healthy snacking option"
  ],
  ingredients: [
    "Peanuts",
    "Flax seeds",
    "Pumpkin seeds",
    "Chia seeds",
    "Chivda (flattened rice flakes)",
    "Roasted chana",
    "Light spices"
  ],
  usage:
    "Enjoy a handful as a mid-morning or evening snack. Can also be paired with tea or added to salads for extra crunch.",
  storage:
    "Store in an airtight container in a cool, dry place. Best consumed within 20-25 days for maximum freshness.",
  price: 399,
  originalPrice: 499,
  unit: "250g",
  waMsg: "Hi, I want to order Premium Dry Fruits Namkeen (250g - Rs.399) from Meri Laado Foods",
  reviews: [
    {
      name: "Ritu Agarwal",
      initials: "RA",
      role: "Working professional, Delhi",
      rating: 5,
      comment:
        "Finally found a healthy namkeen that doesn’t feel oily or heavy. It’s become my go-to snack during office hours."
    },
    {
      name: "Anjali Mehta",
      initials: "AM",
      role: "Expecting mother, Jaipur",
      rating: 5,
      comment:
        "I was looking for something nutritious to snack on during pregnancy, and this is perfect. Light, crunchy, and very satisfying."
    },
    {
      name: "Neha Gupta",
      initials: "NG",
      role: "Fitness enthusiast, Gurgaon",
      rating: 5,
      comment:
        "Loved the mix of seeds and peanuts. You can really feel the quality. Much better than market namkeen!"
    }
  ]
},
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug)
}
