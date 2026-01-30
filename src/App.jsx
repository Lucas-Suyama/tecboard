import { useState } from 'react'
import './App.css'
import { Banner } from './components/Banner'
import { CardEvento } from './components/CardEvento'
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Header } from './components/Header'
import { Tema } from './components/Tema'


function App() {

  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligencia artifical'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    },
  ]

  const [eventos, setEventos] = useState([
    {
      thumb: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date('2023-02-20'),
      titulo: 'Mulheres no front'
    }
  ])

  function adicionarEventos(evento){
    setEventos([...eventos, evento])
    console.log(eventos)
  }

  return (
    <main>
      <Header />
      <Banner />
      <FormularioDeEvento temas={temas} submit={adicionarEventos} />
      <section className='container'>
      {temas.map(function (tema){
        if(eventos.some(function(evento){
          return evento.tema.id == tema.id
        }))
        return(
          <section key={tema.id}>
            <Tema tema={tema} />
            <div className="eventos">
              {
                eventos
                .filter(function (evento){
                  return evento.tema.id == tema.id
                })
                .map(function (item, index){

                  return <CardEvento evento={item} key={index} />
                })
              }
            </div>
          </section>
        )
      })}
      </section>
    </main>
  )
}

export default App
