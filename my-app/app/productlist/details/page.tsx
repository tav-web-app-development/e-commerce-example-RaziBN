import Image from "next/image";

const productData = {
  id: 1,
  product: "Micro",
  description: "A premium microwave oven with smart features and sleek design.",
  price: "$249.97",
  image: "/M1.jpg",
  brand: "Domo",
  features: [
    "Capacity : 1.3 Cu ft",
    "1100 Watts of cooking power",
    "10 intensity levels",
    "12.4 In glass turnable",
  ],
  availability: "In Stock",
};

const ProductDetail = () => {
  return (
    <div className="product-detail bg-black-100 text-white-800 p-5 flex flex-col md:flex-row items-center md:space-x-6 shadow-lg rounded-lg">
      <div className="px-4 my-2">
        <h2 className="text-3xl font-semibold mb-2">{productData.product}</h2>
        <p className="text-lg mb-2">{productData.description}</p>
        <p className="text-2xl font-bold mb-2">{productData.price}</p>
        <p className="text-md mb-2">
          <strong>Brand:</strong> {productData.brand}
        </p>
        <p className="text-md mb-2">
          <strong>Availability:</strong> {productData.availability}
        </p>
        <div className="mb-4">
          <strong>Features:</strong>
          <ul className="list-disc list-inside ml-4 mt-2">
            {productData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
      <div className="relative w-full md:w-1/2 h-64 mb-6">
        <Image
          src={productData.image}
          alt={productData.product}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProductDetail;
