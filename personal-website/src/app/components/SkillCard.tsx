import { SkillObject } from "../types/types";

function SkillCard({ category, list }: { category: string, list: SkillObject[]}): React.JSX.Element {
    return (
        <div className='skill-card'>
            <h1>{category}</h1>
            <ul className='skill-list'>
                {list.map((item) => (
                    <li key={item.id} className='list-item'>
                        <img src={item.imageSrc} alt={item.imageAlt} />
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default SkillCard;