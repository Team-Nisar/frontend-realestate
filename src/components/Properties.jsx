const Properties = ({ searchParams, page, setPage }) => {
  const [properties, setProperties] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties', {
          params: { ...searchParams, page },
        });
        setProperties(response.data.properties);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchProperties();
  }, [searchParams, page]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <p>{property.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="mr-2 bg-gray-200 px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className="bg-gray-200 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Properties