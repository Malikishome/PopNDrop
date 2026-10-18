import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';

function Terms() {
  return (
    <>
      <header className="p-2 font-serif bg-gray-800 shadow-2xl">
        <Link to="/" className="flex p-4 items-center font-bold text-amber-400 hover:text-amber-300 transition w-fit">
          Pop & Drop Vending
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 font-serif">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-6">Last updated October 18, 2026</p>

          <div className="flex flex-col gap-6 text-gray-700 leading-relaxed">
            <section>
              <p>
                We are POP &amp; DROP VENDING LLC ("Company," "we," "us,"
                "our"). We operate the website{' '}
                <a
                  href="https://www.popanddropvending.com"
                  className="text-amber-500 hover:text-amber-600 underline"
                >
                  www.popanddropvending.com
                </a>{' '}
                (the "Site"), as well as any other related products and
                services that refer or link to these Terms of Service
                (collectively, the "Services").
              </p>
              <p className="mt-3">
                You can contact us by phone at (407) 555-5555, email at{' '}
                <a
                  href="mailto:Contact@Pop&DropVending.com"
                  className="text-amber-500 hover:text-amber-600 underline"
                >
                  Contact@Pop&DropVending.com
                </a>
                , or by mail to 123 Main Street, Winter Springs, FL 32708,
                United States.
              </p>
              <p className="mt-3">
                These Terms constitute a legally binding agreement between
                you, whether personally or on behalf of an entity ("you"),
                and POP &amp; DROP VENDING LLC, concerning your access to
                and use of the Services. By accessing the Services, you
                agree to be bound by these Terms. If you do not agree, you
                are prohibited from using the Services and must discontinue
                use immediately.
              </p>
              <p className="mt-3">
                We will provide prior notice of any material changes to the
                Services. Continued use of the Services after changes take
                effect means you accept the revised Terms. The Services are
                intended for users who are at least 18 years old; persons
                under 18 are not permitted to use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">1. Our Services</h2>
              <p>
                The information provided through the Services is not
                intended for distribution to or use by any person or entity
                in any jurisdiction where such distribution or use would be
                contrary to law. Those who access the Services from other
                locations do so on their own initiative and are responsible
                for compliance with local laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">2. Intellectual property rights</h2>
              <p>
                We own or license all intellectual property in the
                Services, including source code, designs, text,
                photographs, and graphics (the "Content"), as well as our
                trademarks and logos (the "Marks"). Subject to your
                compliance with these Terms, we grant you a non-exclusive,
                non-transferable, revocable license to access the Services
                and to download or print Content solely for your personal,
                non-commercial use.
              </p>
              <p className="mt-3">
                No part of the Services or Content may be copied,
                reproduced, republished, uploaded, distributed, sold, or
                otherwise exploited for any commercial purpose without our
                express written permission. Any feedback or suggestions you
                send us may be used by us for any purpose without
                compensation to you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">3. User representations</h2>
              <p>
                By using the Services, you represent that: you have the
                legal capacity to agree to these Terms; you are not a minor
                in your jurisdiction; you will not access the Services
                through automated or non-human means; you will not use the
                Services for any illegal or unauthorized purpose; and your
                use will not violate any applicable law. If you provide
                information that is untrue or inaccurate, we may suspend or
                terminate your access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">4. Prohibited activities</h2>
              <p>
                You may not use the Services for any purpose other than
                that for which we make them available. Among other things,
                you agree not to: systematically scrape or collect data from
                the Services; attempt to defraud or mislead us or other
                users; interfere with or disable security-related features;
                upload viruses or other harmful code; use automated systems
                such as bots or scrapers; impersonate another person; or
                attempt to decompile, reverse engineer, or copy the
                Services' software.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">5. Submissions and contributions</h2>
              <p>
                The Services do not currently offer a way for users to post
                or submit content. If you send us questions, comments, or
                suggestions ("Submissions"), you agree that we may use and
                share that feedback for any purpose without compensation to
                you, and that your Submissions are not false, misleading,
                unlawful, or infringing on any third party's rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">6. Services management</h2>
              <p>
                We reserve the right, but not the obligation, to monitor the
                Services for violations of these Terms, take appropriate
                legal action against anyone who violates them, and
                otherwise manage the Services to protect our rights and
                ensure their proper functioning.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">7. Privacy policy</h2>
              <p>
                We care about data privacy and security. Please review our{' '}
                <Link to="/privacy" className="text-amber-500 hover:text-amber-600 underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms. The Services are
                hosted in the United States; by using them, you consent to
                your data being transferred to and processed in the United
                States.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">8. Term and termination</h2>
              <p>
                These Terms remain in effect while you use the Services. We
                reserve the right, in our sole discretion and without
                notice, to deny access to the Services to any person for
                any reason, including breach of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">9. Modifications and interruptions</h2>
              <p>
                We may change, modify, or remove content from the Services
                at any time without notice, and we do not guarantee the
                Services will be available at all times. We are not liable
                for any loss or inconvenience caused by downtime or
                discontinuance of the Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">10. Governing law</h2>
              <p>
                These Terms and your use of the Services are governed by the
                laws of the State of Florida, without regard to its
                conflict-of-law principles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">11. Dispute resolution</h2>
              <p>
                The parties agree to first attempt to resolve any dispute
                informally for at least thirty (30) days. If informal
                negotiation fails, the dispute will be resolved by binding
                arbitration under the Commercial Arbitration Rules of the
                American Arbitration Association, conducted in Orange
                County, Florida, except for disputes involving intellectual
                property, theft, piracy, invasion of privacy, unauthorized
                use, or claims for injunctive relief, which may be brought
                in court. Arbitration will be on an individual basis only;
                class actions and representative claims are not permitted.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">12. Corrections</h2>
              <p>
                The Services may contain typographical errors or
                inaccuracies. We reserve the right to correct any errors and
                update information at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">13. Disclaimer</h2>
              <p>
                The Services are provided on an "as is" and "as available"
                basis. Your use of the Services is at your sole risk. To the
                fullest extent permitted by law, we disclaim all
                warranties, express or implied, including merchantability,
                fitness for a particular purpose, and non-infringement, and
                we assume no liability for errors, interruptions, or
                unauthorized access to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">14. Limitation of liability</h2>
              <p>
                In no event will we or our directors, employees, or agents
                be liable to you for any indirect, consequential,
                exemplary, incidental, special, or punitive damages arising
                from your use of the Services. Our total liability to you
                for any claim is limited to the amount, if any, you paid us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">15. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold us harmless from
                any loss, damage, or claim, including reasonable attorneys'
                fees, arising from your use of the Services, your breach of
                these Terms, or your violation of any third party's rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">16. User data</h2>
              <p>
                We maintain certain data you transmit to the Services for
                the purpose of managing their performance. Although we
                perform routine backups, you are solely responsible for all
                data you transmit, and we have no liability for any loss or
                corruption of that data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">17. Electronic communications</h2>
              <p>
                Visiting the Services, sending us emails, and completing
                online forms constitute electronic communications. You
                consent to receive communications electronically and agree
                that electronic signatures and records satisfy any legal
                requirement that such communications be in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">18. California users and residents</h2>
              <p>
                If a complaint with us is not satisfactorily resolved, you
                may contact the Complaint Assistance Unit of the Division of
                Consumer Services of the California Department of Consumer
                Affairs in writing at 1625 North Market Blvd., Suite N 112,
                Sacramento, California 95834, or by phone at (800) 952-5210
                or (916) 445-1254.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">19. Miscellaneous</h2>
              <p>
                These Terms, together with any policies posted by us,
                constitute the entire agreement between you and us. If any
                provision is found unenforceable, the remaining provisions
                remain in full effect. No joint venture, partnership,
                employment, or agency relationship is created between you
                and us as a result of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">20. Contact us</h2>
              <p>
                To resolve a complaint regarding the Services or for more
                information about using the Services, contact us at:
              </p>
              <p className="mt-3">
                POP &amp; DROP VENDING LLC
                <br />
                123 Main Street
                <br />
                Winter Springs, FL 32708
                <br />
                United States
                <br />
                Phone: (407) 555-5555
                <br />
                Email:{' '}
                <a
                  href="mailto:Contact@Pop&DropVending.com"
                  className="text-amber-500 hover:text-amber-600 underline"
                >
                  Contact@Pop&DropVending.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Terms;
