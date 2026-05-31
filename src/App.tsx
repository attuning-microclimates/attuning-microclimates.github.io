import { useState } from 'react';
import { opening, sections, type Lang } from './content';
import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';
import Press from './components/Press';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('microclimates.lang');
    return (saved === 'zh' || saved === 'en') ? saved : 'zh';
  });

  return (
    <>
      <a href="#main-content" className="skip-link">
        {lang === 'zh' ? '跳至主要內容' : 'Skip to content'}
      </a>

      <Header lang={lang} setLang={setLang} />
      <Nav lang={lang} />

      <main id="main-content">
        <p className="opening">{opening[lang]}</p>

        {sections.map(section => (
          <Section key={section.id} section={section} lang={lang} />
        ))}

        <Press lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}

export default App;
