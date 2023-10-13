import React from 'react'

const Header = () => {
  return (
    <div>
    <div className="container-fluid header">
    <div className="row">
        <div className="col-md-12 header-title text-light text-center">
            <h5 className="fw-bold">FRESH & ORGANIC</h5>
            <h2 className="h1 fw-bolder my-4">Delicious Seasonal Fruits</h2>
            <div className="d-flex justify-content-center header-button ">
                <button className="btn btn-warning btn-lg rounded-pill fw-bold mr-2  mb-5">Fruit Collection</button>
                <button className="btn btn-outline-warning btn-lg rounded-pill fw-bold mb-5">Contact Us</button>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Header