import ReusableCard from "../components/reactCard.jsx";
import { workExperience } from "../data/allDetails.js";

const Experience = () => {
    return(
        <>
        {workExperience.map((e)=>{
            return <ReusableCard title={e.role} content={`${e.company+" "+e["work-period"]+" "+e.duration}`}/>
        })}
        </>
    );
};

export default Experience;