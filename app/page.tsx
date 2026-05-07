export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Document Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Embed Interactive Elements<br />
          <span className="text-[#58a6ff]">into PDFs Easily</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Drag and drop forms, games, quizzes, and widgets directly into any PDF — no coding required. Built for marketing teams, educators, trainers, and consultants.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-xl transition-colors duration-200 shadow-lg"
        >
          Get Started — $39/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["Drag & Drop Editor", "Embeddable Forms", "Interactive Quizzes", "Custom Widgets", "PDF-lib Powered", "Instant Export"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$39<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to make PDFs interactive</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited PDF uploads",
              "Drag-and-drop interactive editor",
              "Forms, quizzes & game widgets",
              "One-click PDF export",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Do I need to know how to code?",
              a: "Not at all. The drag-and-drop editor lets you add interactive elements visually. Just upload your PDF, place your widgets, and export."
            },
            {
              q: "What kinds of interactive elements can I embed?",
              a: "You can embed fillable forms, multiple-choice quizzes, mini-games, rating widgets, and custom HTML components — all compiled into the final PDF."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. There are no long-term contracts. Cancel from your account dashboard at any time and you won't be charged again."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs pb-8">
        &copy; {new Date().getFullYear()} PDF Interactive Embedder. All rights reserved.
      </footer>
    </main>
  )
}
