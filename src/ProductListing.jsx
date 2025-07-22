import Header from "./Header";
import ProductCard from "./ProductCard";

import "./ProductListing.css";

function ProductListing() {
  const products = [
    {
      id: 1,
      name: "Air purifying plants",
      products: [
        {
          id: 1,
          name: "Snake plant",
          description: "Produces oxygen at night",
          imageurl: "/snakeplant.png",
          price: 4,
        },
        {
          id: 2,
          name: "Spider plant",
          description: "Filters formaldehyde",
          imageurl: "/spiderplant.png",
          price: 9,
        },
        {
          id: 3,
          name: "Peace lily",
          description: "Removes mold spores",
          imageurl: "/peacelily.png",
          price: 22,
        },
        {
          id: 4,
          name: "Boston fern",
          description: "Adds humidity to the air",
          imageurl: "/bostonfern.png",
          price: 5,
        },
        {
          id: 5,
          name: "Rubber plant",
          description: "Easy to care for",
          imageurl: "/rubberplant.png",
          price: 19,
        },
        {
          id: 6,
          name: "Aloa vera",
          description: "Purifies the air",
          imageurl: "/aloavera.png",
          price: 5,
        },
      ],
    },
    {
      id: 2,
      name: "Aromatic plants",
      products: [
        {
          id: 7,
          name: "Lavender",
          description: "Calming scent",
          imageurl: "/lavender.png",
          price: 8,
        },
        {
          id: 8,
          name: "Jasmine",
          description: "Sweet fragrance",
          imageurl: "/jasmine.png",
          price: 13,
        },
      ],
    },
    {
      id: 3,
      name: "Herbs",
      products: [
        {
          id: 9,
          name: "Rosemary",
          description: "Invigorating scent",
          imageurl: "/rosemary.png",
          price: 5,
        },
        {
          id: 10,
          name: "Thyme",
          description: "Herbal scent",
          imageurl: "/thyme.png",
          price: 1,
        },
      ],
    },
  ];

  return (
    <div className="product-listing-container">
      <Header pagetitle="Plants" />
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <div className="product-listing">
            {product.products.map((product) => (
              <div key={product.id}>
                <ProductCard item={product} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
