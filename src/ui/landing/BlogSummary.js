import React from "react";

const BlogSummary = () => {
  return (
    <section className="section white padding-bottom-80" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Latest Blog Posts</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>
                Donec vulputate urna sed rutrum venenatis. Cras consequat magna
                quis arcu elementum, quis congue risus volutpat.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-post-thumb">
              <div className="img">
                <img src="assets/images/photos/blog/1.jpg" alt="" />
              </div>
              <div className="blog-content">
                <h3>
                  <a href="blue-blog-single.html">
                    Kentho Expands the Leadership Team with David Lin,
                    Controller
                  </a>
                </h3>
                <div className="text">
                  Mauris tellus sem, ultrices varius nisl at, convallis iaculis
                  mauris. Sed eget sem vitae purus tempus dignissim.
                </div>
                <a href="blue-blog-single.html" className="btn-primary-line">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-post-thumb">
              <div className="img">
                <img src="assets/images/photos/blog/2.jpg" alt="" />
              </div>
              <div className="blog-content">
                <h3>
                  <a href="blue-blog-single.html">
                    Kentho Partners with Velocloud to Deliver Managed SD-WAN
                  </a>
                </h3>
                <div className="text">
                  Cras imperdiet faucibus sem, a dignissim urna feugiat sed.
                  Interdum et malesuada fames ac ante ipsum.
                </div>
                <a href="blue-blog-single.html" className="btn-primary-line">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-post-thumb">
              <div className="img">
                <img src="assets/images/photos/blog/3.jpg" alt="" />
              </div>
              <div className="blog-content">
                <h3>
                  <a href="blue-blog-single.html">
                    Corporate IT Solutions Adds Neva as Senior Account Executive
                  </a>
                </h3>
                <div className="text">
                  Quisque euismod nec lacus sit amet maximus. Ut convallis
                  sagittis lorem auctor malesuada. Morbi auctor tortor.
                </div>
                <a href="blue-blog-single.html" className="btn-primary-line">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSummary;
