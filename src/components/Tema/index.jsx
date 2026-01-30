import './styles.css'

export function Tema({ tema }) {
  return (
    <h3 className='tema-titulo'>{tema.nome}</h3>
  )
}