import React from "react";

const Page = () => {
  return (
    <section class="page">
      <div class="cover" data-image="assets/images/photos/parallax-cover.jpg">
        <div class="page-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h1>F.A.Q.'s</h1>
              </div>
              <div class="col-lg-12">
                <ol class="breadcrumb">
                  <li>
                    <a href="blue-index.html">Home</a>
                  </li>
                  <li class="active">F.A.Q.'s</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-bottom padding-bottom-0 white-bg">
        <div class="container margin-bottom-70">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="faq-wrapper">
                <div class="faq-header">
                  <h2>Freequently Asked Questions</h2>
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Sed finibus faucibus congue.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus.
                  </p>
                  <div class="search">
                    <input type="text" placeholder="Search asked questions" />
                    <button>
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="faq" id="accordion">
                <div class="card">
                  <div class="card-header" id="faqHeading-1">
                    <div class="mb-0">
                      <h5
                        class="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-1"
                        data-aria-expanded="true"
                        data-aria-controls="faqCollapse-1"
                      >
                        How does Kentho Internet work?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-1"
                    class="collapse show"
                    aria-labelledby="faqHeading-1"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        Aliquam erat odio, fringilla at porta a, vehicula
                        ultricies est. Aliquam maximus turpis in dignissim
                        pellentesque. Ut dolor quam, aliquam eget bibendum nec,
                        luctus non metus. Morbi convallis.
                      </p>
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Sed finibus faucibus
                        congue.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="faqHeading-2">
                    <div class="mb-0">
                      <h5
                        class="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-2"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-2"
                      >
                        How fast is the Kentho Internet service?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-2"
                    class="collapse"
                    aria-labelledby="faqHeading-2"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        Aliquam erat odio, fringilla at porta a, vehicula
                        ultricies est. Aliquam maximus turpis in dignissim
                        pellentesque. Ut dolor quam, aliquam eget bibendum nec,
                        luctus non metus. Morbi convallis.
                      </p>
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Sed finibus faucibus
                        congue.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="faqHeading-3">
                    <div class="mb-0">
                      <h5
                        class="faq-title"
                        data-toggle="collapse"
                        data-target="#faqCollapse-3"
                        data-aria-expanded="false"
                        data-aria-controls="faqCollapse-3"
                      >
                        Can I keep my home phone number?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-3"
                    class="collapse"
                    aria-labelledby="faqHeading-3"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        Aliquam erat odio, fringilla at porta a, vehicula
                        ultricies est. Aliquam maximus turpis in dignissim
                        pellentesque. Ut dolor quam, aliquam eget bibendum nec,
                        luctus non metus. Morbi convallis.
                      </p>
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Sed finibus faucibus
                        congue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section colored padding-bottom-70" id="features">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                <div class="left-heading">
                  <h2 class="section-title">Reservations Management</h2>
                </div>
                <div class="left-text">
                  <p>
                    Phasellus vitae velit sit amet diam semper commodo quis quis
                    libero. Morbi consequat arcu augue, molestie faucibus metus
                    ullamcorper vel.
                  </p>
                  <div class="row">
                    <div class="col-lg-12">
                      <a class="btn-home active" href="#">
                        <i class="fa fa-angle-right"></i>
                        <span>Sed facilisis tempor dolor, ac mollis</span>
                      </a>
                    </div>
                    <div class="col-lg-12">
                      <a class="btn-home" href="#">
                        <i class="fa fa-angle-right"></i>
                        <span>Donec ac lectus in lacus.</span>
                      </a>
                    </div>
                    <div class="col-lg-12">
                      <a class="btn-home" href="#">
                        <i class="fa fa-angle-right"></i>
                        <span>Praesent mauris risus, condimentum ac</span>
                      </a>
                    </div>
                    <div class="col-lg-12">
                      <a class="btn-home" href="#">
                        <i class="fa fa-angle-right"></i>
                        <span>Quisque cursus viverra justo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix"
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <img
                  src="assets/images/photos/features/blue-1.png"
                  class="img-fluid d-block mx-auto"
                  alt="App"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
