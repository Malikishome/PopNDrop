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
          <h1 className="text-3xl font-bold  mb-2">Terms of Service</h1>

          <div className="flex flex-col gap-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold mb-2">1. Who we are</h2>
              <p>
                Pop & Drop Vending ("Pop & Drop", "we", "us") places and
                services vending machines at partner host locations in
                Orlando, Florida and surrounding areas. This website lets
                prospective host businesses learn about the service and
                submit a request to host a machine.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">2. Using this site</h2>
              <p>
                This site is informational and for submitting host requests.
                You agree to provide accurate information in the request
                form and not to use the site for any unlawful purpose or to
                submit false, misleading, or abusive submissions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">3. Host requests</h2>
              <p>
                Submitting the request form is an inquiry, not a binding
                agreement. Hosting a machine at your location is subject to
                a separate conversation and agreement with Pop & Drop after
                we review your request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">4. No warranties</h2>
              <p>
                This site and its content are provided "as is," without
                warranties of any kind. We don't guarantee the site will be
                error-free, uninterrupted, or that machine placement will be
                available at every location that submits a request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">5. Changes to these terms</h2>
              <p>
                We may update these terms from time to time. Continued use
                of the site after an update means you accept the revised
                terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">6. Contact</h2>
              <p>
                Questions about these terms? Reach us through the contact
                details in the site footer.
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
