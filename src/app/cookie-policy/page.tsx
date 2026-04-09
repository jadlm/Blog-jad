import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn about how AdviceHub uses cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8">
        Cookie Policy
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        Last updated: April 1, 2026
      </p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            1. What Are Cookies
          </h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile
            device when you visit a website. They are widely used to make websites work
            more efficiently, provide analytics information, and enable certain features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            2. How We Use Cookies
          </h2>
          <p>AdviceHub uses cookies for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <strong className="text-foreground">Essential Cookies:</strong> Necessary for the website
              to function properly. These include cookies that enable you to navigate the
              site and use its features, such as remembering your theme preference (light
              or dark mode).
            </li>
            <li>
              <strong className="text-foreground">Analytics Cookies:</strong> Help us understand how
              visitors interact with our website by collecting and reporting information
              anonymously. This helps us improve our content and user experience.
            </li>
            <li>
              <strong className="text-foreground">Advertising Cookies:</strong> Used to deliver
              advertisements that are relevant to you. These cookies are placed by
              third-party advertising networks (such as Google AdSense) with our
              permission.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            3. Third-Party Cookies
          </h2>
          <p>
            In addition to our own cookies, we may also use various third-party cookies
            to report usage statistics of the Site and deliver advertisements on and
            through the Site:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <strong className="text-foreground">Google AdSense:</strong> Google uses cookies to serve
              ads based on your prior visits to our website or other websites. You can
              opt out of personalized advertising at{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark underline"
              >
                Google Ads Settings
              </a>
              .
            </li>
            <li>
              <strong className="text-foreground">Google Analytics:</strong> We use Google Analytics to
              understand website traffic patterns and user behavior. Google Analytics
              uses cookies to collect information about how visitors use our Site.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            4. Types of Cookies We Use
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left text-foreground font-semibold">
                    Cookie
                  </th>
                  <th className="border border-border px-4 py-2 text-left text-foreground font-semibold">
                    Type
                  </th>
                  <th className="border border-border px-4 py-2 text-left text-foreground font-semibold">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">theme</td>
                  <td className="border border-border px-4 py-2">Essential</td>
                  <td className="border border-border px-4 py-2">
                    Stores your preferred theme (light/dark mode)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">_ga, _gid</td>
                  <td className="border border-border px-4 py-2">Analytics</td>
                  <td className="border border-border px-4 py-2">
                    Used by Google Analytics to distinguish users
                  </td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">
                    __gads, _gac
                  </td>
                  <td className="border border-border px-4 py-2">Advertising</td>
                  <td className="border border-border px-4 py-2">
                    Used by Google AdSense for ad personalization
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            5. Managing Cookies
          </h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You
            can set your browser to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Block all cookies</li>
            <li>Accept all cookies</li>
            <li>Notify you when a cookie is set</li>
            <li>Delete cookies when you close your browser</li>
          </ul>
          <p className="mt-3">
            Please note that blocking or deleting cookies may impact your experience on
            our Site and limit certain functionality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            6. Updates to This Policy
          </h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be
            posted on this page with an updated revision date. We encourage you to
            periodically review this page for the latest information on our cookie
            practices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            7. Contact Us
          </h2>
          <p>
            If you have any questions about our use of cookies, please contact us at{" "}
            <a
              href="mailto:lamtaifijad@outlook.fr"
              className="text-primary hover:text-primary-dark underline"
            >
              lamtaifijad@outlook.fr
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
