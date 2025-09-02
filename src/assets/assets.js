  import logo from "./logo.png";
  import hero_img from "./hero_img.jpeg";
  import profile_icon from "./profile_icon.png";
  import cat_electronics from "./cat_electronics.avif";
  import cat_fashion from "./cat_fashion.avif";
  import cat_home from "./cat_home.jpg";
  import cat_toys from "./cat_toys.avif";
  import cat_soprts from "./cat_sports.avif";
  import stripe_logo from "./Stripe_Logo.png"
  import razorpay_logo from "./Razorpay_logo.svg"
  import about_img from "./about_img.jpg"

  import iph_1 from "./iph_1.jpg";
  import iph_2 from "./iph_2.jpeg";
  import iph_3 from "./iph_3.avif";
  import iph_4 from "./iph_4.jpg";


  import nike_1 from "./nike_1.avif";
  import  frame from "./frame.avif" 


  export const assets = {
    logo,
    hero_img,
    profile_icon,
    cat_electronics,
    cat_fashion,
    cat_home,
    cat_toys,
    cat_soprts,
    stripe_logo,
    razorpay_logo,
    about_img
  };

export const products = [
  {
    _id: "aaaaa",
    name: "iPhone 16",
    short_desc: "Latest model with advanced features",
    description:
      "The iPhone 16 features a stunning OLED display, improved battery life, and the new A18 Bionic chip. Experience lightning-fast performance and advanced photography with its triple-lens camera system.",
    price: 78000,
    image: [iph_1,iph_3,iph_4],
    category: "ELECTRONIC",
    subCategory: "Mobile",
    date: 1716644245448,
    bestseller: true,
    specifications: [
      "6.7-inch OLED Display",
      "A18 Bionic Processor",
      "Triple-lens 48MP Camera",
      "512GB Storage",
      "Face ID + Touch ID",
    ],
  },
  {
    _id: "frame001",
    name: "Misty Mountain Wall Frame",
    short_desc: "Serene mountain landscape artwork",
    description:
      "A calming, misty mountain scene that brings a tranquil aesthetic to any room. Printed on high-quality canvas with a solid wood frame, it's perfect for modern or minimalist decor styles.",
    price: 2500,
    image: [frame],
    category: "HOME",
    subCategory: "Wall Art",
    date: 1716634345448,
    bestseller: false,
    specifications: [
      "Size: 24in x 36in",
      "High-definition canvas print",
      "Durable wooden frame",
      "Ready to hang",
      "Matte finish",
    ],
  },
  {
    _id: "aaaab",
    name: "Nike Air Zoom Pegasus",
    short_desc: "Comfort and style for every run",
    description:
      "Engineered for runners, the Nike Air Zoom Pegasus offers responsive cushioning and a breathable upper. Perfect for daily training and long-distance runs.",
    price: 4500,
    image: [nike_1],
    category: "FASHION",
    subCategory: "Shoes",
    date: 1716644245448,
    bestseller: true,
    specifications: [
      "Breathable mesh upper",
      "Zoom Air units in forefoot and heel",
      "Durable rubber outsole",
      "Foam midsole for responsive cushioning",
      "Weight: 285g (Men’s size 9)",
    ],
  },
];

