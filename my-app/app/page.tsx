export default function Home() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/ecommerce.jpg')",
          backdropFilter: "blur(5px)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center p-10 text-white">
          <h1 className="text-6xl font-bold mb-4">Welcome to our store!</h1>
          <p className="text-2xl mb-10">
            We offer high quality products for great prices.
          </p>
          <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}
