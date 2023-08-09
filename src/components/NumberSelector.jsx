import { styled } from "styled-components";


const NumberSelector = ({selectedNumber, setSelectedNumber, error}) => {

    const arrayNumbers = [1,2,3,4,5,6]
    // a state for selecting a number
    

    return (
        <NumberSelectorContainer>
            <p>{error}</p>
            <div className="flex">
                {
                    arrayNumbers.map((value, key) => {
                    return <Box isSelected={value === selectedNumber} key={key} onClick={() => setSelectedNumber(value)}>{value}</Box>
                    })
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;

    .flex {
        display: flex;
        gap: 24px;

    }
    p {
        color: #000;
        font-family: Poppins;
        font-size: 24px;
        font-weight: 700;
    }
`;





const Box = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isSelected'].includes(prop),
  })`
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
    background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
    color: ${(props) => (!props.isSelected ? 'black' : 'white')};
  `;
