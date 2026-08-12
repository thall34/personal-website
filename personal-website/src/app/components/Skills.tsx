import SkillCard from './SkillCard';
import { languages, frameworks, tools } from '../data/skills';

function Skills(): React.JSX.Element {
    return (
        <section className='skills custom-background'>
            <SkillCard category='Languages' list={languages} />
            <SkillCard category='Frameworks' list={frameworks} />
            <SkillCard category='Tools & Databases' list={tools} />
        </section>
    )
};

export default Skills;