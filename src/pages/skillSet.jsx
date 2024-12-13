import ReusableCard from '../components/reactCard.jsx';
import { skillSet } from '../data/allDetails.js';

const SkillSet = () => {
  return (
    <>
      {skillSet.map((e) => {
        return <ReusableCard title={e.skill} content={e.level} />;
      })}
    </>
  );
};

export default SkillSet;
