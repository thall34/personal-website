function SkillCard({ category, list }: { category: string, list: string[]}): React.JSX.Element {
    return (
        <div className='skill-card'>
            <h1>{category}</h1>
            <ul>
                {list.map((item, index) => (
                    <li key={index}className='list-item'>{item}</li>
                ))}
            </ul>
        </div>
    )
};

export default SkillCard;