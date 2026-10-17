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
          <h1 className="text-3xl font-bold  mb-2">Privacy Policy</h1>

          <div className="flex flex-col gap-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold  mb-2">1. What we collect</h2>
              <p>
                When you submit the request form on this site, we collect:
                your company name, your name, email address, phone number,
                your reason for contacting us, and any additional message
                you provide. We don't collect anything else about you
                through this site - there are no accounts, no logins, and
                no tracking cookies of our own.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">2. How we use it</h2>
              <p>
                We use this information solely to respond to your request
                about hosting a Pop & Drop vending machine - to contact you,
                evaluate your location, and follow up about next steps. We
                don't sell or rent your information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">3. Where it's stored</h2>
              <p>
                Form submissions are stored in a Supabase (Postgres)
                database. Supabase acts as our data processor and stores
                this information on our behalf.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">4. Email notifications</h2>
              <p>
                When you submit the form, a notification email containing
                your submitted details is sent to our team via EmailJS, a
                third-party email delivery service that acts as a processor
                for this purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">5. How long we keep it</h2>
              <p>
                We retain submitted information for as long as reasonably
                needed to respond to your request and maintain records of
                our host-location discussions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">6. Your choices</h2>
              <p>
                To ask what information we have about you, or to request
                that it be corrected or deleted, contact us using the
                details in the site footer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">7. Changes to this policy</h2>
              <p>
                We may update this policy from time to time. Continued use
                of the site after an update means you accept the revised
                policy.
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
