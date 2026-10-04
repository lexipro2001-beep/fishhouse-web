'use client';

import { useState } from 'react';

const menuGroups = [
  { number: '01', title: 'Fish House Favorites', copy: 'The fish dishes you already know and love, served without the fuss.' },
  { number: '02', title: 'Pizzas', copy: 'New pies, bold toppings, and plenty to share around the table.' },
  { number: '03', title: 'Subs & Sandwiches', copy: 'Stacked high, made fresh, and built for a hungry afternoon by the water.' },
  { number: '04', title: 'Shareables', copy: 'Snacks, starters, and pass-it-around plates for the whole crew.' },
];

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6eddd] text-[#152d55]">
      <div className="bg-[#f7b83d] px-4 py-2 text-center text-xs font-black uppercase tracking-[0.18em] text-[#152d55]">
        More choices. More favorites. Something for everyone.
      </div>

      <header className="relative z-20 border-b-2 border-[#152d55] bg-[#f6eddd] px-5 sm:px-8 lg:px-12">
        <nav className="mx-auto flex h-24 max-w-[1450px] items-center justify-between" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-3 font-black uppercase tracking-tight">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#152d55] text-2xl text-[#f7b83d]">OF</span>
            <span className="hidden sm:block">The Old Fish House</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-black uppercase tracking-wider md:flex">
            <a className="transition hover:text-[#dd4d28]" href="#menu">Eat</a>
            <a className="transition hover:text-[#dd4d28]" href="#belly-up">Belly up</a>
            <a className="transition hover:text-[#dd4d28]" href="#visit">Visit</a>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=30+Main+St+Huron+OH+44839" target="_blank" rel="noreferrer" className="hidden rounded-full bg-[#152d55] px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#dd4d28] md:block">Get directions</a>
          <button onClick={() => setNavOpen(!navOpen)} className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#152d55] text-xl md:hidden" aria-label="Toggle menu" aria-expanded={navOpen}>☰</button>
        </nav>
        {navOpen && <div className="flex flex-col gap-5 border-t-2 border-[#152d55] py-6 text-lg font-black uppercase md:hidden"><a href="#menu" onClick={() => setNavOpen(false)}>Eat</a><a href="#belly-up" onClick={() => setNavOpen(false)}>Belly up</a><a href="#visit" onClick={() => setNavOpen(false)}>Visit</a></div>}
      </header>

      <section id="top" className="relative bg-[#235788] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1450px] items-center gap-12 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#f7b83d]">Huron, Ohio • waterfront eats</p>
            <h1 className="max-w-4xl text-[clamp(4rem,9vw,8.5rem)] font-black uppercase leading-[.78] tracking-[-0.07em]">Same old<br/><span className="text-[#f7b83d]">Fish House</span><br/>flavor.</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">The Old Fish House is Huron’s come-as-you-are stop for fish favorites, pizzas, subs, shareable snacks, cold drinks, and good times on the water.</p>
            <div className="mt-9 flex flex-wrap gap-4"><a href="#menu" className="rounded-full bg-[#f7b83d] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#152d55] transition hover:-translate-y-1">See what’s new</a><a href="#visit" className="rounded-full border-2 border-white px-7 py-4 text-sm font-black uppercase tracking-wide transition hover:bg-white hover:text-[#152d55]">Plan your visit</a></div>
          </div>
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="rotate-2 rounded-[2rem] bg-[#f7b83d] p-4 shadow-[18px_18px_0_#10233f]"><img src="/waterfront-dog.jpg" alt="A loaded waterfront hot dog from The Old Fish House" className="aspect-[4/5] w-full rounded-[1.25rem] object-cover" /></div>
            <div className="absolute -bottom-7 -left-4 -rotate-6 rounded-full bg-[#dd4d28] px-7 py-5 text-center text-sm font-black uppercase tracking-widest text-white shadow-xl">Snacks &<br/>B.S. facts</div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7b83d] px-5 py-7 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1450px] flex-wrap items-center justify-center gap-x-12 gap-y-3 text-center text-sm font-black uppercase tracking-[0.14em] text-[#152d55]"><span>30 Main St, Huron, OH</span><span className="hidden h-2 w-2 rounded-full bg-[#dd4d28] sm:block"/><span>Mon–Thu 4–10</span><span className="hidden h-2 w-2 rounded-full bg-[#dd4d28] sm:block"/><span>Fri–Sun from 11</span></div></section>

      <section id="menu" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-black uppercase tracking-[0.3em] text-[#dd4d28]">New menu</p><h2 className="mt-4 text-6xl font-black uppercase leading-[.85] tracking-[-0.06em] sm:text-8xl">Pick your<br/>favorite.</h2><p className="mt-7 max-w-md text-lg leading-8 text-[#152d55]/70">Our expanded menu brings more to the table while keeping the Old Fish House classics right where they belong.</p></div><div className="divide-y-2 divide-[#152d55] border-y-2 border-[#152d55]">{menuGroups.map((item) => <article key={item.number} className="grid gap-3 py-7 sm:grid-cols-[55px_1fr] sm:gap-6"><span className="font-black text-[#dd4d28]">{item.number}</span><div><h3 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">{item.title}</h3><p className="mt-2 max-w-2xl leading-7 text-[#152d55]/65">{item.copy}</p></div></article>)}</div></div>
        </div>
      </section>

      <section id="belly-up" className="grid bg-[#10233f] text-white lg:grid-cols-2">
        <div className="min-h-[500px]"><img src="/patio.jpg" alt="The waterfront patio and Belly Up bar" className="h-full w-full object-cover" /></div>
        <div className="flex items-center p-10 sm:p-16 lg:p-20"><div><p className="text-xs font-black uppercase tracking-[0.3em] text-[#f7b83d]">The Belly Up bar</p><h2 className="mt-5 text-5xl font-black uppercase leading-[.9] tracking-[-0.05em] sm:text-7xl">Cold drinks.<br/>Waterfront seats.</h2><p className="mt-7 max-w-xl text-lg leading-8 text-white/65">Pull up a chair, grab a round, and stay awhile. From bourbon hour to lemonade and local cans, there’s always something worth raising a glass to.</p></div></div>
      </section>

      <section className="bg-[#dd4d28] px-5 py-20 text-white sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1450px] items-center gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-xs font-black uppercase tracking-[0.3em] text-[#f7b83d]">Good food. Good company.</p><h2 className="mt-5 text-5xl font-black uppercase leading-[.9] tracking-[-0.05em] sm:text-7xl">Local tastes<br/>better here.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-white/75">Come for the expanded menu, stay for the patio, and bring the people who make a meal memorable.</p></div><div className="rounded-[2rem] bg-[#f6eddd] p-5"><img src="/support-local.png" alt="Support local — The Old Fish House, Huron, Ohio" className="w-full rounded-2xl" /></div></div></section>

      <section id="visit" className="px-5 py-24 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[1fr_.85fr]"><div><p className="text-xs font-black uppercase tracking-[0.3em] text-[#dd4d28]">Come find us</p><h2 className="mt-5 text-6xl font-black uppercase leading-[.85] tracking-[-0.06em] sm:text-8xl">Right on<br/>the water.</h2><a href="https://www.google.com/maps/search/?api=1&query=30+Main+St+Huron+OH+44839" target="_blank" rel="noreferrer" className="mt-9 inline-flex rounded-full bg-[#152d55] px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#dd4d28]">Open in maps →</a></div><div className="grid content-center gap-8 border-l-2 border-[#152d55] pl-8 sm:pl-12"><div><p className="text-xs font-black uppercase tracking-[.2em] text-[#dd4d28]">Address</p><p className="mt-2 text-2xl font-black uppercase">30 Main Street<br/>Huron, Ohio 44839</p></div><div><p className="text-xs font-black uppercase tracking-[.2em] text-[#dd4d28]">Hours</p><p className="mt-2 text-lg font-bold leading-8">Monday–Thursday: 4pm–10pm<br/>Friday–Sunday: Open at 11am</p></div></div></div></section>

      <footer className="bg-[#152d55] px-5 py-10 text-white sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-4 sm:flex-row sm:items-center"><p className="text-xl font-black uppercase">The Old Fish House</p><p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Nik-nax • snacks • B.S. facts</p></div></footer>
    </main>
  );
}
