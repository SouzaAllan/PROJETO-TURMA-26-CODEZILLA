import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage_an";
import video from "../assets/video.mp4";
export default function Player() {
  const navigate = useNavigate();

  return (
    <Container>
      <BackgroundImage />
        <div className="content">
          <div className="form-container flex column a-center j-center">
            <div className="form flex column a-center j-center">
              <div  className="title">
                <h1>
                  ADÃO NEGRO
                </h1>
              </div>
              <div className="author">
                <h2>
                  Nome do author : Carlos Cardoso
                </h2>
                <div className="year">
                  <h4>
                    Ano de publicação : 2022
                  </h4>
                </div>
              </div>
              <div className="text">
                <h5>
                Adão Negro, Black Adam, ou no seu nome original Teth-Adam era um egípcio, por volta de 3055 AC. Ele foi escolhido pelo Mago Shazam para ser o campeão contra o Mal que assolava o mundo. Ao dizer o nome do Mago, Teth-Adam ganhou o poder dos deuses:</h5>
                <h5>A sabedoria de Salomão;</h5>
                <h5>A força de Hércules;</h5>
                <h5>A resistência de Atlas;</h5>
                <h5>O Poder de Zeus;</h5>
                <h5>A coragem de Aquiles;
                </h5>
                <h5>A Velocidade de Mercúrio.
                </h5>

                <h5>Mesmo ignorando o detalhe de que nem Salomão nem Aquiles eram deuses, dá pra imaginar a a confusão do pobre Teth-Adam pensando “quem são esses caras?” Afinal, Zeus é um Deus Grego e a civilização Micena, que daria origem aos gregos só surgiria em 1750 AC. Hércules e Mercúrio são romanos. Salomão nasceu por volta de 990 AC, mas divago.
                </h5>
                <h5> Batizado de Poderoso Adão, ele se tornou um campeão da Justiça, mas logo foi corrompido pelo Poder, matou o Faraó e instaurou um reino de terror. O Mago Shazam o rebatizou para Adão Negro, e como não podia tomar seus poderes de volta, exilou Teth-Adam para a estrela mais distante do Universo.
                </h5>
                <h5>5.000 anos depois um novo campeão foi escolhido, Billy Batson, um adolescente, humilde de bom coração, que se torna o Capitão Marvel, até que um processo da Marvel Comics faz com que a Fawcett Comics o rebatize como Shazam, criando a bizarra situação do personagem que não pode dizer o próprio nome.           
                </h5>

              </div>
            </div>
          </div>
        </div>

    </Container>
  );
}

const Container = styled.div`
.content {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  grid-template-rows: 15vh 85vh;
  .form-container {
    height: 50vw;
    gap: 2rem;
    .form {
      padding: 2rem;
      background-color: #000000b0;
      width: 90vw;
      gap: 2rem;
      color: white;
      border-radius: 0.5rem;
    }
  }
}
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
