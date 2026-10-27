import { useTranslations } from "next-intl";

export function ProblemSection() {
  const t = useTranslations('HomePage.Problem');
  
  return (
    <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(110,230,76,0.05),transparent_70%)]"></div>
      <div className="container relative mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-accent mb-4">
          The Great Displacement
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          {t('title')}
        </h3>
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
          {t('content')}
        </p>
      </div>
    </section>
  );
}
