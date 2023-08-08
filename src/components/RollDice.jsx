import { styled } from "styled-components";
import { useState } from "react";

const RollDice = ({currentDice, setCurrentDice}) => {

    const generateRandomNumber = (min, max) => {
        console.log(Math.floor(Math.random() * (max - min) + min));
        return Math.floor(Math.random() * (max - min) + min);  
    }

    //same dice image show when the number is same
    const rollDice = () => {
      const rendomNumber = generateRandomNumber(1, 7)
      setCurrentDice((prev) => rendomNumber);
    }

    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                {/* <img src="/public/Images/dice_1.png" alt="dice" /> */}
                <img src={`/public/Images/dice_${currentDice}.png`} alt="dice" />

            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    );
};

export default RollDice;

const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
    flex-direction: column;
    align-items: center;
    .dice {
        cursor: pointer;
    }
    p {
        font-size: 24px;
        font-weight: 500;
    }
`