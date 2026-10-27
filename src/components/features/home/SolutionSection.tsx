import { useTranslations } from "next-intl";

export function SolutionSection() {
  const t = useTranslations('HomePage.Solution');

  const pillars = [
    { title: t('p1_title'), desc: t('p1_desc'), icon: '⚡' },
    { title: t('p2_title'), desc: t('p2_desc'), icon: '🛡️' },
    { title: t('p3_title'), desc: t('p3_desc'), icon: '🧠' }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="p-8 bg-secondary/30 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-6">{pillar.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
