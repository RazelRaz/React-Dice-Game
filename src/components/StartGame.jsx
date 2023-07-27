import { styled } from "styled-components";
import Hero from "../../public/Images/dicehero.png"

const StartGame = ({ toggle }) => {
    return (
        <Container>
            <img src={Hero} alt="dice-hero" />
            <div className="content">
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    );
};

export default StartGame;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin: 0 auto;
    height: 100vh;
    .content {
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }
`
const Button = styled.button`
    border-radius: 5px;
    background: #000;
    width: 220px;
    padding: 10px 18px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    border: none;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in ;
    &:hover {
        background: white;
        color: #000;
        border: 1px solid #000;
        transition: 0.3s background ease-in ;
    }
`