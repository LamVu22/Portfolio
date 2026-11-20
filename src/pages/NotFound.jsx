export const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-foreground">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <a href="/" className="text-primary underline hover:no-underline">
        Back to home
      </a>
    </main>
  );
};
