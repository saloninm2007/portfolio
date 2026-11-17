import { Hero } from './components/Hero';
import { DesignApproach } from './components/DesignApproach';
import { WorkExperience } from './components/WorkExperience';
import { ProjectStackingScroll } from './components/ProjectStackingScroll';
import { Navigation } from './components/Navigation';
import { ContactFooter } from './components/ContactFooter';
import { ContactModal } from './components/ContactModal';
import { WorkWithMe } from './components/WorkWithMe';
import { useEffect, useState } from 'react';

// The 'Get users to the ‘aha’' page lives at /hire-me (old /work-with-me still works). #hire-me opens it in previews.
function useIsWorkWithMe() {
  const check = () => ['/hire-me', '/work-with-me'].includes(window.location.pathname.replace(/\/$/, '')) || ['#hire-me', '#work-with-me', '#sample-audit', '#sample-flow', '#sample-partner'].includes(window.location.hash);
  const [on, setOn] = useState(check);
  useEffect(() => {
    const update = () => setOn(check());
    window.addEventListener('hashchange', update);
    window.addEventListener('popstate', update);
    return () => {
      window.removeEventListener('hashchange', update);
      window.removeEventListener('popstate', update);
    };
  }, []);
  return on;
}

export default function App() {
  const workWithMe = useIsWorkWithMe();
  if (workWithMe) {
    return (
      <>
        <WorkWithMe />
        <ContactModal />
      </>
    );
  }
  return (
    <div className="min-h-screen" style={{ background: '#0B0B0C', color: 'var(--text-primary)', scrollBehavior: 'smooth' }}>
      <Navigation />
      <div className="p-2 md:p-3 flex flex-col gap-2 md:gap-3">
        {[<Hero key="hero" />, <ProjectStackingScroll key="work" />, <DesignApproach key="approach" />, <WorkExperience key="exp" />, <ContactFooter key="contact" />].map((section, i) => (
          <div key={i} className="rounded-[24px] md:rounded-[36px] overflow-clip bg-[#F3F0EA]">
            {section}
          </div>
        ))}
      </div>
      <ContactModal />
    </div>
  );
}