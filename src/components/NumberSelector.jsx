import { styled } from "styled-components";


const NumberSelector = () => {

    const arrayNumbers = [1,2,3,4,5,6]
    // a state for selecting a number


    return (
        <div>
            {
                arrayNumbers.map((value, key) => {
                   return <Box key={key}>{value}</Box>
                })
            }
        </div>
    );
};

export default NumberSelector;

const Box = styled.div`
    display: flex;
    width: 72px;
    height: 72px;
    padding: 18px 0px;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    background: #FFF;
    font-size: 24px;
    font-weight: 700;
`


