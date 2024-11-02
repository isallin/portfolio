import style from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = style.button<BotaoProps>`
  background-color:${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = style(Botao)`
  background-color: red;
  color: #fff;

  span{
    text-decoration: underline;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Clique aqui
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não cloque aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
