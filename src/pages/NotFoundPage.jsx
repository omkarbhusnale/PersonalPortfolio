const NotFoundPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-20">
        404 - Page Not Found
      </h1>
      <p className="text-center mt-4 text-gray-600">
        The page you are looking for does not exist.
      </p>
      <div className="flex justify-center mt-8 mb-10">
        <a
          href="/"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
