'use client'

import Link from 'next/link'
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import otherWebsites from '../data/otherWebsites';

function Websites(): React.JSX.Element {
    const cld = new Cloudinary({
        cloud: {
            cloudName: `${process.env.NEXT_PUBLIC_CLOUD_NAME}`
        }
    });

    if (otherWebsites.length > 0) {
        return (
            <section id="websites" className='fly-in-left'>
                <h1>Other Websites <span className='highlight-text'>I</span> Manage</h1>
                {otherWebsites.map((site) => (
                    <div className='site-card' key={site.id}>
                        <h1 className='highlight-text'>{site.name}</h1>
                        <Link href={site.url}>{site.url}</Link>
                        <div className='site-image'>
                                <AdvancedImage
                                    cldImg={cld.image(site.image.imageSrc).quality('auto').format('auto')}
                                    alt={site.image.altText}
                                />
                        </div>
                    </div>
                ))}
            </section>
        )
    }

    return (
        <></>
    )
};

export default Websites;