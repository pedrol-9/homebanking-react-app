import React from 'react'
import { Carousel } from "flowbite-react";

const Carrusel = () => {
    return (
        <>
            <div className="w-full h-56 sm:h-64 xl:h-80 2xl:h-96 my-8">
                <Carousel>
                    <img src="\assets\imgs\banner_homebanking.png" alt="..." />
                    <img src="\assets\imgs\cheerfulWomanBlue.jpg" alt="..." />
                    <img src="\assets\imgs\cheerfulWomanOrange.jpg" alt="..." />
                    <img src="\assets\imgs\bannerAzulOscuro.avif" alt="..." />
                    {/* <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
                </Carousel>
            </div>
        </>
    )
}

export default Carrusel