import ReusableCard from "../components/reactCard.jsx";
import { personal } from "../data/allDetails.js";
import "../styles/footer.css";
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Personal = () => {
    return(
        <CardContainer className="card-align">
        {personal.map((e)=>{
            return <ReusableCard title={e.project} content={`${e.technology+" "+e.url}`}/>
        })}
        </CardContainer>
    );
};

export default Personal;