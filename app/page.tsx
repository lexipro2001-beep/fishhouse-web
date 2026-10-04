'use client';

import { useState } from 'react';

const menu = [
  { name: 'Crispy Gulf Oysters', note: 'cornmeal, lemon, house hot sauce', price: '$18' },
  { name: 'Cedar-Roasted Salmon', note: 'spring peas, charred leek, brown butter', price: '$34' },
  { name: 'Dockside Fish & Chips', note: 'dayboat catch, malt vinegar, tartar', price: '$26' },
];

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [reserved, setReserved] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f3efe5] text-[#17352f]">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <nav className="flex h-24 items-center justify-between border-b border-[#17352f]/20" aria-label="Main navigation">
          <a href="#top" className="font-serif text-[1.65rem] font-bold tracking-[-0.04em]">FISHHOUSE<span className="text-[#e34a2c]">.</span></a>
          <div className="hidden items-center gap-9 text-sm font-semibold md:flex">
            <a className="transition hover:text-[#e34a2c]" href="#menu">Menu</a>
            <a className="transition hover:text-[#e34a2c]" href="#story">Our story</a>
            <a className="transition hover:text-[#e34a2c]" href="#visit">Visit</a>
          </div>
          <button onClick={() => setReserved(true)} className="hidden rounded-full bg-[#17352f] px-6 py-3 text-sm font-semibold text-[#f3efe5] transition hover:-translate-y-0.5 hover:bg-[#e34a2c] md:block">Book a table</button>
          <button onClick={() => setNavOpen(!navOpen)} className="grid h-11 w-11 place-items-center rounded-full border border-[#17352f]/30 text-xl md:hidden" aria-label="Toggle menu" aria-expanded={navOpen}>☰</button>
        </nav>
        {navOpen && <div className="flex flex-col gap-4 border-b border-[#17352f]/20 py-5 text-lg font-semibold md:hidden"><a href="#menu" onClick={() => setNavOpen(false)}>Menu</a><a href="#story" onClick={() => setNavOpen(false)}>Our story</a><a href="#visit" onClick={() => setNavOpen(false)}>Visit</a><button onClick={() => setReserved(true)} className="mt-2 rounded-full bg-[#17352f] px-5 py-3 text-[#f3efe5]">Book a table</button></div>}

        <section id="top" className="grid min-h-[calc(100vh-96px)] items-center gap-12 py-14 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-[#e34a2c]">Seafood • fire • good company</p>
            <h1 className="max-w-4xl font-serif text-[clamp(4.5rem,10vw,9.5rem)] font-bold leading-[.78] tracking-[-0.075em]">Fresh from<br/><span className="italic text-[#e34a2c]">the tide.</span></h1>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <p className="max-w-sm text-base leading-7 text-[#17352f]/70">A neighborhood fishhouse serving the day’s best catch, simply cooked over flame and shared around the table.</p>
              <a href="#menu" className="group inline-flex items-center gap-3 font-bold">Explore today’s menu <span className="grid h-11 w-11 place-items-center rounded-full border border-[#17352f] transition group-hover:bg-[#17352f] group-hover:text-white">↓</span></a>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xl rounded-[48%_48%_9%_9%] bg-[#89a99f] p-6 shadow-[18px_18px_0_#e34a2c]">
            <div className="grid h-full place-items-center overflow-hidden rounded-[48%_48%_7%_7%] border border-[#f3efe5]/50 bg-[#17352f] p-8 text-center text-[#f3efe5]">
              <div><div className="mx-auto mb-8 h-32 w-32 rounded-full border-2 border-[#f3efe5]/60 p-4"><div className="h-full w-full rounded-full border border-dashed border-[#f3efe5]/50" /></div><p className="font-serif text-4xl italic">Today’s catch</p><p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-[#f3efe5]/60">Wild striped bass • Montauk</p></div>
            </div>
            <div className="absolute -left-6 bottom-12 -rotate-6 rounded-full bg-[#f4c95d] px-6 py-4 text-center text-xs font-bold uppercase tracking-widest shadow-lg">Open daily<br/>from 4pm</div>
          </div>
        </section>
      </div>

      <section id="menu" className="bg-[#17352f] px-5 py-24 text-[#f3efe5] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#f4c95d]">A few favorites</p><h2 className="font-serif text-5xl tracking-tight sm:text-7xl">From the kitchen</h2></div><p className="max-w-sm text-[#f3efe5]/60">Our menu follows the boats and the seasons. Here today, gone with the tide.</p></div>
          <div className="divide-y divide-[#f3efe5]/20 border-y border-[#f3efe5]/20">
            {menu.map((item, i) => <div key={item.name} className="group grid gap-4 py-8 transition hover:pl-3 sm:grid-cols-[50px_1fr_auto] sm:items-center"><span className="text-sm text-[#f4c95d]">0{i + 1}</span><div><h3 className="font-serif text-2xl sm:text-3xl">{item.name}</h3><p className="mt-1 text-sm text-[#f3efe5]/50">{item.note}</p></div><span className="font-serif text-xl">{item.price}</span></div>)}
          </div>
        </div>
      </section>

      <section id="story" className="grid lg:grid-cols-2">
        <div className="bg-[#f4c95d] p-10 sm:p-20"><p className="text-xs font-bold uppercase tracking-[0.28em]">Since 1987</p><h2 className="mt-10 font-serif text-5xl leading-[.95] tracking-tight sm:text-7xl">Salt in the air.<br/>Joy at the table.</h2></div>
        <div className="flex items-center bg-[#e34a2c] p-10 text-[#f3efe5] sm:p-20"><div><p className="max-w-xl font-serif text-2xl leading-relaxed sm:text-4xl">“We buy from people we know, cook with the seasons, and never let a good meal get too serious.”</p><p className="mt-8 text-xs font-bold uppercase tracking-[0.25em]">— Mara & Ben, founders</p></div></div>
      </section>

      <footer id="visit" className="bg-[#f3efe5] px-5 py-16 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1400px] gap-10 border-t border-[#17352f]/20 pt-10 sm:grid-cols-3"><div><p className="font-serif text-2xl font-bold">FISHHOUSE.</p><p className="mt-3 text-sm text-[#17352f]/60">42 Dock Street<br/>Portsmouth, NH</p></div><div><p className="text-xs font-bold uppercase tracking-widest">Hours</p><p className="mt-3 text-sm text-[#17352f]/60">Sunday–Thursday 4–10<br/>Friday–Saturday 4–11</p></div><div className="sm:text-right"><button onClick={() => setReserved(true)} className="rounded-full bg-[#e34a2c] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1">Reserve your table →</button></div></div></footer>

      {reserved && <div className="fixed inset-0 z-50 grid place-items-center bg-[#17352f]/70 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="reservation-title" onClick={() => setReserved(false)}><div className="w-full max-w-md rounded-3xl bg-[#f3efe5] p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}><button className="float-right text-2xl" onClick={() => setReserved(false)} aria-label="Close">×</button><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e34a2c]">Reservations</p><h2 id="reservation-title" className="mt-3 font-serif text-4xl">Come sit with us.</h2><p className="mt-4 text-[#17352f]/65">Call us at (603) 555-0142 or send a note and we’ll save you a table.</p><a href="mailto:hello@fishhouse.example" className="mt-7 block rounded-full bg-[#17352f] px-6 py-4 text-center font-bold text-white">Email the fishhouse</a></div></div>}
    </main>
  );
}
