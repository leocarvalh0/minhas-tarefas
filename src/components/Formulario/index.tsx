import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'

import { Form, Container } from './styles'
import { BotaoSalvar, TituloHeader } from '../../styles'
import Contato from '../../models/contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        imagem: 'https://i.pravatar.cc/80',
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <Container>
      <TituloHeader>Novo cadastro</TituloHeader>
      <Form onSubmit={cadastrarContato}>
        <input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <input
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <input
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="Email"
        />
        <BotaoSalvar type="submit">Adicionar</BotaoSalvar>
      </Form>
    </Container>
  )
}

export default Formulario
