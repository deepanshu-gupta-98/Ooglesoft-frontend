import React from 'react';
import ContactForm from '../forms/contact-form';

const ContactArea = () => {
  return (
    <>
      <div className="tp-contact-area pt-135 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 ">
              <div className="tp-contct-wrapper contact-space-40">
                <div className="tp-contact-thumb mb-60">
                  <img src="/assets/img/contact/contact-1.jpg" alt="" />
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Mail Address</h4>
                  <span><a href="mailto:(info@ooglesoft.com)">(info@ooglesoft.com)</a></span>
                  <span><a href="mailto:(salse@ooglesoft.com)">(salse@ooglesoft.com)</a></span>
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Phone Number</h4>
                  <span><a href="tel:(+91 9784626443)">(+91 978-462-6443)</a></span>
                  <span><a href="tel:(+1255-568-6523)">(+91 636-702-3010)</a></span>
                </div>
                <div className="tp-contact-info">
                  <h4 className="contact-title">Address line</h4>
                  <span><a href="https://maps.app.goo.gl/vEknrcXxDtzPm2Xz9" target="blank">52/210, Padmani VT Rd, Ward 27, Mansarovar Sector 5, Mansarovar, Jaipur, Rajasthan 302020</a></span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpcontact">
                <h4 className="tp-contact-big-title">Let’s Talk...</h4>
                <div className="tpcontact__form tpcontact__form-3">
                  {/* ContactForm start */}
                  <ContactForm />
                  {/* ContactForm end */}
                </div>
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;