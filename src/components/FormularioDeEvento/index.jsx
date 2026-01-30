import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDoFormulario } from "../CampoDoFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from "../Botao";
import './styles.css'
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento({temas, submit}){

  function handleSubmit(formData){
    console.log("Enviado", formData)
    const evento = {
      thumb: formData.get("thumb"),
      tema: temas.find(function (item){
        return item.id == formData.get("temaEvento")
      }),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nome")
    }
    submit(evento)
  }

  return(
    <form className='form-evento' action={handleSubmit}>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

      <div className="campos">

      <CampoDoFormulario>
        <Label htmlFor="nome">Nome do Evento:</Label>
        <CampoDeEntrada type="text" id="nome" name="nome" placeholder='Summer dev hits'/>
      </CampoDoFormulario>

      <CampoDoFormulario>
        <Label htmlFor="thumb">Qual o endereço da imagem de thumb do evento</Label>
        <CampoDeEntrada type="text" id="thumb" name="thumb" placeholder='https://example.com/thumb.jpg'/>
      </CampoDoFormulario>

      <CampoDoFormulario>
        <Label htmlFor="dataEvento">Data do Evento:</Label>
        <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" placeholder='01/01/2023'/>
      </CampoDoFormulario>

      <CampoDoFormulario>
        <Label htmlFor="temaEvento">Tema do Evento:</Label>
        <ListaSuspensa id="temaEvento" name="temaEvento" itens={temas} />
      </CampoDoFormulario>

      <Botao>
        Criar Evento
      </Botao>
    </div>
    </form>
  )
}