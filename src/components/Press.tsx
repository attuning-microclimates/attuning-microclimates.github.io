import { press, pressHeading, videoHeading, videoLinks, type Lang } from '../content';

type PressProps = {
  lang: Lang;
};

export default function Press({ lang }: PressProps) {
  return (
    <section id="press" className="press" aria-labelledby="press-heading">
      <h2 id="press-heading">{pressHeading[lang]}</h2>

      {press.map(item => (
        <blockquote key={item.url} className="press-item" lang="zh-Hant">
          <p className="press-quote">「{item.quote}」</p>
          <p className="press-gloss">{item.gloss}</p>
          <div className="press-source">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.outlet[lang]}
            </a>
            {item.via && (
              <>
                {' · '}
                <a href={item.via.url} target="_blank" rel="noopener noreferrer">
                  {item.via.label[lang]}
                </a>
              </>
            )}
            <span className="press-date">{item.date}</span>
          </div>
        </blockquote>
      ))}

      <div className="press-video">
        <h3>{videoHeading[lang]}</h3>
        <ul>
          {videoLinks.map(v => (
            <li key={v.url}>
              <a href={v.url} target="_blank" rel="noopener noreferrer">
                {v.label[lang]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
