import { type Lang } from '../content';

type PosterProps = {
  lang: Lang;
};

export default function Poster({ lang }: PosterProps) {
  const alt =
    lang === 'zh'
      ? '感知微氣候 展覽主視覺海報'
      : 'Attuning to Microclimates exhibition poster';

  return (
    <figure className="poster">
      <img
        src="/attuning-microclimates.png"
        alt={alt}
        width={1479}
        height={1044}
      />
    </figure>
  );
}
