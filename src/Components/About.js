import React from 'react'

const About = () => {
    return (
        <div>
            <div className="container-fluid about">
                <div className="row">

                    <div className="col-md-6">
                        <img className="img-fluid" src="./images/about.jpg" alt=""/>
                    </div>

                    <div className="col-md-6 text-dark about-caption">
                        <h5 className="">Since Year 1999</h5>
                        <h2 className="text-dark fw-bold h1 mb-4">We are <span className="text-warning">Fruitkha</span></h2>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a dignissimos
                            natus nisi? Dolores
                            necessitatibus neque eveniet, placeat distinctio, nemo magni inventore natus, nihil facilis
                            alias
                            expedita. Magnam, quo fuga?</p>
                        <button className="btn btn-warning btn-lg mt-4 fw-bold rounded-pill">know more</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About