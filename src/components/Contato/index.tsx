import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import ContatoClass from '../../models/contato'
import { editar, remover } from '../../store/reducers/contatos'
import { BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  imagem,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [nome, setNome] = useState('')

  useEffect(() => {
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
    setNome(nomeOriginal)
  }, [emailOriginal, telefoneOriginal, nomeOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
    setNome(nomeOriginal)
  }

  return (
    <S.Contato>
      <S.InfosContato>
        <img src={imagem} />
        <S.DadosContato>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            disabled={!estaEditando}
          />
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            disabled={!estaEditando}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!estaEditando}
          />
        </S.DadosContato>
      </S.InfosContato>
      <S.Acoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    email,
                    imagem,
                    nome,
                    telefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarERemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarERemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarERemover onClick={() => dispatch(remover(id))}>
              Excluir
            </S.BotaoCancelarERemover>
          </>
        )}
      </S.Acoes>
    </S.Contato>
  )
}

export default Contato
