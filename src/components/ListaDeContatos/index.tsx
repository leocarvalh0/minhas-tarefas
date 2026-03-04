import { useSelector } from 'react-redux'

import Contato from '../Contato'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <ul>
      {itens.map((c) => (
        <li key={c.telefone}>
          <Contato
            id={c.id}
            imagem={c.imagem}
            nome={c.nome}
            telefone={c.telefone}
            email={c.email}
          />
        </li>
      ))}
    </ul>
  )
}

export default ListaDeContatos
