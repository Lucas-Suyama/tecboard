import './styles.css'

export function CardEvento({ evento }) {
  return (
    <div className='card-evento'>
      <img className='card-evento-thumb' src={evento.thumb} alt={evento.titulo} />
      <div className='card-evento-conteudo'>
        <p className='card-evento-tema'>{evento.tema.nome}</p>
        <p className='card-evento-data'>{evento.data.toLocaleDateString('pt-BR')}</p>
        <h4 className='card-evento-titulo'>{evento.titulo}</h4>
      </div>
    </div>
  )
}