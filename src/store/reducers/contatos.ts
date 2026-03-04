import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contato'

type ContatosSlice = {
  itens: Contato[]
}

const initialState: ContatosSlice = {
  itens: [
    {
      id: 1,
      imagem: 'https://i.pravatar.cc/80',
      nome: 'Contato 1',
      email: 'teste1@gmail.com',
      telefone: '(11) 98276-3683'
    },
    {
      id: 2,
      imagem: 'https://i.pravatar.cc/80',
      nome: 'Contato 2',
      email: 'teste2@gmail.com',
      telefone: '(11) 98276-3685'
    },
    {
      id: 3,
      imagem: 'https://i.pravatar.cc/80',
      nome: 'Contato 3',
      email: 'teste3@gmail.com',
      telefone: '(11) 98276-3681'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.telefone.toLowerCase() ===
          action.payload.telefone.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse telefone')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
