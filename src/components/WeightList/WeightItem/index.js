import styled from "styled-components";

export function WeightItem(props) {
  return (
    <Wrapper>
      <Item>
        <ItemRow>
          <H4>Weight:</H4>
          <H5>{props.weightObject.weight}</H5>
        </ItemRow>
        <ItemRow>
          <H4>Date:</H4>
          <H5>{props.weightObject.weightDate}</H5>
        </ItemRow>
      </Item>
      <ItemButton>
        <Button
          onClick={() => {
            props.deleteWeightItemById(props.weightObject.id);
          }}
        >
          X
        </Button>
      </ItemButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #00000094;
  border-radius: 4px;
  box-shadow: 0 20px 20px -14px rgba(0, 0, 0, 0.25);
`;

const Item = styled.div`
 flex: 3;
`;

const ItemButton = styled.div`
  flex: 1;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

const ItemRow = styled.div`
  display: flex;
`;

const H4 = styled.h4`
 flex: 1;
`
const H5 = styled.h5`
  flex: 1;
`;
const Button = styled.button`
 flex: 1;
 padding: 12px 20px;
 margin: 8px 0 10px 5px;
 box-sizing: border-box;
 border: 2px solid #ff333c;
 border-radius: 50%;
 height: 50%;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:400;
 color:#FFFFFF;
 background-color:#ff333c;
}
}`;
