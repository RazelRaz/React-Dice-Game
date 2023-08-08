import { styled } from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";


const GamePlay = () => {

    const [score, setScore] = useState(0)

    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1)


    const generateRandomNumber = (min, max) => {
        console.log(Math.floor(Math.random() * (max - min) + min));
        return Math.floor(Math.random() * (max - min) + min);  
    }

    //same dice image show when the number is same
    const rollDice = () => {                 
      const rendomNumber = generateRandomNumber(1, 7)
      setCurrentDice((prev) => rendomNumber);

      if(selectedNumber == rendomNumber){
        setScore((prev) => prev + rendomNumber)
      } else {
        setScore((prev) => prev - 2)
      }

      setSelectedNumber(undefined)

    }

    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score}></TotalScore>
                <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}></NumberSelector>
            </div>
            <RollDice currentDice={currentDice} rollDice={rollDice}></RollDice>
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