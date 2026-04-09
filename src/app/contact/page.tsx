import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AdviceHub. Send us your questions, feedback, or partnership inquiries.",
  openGraph: {
    title: "Contact Us | AdviceHub",
    description: "Get in touch with the AdviceHub team.",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Have a question, suggestion, or want to collaborate? We&apos;d love to hear
          from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10">
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-muted/50 border border-border">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <a
              href="mailto:lamtaifijad@outlook.fr"
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              lamtaifijad@outlook.fr
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-muted/50 border border-border">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923c0 1.095-.895 1.983-2 1.983h-6.6l-2.9 2.9-.5.2c-.6 0-1.1-.5-1.1-1.1v-2h-3c-1.105 0-2-.888-2-1.983V5.983z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
            <a
              href="https://wa.me/212621924487"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              +212 621 924 487
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-muted/50 border border-border">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Social Media</h3>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.linkedin.com/in/lamtaifi-jad-2418bb239/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary-dark transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
