import SectionSeparator from "../components/SectionSeparator";
import TechLogosGrid from "../components/TechLogosGrid";
import HeroSection from "../components/HeroSection";
import ExperiencePreview from "../components/ExperiencePreview";
import RecommendationsPreview from "../components/RecommendationsPreview";
import { LoadingWrapper } from "../components/LoadingWrapper";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-5xl">
        <LoadingWrapper>
          <HeroSection />
        </LoadingWrapper>
      </section>

      <SectionSeparator targetId="preview" />

      <section id="preview" className="mx-auto max-w-5xl scroll-mt-20 px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <LoadingWrapper>
            <ExperiencePreview />
          </LoadingWrapper>
          <LoadingWrapper>
            <RecommendationsPreview />
          </LoadingWrapper>
        </div>
      </section>

      <SectionSeparator label="Technologies" targetId="technologies" />

      <section id="technologies" className="mx-auto mt-20 scroll-mt-20 px-6">
        <h2 className="text-accent text-center text-5xl font-bold tracking-tight sm:text-4xl">
          Technologies I work with
        </h2>
        <TechLogosGrid />
      </section>
    </div>
  );
};

export default Home;
