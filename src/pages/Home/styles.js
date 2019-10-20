import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  /*Cria 3 espaçamentos de grid com uma largura igual*/
  grid-template-columns: repeat(3, 1fr);
  /*Distancia os produtos entre eles*/
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    /* > => A instrução passada estilizará apenas o strong que estiver dentro do li*/
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #58b38a;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      /*Ocupa toda a margem possível do elemento*/
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background .2s;

      &:hover {
        background: ${darken(0.03, '#58b38a')}
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
      }
    }

    span {
      /*Faz com que a descrição ocupe todo o espaço possível*/
      flex: 1;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;
