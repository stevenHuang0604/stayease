function ErrorFetch({ error }) {
  return (
    <div className="mt-8 rounded border border-red-400 bg-red-100 p-4 text-red-700 dark:bg-red-500 dark:text-red-100">
      <h2 className="mb-2 text-lg font-semibold">Error Loading Hotels</h2>
      <p>
        {error.message ||
          "An unexpected error occurred. Please try again later."}
      </p>
    </div>
  );
}

export default ErrorFetch;
