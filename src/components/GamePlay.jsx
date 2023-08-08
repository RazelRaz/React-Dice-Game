import { styled } from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";


const GamePlay = () => {

    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1)

    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore></TotalScore>
                <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}></NumberSelector>
            </div>
            <RollDice currentDice={currentDice} setCurrentDice={setCurrentDice}></RollDice>
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