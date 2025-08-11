import logo from "./logo.png";
import hero_img from "./hero_img.jpeg";
import profile_icon from "./profile_icon.png";
import cat_electronics from "./cat_electronics.avif";
import cat_fashion from "./cat_fashion.avif";
import cat_home from "./cat_home.jpg";
import cat_toys from "./cat_toys.avif";
import cat_soprts from "./cat_sports.avif";
import iph_1 from "./iph_1.jpg";
import nike_1 from "./nike_1.avif";

export const assets = {
  logo,
  hero_img,
  profile_icon,
  cat_electronics,
  cat_fashion,
  cat_home,
  cat_toys,
  cat_soprts,
};

export const products = [
  {
    _id: "aaaaa",
    name: "IPhone 16",
    short_desc:'latest-model advance features',
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 78000,
    image: [iph_1],
    category: "Electronics",
    subCategory: "Mobile",
    date: 1716644245448,
    bestseller: true,
  },

  {
    _id: "aaaaa",
    name: "Women Round Neck Cotton Top",
    short_desc:'comfort and easy',
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 1200,
    image: [iph_1],
    category: "Fashion",
    subCategory: "Topwear",
    date: 1716634345448,
    bestseller: false,
  },

  {
    _id: "aaaab",
    name: "Nike Shoes",
    short_desc:'comfort and style for every run',
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 4500,
    image: [nike_1],
    category: "Fashion",
    subCategory: "Shoes",
    date: 1716644245448,
    bestseller: true,
  },
];
