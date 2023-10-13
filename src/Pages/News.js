/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import NavBar from '../Components/NavBar'

const News = () => {
    return (
        <div>
        <NavBar/>
            <div className="container news">
                <div className="row">

                    <div className="col-md-12 text-center">
                        <h2 className="h1 text-dark fw-bold"><span className="text-warning">our </span>news</h2>
                        <p className="text-muted my-4 w-50 m-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Saepe ullam alias
                            nostrum sapiente
                            explicabo, accusantium autem repellendus aspernatur. Vel, quae.</p>
                    </div>

                    <div className="col-md-4 mb-5">
                        <div className="card">
                            <img src="./images/news-bg-1.jpg" className="card-img-top" alt="Fissure in Sandstone" />
                            <div className="card-body">
                                <h4 className="card-title text-dark my-4 fw-bold">You will vainly look for fruit on it in autumn.
                                </h4>
                                <span className="text-muted mr-3"><i className="fa-solid fa-user mr-1"></i> Admin</span>
                                <span className="text-muted"><i className="fa-solid fa-calendar-days mr-1"></i> 27 December, 2045</span>
                                <p className="card-text my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sed
                                    asperiores doloribus harum fuga sunt.</p>
                                <a href="#" className="text-dark fw-bold">read more</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 mb-5">
                        <div className="card">
                            <img src="./images/news-bg-2.jpg" className="card-img-top" alt="Fissure in Sandstone" />
                            <div className="card-body">
                                <h4 className="card-title text-dark my-4 fw-bold">You will vainly look for fruit on it in autumn.
                                </h4>
                                <span className="text-muted mr-3"><i className="fa-solid fa-user mr-1"></i> Admin</span>
                                <span className="text-muted"><i className="fa-solid fa-calendar-days mr-1"></i> 27 December, 2045</span>
                                <p className="card-text my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sed
                                    asperiores doloribus harum fuga sunt.</p>
                                <a href="#!" className="text-dark fw-bold">read more</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5">
                        <div className="card">
                            <img src="./images/news-bg-3.jpg" className="card-img-top" alt="Fissure in Sandstone" />
                            <div className="card-body">
                                <h4 className="card-title text-dark my-4 fw-bold">You will vainly look for fruit on it in autumn.
                                </h4>
                                <span className="text-muted mr-3"><i className="fa-solid fa-user mr-1"></i> Admin</span>
                                <span className="text-muted"><i className="fa-solid fa-calendar-days mr-1"></i> 27 December, 2045</span>
                                <p className="card-text my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sed
                                    asperiores doloribus harum fuga sunt.</p>
                                <a href="#!" className="text-dark fw-bold">read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News