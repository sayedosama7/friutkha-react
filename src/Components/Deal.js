import React from 'react'

const Deal = () => {
    return (
        <div>
            <div class="container-fluid deal">
                <div class="row">

                    <div class="col-md-6 deal-discount">
                        <p class="">30%<br/><span class="fw-lighter h4">off per kg</span></p>
                        <img class="img-fluid" src="./images/deal.jpg" alt=""/>
                    </div>

                    <div class="col-md-6 text-dark">
                        <h2 class="text-dark fw-bold h1 mb-4"><span class="text-warning">deal</span> of the month</h2>
                        <h5 class="">HIKAN STRWABERRY</h5>
                        <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a dignissimos natus
                            nisi? Dolores
                            necessitatibus neque eveniet, placeat distinctio, nemo magni inventore natus, nihil facilis alias
                            expedita. Magnam, quo fuga?</p>
                        <div class="d-flex all-days">
                            <div class="days">
                                <h4 class="text-warning">7817</h4>
                                <p>days</p>
                            </div>
                            <div class="days">
                                <h4 class="text-warning">315</h4>
                                <p>hours</p>
                            </div>
                            <div class="days">
                                <h4 class="text-warning">30</h4>
                                <p>min</p>
                            </div>
                            <div class="days">
                                <h4 class="text-warning">7</h4>
                                <p>seconds</p>
                            </div>
                        </div>
                        <button class="btn btn-warning btn-lg mt-5 fw-bold rounded-pill">add to cart</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deal