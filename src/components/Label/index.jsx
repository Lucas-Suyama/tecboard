import './styles.css'

export function Label({children, htmlFor}){
  return(
    <label className='label-formulario' htmlFor={htmlFor}>
      {children}
    </label>
  )
}
