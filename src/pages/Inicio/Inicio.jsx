import Banner from "components/Banner/Banner";
import Card from "components/Card/Card";
import Titulo from "components/Titulo/Titulo";
import styles from './Inicio.module.css';
import { useEffect, useState } from "react";
import axios from "axios";





const Inicio = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() =>{
    axios.get(`https://my-json-server.typicode.com/Jeffs-Dev/cinetag-api/videos`).then((res) => setVideos(res.data))
  }, [])

  

  return (
    <>

       <Banner imagem="home" />
          <Titulo>
            <h1> Um lugar para guardar seus vídeos e filmes!</h1>
          </Titulo>
          
          <section className={styles.container}>
              {videos.map((video) => {
                 return <Card  {...video} key={video.id} />
         
              })}
          </section>
    </>
  )
}

export default Inicio;