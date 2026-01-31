import { ArrowDown, Download, Paintbrush, Pencil, Quote } from "lucide-react";

export default function Index() {
  return (
    <div className="bg-background-light text-[#0d121b] transition-colors duration-300 dark:bg-background-dark dark:text-gray-100">
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <header className="sticky top-0 z-50 w-full border-gray-200 border-b bg-background-light/80 backdrop-blur-md dark:border-gray-800 dark:bg-background-dark/80">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="font-bold text-xl tracking-tight">
                ResumeBuilder
              </span>
            </div>

            <nav className="hidden items-center gap-10 md:flex">
              <a
                className="font-medium text-sm opacity-70 transition-opacity hover:opacity-100"
                href="#"
              >
                Templates
              </a>
              <a
                className="font-medium text-sm opacity-70 transition-opacity hover:opacity-100"
                href="#"
              >
                Pricing
              </a>
              <a
                className="font-medium text-sm opacity-70 transition-opacity hover:opacity-100"
                href="#"
              >
                Resources
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="px-4 font-semibold text-sm opacity-70 hover:opacity-100">
                Log In
              </button>
              <button className="rounded-lg bg-primary px-5 py-2.5 font-bold text-sm text-white shadow-sm transition-all hover:bg-primary/90">
                Get Started
              </button>
            </div>
          </div>
        </header>
        <section className="relative flex flex-col items-center justify-center px-6 py-12 text-center md:py-20">
          <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
            <div className="absolute top-1/2 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-[120px]" />
          </div>

          <div className="max-w-4xl space-y-8">
            <h1 className="font-black text-5xl leading-tight tracking-tight md:text-7xl lg:text-8xl">
              Build your career story <br className="hidden md:block" />
              <span className="text-primary">with precision.</span>
            </h1>

            <p className="mx-auto max-w-2xl font-light text-gray-500 text-lg leading-relaxed md:text-xl dark:text-gray-400">
              The most elegant way to create a professional resume in minutes.
              <br className="hidden md:block" />
              No clutter, just results. Trusted by over 50,000 professionals.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <button className="w-full min-w-[200px] rounded-lg bg-primary px-8 py-4 font-bold text-base text-white shadow-lg transition-all hover:shadow-primary/20 sm:w-auto">
                Start Building Free
              </button>
              <button className="w-full min-w-[200px] rounded-lg border border-gray-200 bg-white px-8 py-4 font-semibold text-base transition-all hover:bg-gray-50 sm:w-auto dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800">
                View Templates
              </button>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2 opacity-40">
            <span className="font-bold text-[10px] uppercase tracking-[0.2em]">
              Scroll
            </span>
            <span className="material-symbols-outlined animate-bounce">
              <ArrowDown />
            </span>
          </div>
        </section>
        <section className="border-gray-100 border-y bg-gray-50/50 py-12 dark:border-gray-900 dark:bg-gray-900/20">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-8 text-center font-bold text-gray-400 text-xs uppercase tracking-widest">
              Professionals hired at
            </p>

            <div className="flex flex-wrap justify-center gap-8 opacity-40 contrast-125 grayscale md:gap-16">
              <div className="font-bold text-xl italic">GOOGLE</div>
              <div className="font-bold text-xl tracking-tighter">airbnb</div>
              <div className="font-black text-xl">NETFLIX</div>
              <div className="font-medium text-xl tracking-[0.3em]">STRIPE</div>
              <div className="font-serif text-xl">Amazon</div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="mb-16 text-center">
            <h4 className="font-bold text-primary text-xs uppercase tracking-[0.3em]">
              How it works
            </h4>
            <h2 className="mt-4 font-bold text-3xl md:text-4xl">
              From zero to interview in 3 steps
            </h2>
          </div>

          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="group flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-gray-200/50 shadow-xl transition-transform group-hover:-translate-y-1 dark:bg-gray-800 dark:shadow-none">
                <span className="material-symbols-outlined text-3xl text-primary">
                  <Paintbrush />
                </span>
              </div>
              <h3 className="font-bold text-lg">Choose Template</h3>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed dark:text-gray-400">
                Pick from our curated, professional designs tailored for ATS
                optimization.
              </p>
            </div>

            <div className="absolute top-8 left-[25%] hidden h-px w-[15%] bg-gray-200 md:block dark:bg-gray-800" />

            <div className="group flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-gray-200/50 shadow-xl transition-transform group-hover:-translate-y-1 dark:bg-gray-800 dark:shadow-none">
                <span className="material-symbols-outlined text-3xl text-primary">
                  <Pencil />
                </span>
              </div>
              <h3 className="font-bold text-lg">Fill Info</h3>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed dark:text-gray-400">
                Add your experience and skills with our intuitive,
                distraction-free editor.
              </p>
            </div>

            <div className="absolute top-8 right-[25%] hidden h-px w-[15%] bg-gray-200 md:block dark:bg-gray-800" />

            <div className="group flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-gray-200/50 shadow-xl transition-transform group-hover:-translate-y-1 dark:bg-gray-800 dark:shadow-none">
                <span className="material-symbols-outlined text-3xl text-primary">
                  <Download />
                </span>
              </div>
              <h3 className="font-bold text-lg">Download</h3>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed dark:text-gray-400">
                Get your polished PDF instantly and start applying to your dream
                roles.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32 dark:bg-gray-900/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h4 className="font-bold text-primary text-xs uppercase tracking-[0.3em]">
                Success Stories
              </h4>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="items-center-safe flex max-w-3xl flex-col text-center">
                <span className="material-symbols-outlined text-6xl text-gray-300">
                  <Quote />
                </span>

                <blockquote className="mt-6">
                  <p className="font-light text-2xl text-gray-800 italic leading-relaxed md:text-3xl dark:text-gray-100">
                    “This builder changed the way I present myself. Within two
                    days of sending out my new resume, I had three interviews
                    lined up at top tech companies. The minimalist designs truly
                    stand out.”
                  </p>
                </blockquote>

                <div className="mt-10 flex flex-col items-center">
                  <div className="h-14 w-14 overflow-hidden rounded-full bg-gray-200">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBSq4PmUCw068QKziWXAhLObEqOMCGiViMXxQO3SyKAGuJ5pe2nO1D-3H5YVb6HGHbAFbMT7L2Vq8XouFWgJwow3yOpXpXDdUA0t5Eh9c8LOh-ElNdK4fIoTzR3qSewKnOK05WftyUYolkxkAidufgmPdVDMfJFGKH7ozEF3lVazO4KGUs0XDppMuW9Yv0YSXPQsQqaVO1lV6HOJ54RCP48J94B4KJTu7cdhbOqLt2qPjyOI50T93zuxleUMxMBbS77NRN68-PZpQ"
                      alt="Sarah Johnson portrait"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h5 className="mt-4 font-bold">Sarah Johnson</h5>
                  <p className="mt-1 text-gray-500 text-xs uppercase tracking-widest">
                    Senior Product Designer
                  </p>
                </div>
              </div>

              <div className="mt-12 flex gap-2">
                <button className="h-1.5 w-6 rounded-full bg-primary" />
                <button className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-colors hover:bg-primary/50 dark:bg-gray-700" />
                <button className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-colors hover:bg-primary/50 dark:bg-gray-700" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-white md:py-24">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

            <h2 className="relative z-10 font-bold text-3xl md:text-5xl">
              Ready to land your next role?
            </h2>

            <p className="relative z-10 mx-auto mt-6 max-w-xl text-lg opacity-80">
              Join thousands of job seekers who use our minimalist builder to
              land interviews faster.
            </p>

            <div className="relative z-10 mt-10">
              <button className="rounded-lg bg-white px-10 py-4 font-bold text-base text-primary shadow-xl transition-transform hover:scale-105">
                Build Your Resume Now
              </button>
            </div>
          </div>
        </section>

        <footer className="mt-auto border-gray-100 border-t py-16 dark:border-gray-900 dark:bg-background-dark">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mt-16 flex flex-col items-center justify-between gap-4 border-gray-100 border-t pt-8 text-gray-400 text-xs md:flex-row dark:border-gray-800">
              <p>&copy; 2026 ResumeBuilder. All rights reserved.</p>
              <div className="flex gap-8">
                <a className="hover:text-primary" href="#">
                  Status
                </a>
                <a className="hover:text-primary" href="#">
                  Security
                </a>
                <a className="hover:text-primary" href="#">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
