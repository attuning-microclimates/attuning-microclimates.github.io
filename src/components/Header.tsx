import { useEffect } from 'react';
import { titleBlock, type Lang } from '../content';

type HeaderProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export default function Header({ lang, setLang }: HeaderProps) {
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    localStorage.setItem('microclimates.lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };

  return (
    <header>
      <div className="title-block" aria-labelledby="main-title">
        <h1 id="main-title">
          <span style={{ display: 'block' }}>{titleBlock.en[0]}</span>
          <span style={{ display: 'block' }}>{titleBlock.zh[0]}</span>
        </h1>
        <p>
          <span style={{ display: 'block' }}>{titleBlock.en[1]}</span>
          <span style={{ display: 'block' }}>{titleBlock.zh[1]}</span>
        </p>
        <p>
          <span style={{ display: 'block' }}>{titleBlock.en[2]}</span>
          <span style={{ display: 'block' }}>{titleBlock.zh[2]}</span>
        </p>
      </div>
      <div className="lang-toggle">
        <button onClick={toggleLang} aria-label="Toggle language">
          繁中 / EN
        </button>
      </div>
    </header>
  );
}
