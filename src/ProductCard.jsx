import React from 'react';
import styled from 'styled-components';

const ProductCard = ({
  image,
  title,
  price
}) => {
  return (
    <Container>
      <img alt='product' src={image} />
      <Title>{title}</Title>
      <Subtitle>{price} ₹</Subtitle>
    </Container>
  )
}

const Container = styled.article`
  box-sizing: border-box;
  padding: 20px;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0 0 10px 0px rgba(0,0,0,0.2);
  width: 300px;
  height: 400px;
  margin-bottom: 20px;
  
  @media(max-width: 600px) {
    width: 90vw;
    height: auto;
  }

  img {
    width: 100%;
    flex: 1;
    object-fit: cover;
  }
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`

const Subtitle = styled.div`
  font-size: 16px;
  color: grey;
`

export default ProductCard;
