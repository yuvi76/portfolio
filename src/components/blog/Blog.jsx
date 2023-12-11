import React from "react";
import Modal from "react-modal";
import UseData from "../../Hooks/UseData";

Modal.setAppElement("#root");

const Blog = () => {
  const {  blogsData } = UseData();

  return (
    <>
      <div className="row">
        {blogsData.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
          >
            <article
              className="post-container"
              onClick={() => window.open(item?.link, '_blank')}
            >
              <div className="post-thumb">
                <div className="d-block position-relative overflow-hidden">
                  <img src={item?.img} className="img-fluid" alt="item.title" />
                </div>
              </div>
              {/* End .thumb */}
              <div className="post-content">
                <div className="entry-header">
                  <h3>{item?.title}</h3>
                </div>
                <div className="entry-content open-sans-font">
                  <p>{item?.description1.slice(0, 100)}</p>
                </div>
              </div>
              {/* End .post-content */}
            </article>

          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
