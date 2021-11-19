import { WeightItem } from './WeightItem';
import styled from "styled-components";

export function WeightList(props) {

  return (
    <Wrapper>
      {props.weightObjects &&
        props.weightObjects.length > 0 &&
        props.weightObjects.map((item) => (
          <WeightItem weightObject={item} deleteId={(id) => {
            console.log(id);
            props.setWeightObjects([
              ...props.weightObjects.filter((x) => {
                return x.id !== id;
              }),
            ])
          }}/>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 10px;
  box-sizing: border-box;
  border-radius: 4px;
`;
