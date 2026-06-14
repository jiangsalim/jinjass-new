export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-navy">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-teal border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-navy dark:text-white font-heading text-lg animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}