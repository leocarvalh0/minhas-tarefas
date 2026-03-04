import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Contato = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;

  img {
    margin-right: 24px;
    border-radius: 50%;
  }
`

export const InfosContato = styled.div`
  display: flex;
  flex: 1;
`

export const NomeDoContato = styled.p`
  font-size: 18px;
  font-weight: bold;
`

export const DadosContato = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  width: 100%;
`

export const Acoes = styled.div`
  margin-top: auto;
  display: flex;
`

export const Botao = styled.button`
  margin-right: 8px;
  padding: 4px 8px;
  background-color: ${variaveis.azul};
  font-weight: bold;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 8px;
`

export const BotaoCancelarERemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
