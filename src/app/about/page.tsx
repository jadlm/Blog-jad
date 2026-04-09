import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Who We Are",
  description:
    "Learn about AdviceHub, our mission to deliver high-quality, practical advice on technology, web development, productivity, and online business.",
  openGraph: {
    title: "About — Who We Are | AdviceHub",
    description:
      "Learn about AdviceHub and our mission to deliver practical advice for developers and creators.",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
          About <span className="text-primary">AdviceHub</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We&apos;re on a mission to make technology knowledge accessible, practical,
          and actionable for developers and creators at every level.
        </p>
      </div>

      {/* Author Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16 p-8 rounded-3xl bg-muted/50 border border-border">
        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-5xl font-bold flex-shrink-0 shadow-xl">
          J
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Jad Lamtaifi</h2>
          <p className="text-primary font-medium mb-3">Founder & Lead Author</p>
          <p className="text-muted-foreground leading-relaxed">
            Full-stack developer with a passion for clean code, modern web technologies,
            and sharing knowledge. I&apos;ve spent years building web applications and want
            to help others navigate the ever-evolving tech landscape with practical,
            real-world advice.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Our Mission
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            AdviceHub was born from a simple belief: <strong className="text-foreground">everyone deserves access to
            high-quality, practical technology advice</strong>. We noticed a gap in the
            market—most tech content is either too basic or too academic. We bridge
            that gap with actionable, real-world guidance.
          </p>
          <p>
            Every article we publish goes through a rigorous process to ensure accuracy,
            relevance, and value. We don&apos;t just tell you what to do—we explain why, show
            you how, and share the pitfalls we&apos;ve encountered along the way.
          </p>
        </div>
      </section>

      {/* What We Cover */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          What We Cover
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              icon: "💻",
              title: "Technology",
              desc: "Latest tools, frameworks, and innovations shaping the industry.",
            },
            {
              icon: "🌐",
              title: "Web Development",
              desc: "In-depth tutorials on frontend, backend, and full-stack development.",
            },
            {
              icon: "⚡",
              title: "Productivity",
              desc: "Systems and strategies to work smarter, not harder.",
            },
            {
              icon: "📈",
              title: "Online Business",
              desc: "Guidance on building and growing digital products and services.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Our Values
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Quality Over Quantity",
              desc: "We publish thoroughly researched, well-written articles rather than churning out content for the sake of volume.",
            },
            {
              title: "Practical & Actionable",
              desc: "Every article includes real-world examples, code snippets, or step-by-step instructions you can apply immediately.",
            },
            {
              title: "Honest & Transparent",
              desc: "We share our genuine opinions, including the limitations and trade-offs of the tools and approaches we recommend.",
            },
            {
              title: "Community First",
              desc: "We build for our readers. Your feedback shapes our content, and we're always open to suggestions and questions.",
            },
          ].map((value, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-primary-dark/10 border border-primary/10">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Want to get in touch?
        </h2>
        <p className="text-muted-foreground mb-6">
          We&apos;d love to hear from you. Whether it&apos;s feedback, suggestions, or just a hello.
        </p>
        <a
          href="/contact"
          className="inline-flex px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark active:scale-95 transition-all duration-200 shadow-lg shadow-primary/25"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
