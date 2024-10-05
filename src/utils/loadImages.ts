export const getProductImages = (productName: string): string[] => {
  const imagePaths: { [key: string]: string[] } = {
    "Bakery": [
      "/img/products/Bakery/image1.jpeg",
      "/img/products/Bakery/image2.jpeg",
      "/img/products/Bakery/image3.jpeg",
      "/img/products/Bakery/image4.jpeg",
    ],
    "Beverage": [
      "/img/products/Beverage/Beverage.jpeg",
    ],
    "Cake": [
      "/img/products/Cake/Cake.jpeg",
    ],
    "Cakes": [
      "/img/products/Cakes/CakeGlazes.jpeg",
      "/img/products/Cakes/CakeGlazes2.jpeg",
    ],
    "Cheese": [
      "/img/products/Cheese/Cheese.jpeg",
    ],
    "Chocolate": [
      "/img/products/Chocolate/Chocolate.jpeg",
      "/img/products/Chocolate/ChocolateProducts.jpeg",
    ],
    "Dairy": [
      "/img/products/Dairy/Dairy.jpeg",
      "/img/products/Dairy/DairyProduct.jpeg",
    ],
    "Edible": [
      "/img/products/Edible/Edible.jpeg",
      "/img/products/Edible/Edibleprinting.jpeg",
    ],
    "Fillings": [
      "/img/products/Fillings/Fillings.jpeg",
      "/img/products/Fillings/Fruit fillings.jpeg",
    ],
    "Flavored": [
      "/img/products/Flavored/Flavoured.jpeg",
      "/img/products/Flavored/FlavouredSyrup2.jpeg",
      "/img/products/Flavored/FlavouredSyrup3.jpeg",
      "/img/products/Flavored/MetallicSpray.jpeg",
    ],
    "Flour": [
      "/img/products/Flour/Flours.jpeg",
    ],
    "Paste": [
      "/img/products/Paste/paste.jpeg",
      "/img/products/Paste/Sugarpaste.jpeg",
    ],
    "Fruits": [
      "/img/products/Fruits/Fruits.jpeg",
    ],
    "GoldSilver": [
      "/img/products/GoldSilver/Gold.jpeg",
    ],
    "Nuts": [
      "/img/products/Nuts/Nuts.jpeg",
    ],
    "Puree": [
      "/img/products/Puree/Puree.jpeg",
    ],
    "ReadyMadeMixes": [
      "/img/products/ReadyMadeMixes/Ready.jpeg",
      "/img/products/ReadyMadeMixes/ReadyMadeMixes.jpeg",
    ],
    "Toppings": [
      "/img/products/Toppings/Toppings.jpeg",
    ],
    "Nonfooditems": [
      "/img/products/Nonfooditems/Non.jpeg",
    ],
    // Add other products and their images here
  };

  return imagePaths[productName] || [];
};

