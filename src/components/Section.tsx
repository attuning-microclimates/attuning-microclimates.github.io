import { type Lang, type Section as SectionType } from '../content';

type SectionProps = {
  section: SectionType;
  lang: Lang;
};

export default function Section({ section, lang }: SectionProps) {
  const headingId = `${section.id}-heading`;

  return (
    <section id={section.id} aria-labelledby={headingId}>
      <span className="section-numeral" aria-hidden="true">{section.numeral}</span>
      <h2 id={headingId}>{section.heading[lang]}</h2>

      {section.paragraphs.map((p, idx) => (
        <p key={idx}>{p[lang]}</p>
      ))}

      {section.subsections && section.subsections.map(sub => {
        const subHeadingId = `${sub.id}-heading`;
        return (
          <div key={sub.id} id={sub.id} className="subsection" aria-labelledby={subHeadingId}>
            <span className="subsection-numeral" aria-hidden="true">{sub.numeral}</span>
            <h3 id={subHeadingId}>{sub.heading[lang]}</h3>
            {sub.paragraphs.map((p, idx) => (
              <p key={idx}>{p[lang]}</p>
            ))}
          </div>
        );
      })}
    </section>
  );
}
