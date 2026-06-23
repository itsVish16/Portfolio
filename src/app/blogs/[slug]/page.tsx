import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock3,
  Sparkles,
} from "lucide-react";

type BlogPost = {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  highlights: string[];
  content: React.ReactNode;
};

const proseClass =
  "text-[15px] leading-8 text-[#b7b7bc] sm:text-base";

const headingClass =
  "mt-10 mb-4 text-xl font-semibold tracking-tight text-white sm:text-2xl";

const blogData: Record<string, BlogPost> = {
  "how-i-built-my-portfolio": {
    title: "How I built my portfolio",
    subtitle:
      "A practical breakdown of how I designed a dark, minimal portfolio without losing personality.",
    date: "12 Mar 2026",
    readTime: "6 min read",
    category: "Frontend",
    summary:
      "This portfolio was built to feel personal, fast, and easy to maintain. The goal was not to create a flashy landing page, but a calm interface with enough motion and detail to feel memorable.",
    highlights: [
      "Next.js App Router for structure and simple routing",
      "Tailwind for fast iteration on layout details",
      "Canvas stars and subtle motion for atmosphere",
    ],
    content: (
      <>
        <p className={proseClass}>
          When I started building this portfolio, I had one main rule: keep it
          simple enough to maintain, but detailed enough to feel like it was
          made by a real person and not dropped from a template library. I
          wanted the page to look clean at first glance, then reveal more care
          in the small things like spacing, dashed borders, typography rhythm,
          and hover states.
        </p>

        <h2 className={headingClass}>Choosing the stack</h2>
        <p className={proseClass}>
          I used <strong className="text-white">Next.js</strong> because it
          keeps routing and rendering straightforward, and it lets me keep the
          whole portfolio inside a small codebase. That matters for a personal
          site. I don&apos;t want to spend more time maintaining the website than
          improving the actual work shown on it.
        </p>
        <p className={`${proseClass} mt-5`}>
          For styling, <strong className="text-white">Tailwind CSS</strong> was
          the obvious choice. A portfolio has a lot of small visual decisions:
          rounded corners, muted text, compact metadata, hover polish, and
          responsive spacing. Utility classes make that iteration faster than
          writing separate CSS for every small change.
        </p>

        <div className="my-8 rounded-2xl border border-white/10 bg-[#0f0f11] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8f8f95]">
            Starter Setup
          </p>
          <code className="block whitespace-pre-wrap font-mono text-sm leading-7 text-[#d4d4d8]">
            npx create-next-app@latest portfolio{"\n"}
            npm install framer-motion lucide-react react-icons
          </code>
        </div>

        <h2 className={headingClass}>Designing for clarity</h2>
        <p className={proseClass}>
          The design direction was intentionally narrow. I kept the background
          black, used soft gray text, and relied on dashed dividers and glassy
          cards instead of introducing too many colors. This created a system
          where the content becomes the focus, while the interface still feels
          crafted.
        </p>
        <p className={`${proseClass} mt-5`}>
          The important part was hierarchy. The hero should introduce me in a
          few seconds, the skill rows should show technical breadth quickly, and
          the cards underneath should make scanning easy. A lot of frontend work
          is not about adding more components. It is about removing visual
          confusion.
        </p>

        <blockquote className="my-8 rounded-r-xl border-l-2 border-[#52525B] bg-white/[0.03] px-5 py-4 text-sm italic leading-7 text-[#c7c7cc]">
          Good portfolio design is less about decoration and more about making
          your work easy to trust.
        </blockquote>

        <h2 className={headingClass}>Adding motion carefully</h2>
        <p className={proseClass}>
          I wanted the site to feel alive, but not noisy. That is why motion is
          used in a limited way: hovering skill pills, card transitions, and a
          moving star background. These details help the page feel active
          without distracting from the information.
        </p>
        <p className={`${proseClass} mt-5`}>
          Small motion decisions matter. If everything animates, nothing feels
          important. If only a few things react, the page feels more refined.
          That balance is what I aimed for throughout the build.
        </p>

        <h2 className={headingClass}>What I&apos;d improve next</h2>
        <p className={proseClass}>
          The next step is turning more static sections into real data-driven
          content. Projects should point to live demos or repositories,
          certifications can carry stronger descriptions, and the blog can grow
          into a place where I document engineering decisions instead of only
          showcasing finished work.
        </p>
      </>
    ),
  },
  "getting-started-with-ai-ml": {
    title: "Getting started with AI/ML",
    subtitle:
      "The roadmap I would actually recommend to someone beginning with machine learning today.",
    date: "05 Feb 2026",
    readTime: "8 min read",
    category: "AI/ML",
    summary:
      "People often enter AI through hype first and fundamentals later. That usually creates confusion. A better path is to build math intuition, learn Python tooling, then work on small projects before chasing larger systems.",
    highlights: [
      "Learn enough math to understand model behavior",
      "Use Python libraries as tools, not magic",
      "Build small, complete projects before complex agents",
    ],
    content: (
      <>
        <p className={proseClass}>
          AI feels overwhelming at the beginning because the field moves fast
          and the vocabulary is heavy. Terms like transformers, embeddings,
          fine-tuning, RAG, and agents show up everywhere. The mistake most
          people make is trying to learn all of them at once.
        </p>
        <p className={`${proseClass} mt-5`}>
          A better approach is to build from the bottom up. You do not need to
          become a researcher on day one. You need enough understanding to know
          what your model is doing, why it fails, and how to improve it.
        </p>

        <h2 className={headingClass}>1. Start with the right math</h2>
        <p className={proseClass}>
          You do not need advanced theory immediately, but you do need the
          basics. Focus on <strong className="text-white">linear algebra</strong>,
          <strong className="text-white"> calculus</strong>, and
          <strong className="text-white"> probability</strong>. These topics
          explain what vectors represent, how gradients work, and how models
          reason under uncertainty.
        </p>
        <p className={`${proseClass} mt-5`}>
          Study with a practical mindset. If you learn derivatives, connect
          them to backpropagation. If you learn matrices, connect them to data
          representation. Abstract theory becomes much easier when you keep
          tying it back to model behavior.
        </p>

        <h2 className={headingClass}>2. Learn Python through real use</h2>
        <p className={proseClass}>
          Once the math starts making sense, become comfortable with the core
          tools: <strong className="text-white">NumPy</strong>,
          <strong className="text-white"> Pandas</strong>,
          <strong className="text-white"> Scikit-Learn</strong>, and later
          <strong className="text-white"> PyTorch</strong>. The goal is not to
          memorize every API. The goal is to understand what each tool is good
          at and when to use it.
        </p>

        <div className="my-8 rounded-2xl border border-[#232326] bg-[#111113] p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8f8f95]">
            Practical Advice
          </p>
          <p className="text-sm leading-7 text-[#c7c7cc]">
            Build a spam classifier, a house price predictor, or a digit
            recognizer before trying to build a multi-agent system. Smaller
            projects teach debugging, evaluation, and iteration much faster.
          </p>
        </div>

        <h2 className={headingClass}>3. Build complete projects</h2>
        <p className={proseClass}>
          Completion matters more than complexity at the start. A finished
          project forces you to load data, clean it, train a model, measure
          performance, and explain the result. That end-to-end loop is what
          turns concepts into skill.
        </p>
        <p className={`${proseClass} mt-5`}>
          If you want to work in applied AI, you should also learn how models
          fit into products. That means understanding APIs, databases,
          deployment, and latency. Real AI work is rarely just the model.
        </p>

        <h2 className={headingClass}>4. Move to modern systems carefully</h2>
        <p className={proseClass}>
          Once your basics are strong, then explore LLMs, retrieval, and agent
          workflows. At that point these ideas stop feeling magical. They become
          engineering problems: context quality, prompt design, evaluation,
          response reliability, and cost.
        </p>
        <p className={`${proseClass} mt-5`}>
          That shift is important. Beginners often treat AI as something to be
          copied from tutorials. Stronger engineers learn to reason about trade
          offs. That is what separates experimentation from real product work.
        </p>
      </>
    ),
  },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <BookOpen className="mb-4 h-10 w-10 text-[#52525B]" />
        <h1 className="mb-3 text-4xl font-bold text-white">404</h1>
        <p className="mb-8 max-w-md text-sm leading-7 text-[#a1a1aa]">
          This blog post does not exist or has not been published yet.
        </p>
        <Link
          href="/"
          className="rounded-lg border border-[#232326] bg-white/5 px-4 py-2 text-white transition-colors hover:bg-white/10"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <article className="w-full pb-12">
      <Link
        href="/"
        className="group mb-8 inline-flex items-center gap-3 text-sm text-[#a1a1aa] transition-colors hover:text-white"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all group-hover:-translate-x-1 group-hover:bg-white/10">
          <ArrowLeft size={15} />
        </span>
        Back to Portfolio
      </Link>

      <header className="relative overflow-hidden rounded-[28px] border border-dashed border-[#232326] bg-white/[0.03] p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.06),_transparent_30%)]" />
        <div className="relative">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-[#a1a1aa]">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <Calendar size={12} className="text-[#6b7280]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <Clock3 size={12} className="text-[#6b7280]" />
              {post.readTime}
            </span>
          </div>

          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#b3b3b8]">
            {post.subtitle}
          </p>

          <div className="mt-8 grid gap-4 border-t border-dashed border-[#232326] pt-6 sm:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7d7d84]">
                Overview
              </p>
              <p className="text-sm leading-7 text-[#b7b7bc]">{post.summary}</p>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7d7d84]">
                In This Post
              </p>
              <div className="space-y-2">
                {post.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm leading-6 text-[#c3c3c8]">
                    <Sparkles className="mt-1 h-3.5 w-3.5 shrink-0 text-[#8b8b92]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-[#232326] to-transparent" />

      <div className="mx-auto max-w-3xl">
        <div className="rounded-[28px] border border-dashed border-[#232326] bg-white/[0.02] px-5 py-7 sm:px-8 sm:py-9">
          {post.content}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-dashed border-[#232326] pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#6b7280]">
            End of article
          </p>
          <p className="mt-2 text-sm leading-7 text-[#9ea0a8]">
            More notes and project write-ups will be published here over time.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white/10"
        >
          Explore Portfolio
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
