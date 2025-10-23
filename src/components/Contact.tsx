import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-text-container">
          <p className="small-text">Get in Touch</p>
          <h2 className="contact-heading">Let's Work Togather</h2>
          <p className="misc-text">
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>
        </div>
        <div className="contact-grid-container">
          <form className="form-container" action="">
            <input
              type="text"
              name="name"
              className="text-input"
              id="txt-name"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              className="text-input"
              id="txt-email"
              placeholder="Your Email"
            />
            <input
              type="text"
              name="subject"
              className="text-input"
              id="txt-sub"
              placeholder="Subject"
            />
            <textarea
              placeholder="Your Message"
              className="textarea-input"
              name="messege"
              id="txt-msg"
            ></textarea>
            <button className="btn btn-outline">Submit</button>
          </form>
          <div className="contact-info-container">
            <h4 className="contact-info-heading">Contact Information</h4>
            <p className="contact-info-text">
              Feel free to reach out through any of these channels. I typically
              respond within 24 hours.
            </p>
            <div className="contact-information-container">
              <div className="info-item">
                <Mail className="contact-icons" />
                <p className="item-heading">Email</p>
                <p className="item-text">muzammil.uiit@gmail.com</p>
              </div>
              <div className="info-item">
                <Phone className="contact-icons" />
                <p className="item-heading">Phone</p>
                <p className="item-text">+923205714854</p>
              </div>
              <div className="info-item">
                <MapPin className="contact-icons" />
                <p className="item-heading">Location</p>
                <p className="item-text">Rawalpindi,Pakistan</p>
              </div>
            </div>
            <div className="social-link-container">
              <h5>Follow Me</h5>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/muzammil.shah_/"
                  className="social-link"
                >
                  Instgram
                </a>
                <a
                  href="https://www.facebook.com/muzammil.854"
                  className="social-link"
                >
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/in/syed-muzammil-ali-shah-b08a39325/"
                  className="social-link"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
