import BotaoAdicionar from '../../components/BotaoAdicionar'
import ListaDeContatos from '../../components/ListaDeContatos'
import { TituloHeader } from '../../styles'

const Home = () => (
  <>
    <TituloHeader>Contatos</TituloHeader>
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)

export default Home
