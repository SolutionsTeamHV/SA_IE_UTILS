export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen text-foreground">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-border border-t-transparent mx-auto"></div>
        <p className="text-lg font-semibold">Hold tight! We&apos;re summoning your workflows...</p>
      </div>
    </div>
  );
}
