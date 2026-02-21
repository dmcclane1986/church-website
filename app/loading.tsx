export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-navy-200 border-t-navy-600"
          aria-hidden
        />
        <p className="text-sm font-medium text-navy-600">Loading…</p>
      </div>
    </div>
  );
}
