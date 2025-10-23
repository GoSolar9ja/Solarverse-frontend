"use client";
import { DefaultLayout } from "@solarverse/ui";
import { Typography } from "@solarverse/ui";
import React from "react";

export default function PrivacyPolicySection() {
  return (
    <section className="py-20">
      <DefaultLayout>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Typography.h1 weight={"medium"} className="text-4xl mb-4">
              Privacy Policy
            </Typography.h1>
            {/* <Typography.h5 className="text-lg text-foreground/80">
              Last Updated: October 18, 2025
            </Typography.h5> */}
          </div>

          <div className="prose max-w-none">
            <section className="mb-12">
              <Typography.h2 className="mb-4">Introduction</Typography.h2>
              <Typography.body1 className="mb-4">
                Solarverse, a subsidiary of New Kingdom Electric LLP
                (“Solarverse,” “we,” “our,” “us”)
              </Typography.body1>
              <Typography.body1 className="mb-4">
                At Solarverse, we value your trust. Protecting your privacy is
                as important to us as delivering reliable solar solutions. This
                Privacy Policy explains how we collect, use, share, and protect
                your personal information when you use our Platform.
              </Typography.body1>
              <Typography.body1 className="mb-4">
                We comply with the Nigeria Data Protection Regulation (NDPR
                2019) and the Nigeria Data Protection Act 2023, which safeguard
                your rights to privacy and data protection.
              </Typography.body1>
              <Typography.body1 className="mb-2">
                <strong>Data Controller:</strong> New Kingdom Electric LLP is
                the Data Controller of your personal data.
              </Typography.body1>
              <Typography.body1 className="mb-2">
                <strong>Data Protection Officer (DPO):</strong> You may contact
                our designated Data Protection Officer, Dr. Adedasola Ademola,
                at{" "}
                <a
                  href="mailto:newkingdomelectric@gmail.com"
                  className="text-primary hover:underline"
                >
                  newkingdomelectric@gmail.com
                </a>
                .
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Information We Collect
              </Typography.h2>
              <Typography.body1 className="mb-4">
                We may collect the following categories of information:
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    <strong>Personal Information:</strong> Name, email, phone
                    number, address.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    <strong>Project Information:</strong> Property details,
                    energy needs, installation preferences.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    <strong>Installer Information:</strong> Business name,
                    certifications, licenses, and service history.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    <strong>Payment Information:</strong> Processed securely
                    through trusted Nigerian payment gateways. Solarverse does
                    not store card details.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    <strong>Usage Data:</strong> Log files, cookies, IP
                    addresses, and analytics to improve performance.
                  </Typography.body1>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                How We Use Your Information
              </Typography.h2>
              <Typography.body1 className="mb-4">
                We use your data to:
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    Match homeowners with certified installers.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Facilitate communication and project management.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Provide billing history, updates, and support.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Improve platform performance and security.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Send service-related communications (mandatory). Marketing
                    communications will only be sent with your explicit consent,
                    and you may opt out at any time.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Comply with legal and regulatory obligations.
                  </Typography.body1>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Legal Basis for Processing
              </Typography.h2>
              <Typography.body1 className="mb-4">
                We process personal data only when:
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>You have given consent.</Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    It is necessary to perform a contract with you.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>It is required by law.</Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    It protects vital interests (e.g., fraud prevention).
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    It serves a legitimate business interest that does not
                    override your rights.
                  </Typography.body1>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Automated Decision-Making
              </Typography.h2>
              <Typography.body1 className="mb-4">
                Solarverse may use automated tools to suggest installers based
                on your project details. These tools do not make binding
                decisions; you always retain the choice of which installer to
                engage.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Sharing of Information
              </Typography.h2>
              <Typography.body1 className="mb-4">
                We may share your information with:
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    <strong>Certified Installers:</strong> To fulfill project
                    requests.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    <strong>Service Providers:</strong> Hosting, payment
                    processing, analytics, and support.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    <strong>Regulators or Authorities:</strong> If required by
                    law.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    <strong>Business Transfers:</strong> In case of mergers,
                    acquisitions, or restructuring.
                  </Typography.body1>
                </li>
              </ul>
              <Typography.body1 className="mb-4">
                We do not sell personal data to third parties.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Cookies & Tracking</Typography.h2>
              <Typography.body1 className="mb-4">
                Solarverse uses cookies and similar technologies to:
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    Personalize your experience.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Remember your preferences.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Analyze site traffic and performance.
                  </Typography.body1>
                </li>
              </ul>
              <Typography.body1 className="mb-4">
                We distinguish between essential cookies (required for login and
                security) and optional cookies (analytics, personalization). You
                can manage or disable cookies in your browser settings, though
                some features may not function properly.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Data Security</Typography.h2>
              <Typography.body1 className="mb-4">
                We implement technical and organizational measures to protect
                your data, including:
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    Secure servers and encryption.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Restricted access to authorized personnel.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Regular monitoring for vulnerabilities.
                  </Typography.body1>
                </li>
              </ul>
              <Typography.body1 className="mb-4">
                In the event of a data breach likely to result in harm, we will
                notify affected Users and the Nigeria Data Protection Commission
                (NDPC) within the timelines required by law.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Data Retention</Typography.h2>
              <Typography.body1 className="mb-4">
                We retain personal data only as long as necessary to:
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    Fulfill the purposes outlined in this Policy.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Comply with legal obligations.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Resolve disputes and enforce agreements.
                  </Typography.body1>
                </li>
              </ul>
              <Typography.body1 className="mb-2">
                <strong>Retention schedule:</strong>
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    Account data: retained for the life of the account plus 2
                    years after closure.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Transactional records: retained for 6 years to comply with
                    tax and regulatory obligations.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Installer certifications: retained while active on the
                    Platform, then securely deleted.
                  </Typography.body1>
                </li>
              </ul>
              <Typography.body1 className="mb-4">
                Afterwards, data will be securely deleted or anonymized.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Your Rights</Typography.h2>
              <Typography.body1 className="mb-4">
                Under the NDPR and Nigeria Data Protection Act 2023, you have
                the right to:
              </Typography.body1>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <Typography.body1>
                    Access and request a copy of your personal data.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Request correction or deletion of your data.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Withdraw consent at any time.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Object to processing for direct marketing.
                  </Typography.body1>
                </li>
                <li>
                  <Typography.body1>Request data portability.</Typography.body1>
                </li>
                <li>
                  <Typography.body1>
                    Lodge complaints with the Nigeria Data Protection Commission
                    (NDPC) or NITDA.
                  </Typography.body1>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                International Data Transfers
              </Typography.h2>
              <Typography.body1 className="mb-4">
                If personal data is transferred outside Nigeria, we ensure
                adequate safeguards are in place, such as standard contractual
                clauses or other lawful mechanisms, in line with NDPR and the
                Data Protection Act.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Children’s Privacy</Typography.h2>
              <Typography.body1 className="mb-4">
                Solarverse does not knowingly collect personal data from
                children under 18. If we discover such data has been collected,
                we will delete it promptly. Parents or guardians may contact us
                to request deletion of a child’s data.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Third-Party Links</Typography.h2>
              <Typography.body1 className="mb-4">
                Our Platform may contain links to third-party websites. We are
                not responsible for their privacy practices.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">
                Updates to This Policy
              </Typography.h2>
              <Typography.body1 className="mb-4">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with a revised effective date.
                Continued use of Solarverse constitutes acceptance of the
                updated Policy.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Governing Law</Typography.h2>
              <Typography.body1 className="mb-4">
                This Privacy Policy is governed by and construed in accordance
                with the laws of the Federal Republic of Nigeria.
              </Typography.body1>
            </section>

            <section className="mb-12">
              <Typography.h2 className="mb-4">Contact Us</Typography.h2>
              <Typography.body1 className="mb-4">
                For questions or concerns, contact us at:
              </Typography.body1>
              <Typography.body1 className="mb-2">
                <a
                  href="mailto:solarverse.ng@gmail.com"
                  className="text-primary hover:underline"
                >
                  solarverse.ng@gmail.com
                </a>
                ; +234 905 406 1660
              </Typography.body1>
              <Typography.body1 className="mb-2">
                <strong>Data Protection Officer (DPO):</strong>{" "}
                <a
                  href="mailto:newkingdomelectric@gmail.com"
                  className="text-primary hover:underline"
                >
                  newkingdomelectric@gmail.com
                </a>
              </Typography.body1>
            </section>
          </div>
        </div>
      </DefaultLayout>
    </section>
  );
}
