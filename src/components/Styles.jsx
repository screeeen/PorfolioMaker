import styled from 'styled-components';

export const Container = styled.div`
	width: 90%;
	margin: auto;
	color: rgb(22, 36, 36);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

@media screen and (min-width: 600px) {
		width: 400px;
}
`;

export const Image = styled.img`
    width: 100%;
    object-fit: contain;
    box-sizing: border-box;
    padding: 10px 0;
`;


// Forms, inputs, buttons

export const Form = styled.form`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Input = styled.input`
width: 300px;
height: 35px;
border: none;
border-bottom: 1px solid #ccc;
margin-bottom: 1em;
`;

export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;

// Text

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

export const Title2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
  font-size:1.5em;
`;