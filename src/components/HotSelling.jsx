const HotSellingProperties = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-semibold mb-8">Hot Selling Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <img src="property1.jpg" alt="Property 1" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl mt-4">Luxury Apartment</h3>
          <p className="text-gray-500">Located in the heart of the city</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <img src="property2.jpg" alt="Property 2" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl mt-4">Cozy Villa</h3>
          <p className="text-gray-500">Beautiful villa with garden space</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <img src="property3.jpg" alt="Property 3" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl mt-4">Modern Condo</h3>
          <p className="text-gray-500">Luxury condo with stunning views</p>
        </div>
      </div>
    </section>
  );
};

export default HotSellingProperties;
