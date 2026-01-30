import './styles.css'

export function ListaSuspensa({itens, ...rest}){
  return(
    <select {...rest} className='lista-suspensa' defaultValue="" >
      <option value="" >Selecione um item</option>
      {itens.map(function (item){
        return <option key={item.id} value={item.id}>{item.nome}</option>
      })}
    </select>
  )
}