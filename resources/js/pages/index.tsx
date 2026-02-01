import {ArrowDown, Download, Paintbrush, Pencil, Quote} from "lucide-react";
import {Link} from "@inertiajs/react";

export default function Index() {
    return (
        <div className="bg-background-dark text-gray-100 transition-colors duration-300">
            <div className="relative flex min-h-screen flex-col overflow-x-hidden">
                <header
                    className="sticky top-0 z-50 w-full border-b border-gray-800 bg-background-dark/80 backdrop-blur-md">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-3">
              <span className="font-bold text-xl tracking-tight">
                ResumeBuilder
              </span>
                        </div>

                        <nav className="hidden items-center gap-10 md:flex">
                            {["Templates", "Pricing", "Resources"].map((item) => (
                                <a
                                    key={item}
                                    className="font-medium text-sm opacity-70 transition-opacity hover:opacity-100"
                                    href="#"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>

                        <div className="flex items-center gap-4">
                            <Link href='/auth/sign-in'
                                  className="px-4 font-semibold text-sm opacity-70 hover:opacity-100">
                                Sign In
                            </Link>
                            <Link
                                href='/resumes'
                                className="rounded-lg bg-primary px-5 py-2.5 font-bold text-sm text-white shadow-sm transition-all hover:bg-primary/90">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Hero */}
                <section className="relative flex flex-col items-center justify-center px-6 py-12 text-center md:py-20">
                    <div className="absolute inset-0 -z-10 opacity-10">
                        <div
                            className="absolute top-1/2 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-[120px]"/>
                    </div>

                    <div className="max-w-4xl space-y-8">
                        <h1 className="font-black text-5xl leading-tight tracking-tight md:text-7xl lg:text-8xl">
                            Build your career story <br className="hidden md:block"/>
                            <span className="text-primary">with precision.</span>
                        </h1>

                        <p className="mx-auto max-w-2xl font-light text-gray-400 text-lg leading-relaxed md:text-xl">
                            The most elegant way to create a professional resume in minutes.
                            <br className="hidden md:block"/>
                            No clutter, just results. Trusted by over 50,000 professionals.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                            <Link
                                href="/resumes"
                                className="w-full min-w-[200px] rounded-lg bg-primary px-8 py-4 font-bold text-base text-white shadow-lg transition-all hover:shadow-primary/20 sm:w-auto">
                                Start Building Free
                            </Link>
                            <button
                                className="w-full min-w-[200px] rounded-lg border border-gray-700 bg-gray-900 px-8 py-4 font-semibold text-base transition-all hover:bg-gray-800 sm:w-auto">
                                View Templates
                            </button>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col items-center gap-2 opacity-40">
            <span className="font-bold text-[10px] uppercase tracking-[0.2em]">
              Scroll
            </span>
                        <ArrowDown className="animate-bounce"/>
                    </div>
                </section>

                {/* Logos */}
                <section className="border-y border-gray-900 bg-gray-900/20 py-12">
                    <div className="mx-auto max-w-7xl px-6">
                        <p className="mb-8 text-center font-bold text-gray-500 text-xs uppercase tracking-widest">
                            Professionals hired at
                        </p>

                        <div
                            className="flex flex-wrap justify-center gap-8 opacity-40 contrast-125 grayscale md:gap-16">
                            <div className="font-bold text-xl italic">GOOGLE</div>
                            <div className="font-bold text-xl tracking-tighter">airbnb</div>
                            <div className="font-black text-xl">NETFLIX</div>
                            <div className="font-medium text-xl tracking-[0.3em]">STRIPE</div>
                            <div className="font-serif text-xl">Amazon</div>
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="mx-auto w-full max-w-5xl px-6 py-20">
                    <div className="mb-16 text-center">
                        <h4 className="font-bold text-primary text-xs uppercase tracking-[0.3em]">
                            How it works
                        </h4>
                        <h2 className="mt-4 font-bold text-3xl md:text-4xl">
                            From zero to interview in 3 steps
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                        {[
                            {
                                icon: Paintbrush,
                                title: "Choose Template",
                                text: "Pick from curated, ATS-optimized designs."
                            },
                            {icon: Pencil, title: "Fill Info", text: "Distraction-free editor for your experience."},
                            {icon: Download, title: "Download", text: "Instant polished PDF, ready to apply."},
                        ].map(({icon: Icon, title, text}) => (
                            <div key={title} className="flex flex-col items-center text-center">
                                <div
                                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-800 transition-transform hover:-translate-y-1">
                                    <Icon className="text-3xl text-primary"/>
                                </div>
                                <h3 className="font-bold text-lg">{title}</h3>
                                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonial */}
                <section className="bg-gray-900/50 py-24 md:py-32">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <Quote className="mx-auto text-6xl text-gray-600"/>
                        <p className="mt-6 font-light text-2xl italic leading-relaxed md:text-3xl">
                            “This builder changed the way I present myself. I landed three
                            interviews within days.”
                        </p>
                        <h5 className="mt-10 font-bold">Sarah Johnson</h5>
                        <p className="mt-1 text-gray-500 text-xs uppercase tracking-widest">
                            Senior Product Designer
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="mx-auto w-full max-w-7xl px-6 py-24">
                    <div
                        className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-white md:py-24">
                        <h2 className="font-bold text-3xl md:text-5xl">
                            Ready to land your next role?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg opacity-80">
                            Build a resume that actually gets interviews.
                        </p>
                        <button
                            className="mt-10 rounded-lg bg-white px-10 py-4 font-bold text-primary shadow-xl transition-transform hover:scale-105">
                            Build Your Resume Now
                        </button>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-auto border-t border-gray-900 py-16">
                    <div
                        className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs gap-4">
                        <p>&copy; 2026 ResumeBuilder. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a className="hover:text-primary" href="#">Status</a>
                            <a className="hover:text-primary" href="#">Security</a>
                            <a className="hover:text-primary" href="#">Sitemap</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
