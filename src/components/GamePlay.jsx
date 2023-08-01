import { styled } from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";


const GamePlay = () => {
    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore></TotalScore>
                <NumberSelector></NumberSelector>
            </div>
        </MainContainer>
    );
};

export default GamePlay;


const MainContainer = styled.div`
    padding-top: 70px;
    .top_section {
        display: flex;
        justify-content: space-between;
        align-items: end;
        padding: 0 20px;
    }
`;