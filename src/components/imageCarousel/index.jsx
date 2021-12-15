import React, {useState} from 'react'
import { CarouselData } from './carouselData';
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { RightArrow } from "../rightArrow";
import styled from 'styled-components'; 

const ImageCarousel = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    if(!Array.isArray(slides) || slides.length <=0){
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent( current === 0 ? length - 1 : current - 1)
    }

const ArrowContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`;
    return (
        <section className = "slider">
            <h1>
                <span class="text_1">Developer</span>
                <span class="text_2">Designer</span>
                <span class="text_3">Enthusiast</span>
                <span class="text_4">Adventurer</span>
                <span class="text_5">Friend</span>
                <span class="text_6">:)   </span>
            </h1>
            <FontAwesomeIcon icon={faAngleLeft} className ="left-arrow" onClick ={prevSlide} />
            <FontAwesomeIcon icon={faAngleRight} className ="right-arrow" onClick={nextSlide} />
            {CarouselData.map((slide, index) => {
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (<img src={slide.image} className="image"/>) }
                    </div>
                )
            })}
            <Link to="/projects">
            <ArrowContainer>
                <RightArrow />
            </ArrowContainer>
            </Link>
        </section>
    )
};

export default ImageCarousel
