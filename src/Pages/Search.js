import React from 'react'
import NavBar from '../Components/NavBar'

const Search = () => {
    return (
        <div>
        <NavBar/>
        <div className='container-fluid search'>
        <div className='row'>
        
        <div className='col-md-12 search-caption'>
        <h2 className="text-dark fw-bold h1 mb-4 text-center">We are <span className="text-warning">Fruitkha</span></h2>
        <form>
        <input className='form-control w-75 m-auto py-4 text-center' type='search' placeholder='which kind of fruits do you want'  />
        </form>
        </div>

        </div>
        </div>

        </div>
    )
}

export default Search