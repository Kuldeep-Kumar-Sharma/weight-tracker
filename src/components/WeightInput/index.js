import { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

export function WeightInput(props) {
  const [weightDate, setWeightDate] = useState(new Date());
  const [weight, setWeight] = useState();
  
    return (
      <Wrapper>
        <FormGroup>
          <Label>Enter the weight</Label>
          <Input
            value={weight}
            type="number"
            placeholder="Enter the weight"
            onChange={(e) => setWeight(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Select the date</Label>
          <Input
            value={weightDate}
            type="date"
            placeholder="Select the date"
            onChange={(e) => setWeightDate(e.target.value)}
          />
        </FormGroup>
        <FormGroupButton>
          <Button
            onClick={() => {
              props.setWeightObjects([
                ...props.weightObjects,
                ...[{ id: nanoid(), weight, weightDate }],
              ]);
            }}
          >
            Add
          </Button>
        </FormGroupButton>
      </Wrapper>
    );
}


const Wrapper = styled.div`
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #00000094;
  border-radius: 4px;
  box-shadow: 0 20px 20px -14px rgba(0, 0, 0, 0.25);
`;

const Label = styled.label`
  padding: 12px 20px;
  color: black;
  flex: 1;
  align-items: center;
  display: block;
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  padding-right: 8px;
  padding-left: 10px;
  width: auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:10px;
  @media (max-width: 768px) {
    flex-direction: column;
   }
`;
const FormGroupButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  color: black;
  border: 1px solid #00000094;
  border-radius: 4px;
  flex: 1;
  display: block;
  margin-right: 8px;
  padding: 4px;
`;

const Button = styled.button`
 display:inline-block;
 padding: 12px 20px;
 margin: 8px 0 10px 5px;
 box-sizing: border-box;
 border: 2px solid #00000000;
 border-radius: 4px;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:400;
 color:#FFFFFF;
 background-color:#3369ff;
 text-align:center;
 position:relative;
 box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
}
}`;