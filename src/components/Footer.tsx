import { titleBlock, credits, type Lang } from '../content';

type FooterProps = {
  lang: Lang;
};

export default function Footer({ lang }: FooterProps) {
  return (
    <footer>
      <p>{titleBlock[lang][0]}</p>
      <div className="footer-credits">
        {credits.map(credit => (
          <a
            key={credit.url}
            href={credit.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {credit.label[lang]}
          </a>
        ))}
      </div>
    </footer>
  );
}
