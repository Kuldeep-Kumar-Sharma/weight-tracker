import { WeightItem } from './WeightItem';
import styled from "styled-components";

export function WeightList(props) {

  return (
    <Wrapper>
      {props.weightObjects.map((item) => (
          <WeightItem key={item.id} weightObject={item} deleteWeightItemById={(id) => {
            props.setWeightObjects(props.weightObjects.filter((x) => {
                return x.id !== id;
              }),
            )
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
