'use client'

import { useState, useEffect } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import otherProjects from '../data/otherProjects';

function ImageCarousel(): React.JSX.Element {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timerReset, setTimerReset] = useState(0);
    const [projectHover, setProjectHover] = useState(false);

    // const width = height * 1.5;
    const maxIndex = otherProjects.length - 1;

    const cld = new Cloudinary({
        cloud: {
            cloudName: `${process.env.NEXT_PUBLIC_CLOUD_NAME}`
        }
    });

    function handleShiftRight(): void {
        if (currentIndex === maxIndex) {
            return;
        };

        setCurrentIndex(prevIndex => prevIndex + 1);
        setTimerReset(prevTimer => prevTimer + 1);
    };

    function handleShiftLeft(): void {
        if (currentIndex === 0) {
            return;
        };

        setCurrentIndex(prevIndex => prevIndex - 1);
        setTimerReset(prevTimer => prevTimer + 1);
    };

    function handleCircleClick(index: number): void {
        setCurrentIndex(index);
        setTimerReset(prevTimer => prevTimer + 1);
    };

    useEffect(() => {
        const timedImageShift = setInterval(() => {
            setCurrentIndex(prevIndex => {
                if (prevIndex >= maxIndex) {
                    return 0;
                };

                return prevIndex + 1;
            });
        }, 6000);

        return () => clearInterval(timedImageShift);
    }, [timerReset]);

    return (
        <div className="carousel-container">
            <h1>My Other Projects</h1>
            <div className="display-container">
                {currentIndex !== 0 ? 
                    <button onClick={handleShiftLeft}><img src='./images/chevron-left.svg' alt='Previous'/></button> 
                    : <button disabled><img src='./images/chevron-left.svg' alt='Previous'/></button>}
                <div className="display">
                    <div className="image-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {otherProjects.map((project) => (
                        <div key={project.id}>
                        <div className={`overlay ${projectHover ? 'highlight' : ''}`} onMouseEnter={() => setProjectHover(true)} onMouseLeave={() => setProjectHover(false)}>
                            <h1>{project.name}</h1>
                            <p><em>{project.techStack}</em></p>
                        </div>
                            <AdvancedImage 
                                cldImg={cld.image(project.imageSrc).quality('auto').format('auto')} 
                                alt={project.imageAlt} 
                            />
                        </div>
                    ))}
                    </div>
                </div>
                {currentIndex !== maxIndex ? 
                    <button onClick={handleShiftRight}><img src='./images/chevron-right.svg' alt='Next'/></button> 
                    : <button disabled><img src='./images/chevron-right.svg' alt='Next'/></button>}
            </div>
            <div className="circle-container">
                    {otherProjects.map((image) => (
                        currentIndex === image.id ? (
                        <div key={image.id} className='circle filled'></div>
                        ) : (
                        <div key={image.id} className='circle' onClick={() => handleCircleClick(image.id)}></div>            
                        )
                    ))}
            </div>
        </div>
    )
};

export default ImageCarousel;