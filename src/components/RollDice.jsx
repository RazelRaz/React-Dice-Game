import { styled } from "styled-components";


const RollDice = ({currentDice, rollDice}) => {

    

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