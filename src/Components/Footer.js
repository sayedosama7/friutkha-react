/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start text-light">

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4 text-warning">
                                    <i className="fa-brands fa-apple me-3 fa-xl"></i>
                                    fruitkha
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio ipsam nemo
                                    impedit non ut accusamus explicabo quae perferendis ab? Maxime eligendi autem error unde
                                    odit expedita nostrum veritatis consectetur.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4 text-warning">
                                    Pages
                                </h6>
                                <p>
                                    <a href="#" className="text-reset">home</a>
                                </p>
                                <p>
                                    <a href="#" className="text-reset">about</a>
                                </p>
                                <p>
                                    <a href="#" className="text-reset">shop</a>
                                </p>
                                <p>
                                    <a href="#" className="text-reset">news</a>
                                </p>
                                <p>
                                    <a href="#" className="text-reset">contact</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4 text-warning">
                                    about us
                                </h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nisi repellat similique
                                    quos tempore, sit dolorem aliquam quibusdam reprehenderit eius?</p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4 text-warning">Get in Touch</h6>
                                <p><i className="fas fa-home me-3"></i> zagazig, NY 10012, eg</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    sayedosama088@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01210304516</p>
                                <p><i className="fas fa-phone me-3"></i> + 01030608819</p>
                            </div>
                        </div>
                </div>
                </section>

                <div className="text-center pb-3">
                    © 2023 Copyright:
                    <a className="text-warning fw-bold" href="">sayed osama</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer