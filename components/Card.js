import React from 'react';
import styled from 'styled-components';

const Card = props => (
  <Container>
    <Image source={props.image} />
    <Title>{props.title}</Title>
  </Container>
);

export default Card;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  position: absolute;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;
