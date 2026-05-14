import { usePopup } from '../context/PopupContext'

const TREATMENTS = ['Weight Loss Surgery', 'Piles Treatment', 'Hernia Surgery', 'Kidney Stones', 'Varicose Veins', 'Tonsillectomy']
const FOR_PATIENTS = ['FAQs', 'Patient Reviews', 'No Cost EMI', 'Insurance Support', 'Ask a Question']
const COMPANY = ['About MediYou', 'Our Doctors', 'Our Clinics', 'Blog', 'Careers', 'Contact Us']

function FooterCol({ heading, links, onLinkClick }) {
  return (
    <div className="footer-col">
      <h4>{heading}</h4>
      <ul>
        {links.map(l => (
          <li key={l}>
            {onLinkClick
              ? <button onClick={onLinkClick} style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}>{l}</button>
              : <a href="#">{l}</a>
            }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const { openPopup } = usePopup()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="wm">
              <a href="#" className="nav-logo" aria-label="MediYou">
                <img src="/logo.png" alt="MediYou" />
              </a>
            </div>
            <p className="tag">Aap Ki Sehat Ka Naya Sathi</p>
          </div>
          <FooterCol heading="Treatments" links={TREATMENTS} onLinkClick={openPopup} />
          <FooterCol heading="For Patients" links={FOR_PATIENTS} />
          <FooterCol heading="Company" links={COMPANY} />
        </div>
        <div className="footer-bottom">
          <span>© 2025 MediYou Health Pvt. Ltd. All rights reserved.</span>
          <div className="links">
            <a href="#">Privacy</a>
            <a href="#">Terms &amp; Condition</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
