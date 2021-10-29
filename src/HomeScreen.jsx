import './index.css';
import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import faker from 'faker';

const HomeScreen = () => {
  return (
    <Container>
      <Header>
        <Icon>🛍</Icon>
        <Title>Demo Shop</Title>
        <SearchBar placeholder='Search for T-shirts, Jackets and more' />
        <Icon>🛒</Icon>
      </Header>
      <HeroBanner src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/4daacf128104829.614f5a02af192.png' />
      <div style={{ background: 'lavenderblush' }}>
        <Categories>
          {Array(8).fill(true).map((_, index) => {
            return (
              <Category style={{ background: randomColor() }} key={index}>
                {index + 1}
              </Category>
            )
          })}
        </Categories>
      </div>
      <Products>
        {Array(100).fill('').map((_, index) => {
          const title = faker.commerce.productName();
          const image = `https://picsum.photos/300/300?r=${randomColor()}`;
          const price = faker.commerce.price();
          return (
            <ProductCard
              key={index}
              title={title}
              image={image}
              price={price}
            />
          )
        })}
      </Products>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  height: 60px;
  width: 100%;
  background-color: var(--main-color);
  display: flex;
  padding: 10px 20px;
  box-sizing: border-box;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
`

const SearchBar = styled.input`
  display: flex;
  flex: 1;
  margin: 0 20px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  color: grey;
  padding: 0 15px;
  height: 100%;
`

const HeroBanner = styled.img`
  width: 100%;
  height: auto;
  max-height: 25vh;
  object-fit: cover;
`

const Icon = styled.span`
  font-size: 30px;
  cursor: pointer;
`

const Title = styled.h3`
  color: white;
  margin-left: 10px;
  @media(max-width: 600px) {
    display: none;
  }
`

const Categories = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px 10px;
  max-width: 1000px;
  margin: auto;
  justify-content: space-evenly;
  flex-wrap: wrap;
  > * {
    flex-shrink: 0;
    margin: 5px;
  }
`

const Category = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  color: black;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Products = styled.div`
  margin: 20px auto;
  width: 95vw;
  max-width: 1000px;
  min-height: 100px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

const randomColor = () => '#' + Math.random().toString(16).substr(-6);

export default HomeScreen;
