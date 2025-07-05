import Section from './Section';

const About = () => {
  return (
    <Section id="about">
      <h2 className="text-2xl font-bold font-mono mb-8"><span className='text-accent'>01.</span> About Me</h2>
      <div className="space-y-4 max-w-3xl text-slate-600 dark:text-slate-400">
        <p>
Hi, I’m Chaitanya — a web developer, product thinker, and creative spirit who loves building things that matter. Whether it’s coding intuitive interfaces, designing user flows, or launching community-driven events, I’m driven by purpose and empathy.        </p>
        <p>
I believe tech should feel human. That’s why I gravitate toward projects that blend function with feeling — from wellness platforms to artistic collaborations. With a curious mind and a hands-on approach, I enjoy wearing many hats: developer, designer, storyteller, and sometimes, chaos coordinator.        </p>
<p>Offline, you’ll find me vibing to music, reading thrillers, writing blogs on Medium, organizing campus events, or simply finding joy in the little details most people skip. I’m here to make a difference — one thoughtful interaction at a time.</p>
      </div>
    </Section>
  );
};

export default About;