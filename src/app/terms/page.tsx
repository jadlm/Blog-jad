import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions governing your use of the AdviceHub website.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8">
        Terms &amp; Conditions
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        Last updated: April 1, 2026
      </p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using AdviceHub (the &quot;Site&quot;), you accept and agree to be
            bound by the terms and provisions of this agreement. If you do not agree to
            abide by the above, please do not use this Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            2. Use License
          </h2>
          <p>
            Permission is granted to temporarily access the materials on AdviceHub for
            personal, non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software on the Site</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>
              Transfer the materials to another person or &quot;mirror&quot; the materials on
              any other server
            </li>
          </ul>
          <p className="mt-3">
            This license shall automatically terminate if you violate any of these
            restrictions and may be terminated by AdviceHub at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            3. Content Disclaimer
          </h2>
          <p>
            The materials on AdviceHub are provided on an &quot;as is&quot; basis. AdviceHub makes
            no warranties, expressed or implied, and hereby disclaims and negates all
            other warranties, including without limitation, implied warranties or
            conditions of merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            The content published on this blog is for informational purposes only. While
            we strive to provide accurate and up-to-date information, we make no
            representations or warranties of any kind about the completeness, accuracy,
            reliability, suitability, or availability of the content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            4. Limitations
          </h2>
          <p>
            In no event shall AdviceHub or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit, or due
            to business interruption) arising out of the use or inability to use the
            materials on our Site, even if AdviceHub or an authorized representative has
            been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            5. Intellectual Property
          </h2>
          <p>
            All content on this Site, including but not limited to text, graphics, logos,
            images, and code snippets, is the property of AdviceHub and is protected by
            applicable copyright and trademark law. Unauthorized use and/or duplication
            of this material without express and written permission from this Site&apos;s
            author and/or owner is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            6. User Comments and Contributions
          </h2>
          <p>
            If you submit comments or other content to our Site, you grant AdviceHub a
            non-exclusive, worldwide, royalty-free license to use, reproduce, and
            distribute such content in connection with the Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            7. Links to Other Websites
          </h2>
          <p>
            Our Site may contain links to third-party web sites or services that are not
            owned or controlled by AdviceHub. We have no control over, and assume no
            responsibility for, the content, privacy policies, or practices of any
            third-party web sites or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            8. Modifications
          </h2>
          <p>
            AdviceHub may revise these Terms of Service for its website at any time
            without notice. By using this Site, you are agreeing to be bound by the
            then-current version of these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            9. Governing Law
          </h2>
          <p>
            These terms and conditions are governed by and construed in accordance with
            applicable laws, and you irrevocably submit to the exclusive jurisdiction of
            the courts in that location.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            10. Contact Information
          </h2>
          <p>
            If you have any questions about these Terms &amp; Conditions, please contact
            us at{" "}
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
