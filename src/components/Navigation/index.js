import styled from 'styled-components';

export function Navigation(props) {
    return (
      <Wrapper>
        <Header>
            <H1>{props.title}</H1>
        </Header>
      </Wrapper>
    );
}

const Wrapper = styled.div`
	margin: 0 auto;
`;

/* Styling the header */

const Header = styled.div`
  background: linear-gradient(to right, #396afc, #2948ff);
  width: 100%;
  box-shadow: 0 20px 20px -14px rgba(0, 0, 0, 0.25);
`;

const H1 = styled.h1`
    color: white;
    margin-top: 0;
		padding: .60em;
		text-align: center;
`;

