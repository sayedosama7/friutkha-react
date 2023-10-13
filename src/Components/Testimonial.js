import React from 'react'

const Testimonial = () => {
  return (
    <div>
    <div className="container testimonial text-muted text-center">
    <div className="row">
        <div className="col-md-12">
            <div id="carouselExampleCaptions" className="carousel slide" data-mdb-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="./images/testimonials.png" className="d-block w-100 rounded-circle my-5"
                            alt="Sunset Over the City" />
                        <h2 className="text-dark fw-bold">sayed osama</h2>
                        <h6 className="fw-bold mt-4">local shop owner</h6>
                        <p className="w-75 m-auto my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                            eum,
                            molestiae dicta temporibus amet
                            quam et nemo aperiam ea ullam veritatis unde sequi aut nisi fugit eaque ab corrupti!
                            Dolorem.</p>
                        <i className="fa-solid fa-quote-right fa-xl"></i>
                    </div>

                    <div className="carousel-item">
                        <img src="./images/testimonials-2.png" className="d-block w-100 rounded-circle my-5"
                            alt="Sunset Over the City" />
                        <h2 className="text-dark fw-bold">hosam hasan</h2>
                        <h6 className="fw-bold mt-4">local owner</h6>
                        <p className="w-75 m-auto my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                            eum,

                            quam et nemo aperiam ea ullam veritatis unde sequi aut nisi fugit eaque ab corrupti!
                            Dolorem.</p>
                        <i className="fa-solid fa-quote-right fa-xl"></i>
                    </div>

                    <div className="carousel-item">
                        <img src="./images/testimonials-3.png" className="d-block w-100 rounded-circle my-5"
                            alt="Sunset Over the City" />
                        <h2 className="text-dark fw-bold">ahmed ali</h2>
                        <h6 className="fw-bold mt-4">shop owner</h6>
                        <p className="w-75 m-auto my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                            eum,
                            molestiae dicta temporibus amet
                            .</p>
                        <i className="fa-solid fa-quote-right fa-xl"></i>
                    </div>

                </div>
            </div>
        </div>

    </div>
</div>
    </div>
  )
}

export default Testimonial