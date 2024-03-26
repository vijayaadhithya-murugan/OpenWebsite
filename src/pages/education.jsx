import { educationDetails } from "../data/allDetails";
import ReusableCard from "../components/reactCard";

const Education = () => {
    return(
        <>{educationDetails.map((e)=>{
            return <ReusableCard title={e.course} content={`${e.institution+" "+e.year+" "+e.grade}`}/>
        })}</>
    );
};

export default Education;