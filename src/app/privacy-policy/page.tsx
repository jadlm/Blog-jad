import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the AdviceHub privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8">
        Privacy Policy
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        Last updated: April 1, 2026
      </p>

      <div className="prose-custom space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">1. Introduction</h2>
          <p>
            Welcome to AdviceHub (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting
            your personal information and your right to privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when
            you visit our website advicehub.vercel.app (the &quot;Site&quot;).
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the
            terms of this privacy policy, please do not access the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            2. Information We Collect
          </h2>
          <p>We may collect information about you in a variety of ways, including:</p>
          <h3 className="text-lg font-semibold text-foreground mb-2 mt-4">
            Personal Data
          </h3>
          <p>
            Personally identifiable information, such as your name and email address,
            that you voluntarily give to us when you subscribe to our newsletter or
            contact us through our contact form.
          </p>
          <h3 className="text-lg font-semibold text-foreground mb-2 mt-4">
            Derivative Data
          </h3>
          <p>
            Information our servers automatically collect when you access the Site, such
            as your IP address, browser type, operating system, access times, and the
            pages you have viewed directly before and after accessing the Site.
          </p>
          <h3 className="text-lg font-semibold text-foreground mb-2 mt-4">
            Cookies and Tracking Data
          </h3>
          <p>
            We use cookies and similar tracking technologies to track activity on our
            Site and hold certain information. Cookies are files with a small amount of
            data which may include an anonymous unique identifier. You can instruct your
            browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            3. Use of Your Information
          </h2>
          <p>
            Having accurate information about you permits us to provide you with a
            smooth, efficient, and customized experience. Specifically, we may use
            information collected about you to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Deliver targeted content and advertisements to you</li>
            <li>Send you newsletters and updates you&apos;ve opted into</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Monitor and analyze usage and trends to improve your experience</li>
            <li>Notify you of updates to our Site</li>
            <li>Improve the Site&apos;s content and functionality</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            4. Disclosure of Your Information
          </h2>
          <p>
            We may share information we have collected about you in certain situations.
            Your information may be disclosed as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <strong className="text-foreground">By Law or to Protect Rights:</strong> If we believe
              the release of information about you is necessary to respond to legal
              process or to protect the rights, property, and safety of others.
            </li>
            <li>
              <strong className="text-foreground">Third-Party Service Providers:</strong> We may share
              your information with third parties that perform services for us, including
              data analysis, email delivery, hosting services, and advertising services.
            </li>
            <li>
              <strong className="text-foreground">Advertising Partners:</strong> We may use third-party
              advertising companies, such as Google AdSense, to serve ads when you visit
              our Site. These companies may use information about your visits to provide
              advertisements about goods and services of interest to you.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            5. Google AdSense
          </h2>
          <p>
            We use Google AdSense to display advertisements on our Site. Google AdSense
            uses cookies to serve ads based on your prior visits to our website or other
            websites. Google&apos;s use of advertising cookies enables it and its partners to
            serve ads based on your visit to our Site and/or other sites on the Internet.
          </p>
          <p>
            You may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark underline"
            >
              Google Ads Settings
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            6. Security of Your Information
          </h2>
          <p>
            We use administrative, technical, and physical security measures to help
            protect your personal information. While we have taken reasonable steps to
            secure the information you provide to us, please be aware that no method of
            transmission over the Internet or method of electronic storage is 100%
            secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            7. Your Rights
          </h2>
          <p>
            Depending on your location, you may have certain rights regarding your
            personal information, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>The right to access your personal data</li>
            <li>The right to rectify inaccurate personal data</li>
            <li>The right to erase your personal data</li>
            <li>The right to restrict processing of your personal data</li>
            <li>The right to data portability</li>
            <li>The right to object to processing of your personal data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            8. Contact Us
          </h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact
            us at:
          </p>
          <p className="mt-2">
            <strong className="text-foreground">Email:</strong>{" "}
            <a
              href="mailto:lamtaifijad@outlook.fr"
              className="text-primary hover:text-primary-dark underline"
            >
              lamtaifijad@outlook.fr
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
