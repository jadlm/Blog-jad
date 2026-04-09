import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-extrabold text-primary/20 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
          moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark active:scale-95 transition-all duration-200 shadow-lg shadow-primary/25"
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="px-8 py-3 bg-muted text-foreground font-semibold rounded-xl hover:bg-border active:scale-95 transition-all duration-200 border border-border"
          >
            Browse Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
