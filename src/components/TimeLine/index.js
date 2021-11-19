import { useState } from "react";
import styled from "styled-components";
import { Chart } from "react-google-charts";

export function TimeLine(props) {
  const weightsAndDates = [];

  for (let i = 0; i < props.weightObjects.length; i++) {
    let temp = props.weightObjects[i];
    weightsAndDates.push([new Date(temp.weightDate), temp.weight]);
  }
  return (
    <Wrapper>
      {weightsAndDates && weightsAndDates.length > 0 && (
        <Chart
          width={"100%"}
          height={"250px"}
          chartType="Calendar"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: "date", id: "Date" },
              { type: "number", id: "Weight" },
            ],
            ...weightsAndDates,
          ]}
          options={{
            title: "Weight Tracket",
          }}
          rootProps={{ "data-testid": "1" }}
        />
      )}
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
