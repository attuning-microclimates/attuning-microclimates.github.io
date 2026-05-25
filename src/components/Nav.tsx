import { sections, type Lang } from '../content';

type NavProps = {
  lang: Lang;
};

export default function Nav({ lang }: NavProps) {
  return (
    <nav aria-label="Main Navigation">
      <ul>
        {sections.map(section => (
          <li key={section.id}>
            <a href={`#${section.id}`}>
              {section.numeral} {section.heading[lang]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
