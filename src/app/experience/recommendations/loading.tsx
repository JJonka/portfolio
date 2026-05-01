import { ExperienceSectionNav } from "../../../components/ExperienceSectionNav";
import { LoadingSkeleton } from "../../../components/LoadingWrapper";

export default function Loading() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
      <ExperienceSectionNav />
      <div className="min-w-0 flex-1">
        <LoadingSkeleton />
      </div>
    </div>
  );
}
