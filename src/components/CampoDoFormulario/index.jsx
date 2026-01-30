
import './styles.css'

export function CampoDoFormulario({children}){
  return(
    <fieldset className='campo-formulario'>
      {children}
    </fieldset>
  )
}
