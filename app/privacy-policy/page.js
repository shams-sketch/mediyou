import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — MediYou',
  description: 'How MediYou collects, uses, and protects your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <main className="legal">
      <div className="legal-container">
        <header className="legal-head">
          <Link href="/" className="legal-logo" aria-label="MediYou home">
            <img src="/logo.png" alt="MediYou" />
          </Link>
          <Link href="/" className="legal-back">← Back to home</Link>
        </header>

        <article className="legal-body">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last Updated: July 3, 2026</p>

          <p>
            At <strong>MediYou</strong>, your privacy matters to us. Whenever you visit our
            website or share your details with us, we make every effort to keep your
            information safe and use it responsibly.
          </p>
          <p>
            This Privacy Policy explains what information we collect, why we collect it, and
            how we use it.
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you fill out a form, request a consultation, or contact us through our
            website, we may ask for details such as:
          </p>
          <ul>
            <li>Your name</li>
            <li>Mobile number</li>
            <li>Email address (if provided)</li>
            <li>City or location</li>
            <li>Information related to your health concern that you choose to share</li>
          </ul>
          <p>
            We may also collect basic technical information like your IP address, browser
            type, and pages you visit on our website to help us improve your browsing
            experience.
          </p>

          <h2>Why We Collect Your Information</h2>
          <p>The information you share helps us:</p>
          <ul>
            <li>Respond to your enquiry.</li>
            <li>Arrange consultations or appointments.</li>
            <li>Connect you with the appropriate healthcare professional.</li>
            <li>Improve our services and website.</li>
            <li>Contact you regarding your request or provide important updates.</li>
          </ul>
          <p>We only collect information that is necessary to provide our services effectively.</p>

          <h2>How We Protect Your Information</h2>
          <p>
            We take reasonable security measures to protect your personal information from
            unauthorized access, misuse, or disclosure. While no online platform can guarantee
            complete security, we continuously work to keep your information safe.
          </p>

          <h2>Sharing of Information</h2>
          <p>Your personal information is never sold or rented to anyone.</p>
          <p>
            In some cases, we may share your details with our trusted healthcare partners,
            doctors, hospitals, or service providers only when it is necessary to assist you
            or provide the services you requested.
          </p>
          <p>We may also disclose information if required by law or a legal authority.</p>

          <h2>Cookies</h2>
          <p>
            Like many websites, we use cookies to understand how visitors use our website and
            to improve its performance. Cookies help us provide a better browsing experience
            but do not give us access to your personal information unless you choose to provide
            it.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Our website may use services such as Google Analytics, Google Ads, Meta (Facebook
            &amp; Instagram), and WhatsApp to improve communication, website performance, and
            advertising. These services may collect certain information according to their own
            privacy policies.
          </p>

          <h2>Your Choice</h2>
          <p>
            You are always free to contact us if you would like to update, correct, or request
            the removal of your personal information. We will make reasonable efforts to process
            your request in accordance with applicable laws.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our
            services or legal requirements. Any updates will be posted on this page with the
            revised date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how your information is
            handled, please feel free to contact us.
          </p>
          <p className="legal-contact">
            <strong>MediYou</strong><br />
            Email: <a href="mailto:support@mediyou.in">support@mediyou.in</a><br />
            Phone: <a href="tel:+919217214842">+91 92172 14842</a><br />
            Website: <a href="https://www.mediyou.in">https://www.mediyou.in</a>
          </p>
        </article>
      </div>
    </main>
  )
}
