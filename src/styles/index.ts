import styled, { createGlobalStyle } from 'styled-components'
import { Botao } from '../components/Contato/styles'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }

    input {
      max-width: 800px;
      width: 100%;
    margin-bottom: 8px;
    padding: 6px;
    border-radius: 6px;
    border: 1px solid #ccc;
    outline: none;
    transition: 0.2s ease;

    &:focus {
      border-color: ${variaveis.azul};
    }

    &:disabled {
      background-color: transparent;
      border: none;
      padding: 0;
      color: #333;
      cursor: default;
    }
  }
 `

export const TituloHeader = styled.h1`
  margin: 100px 0;
`

export const Container = styled.div`
  max-width: 50%;
  margin: 0 auto;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
  width: 80px;
`

export default EstiloGlobal
