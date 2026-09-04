'use client'

import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

function Hero(): React.JSX.Element {
    const cld = new Cloudinary({
        cloud: {
            cloudName: `${process.env.NEXT_PUBLIC_CLOUD_NAME}`
        }
    });

    return (
        <section id="hero">
            <div className="hero-text">
                <h1>Hello! My name is <span className="highlight-text">Tyler Hall</span></h1>
                <p>I am a junior web developer from Canada that specializes in full stack development</p>
                <p>I would love to get in touch and help bring your projects to life!</p>
            </div>
            <div className="hero-image">
                <AdvancedImage 
                    cldImg={cld.image('headshot_qtj0hu').quality('auto').format('auto')} 
                    alt='Headshot of Tyler'
                />
            </div>
        </section>
    )
};

export default Hero;