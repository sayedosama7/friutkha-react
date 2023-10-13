import React from 'react'

const Company = () => {
    return (
        <div>
            <div className="container-fluid company">
                <div className="row">
                    <div className="d-flex company-carousel">

                        <div id="carouselExampleInterval" className="carousel slide col-md-3" data-mdb-ride="carousel"
                            data-mdb-interval="true">
                            <div className="carousel-inner">
                                <div className="carousel-item active " data-mdb-interval="3000">
                                    <img src="./images/1.png" className="d-block m-auto" alt="Wild Landscape" />
                                </div>
                                <div className="carousel-item" data-mdb-interval="3000">
                                    <img src="./images/1.png" className="d-block m-auto" alt="Wild Landscape" />
                                </div>
                            </div>
                        </div>

                        <div id="carouselExampleInterval" className="carousel slide col-md-3" data-mdb-ride="carousel"
                            data-mdb-interval="true">
                            <div className="carousel-inner">
                                <div className="carousel-item active " data-mdb-interval="3000">
                                    <img src="./images/2.png" className="d-block m-auto" alt="Wild Landscape" />
                                </div>
                                <div className="carousel-item" data-mdb-interval="3000">
                                    <img src="./images/2.png" className="d-block m-auto" alt="Wild Landscape" />
                                </div>
                            </div>
                        </div>
                        <div id="carouselExampleInterval" className="carousel slide col-md-3" data-mdb-ride="carousel"
                            data-mdb-interval="true">
                            <div className="carousel-inner">
                                <div className="carousel-item active " data-mdb-interval="3000">
                                    <img src="./images/3.png" className="d-block m-auto" alt="Wild Landscape" />
                                </div>
                                <div className="carousel-item" data-mdb-interval="3000">
                                    <img src="./images/3.png" className="d-block m-auto" alt="Wild Landscape" />
                                </div>
                            </div>
                        </div>
                        <div id="carouselExampleInterval" className="carousel slide col-md-3" data-mdb-ride="carousel"
                            data-mdb-interval="true">
                            <div className="carousel-inner">
                                <div className="carousel-item active " data-mdb-interval="3000">
                                    <img src="./images/4.png" className="d-block m-auto" alt="Wild Landscape" />
                                </div>
                                <div className="carousel-item" data-mdb-interval="3000">
                                    <img src="./images/5.png" className="d-block m-auto" alt="Wild Landscape" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company