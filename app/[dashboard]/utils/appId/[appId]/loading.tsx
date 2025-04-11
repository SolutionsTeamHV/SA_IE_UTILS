export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="text-center space-y-3">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white mx-auto"></div>
        <p className="text-lg font-semibold">Fetching workflows</p>
      </div>
    </div>
  );
}
