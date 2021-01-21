import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh; 
  align-items: center;
`;

const ChampionCard = styled.div`
  text-align: center;
  max-width: 7rem;
  margin: 0.3rem;
  >img {
    width: 100%;
  }
`;

const Deck = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 70vw;
  height: 100%;
  background: silver;
  border-radius: 0.3rem;
  padding: 3rem 0 1rem 0;
`;

function App() {
  const [championsArray, setChampions] = useState(undefined);
  const championsEndPoint = `${process.env.REACT_APP_API_ENDPOINT}/champions`;
  const IMG_ENDPOINT = process.env.REACT_APP_IMG_CDN;
  const getChampions = async () => {
    const champions = await axios.get(championsEndPoint);
    return setChampions(champions.data.data);
  }


  getChampions()
  return (
    
    <Content>
      <h1>Champions</h1>
      <Deck>
        {
          championsArray === undefined ? <p>Carregando...</p> : (
            championsArray.map(champ => {
              return (
                <ChampionCard>
                  <img src={`${IMG_ENDPOINT}/${champ.image.full}`}></img>
                  <p>{champ.name}</p>
                </ChampionCard>
              );
            })
          )
        }      
      </Deck>
    </Content>
  );
}

export default App;
