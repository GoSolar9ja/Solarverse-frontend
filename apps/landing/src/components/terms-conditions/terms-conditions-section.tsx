"use client";
import { DefaultLayout } from "@solar-verse/ui";
import { Typography } from "@solar-verse/ui";
import React from "react";

export default function TermsConditionsSection() {
  return (
    <section className="py-20">
      <DefaultLayout>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Typography.h1 weight={"medium"} className="text-4xl mb-4">
              Terms & Conditions of Use
            </Typography.h1>
            <Typography.h5 className="text-lg text-foreground/80">
              Last Updated: October 18, 2025
            </Typography.h5>
          </div>

          <div className="prose max-w-none">
            <section className="mb-12">
              <Typography.h2 className="mb-4">Introduction</Typography.h2>
              <Typography.body1 className="mb-4">
                Welcome to Solarverse, a subsidiary of New Kingdom Electric LLP
                (&#34;Solarverse,&#34; &#34;we,&#34; &#34;our,&#34;
                &#34;us&#34;). By browsing, accessing, or using our platform
                (the &#34;Platform&#34;), whether or not you create an account,
                you agree to be bound by these Terms & Conditions and any
                applicable guidelines. If you do not agree, please discontinue
                use. These Terms form a legally binding agreement between you
                (&#34;User&#34;) and Solarverse.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                We may update these Terms from time to time. Changes take effect
                when posted on the Platform. Continued use constitutes
                acceptance of the updated Terms.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Definitions</Typography.h2>
              <Typography.body1 className="mb-4">
                &#34;User&#34; – any person or entity accessing or using
                Solarverse.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                &#34;Customer&#34; – a User seeking solar installation services.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                &#34;Installer&#34; – a certified solar professional or company
                offering services through Solarverse.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                &#34;Account&#34; – a registered User profile enabling
                participation in the Platform.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                &#34;Content&#34; – any text, images, data, or information
                posted by Users.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Eligibility</Typography.h2>
              <Typography.body1 className="mb-4">
                You must be at least 18 years old and legally capable of
                entering into contracts under Nigerian law to use Solarverse.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Registration & Account Security
              </Typography.h2>
              <Typography.body1 className="mb-4">
                Users must provide accurate, current, and verifiable information
                during registration.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Users are responsible for safeguarding login credentials and all
                activity under their account.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Unauthorized access must be reported immediately.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Accounts may not be transferred or shared without permission.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Use of Platform</Typography.h2>
              <Typography.body1 className="mb-2">
                <strong>Users Must:</strong>
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    Provide truthful, complete, and updated information.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Respect Nigerian law and these Terms.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Ensure posted content does not infringe third-party rights.
                  </Typography.body1>
                </li>
              </ul>
              <Typography.body1 className="mb-2">
                <strong>Users Must Not:</strong>
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    Create false accounts or impersonate others.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Post misleading, defamatory, discriminatory, or unlawful
                    content.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Upload viruses, malware, or harmful code.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Spam or send unsolicited communications.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Collect personal data of others without consent.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Copy, resell, or exploit the Platform without authorization.
                  </Typography.body1>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Posting of Listings & Content
              </Typography.h2>
              <Typography.body1 className="mb-4">
                Solarverse may request documents to verify legitimacy of
                listings.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Installers must provide accurate service descriptions, pricing,
                and terms.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Installers confirm they are legally authorized to offer the
                services described.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Full prices must be clear and disclosed during negotiation.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Prohibited content includes: false or misleading claims,
                offensive or discriminatory material, counterfeit or
                unauthorized services, spam, fraudulent schemes, pornographic or
                harmful content, and any content violating Nigerian law.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Installer Responsibilities & Warranties
              </Typography.h2>
              <Typography.body1 className="mb-4">
                Installers must:
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    Provide truthful certifications and qualifications.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Deliver services in compliance with Nigerian laws, energy
                    regulations, and industry standards.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Honor agreements made with Customers.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Warrant that they hold all necessary licenses, permits, and
                    approvals to perform solar installations.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Not misrepresent qualifications, experience, or capacity.
                  </Typography.body1>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Intellectual Property
              </Typography.h2>
              <Typography.body1 className="mb-4">
                Users retain ownership of their content but grant Solarverse a
                non-exclusive, worldwide, royalty-free license to use it for
                operating the Platform.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Users are solely responsible for ensuring they have rights to
                content they post.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                All other content (texts, software, graphics, logos, trademarks)
                belongs to Solarverse and may not be used without permission.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Anti-Spam Policy</Typography.h2>
              <Typography.body1 className="mb-4">
                Unsolicited or unauthorized messages, advertisements, or bulk
                communications are strictly prohibited.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Solarverse may monitor communications to prevent spam.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Fees & Payments</Typography.h2>
              <Typography.body1 className="mb-4">
                Solarverse may charge service or referral fees, disclosed before
                transactions.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Payments for installations are agreed directly between Customers
                and Installers.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Refunds & Cancellation Policy
              </Typography.h2>
              <Typography.body1 className="mb-2">
                <strong>Before accepting a bid:</strong> Customers may cancel
                project requests without penalty. Installers may withdraw bids
                before acceptance.
              </Typography.body1>
              <Typography.body1 className="mb-2">
                <strong>After accepting a bid:</strong> Cancellations,
                rescheduling, and refunds are governed by the Installer&#39;s
                stated terms. Customers must review these before confirming.
              </Typography.body1>
              <Typography.body1 className="mb-2">
                <strong>Refund eligibility:</strong>
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    If work has not commenced by the agreed start date due to
                    Installer fault, Customers may request refunds of unearned
                    amounts.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    For milestone-based projects, refunds (if any) are limited
                    to uncompleted milestones.
                  </Typography.body1>
                </li>
              </ul>
              <Typography.body1 className="mb-2">
                <strong>Solarverse fees</strong>
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Platform service or referral fees are non-refundable, except
                where required by law.
              </Typography.body1>
              <Typography.body1 className="mb-2">
                <strong>Dispute process</strong>
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    Step 1: Customer and Installer attempt direct resolution.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Step 2: Solarverse may mediate but does not guarantee
                    outcomes.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Step 3: If unresolved, disputes proceed to arbitration (see
                    Section 16).
                  </Typography.body1>
                </li>
              </ul>
              <Typography.body1 className="mb-2">
                <strong>Force majeure</strong>
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Neither party is liable for delays caused by events beyond
                reasonable control (e.g., extreme weather, grid failure).
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Disclaimer</Typography.h2>
              <Typography.body1 className="mb-4">
                Solarverse is a facilitator, not a contractor.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                We do not guarantee the quality, safety, or completion of
                installation services.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Installers are independent businesses, not employees or
                affiliates of Solarverse.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                All agreements are solely between Customers and Installers.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Limitation of Liability
              </Typography.h2>
              <Typography.body1 className="mb-4">
                Solarverse provides services &#34;as is&#34; and &#34;as
                available.&#34; We disclaim all warranties, express or implied.
                We are not liable for:
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    Accuracy or reliability of User content.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Quality or outcome of services provided by Installers.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Damages from unauthorized access, data loss, or disputes
                    between Users.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Indirect, incidental, or consequential damages.
                  </Typography.body1>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Indemnity</Typography.h2>
              <Typography.body1 className="mb-4">
                Users agree to indemnify and hold harmless Solarverse, its
                affiliates, directors, officers, and employees from any claims,
                damages, or expenses arising from:
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    Their use of the Platform.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>Violation of these Terms.</Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Infringement of third-party rights.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Disputes with other Users.
                  </Typography.body1>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Enforcement</Typography.h2>
              <Typography.body1 className="mb-4">
                Solarverse may remove content or suspend accounts without notice
                if:
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    Required by law or authority.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Content infringes intellectual property or violates these
                    Terms.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Content is harmful, fraudulent, or inconsistent with the
                    Platform&#39;s purpose.
                  </Typography.body1>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                User-to-User Interactions
              </Typography.h2>
              <Typography.body1 className="mb-4">
                Solarverse is not a party to contracts between Customers and
                Installers.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                All transactions are solely between Users.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Users release Solarverse from liability for disputes, losses, or
                damages arising from such interactions.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Dispute Resolution & Arbitration
              </Typography.h2>
              <Typography.body1 className="mb-4">
                Disputes shall first be addressed amicably.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                If unresolved within 90 days, disputes shall be referred to
                arbitration under the Arbitration and Conciliation Act, Cap A10,
                Laws of the Federation of Nigeria, at the Lagos Multi-Door
                Courthouse (LMDC).
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Arbitration shall be in English, confidential, and binding.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Users waive the right to class actions; claims must be brought
                individually.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Respecting Others&#39; Rights
              </Typography.h2>
              <Typography.body1 className="mb-4">Users must:</Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    Respect privacy and not misuse personal data.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Respect intellectual property rights.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Avoid harassment, bullying, or defamation.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Refrain from spam or abusive behavior.
                  </Typography.body1>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Safety & Security</Typography.h2>
              <Typography.body1 className="mb-4">
                Solarverse does not endorse third-party apps or links; Users
                interact at their own risk.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Automated tools (bots, crawlers) are prohibited.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Users must not solicit or share login credentials.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Reviews & Ratings</Typography.h2>
              <Typography.body1 className="mb-4">
                Reviews and ratings reflect the opinions of Users and not
                Solarverse.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                Solarverse may remove reviews at its discretion if they appear
                false, misleading, defamatory, or violate these Terms.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Communication Consent
              </Typography.h2>
              <Typography.body1 className="mb-4">
                By creating an account, Users consent to receive transactional
                and service-related communications from Solarverse via email,
                SMS, or in-app notifications. Users may opt out of promotional
                communications but not essential service notifications.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Termination</Typography.h2>
              <Typography.body1 className="mb-4">
                Solarverse may suspend or terminate accounts at its discretion
                if Users violate these Terms, applicable laws, engage in fraud,
                or remain inactive for extended periods.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Governing Law</Typography.h2>
              <Typography.body1 className="mb-4">
                These Terms are governed by and construed in accordance with the
                laws of the Federal Republic of Nigeria. For matters not subject
                to arbitration, Users agree to the jurisdiction of Nigerian
                courts.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Privacy & Data Protection
              </Typography.h2>
              <Typography.body1 className="mb-4">
                Use of Solarverse is also subject to our Privacy Policy, which
                complies with the Nigeria Data Protection Regulation (NDPR). By
                using the Platform, you consent to the collection and use of
                your data as described therein.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Service Availability
              </Typography.h2>
              <Typography.body1 className="mb-4">
                Solarverse does not guarantee uninterrupted access to the
                Platform and may suspend or restrict access for maintenance,
                upgrades, or unforeseen technical issues.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Miscellaneous</Typography.h2>
              <Typography.body1 className="mb-2">
                <strong>Severability:</strong> If any provision is invalid, the
                rest remain enforceable.
              </Typography.body1>
              <Typography.body1 className="mb-2">
                <strong>Assignment:</strong> Solarverse may assign its rights;
                Users may not without consent.
              </Typography.body1>
              <Typography.body1 className="mb-2">
                <strong>No Waiver:</strong> Failure to enforce a provision does
                not waive it.
              </Typography.body1>
              <Typography.body1 className="mb-2">
                <strong>Changes:</strong> Solarverse may update these Terms at
                any time. Continued use constitutes acceptance.
              </Typography.body1>
              <Typography.body1 className="mb-2">
                <strong>Survival:</strong> Sections relating to Intellectual
                Property, Indemnity, Limitation of Liability, Dispute
                Resolution, and Miscellaneous shall survive termination of these
                Terms.
              </Typography.body1>
            </section>
          </div>
        </div>
      </DefaultLayout>
    </section>
  );
}
