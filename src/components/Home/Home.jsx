import React from 'react'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs'
import { ImFacebook2 } from 'react-icons/im'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllServices, getServicesByCategory, getServicesByName } from '../../Redux/actions'
import './Home.css'

const Home = () => {

    const dispatch = useDispatch()

    const [activeCategory, setActiveCategory] = useState(null);


    const allServices = useSelector(state => state.allServices)

    const servicesByName = useSelector(state => state.servicesByName)

    const servicesByCategory = useSelector(state => state.servicesByCategory)



    const [currentPage, setCurrentPage] = useState(1)


    const getDisplayedServices = () => {
        if (servicesByName.length) {
            return servicesByName;
        } else if (servicesByCategory.length) {
            return servicesByCategory;
        } else {
            return allServices;
        }
    };

    const displayedServices = getDisplayedServices()
    const cardsPerPage = 20
    const totalPages = Math.ceil(displayedServices.length / cardsPerPage);

    const startIndex = (currentPage - 1) * cardsPerPage

    const endIndex = startIndex + cardsPerPage




    const currentServices = displayedServices.slice(startIndex, endIndex)


    const handleByCategory = (category) => {
        dispatch(getServicesByCategory(category));
        setCurrentPage(1);
    };

    useEffect(() => {
        dispatch(getAllServices());
    }, [dispatch]);


    return (
        <div className='container-fluid'>
            <div className='container__box__home'>
                <button className={`btn__item ${activeCategory === 'Finanzas' ? 'active' : ''}`} onClick={() => handleByCategory('Finanzas')}>Finanzas</button>
                <button className='btn__item' onClick={() => handleByCategory('Desarrollo Web')}>Desarrollo Web</button>
                <button className='btn__item' onClick={() => handleByCategory('Informatica')}>Informática</button>
                <button className='btn__item' onClick={() => handleByCategory('Marketing')}>Marketing</button>
                <button className='btn__item' onClick={() => handleByCategory('Astrología')}>Astrología</button>
                <button className='btn__item' onClick={() => handleByCategory('Ebook')}>EBooks</button>

            </div>
            <div className='container__h1'>
                <h1 className='title'>La mejor web para cursos on demand</h1>
            </div>
            <div className="cards__container">

                {[...Array(totalPages).keys()].map((pageIndex) => (
                    <div key={pageIndex} className='card__row'>
                        {currentServices
                            .slice(pageIndex * cardsPerPage, (pageIndex + 1) * cardsPerPage)
                            .map((service) => (
                                <Cards key={service.id} service={service} />
                            ))}
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button className='btn__pagination' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    Anterior
                </button>
                <span>{currentPage}</span>
                <button className='btn__pagination' onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                    Siguiente
                </button>
            </div>

            <div className='container__footer'>
                <div className='footer'>
                    <Link className='icons__logo' to='https://www.instagram.com/academiaonlineglobal/' target='_blanck'>
                        <BsInstagram />
                    </Link>
                    <Link className='icons__logo' to='https://www.facebook.com/profile.php?id=61552849997287&locale=es_LA' target='_blanck'>
                        <ImFacebook2 />
                    </Link>
                </div>
                <div>
                    <span className='span__copy'>@copyright 2023</span>
                </div>
            </div>

        </div>
    )
}

export default Home



