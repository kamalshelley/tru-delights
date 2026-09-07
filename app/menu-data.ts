export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  dietary?: ("V" | "VG" | "GF")[];
  popular?: boolean;
}

export interface MenuGroup {
  id: "drinks" | "breakfast" | "lunch" | "treats";
  category: string;
  title: string;
  note: string;
  items: MenuItem[];
}

export const menuCategories = [
  { id: "all", label: "All Items" },
  { id: "drinks", label: "Hot & Cold Drinks" },
  { id: "breakfast", label: "Breakfast & Baps" },
  { id: "lunch", label: "Paninis, Wraps & Mains" },
  { id: "treats", label: "Sweet Treats & Bakes" },
] as const;

export const menuGroups: MenuGroup[] = [
  {
    id: "drinks",
    category: "drinks",
    title: "Hot Drinks",
    note: "Proudly serving specialty RAVE coffee beans",
    items: [
      { name: "Flat White", price: "£3.20", description: "Velvety textured microfoam over double ristretto RAVE espresso", popular: true },
      { name: "Cappuccino", price: "£3.30", description: "Rich espresso with steamed milk and a generous dusting of cocoa", dietary: ["V"] },
      { name: "Latte", price: "£3.30", description: "Smooth espresso poured over silky steamed milk with subtle foam", dietary: ["V"] },
      { name: "Americano", price: "£2.90", description: "Double shot of RAVE espresso lengthened with hot filtered water", dietary: ["VG", "GF"] },
      { name: "Espresso", price: "£2.30", description: "Pure, intense single or double origin shot", dietary: ["VG", "GF"] },
      { name: "Mocha", price: "£3.70", description: "Rich chocolate blended with espresso and silky steamed milk", dietary: ["V"] },
      { name: "Luxury Hot Chocolate", price: "£3.60", description: "Topped with marshmallows and whipped cream upon request", dietary: ["V"], popular: true },
      { name: "Yorkshire Tea", price: "£2.40", description: "Proper English brew served in a mug or pot", dietary: ["VG", "GF"] },
      { name: "Specialty Herbal Teas", price: "£2.60", description: "Earl Grey, Peppermint, Green Tea, or Berry Infusion", dietary: ["VG", "GF"] },
    ],
  },
  {
    id: "drinks",
    category: "drinks",
    title: "Cold Drinks & Coolers",
    note: "Made fresh & served chilled",
    items: [
      { name: "Iced Caramel Latte", price: "£3.80", description: "Double RAVE espresso over ice, chilled milk and caramel swirl", popular: true },
      { name: "Thick Real Fruit Smoothies", price: "£4.20", description: "Berry Burst or Mango & Passionfruit blended with fruit juices", dietary: ["VG", "GF"] },
      { name: "Artisan Milkshakes", price: "£4.20", description: "Whipped dairy ice cream: Strawberry, Chocolate, Banana or Vanilla", dietary: ["V"] },
      { name: "Sparkling Fruit Coolers", price: "£3.20", description: "Elderflower fizz, cloudy lemonade, or ginger beer", dietary: ["VG", "GF"] },
      { name: "San Pellegrino & Canned Drinks", price: "£1.90", description: "Aranciata, Limonata, Coke, Diet Coke", dietary: ["VG", "GF"] },
      { name: "Mineral Water (Still / Sparkling)", price: "£1.60", description: "Chilled bottled spring water", dietary: ["VG", "GF"] },
    ],
  },
  {
    id: "breakfast",
    category: "breakfast",
    title: "Breakfast Baps & Rolls",
    note: "Fresh bakery baps, crusty baguettes or thick-cut bloomer",
    items: [
      { name: "Crispy Smoked Bacon Bap", price: "£3.95", description: "Locally sourced dry-cured back bacon in a buttered bakery bap", popular: true },
      { name: "Farmhouse Sausage Bap", price: "£3.95", description: "Butcher-made Cumberland sausages grilled to perfection" },
      { name: "Double Free-Range Fried Egg", price: "£3.50", description: "Two golden runny yolks in a soft fresh roll", dietary: ["V"] },
      { name: "Bacon & Sausage Classic", price: "£4.95", description: "The morning favorite with crispy bacon and Cumberland sausage", popular: true },
      { name: "Bacon & Egg Bap", price: "£4.50", description: "Golden fried egg atop sizzling back bacon" },
      { name: "Sausage & Egg Bap", price: "£4.50", description: "Butcher sausage with fried farm egg" },
      { name: "The Big Tru Breakfast Wrap", price: "£6.25", description: "Bacon, sausage, fried egg, hash brown & melted cheese folded in a toasted tortilla", popular: true },
    ],
  },
  {
    id: "breakfast",
    category: "breakfast",
    title: "Plated Breakfasts & Toast",
    note: "Served all morning until 12pm",
    items: [
      { name: "The Full English", price: "£8.95", description: "2 bacon, 2 sausage, 2 eggs, baked beans, grilled tomato, hash brown, mushrooms & toast", popular: true },
      { name: "Vegetarian Full Breakfast", price: "£8.50", description: "Vegetarian sausages, halloumi, avocado, 2 eggs, beans, mushrooms, tomato & toast", dietary: ["V"] },
      { name: "Crushed Avocado on Sourdough", price: "£6.50", description: "Seasoned crushed avocado, chilli flakes, olive oil on toasted sourdough", dietary: ["VG"] },
      { name: "Creamy Scrambled Eggs on Toast", price: "£4.95", description: "Rich butter-scrambled free-range eggs on thick bloomer bread", dietary: ["V"] },
      { name: "Classic Heinz Beans on Toast", price: "£3.95", description: "Steaming baked beans over two slices of golden buttered toast", dietary: ["VG"] },
    ],
  },
  {
    id: "lunch",
    category: "lunch",
    title: "Paninis & Melted Toasties",
    note: "Hot pressed in artisan sourdough ciabatta with salad garnish",
    items: [
      { name: "Brie, Bacon & Cranberry", price: "£6.25", description: "Creamy French brie melted with crispy bacon and tart cranberry sauce", popular: true },
      { name: "Chicken, Mozzarella & Green Pesto", price: "£6.25", description: "Tender chicken breast, basil pesto, and bubbling mozzarella", popular: true },
      { name: "Tuna & Cheddar Melt", price: "£5.95", description: "Dolphin-safe tuna mayo with mature English cheddar" },
      { name: "Ham & Mature Cheddar", price: "£5.75", description: "Cured farmhouse ham with melted sharp cheddar" },
      { name: "BBQ Pulled Pork & Red Leicester", price: "£6.50", description: "Slow-cooked smokey pulled pork with tangy barbecue glaze", popular: true },
      { name: "Cheddar, Tomato & Red Onion", price: "£5.25", description: "Classic melted cheese with vine tomatoes and red onion", dietary: ["V"] },
    ],
  },
  {
    id: "lunch",
    category: "lunch",
    title: "Fresh Deli Wraps & Sandwiches",
    note: "Made fresh to order with crisps and house slaw",
    items: [
      { name: "Sweet Chilli Crispy Chicken Wrap", price: "£5.95", description: "Crispy chicken, sweet chilli glaze, crunchy lettuce & mayo", popular: true },
      { name: "Chicken Caesar & Bacon Salad Wrap", price: "£5.95", description: "Roast chicken, bacon lardons, shaved parmesan and Caesar dressing" },
      { name: "Coronation Chicken Bloomer", price: "£5.50", description: "Mildly spiced coronation chicken with mango chutney and crisp leaves" },
      { name: "Classic BLT (Bacon, Lettuce, Tomato)", price: "£5.50", description: "Crispy smoked bacon, sliced vine tomatoes, iceberg and mayo" },
      { name: "Egg Mayonnaise & Watercress", price: "£4.50", description: "Free-range chopped egg in seasoned light mayonnaise", dietary: ["V"] },
      { name: "Greek Salad Wrap with Feta", price: "£5.25", description: "Kalamata olives, Greek feta, cucumber, tomato and oregano dressing", dietary: ["V"] },
    ],
  },
  {
    id: "lunch",
    category: "lunch",
    title: "Steaming Jacket Potatoes",
    note: "Crispy baked skin, fluffy interior, served with butter & side salad",
    items: [
      { name: "Jacket with Baked Beans & Cheddar", price: "£5.95", description: "The ultimate British comfort lunch", dietary: ["V", "GF"], popular: true },
      { name: "Jacket with Tuna & Sweetcorn Mayo", price: "£6.25", description: "Flaked tuna and sweetcorn in creamy mayonnaise", dietary: ["GF"] },
      { name: "Jacket with Slow Cooked Pulled Pork", price: "£6.75", description: "Tender BBQ pulled pork with melted cheddar", dietary: ["GF"] },
      { name: "Jacket with Rich Chilli Con Carne", price: "£6.75", description: "Slow-simmered minced beef, kidney beans and sour cream", dietary: ["GF"], popular: true },
    ],
  },
  {
    id: "treats",
    category: "treats",
    title: "Sweet Treats & Artisan Bakes",
    note: "Baked daily · Ask our team about today's counter bakes",
    items: [
      { name: "Pipp & Co Artisan Doughnuts (Fridays Only)", price: "£3.80", description: "Handcrafted sourdough brioche doughnuts with rotating seasonal gourmet glazes", popular: true },
      { name: "Warm Cinnamon Swirl", price: "£2.80", description: "Buttery pastry spiraled with fragrant cinnamon and iced sugar drizzle", dietary: ["V"] },
      { name: "Homemade Chocolate Fudge Brownie", price: "£3.20", description: "Rich Belgian dark chocolate brownie, gooey center", dietary: ["V", "GF"] },
      { name: "Traditional Lemon Drizzle Slice", price: "£3.00", description: "Moist sponge soaked in fresh lemon syrup with crunchy sugar top", dietary: ["V"] },
      { name: "Fresh Butter Scone with Clotted Cream & Jam", price: "£3.50", description: "Warm scone served with Rodda's Cornish clotted cream and strawberry jam", dietary: ["V"], popular: true },
    ],
  },
];
