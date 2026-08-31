import SkillCard from './SkillCard';
import { languages, frameworks, tools } from '../data/skills';

function Skills(): React.JSX.Element {
    return (
        <section id='skills' className='fly-in-left'>
            <h1 className='highlight-text'>Skills</h1>
            <div className='skill-lists'>
                <SkillCard category='Languages' list={languages} />
                <SkillCard category='Frameworks' list={frameworks} />
                <SkillCard category='Tools & Databases' list={tools} />
            </div>
        </section>
    )
};

export default Skills;