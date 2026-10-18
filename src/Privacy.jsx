import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';

function Privacy() {
  return (
    <>
      <header className="p-2 font-serif bg-gray-800 shadow-2xl">
        <Link to="/" className="flex p-4 items-center font-bold text-amber-400 hover:text-amber-300 transition w-fit">
          Pop & Drop Vending
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 font-serif">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-6">Last updated October 17, 2026</p>

          <div className="flex flex-col gap-6 text-gray-700 leading-relaxed">
            <section>
              <p>
                This Privacy Notice for POP &amp; DROP VENDING LLC ("we,"
                "us," or "our") describes how and why we may access,
                collect, store, use, and/or share your personal information
                when you use our services ("Services"), including when you
                visit our website at{' '}
                <a
                  href="https://www.popanddropvending.com"
                  className="text-amber-500 hover:text-amber-600 underline"
                >
                  www.popanddropvending.com
                </a>{' '}
                or engage with us in other related ways, including any
                marketing or events.
              </p>
              <p className="mt-3">
                Reading this Privacy Notice will help you understand your
                privacy rights and choices. If you do not agree with our
                policies and practices, please do not use our Services. If
                you have questions, contact us at{' '}
                <a
                  href="mailto:Contact@Pop&DropVending.com"
                  className="text-amber-500 hover:text-amber-600 underline"
                >
                  Contact@Pop&DropVending.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">1. What information do we collect?</h2>
              <p>
                We collect personal information that you voluntarily provide
                to us when you express interest in our Services or otherwise
                contact us. This may include your name, company name, email
                address, phone number, and contact preferences. We don't
                collect anything else about you through this site - there
                are no accounts, no logins, and no tracking cookies of our
                own.
              </p>
              <p className="mt-3">
                We do not process sensitive personal information (such as
                racial or ethnic origin, sexual orientation, or religious
                beliefs), and we do not collect any information about you
                from third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">2. How do we process your information?</h2>
              <p>We process your information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>deliver and respond to your service requests and inquiries;</li>
                <li>send administrative information, such as changes to our terms or policies;</li>
                <li>evaluate and improve our Services and marketing; and</li>
                <li>comply with our legal obligations.</li>
              </ul>
              <p className="mt-3">
                We process your information only when we have a valid legal
                reason to do so, and we may process it for other purposes
                with your consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">3. When and with whom do we share your information?</h2>
              <p>
                We don't sell or rent your personal information to third
                parties. We may share your information with service
                providers that help us operate the Services:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <span className="font-semibold">Supabase</span> (Postgres
                  database) stores your form submissions on our behalf.
                </li>
                <li>
                  <span className="font-semibold">EmailJS</span> delivers
                  the notification email containing your submitted details
                  to our team.
                </li>
              </ul>
              <p className="mt-3">
                We may also share information in connection with a merger,
                sale, financing, or acquisition of all or part of our
                business.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">4. How long do we keep your information?</h2>
              <p>
                We retain your information for as long as reasonably needed
                to respond to your request and maintain records of our
                host-location discussions, unless a longer period is
                required by law. No purpose in this notice requires us to
                keep your personal information for longer than 2 years. When
                we no longer need it, we delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">5. How do we keep your information safe?</h2>
              <p>
                We have implemented reasonable technical and organizational
                security measures designed to protect your personal
                information. However, no method of transmission over the
                internet or electronic storage is 100% secure, so we cannot
                guarantee absolute security. Any transmission of personal
                information to our Services is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">6. Do we collect information from minors?</h2>
              <p>
                We do not knowingly collect data from or market to children
                under 18 years of age. By using the Services, you represent
                that you are at least 18, or the parent or guardian of a
                minor consenting to their use of the Services. If you
                believe a minor under 18 has provided us with personal
                information, please contact us at{' '}
                <a
                  href="mailto:Contact@Pop&DropVending.com"
                  className="text-amber-500 hover:text-amber-600 underline"
                >
                  Contact@Pop&DropVending.com
                </a>{' '}
                so we can delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">7. What are your privacy rights?</h2>
              <p>
                Depending on where you live, you may have the right to know
                whether we process your personal data, access it, correct
                inaccuracies, request deletion, obtain a copy of it, opt out
                of certain processing, and not be discriminated against for
                exercising these rights. If we are relying on your consent
                to process your information, you may withdraw that consent
                at any time by contacting us.
              </p>
              <p className="mt-3">
                If you are a Florida resident, these rights apply to you
                under applicable state privacy law. We have not sold or
                shared personal information with third parties for a
                business or commercial purpose in the preceding twelve
                months, and we will not do so in the future.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">8. Do-Not-Track signals</h2>
              <p>
                No uniform technology standard for recognizing and
                implementing Do-Not-Track ("DNT") signals currently exists.
                As such, we do not respond to DNT browser signals at this
                time. If a standard is adopted that we must follow, we will
                update this notice accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">9. How do you exercise your rights?</h2>
              <p>To exercise any of the rights above, contact us:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  by email at{' '}
                  <a
                    href="mailto:Contact@Pop&DropVending.com"
                    className="text-amber-500 hover:text-amber-600 underline"
                  >
                    Contact@Pop&DropVending.com
                  </a>
                </li>
                <li>by phone at (407) 555-5555</li>
                <li>
                  by visiting{' '}
                  <a
                    href="https://www.popanddropvending.com"
                    className="text-amber-500 hover:text-amber-600 underline"
                  >
                    www.popanddropvending.com
                  </a>
                </li>
                <li>or by post, using the address below</li>
              </ul>
              <p className="mt-3">
                We will need to verify your identity before acting on your
                request, and we will respond in accordance with applicable
                data protection laws. You may designate an authorized agent
                to submit a request on your behalf if they provide proof of
                that authorization.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">10. Do we make updates to this notice?</h2>
              <p>
                We may update this Privacy Notice from time to time. The
                updated version will be indicated by a revised "Last
                updated" date at the top of this notice. We encourage you to
                review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">11. How can you contact us?</h2>
              <p>
                If you have questions or comments about this notice, email
                us at{' '}
                <a
                  href="mailto:Contact@Pop&DropVending.com"
                  className="text-amber-500 hover:text-amber-600 underline"
                >
                  Contact@Pop&DropVending.com
                </a>{' '}
                or contact us by post at:
              </p>
              <p className="mt-3">
                POP &amp; DROP VENDING LLC
                <br />
                123 Main Street
                <br />
                Winter Springs, FL 32708
                <br />
                United States
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Privacy;
