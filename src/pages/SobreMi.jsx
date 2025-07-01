import { motion } from 'framer-motion';


export default function SobreMi() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="container py-5"
    >
      <h2 className="mb-4 text-center fw-bold display-5">👨‍💻 Sobre Mí</h2>
      <div className="mb-5 lead">
        <p>¡Hola! Soy <strong>Joshua Zaquiel Morales Bedolla</strong>, estudiante, programador y desarrollador web apasionado por crear experiencias digitales modernas.</p>
        <p>Tengo 22 años y estudio programación e inglés en ICO. Me apasiona la música, la tecnología y sueño con dominar el inglés y ser una persona de éxito.</p>
        <p>Quiero ayudar a los más necesitados, dar lo mejor de mí y hacer que mis padres estén orgullosos.</p>
      </div>

      <h3 className="fw-semibold text-primary">🎯 Metas a Largo Plazo</h3>
      <ul className="list-group list-group-flush mb-4">
        {[
          "Ser una persona de éxito.",
          "Tener buena condición física y ser una gran persona.",
          "Tener mi coche.",
          "Tener mi moto.",
          "Tener una empresa de éxito.",
          "Terminar mis estudios y graduarme.",
          "Tener mi casa y estabilidad económica.",
          "Ayudar a los más necesitados.",
        ].map((meta, idx) => (
          <li key={idx} className="list-group-item">{meta}</li>
        ))}
      </ul>

      <h3 className="fw-semibold text-success">🕒 Metas a Corto Plazo</h3>
      <ul className="list-group list-group-flush mb-5">
        {[
          "Comprar mi Moto.",
          "Tener buena condición física.",
          "Graduarme de programación e inglés en ICO.",
          "Entrar a la universidad.",
        ].map((meta, idx) => (
          <li key={idx} className="list-group-item">{meta}</li>
        ))}
      </ul>

      <h3 className="text-info fw-bold">💻 Aplicaciones Favoritas</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
        {[
         { src: "images.png", name: "Adobe Photoshop" },
          { src: "png-transparent-fl-studio-digital-audio-workstation-line-ableton-live-others-miscellaneous-natural-foods-food-thumbnail.png", name: "FL Studio" },
          { src: "Visual-studio-code.png", name: "Visual Studio Code" },
          { src: "visual-Studio-Logo.png", name: "Visual Studio" },
          { src: "250-2508717_wondershare-filmora-wondershare-filmora-logo-png.png", name: "Filmora Wondershare" },
          { src: "mysql-icon.png", name: "MySQL" },
        ].map((app, idx) => (
          <div className="col" key={idx}>
            <div className="card border-0 shadow-sm h-100 text-center">
             <img
                src={`${import.meta.env.BASE_URL}assets/Imagenes/${app.src}`}
                className="card-img-top p-3"
                alt={app.name}
                style={{ height: '150px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{app.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-danger fw-bold">🎤 Artistas Favoritos</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
        {[
          "Bad Bunny.jpg", "Rauw Alejandro.png", "Mora.png",
          "Wisin Y Yandel.png", "The Weeknd.png", "calvin Harris.jpg", "jay-wheeler.png", "Feid.png", "Myke Towers.jpg"
        ].map((img, idx) => {
          const name = img.replace(/\.png|\.jpg/g, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          return (
            <div className="col" key={idx}>
              <div className="card border-0 shadow-sm h-100 text-center">
                <img
                  src={`${import.meta.env.BASE_URL}assets/Imagenes/${img}`}
                  className="card-img-top"
                  alt={name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="text-warning fw-bold">🎶 Canciones Favoritas</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {[
          {
            title: "La Inocente - Mora, Feid",
            cover: "MICRODOSIS.jpg",
            audio: "Mora Ft. Feid - La Inocente.mp3"
          },
          {
            title: "KETU TeCRE - Bad Bunny",
            cover: "bad_bunny_debi_tirar_mas_fotos-portada.jpg",
            audio: "08 Bad Bunny - KETU TeCRE.mp3"
          },
          {
            title: "Museo - Rauw Alejandro",
            cover: "rauw_alejandro_trap_cake_vol_2-portada.jpg",
            audio: "01-Rauw-Alejandro-Museo (1).mp3"
          },
          {
            title: "Amar de Nuevo - Rauw Alejandro",
            cover: "Cosa Nuestra.jpg",
            audio: "Rauw Alejandro - Amar De Nuevo.mp3"
          },
          {
            title: "Luna - Feid",
            cover: "Feid Luna.jpg",
            audio: "Feid ft ATL Jacob - Luna.mp3"
          },
          {
            title: "Summer - Calvin Harris",
            cover: "Summer Calvin Harris.jpg",
            audio: "Calvin_Harris_-_Summer_(FeelMP3.com).mp3"
          },
          {
          title: "Ni me Conozco - Rauw Alejandro",
          cover: "Cosa Nuestra.jpg",
          audio: "Rauw Alejandro - Ni Me Conozco.mp3" 
          },
          {
            title: " FERXXO 100 - Feid",
            cover: "Ferxxo 100.jpg",
            audio: "y2mate.com - Feid  Ferxxo 100.mp3"
          },
          {
            title: "Dejame entrar - Rauw Alejandro",
            cover: "Cosa Nuestra.jpg",
            audio: "Rauw Alejandro - Déjame Entrar.mp3"
          },
          {
            title: "Aquel Nap ZzZz - Rauw Alejandeo",
            cover: "Vicerversa.jpg",
            audio: "06-Aquel Nap ZzZz.mp3"
          },
          {
            title: "Memorias- Jhay Cortez, Mora",
            cover: "MICRODOSIS.jpg",
            audio: "Mora Ft. Jhay Cortez - Memorias.mp3"
          },
          {
            title: "KHE Rauw Alejandro,Romeo Santos",
            cover: "Cosa Nuestra.jpg",
            audio: "raw_alejandro_romeo_santos_khe__mp3_14498.mp3",
          },
          {
            title: "DtMF - Bad bunny",
            cover: "bad_bunny_debi_tirar_mas_fotos-portada.jpg",
            audio: "Bad-Bunny-DtMF-(HipHopKit.com).mp3",
          },
          {
            title: "Otra noche en Miami - Bad Bunny",
            cover: "x100pre.jpg",
            audio: "06-Otra Noche En Miami.mp3",
          },
          {
            title: "Ni Bien Ni Mal - Bad bunny",
            cover: "x100pre.jpg",
            audio: "01-NI BIEN NI MAL.mp3",
          },
          {
            title: "Die For You",
            cover: "starboy.jpg",
            audio: "Die For You(MP3_160K).mp3",
          },
          {
            title: "Dos Mil 16 - Bad Bunny",
            cover: "Un verano sin ti.jpg",
            audio: "Bad Bunny - Dos Mil 16.mp3",
          },
          {
            title: "Moscow Mule - Bad Bunny",
            cover: "Un verano sin ti.jpg",
            audio: "Bad Bunny - Moscow Mule.mp3",
          },
          {
            title: "Neverita - Bad Bunny",
            cover: "Un verano sin ti.jpg",
            audio: "Bad Bunny - Neverita.mp3",
          },
          {
            title: "Yo No Soy Celoso - Bad Bunny",
            cover: "Un verano sin ti.jpg",
            audio: "Bad Bunny - Yo No Soy Celoso.mp3",
          },
          {
            title: "Un Coco",
            cover: "Un verano sin ti.jpg",
            audio: "Bad Bunny - Un Coco.mp3"
          },
          {
            title: "Mil Vidas - Mora,Ryan Castro",
            cover: "Lo Mismo De Siempre.jpg",
            audio: "Mora ft Ryan Castro - Mil Vidas.mp3"
          },
          {
            title: "Detras De Tu Alma - Mora",
            cover: "Lo Mismo De Siempre.jpg",
            audio: "Mora - Detrás De Tu Alma.mp3"
          },
          {
            title: "El Ultimo Beso - Mora,Sech",
            cover: "Lo Mismo De Siempre.jpg",
            audio: "Mora ft Sech - El Ultimo Beso.mp3"
          }
          
          
        ].map((cancion, idx) => (
          <div className="col" key={idx}>
             <img
                src={`${import.meta.env.BASE_URL}assets/portadas/${cancion.cover}`}
                className="card-img-top"
                alt={cancion.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{cancion.title}</h5>
                <audio controls className="w-100">
                  <source
                    src={`${import.meta.env.BASE_URL}assets/audio/${cancion.audio}`}
                    type="audio/mp3"
                  />
                </audio>
              </div>
            </div>
           ))}
      </div> {/* grid de canciones */}
    </motion.div>
  );
}
       



