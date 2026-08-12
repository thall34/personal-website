'use client'

import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { SkillObject } from "../types/types";

function SkillCard({ category, list }: { category: string, list: SkillObject[]}): React.JSX.Element {
    const cld = new Cloudinary({
        cloud: {
            cloudName: `${process.env.NEXT_PUBLIC_CLOUD_NAME}`
        }
    });

    return (
        <div className='skill-card'>
            <h1>{category}</h1>
            <ul className='skill-list'>
                {list.map((item) => (
                    <li key={item.id} className='list-item'>
                        <AdvancedImage cldImg={cld.image(item.imageSrc).quality('auto').format('auto')} alt={item.imageAlt} />
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default SkillCard;