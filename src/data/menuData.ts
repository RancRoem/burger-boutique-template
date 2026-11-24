export type CategoryId = "burgers" | "menus" | "sides" | "drinks" | "desserts";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryId;
  image: string;
  badge?: string;
  calories?: string;
}

export interface RestaurantConfig {
  name: string;
  tagline: string;
  description: string;
  currency: string;
  deliveryFee: number;
  minOrderForFreeDelivery: number;
  address: string;
  phone: string;
  email: string;
  openingHours: { days: string; hours: string }[];
  images: { logo: string; heroBanner: string; aboutKitchen: string };
}

export const RESTAURANT_CONFIG: RestaurantConfig = {
  name: "CRAFT & FLAME",
  tagline: "Artisanal Smash & Gourmet Burgers",
  description:
    "Hand-pressed 100% grass-fed beef patties, freshly baked brioche buns, and house-made sauces crafted daily to perfection.",
  currency: "$",
  deliveryFee: 3.5,
  minOrderForFreeDelivery: 35.0,
  address: "742 Evergreen Culinary Ave, Suite 100",
  phone: "+1 (555) 234-8910",
  email: "orders@://example.com",
  openingHours: [
    { days: "Mon - Thu", hours: "11:30 AM – 10:00 PM" },
    { days: "Fri - Sat", hours: "11:30 AM – 11:30 PM" },
    { days: "Sunday", hours: "12:00 PM – 9:30 PM" },
  ],
  images: {
    logo: "/images/branding/logo.png",
    heroBanner: "/images/branding/hero-banner.jpg",
    aboutKitchen: "/images/branding/about-kitchen.jpg",
  },
};

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "burgers", label: "Signature Burgers" },
  { id: "menus", label: "Complete Combos" },
  { id: "sides", label: "Sides & Snacks" },
  { id: "drinks", label: "Cold Drinks" },
  { id: "desserts", label: "Sweet Desserts" },
];

export const MENU_ITEMS: MenuItem[] = [
  { id: "burger-classic", name: "Classic Aged Cheeseburger", description: "Juicy seared beef patty, melted aged cheddar, crisp iceberg lettuce, tomato, pickles, and house sauce on a toasted sesame brioche bun.", price: 11.95, category: "burgers", image: "/images/burgers/classic-cheeseburger.jpg", badge: "Bestseller", calories: "680 kcal" },
  { id: "burger-smash", name: "Double Oklahoma Smash", description: "Two crispy-edged smashed beef patties, double melted American cheese, caramelized onions, and signature smash sauce on a glossy potato bun.", price: 13.95, category: "burgers", image: "/images/burgers/double-smash-burger.jpg", badge: "Chef's Pick", calories: "840 kcal" },
  { id: "burger-jalapeno", name: "Spicy Jalapeño & Pepper Jack", description: "Flame-grilled beef patty, melted Pepper Jack cheese, fresh sliced jalapeños, crispy fried onion rings, and smoky chipotle mayo.", price: 13.5, category: "burgers", image: "/images/burgers/spicy-jalapeno-burger.jpg", badge: "Spicy", calories: "760 kcal" },
  { id: "burger-chicken", name: "Crispy Buttermilk Chicken", description: "Golden crunchy buttermilk-brined chicken breast, house-made cabbage slaw, pickles, and creamy spicy mayo on a soft brioche bun.", price: 12.5, category: "burgers", image: "/images/burgers/crispy-chicken-burger.jpg", calories: "690 kcal" },
  { id: "burger-truffle", name: "Black Truffle & Smoked Bacon", description: "Thick medium-rare beef patty, crispy smoked bacon strips, melted Swiss cheese, sautéed mushrooms, and black truffle aioli on a pretzel bun.", price: 15.95, category: "burgers", image: "/images/burgers/truffle-bacon-burger.jpg", badge: "Premium", calories: "890 kcal" },
  { id: "menu-classic", name: "Classic Cheeseburger Combo", description: "Our Classic Aged Cheeseburger served with golden French fries, creamy mayonnaise dip, and an ice-cold cola with fresh lime.", price: 16.95, category: "menus", image: "/images/menus/classic-cheese-menu.jpg", badge: "Popular", calories: "1120 kcal" },
  { id: "menu-smash", name: "Double Smash Meal Deal", description: "Double Oklahoma Smash Burger paired with seasoned curly fries, fresh house coleslaw, and sparkling lemon-lime refresher.", price: 18.95, category: "menus", image: "/images/menus/double-smash-menu.jpg", calories: "1280 kcal" },
  { id: "menu-jalapeno", name: "Spicy Jalapeño Fiesta Combo", description: "Spicy Jalapeño & Pepper Jack Burger served with crispy waffle fries, fresh creamy guacamole cup, and homemade peach iced tea.", price: 18.5, category: "menus", image: "/images/menus/spicy-jalapeno-menu.jpg", calories: "1210 kcal" },
  { id: "menu-chicken", name: "Crispy Chicken Feast", description: "Crispy Buttermilk Chicken Burger paired with sea-salt sweet potato fries, roasted garlic aioli, and sparkling cucumber mineral water.", price: 17.5, category: "menus", image: "/images/menus/crispy-chicken-menu.jpg", calories: "1140 kcal" },
  { id: "menu-truffle", name: "Truffle & Bacon Deluxe Box", description: "Black Truffle & Smoked Bacon Burger served with rosemary steakhouse fries, baby green balsamic salad, and a chilled craft blonde beer.", price: 21.95, category: "menus", image: "/images/menus/truffle-bacon-menu.jpg", badge: "VIP Meal", calories: "1350 kcal" },
  { id: "side-loaded-fries", name: "Loaded Cheddar & Bacon Fries", description: "Crispy skin-on fries smothered in warm aged cheddar cheese sauce, smoky bacon bits, and fresh green scallions.", price: 6.95, category: "sides", image: "/images/sides/loaded-cheese-fries.jpg", badge: "Fan Favorite", calories: "540 kcal" },
  { id: "side-onion-rings", name: "Beer-Battered Onion Rings", description: "Thick-cut sweet onions dipped in a crispy golden beer batter, served with creamy roasted garlic aioli.", price: 5.5, category: "sides", image: "/images/sides/crispy-onion-rings.jpg", calories: "410 kcal" },
  { id: "side-sweet-potato", name: "Rosemary Sweet Potato Fries", description: "Crispy sweet potato fries tossed in flaky sea salt and fresh rosemary, paired with black truffle mayonnaise.", price: 5.95, category: "sides", image: "/images/sides/sweet-potato-fries.jpg", calories: "390 kcal" },
  { id: "side-mac-bites", name: "Crispy Mac & Cheese Bites", description: "Five golden-fried bites filled with creamy three-cheese macaroni, garnished with fresh parsley.", price: 6.5, category: "sides", image: "/images/sides/mac-cheese-bites.jpg", calories: "480 kcal" },
  { id: "side-coleslaw", name: "Artisanal Creamy Coleslaw", description: "Crisp shredded red and green cabbage with julienned carrots in a light tangy dressing, topped with black sesame seeds.", price: 4.25, category: "sides", image: "/images/sides/fresh-coleslaw.jpg", calories: "210 kcal" },
  { id: "drink-peach-tea", name: "Homemade Peach & Mint Iced Tea", description: "Freshly brewed black tea infused with sweet white peach nectar, fresh peach slices, and garden mint over crystal ice.", price: 4.5, category: "drinks", image: "/images/drinks/peach-iced-tea.jpg", calories: "110 kcal" },
  { id: "drink-raspberry-lemonade", name: "Sparkling Raspberry Lemonade", description: "Freshly squeezed lemon juice blended with crushed raspberries and sparkling spring water.", price: 4.75, category: "drinks", image: "/images/drinks/raspberry-lemonade.jpg", calories: "120 kcal" },
  { id: "drink-cola", name: "Classic Craft Cola", description: "Chilled classic cola served over ice with a fresh squeezed lime wedge.", price: 3.5, category: "drinks", image: "/images/drinks/classic-cola.jpg", calories: "140 kcal" },
  { id: "drink-craft-beer", name: "Local Craft Blonde Ale (0.0% / 5.2%)", description: "Crisp, refreshing golden blonde craft beer with subtle citrus notes and a velvety foam head.", price: 6.25, category: "drinks", image: "/images/drinks/craft-blonde-beer.jpg", calories: "165 kcal" },
  { id: "drink-cucumber-water", name: "Infused Cucumber & Mint Sparkling Water", description: "Zero-calorie sparkling mineral water infused with fresh cucumber ribbons and cooling mint leaves.", price: 3.75, category: "drinks", image: "/images/drinks/sparkling-cucumber-water.jpg", calories: "0 kcal" },
  { id: "dessert-brownie", name: "Warm Chocolate Fudge Brownie", description: "Rich dark chocolate brownie served warm with a scoop of Madagascar vanilla bean ice cream, chocolate drizzle, and walnuts.", price: 7.5, category: "desserts", image: "/images/desserts/chocolate-fudge-brownie.jpg", badge: "Must Try", calories: "620 kcal" },
  { id: "dessert-cheesecake", name: "New York Berry Cheesecake", description: "Velvety baked cream cheese cake on a buttery graham cracker crust, topped with fresh strawberries and berry compote.", price: 6.95, category: "desserts", image: "/images/desserts/ny-cheesecake.jpg", calories: "510 kcal" },
  { id: "dessert-churros", name: "Cinnamon Sugar Churros", description: "Warm crispy Spanish churros rolled in fine cinnamon sugar, served with a side of melted milk chocolate dip.", price: 6.25, category: "desserts", image: "/images/desserts/crispy-churros.jpg", calories: "490 kcal" },
  { id: "dessert-sundae", name: "Salted Caramel Pecan Sundae", description: "Creamy vanilla soft-serve swirled with golden salted caramel sauce, crunchy caramelized pecans, and a crisp wafer.", price: 5.95, category: "desserts", image: "/images/desserts/caramel-sundae.jpg", calories: "450 kcal" },
  { id: "dessert-apple-pie", name: "Traditional Warm Apple Pie", description: "Spiced cinnamon apples baked in a golden lattice pastry crust, served with freshly whipped cream.", price: 6.5, category: "desserts", image: "/images/desserts/warm-apple-pie.jpg", calories: "470 kcal" },
];
