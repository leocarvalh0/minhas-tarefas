class Contato {
  imagem: string
  nome: string
  email: string
  telefone: string
  id: number

  constructor(
    imagem: string,
    nome: string,
    email: string,
    telefone: string,
    id: number
  ) {
    this.imagem = imagem
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Contato
