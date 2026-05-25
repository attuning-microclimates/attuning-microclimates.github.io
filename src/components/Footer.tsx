import { titleBlock, type Lang } from '../content';

type FooterProps = {
  lang: Lang;
};

export default function Footer({ lang }: FooterProps) {
  return (
    <footer>
      <p>{titleBlock[lang][0]}</p>
    </footer>
  );
}
