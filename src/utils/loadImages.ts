export const getProductImages = (productName: string): string[] => {
  const imagePaths: { [key: string]: string[] } = {
    "Bakery Ingredients": [
      "/img/products/Bakery Ingredients/image1.jpeg",
      "/img/products/Bakery Ingredients/image2.jpeg",
      "/img/products/Bakery Ingredients/image3.jpeg",
      "/img/products/Bakery Ingredients/image4.jpeg",
    ],
    "Beverage powder mix": [
      "/img/products/Beverage powder mix/Beverage powder mix.jpeg",
    ],
    "Cake Decoration": [
      "/img/products/Cake Decoration/Cake Decoration.jpeg",
    ],
    "Cake Glazes": [
      "/img/products/Cake Glazes/Cake Glazes.jpeg",
      "/img/products/Cake Glazes/Cake Glazes 2.jpeg",
    ],
    "Cheese Product": [
      "/img/products/Cheese Product/Cheese Product.jpeg",
    ],
    "Chocolate Product": [
      "/img/products/Chocolate Product/Chocolate Products.jpeg",
      "/img/products/Chocolate Product/Chocolate Products 2.jpeg",
    ],
    "Dairy Product": [
      "/img/products/Chocolate Product/Dairy Product.jpeg",
      "/img/products/Chocolate Product/Dairy Product 2.jpeg",
    ],
    "Edible Products": [
      "/img/products/Edible Products/Edible glitter dust.jpeg",
      "/img/products/Edible Products/Edible printing.jpeg",
    ],
    "Fillings": [
      "/img/products/Fillings/Fillings.jpeg",
      "/img/products/Fillings/Fruit fillings.jpeg",
    ],
    "Flavored Spray": [
      "/img/products/Flavored Spray/Flavored Sprays.jpeg",
      "/img/products/Flavored Spray/Flavored Syrup 2.jpeg",
      "/img/products/Flavored Spray/Flavored Syrup 3.jpeg",
      "/img/products/Flavored Spray/Metallic Spray.jpeg",
    ],
    "Flour": [
      "/img/products/Bakery Powder Mixe/Bakery Powder Mixe.jpeg",
    ],
    "Paste": [
      "/img/products/Paste/Flow paste.jpeg",
      "/img/products/Paste/Sugar paste.jpeg",
    ],
    "Fruits": [
      "/img/products/Fruits/Fruits.jpeg",
    ],
    "Gold Silver Collection": [
      "/img/products/Gold Silver Collection/Gold Silver Collection.jpeg",
    ],
    "Nuts": [
      "/img/products/Nuts/Nuts.jpeg",
    ],
    "Puree": [
      "/img/products/Puree/Puree.jpeg",
    ],
    "Ready Made Mixes": [
      "/img/products/Ready Made Mixes/Ready Made Mixes.jpeg",
      "/img/products/Ready Made Mixes/Ready Made Mixes 2.jpeg",
    ],
    "Toppings": [
      "/img/products/Toppings/Toppings.jpeg",
    ],
    "Non food items": [
      "/img/products/Non food items/Non food items.jpeg",
    ],
    // Add other products and their images here
  };

  return imagePaths[productName] || [];
};

