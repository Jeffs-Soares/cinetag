import Banner from 'components/Banner/Banner';
import styles from './Player.module.css';
import Titulo from 'components/Titulo/Titulo';
import { useParams } from 'react-router-dom';

import NaoEncontrada from 'pages/NaoEncontrada/NaoEncontrada';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Player = () => {
    const [video, setVideo] = useState();
    const params = useParams();

    useEffect(() =>{
        axios.get(`https://my-json-server.typicode.com/Jeffs-Dev/cinetag-api/videos?id=${params.id}`).then((res) => setVideo(...res.data))
    }, [])
  

    if(!video){
        return <NaoEncontrada />
    }

  return (
   <>
    <Banner imagem='player' />
    <Titulo>
        <h1> Player </h1>
    </Titulo>

    <section className={styles.container}>

    <iframe
    width="100%"
    height="100%"
    src={video.link}
    title={video.titulo}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>
   </>
  )
}

export default Player;









