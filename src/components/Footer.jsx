import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="py-5">
          <div className="row g-5 col-footer">
            <div className="col-2 col-footer-mb ">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-2 col-footer-mb">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-2 col-footer-mb">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-4 col-footer-form">
              <htmlForm>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2 inputFooter">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="htmlForm-control" placeholder="Email address" />
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </htmlForm>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top linkme">
            <p>© 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex linkme-fs">
              <li className="ms-3"><a className="link-dark" href="https://www.facebook.com/profile.php?id=100010329273393"><span className="fa fa-facebook"></span></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><span className="fa fa-twitter"></span></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><span className="fa fa-instagram"></span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer