import { Suspense, type ReactNode } from "react";

export function LoadingSkeleton() {
  return (
    <div className="flex flex-1 flex-col gap-8 py-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-3">
          <div className="bg-surface animate-pulse h-5 w-1/3 rounded-md" />
          <div className="bg-surface animate-pulse h-3 w-1/4 rounded-md" />
          <div className="bg-surface animate-pulse h-3 w-full rounded-md" />
          <div className="bg-surface animate-pulse h-3 w-5/6 rounded-md" />
        </div>
      ))}
    </div>
  );
}

interface LoadingWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function LoadingWrapper({ children, fallback }: LoadingWrapperProps) {
  return (
    <Suspense fallback={fallback ?? <LoadingSkeleton />}>{children}</Suspense>
  );
}
