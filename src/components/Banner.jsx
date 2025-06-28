import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import imagenPrincipal from "../assets/Untitled.svg"
import headerImg from "../assets/header-img.svg";
import TrackVisibility from "react-on-screen"
import { ArrowRightCircle } from "react-bootstrap-icons"



function Banner() {
	const [numCiclo, setNumCiclo] = useState(0)
	const [borrando, setBorrando] = useState(false)
	const [texto, setTexto] = useState("")
	const [delta, setDelta] = useState(300 - Math.random() * 100)
	const [indice, setIndice] = useState(1)

	const variantes = ["Desarrollador", "Estudiante", "Programador", "Editor",]
	const periodo = 2000

	useEffect(() => {
		let ticker = setInterval(() => {
			cursor()
		}, delta)

		return () => { clearInterval(ticker) }
	}, [texto])

	function cursor() {
		let i = numCiclo % variantes.length
		let palabra = variantes[i]
		let textoActual = borrando ? palabra.substring(0, texto.length - 1) : palabra.substring(0, texto.length + 1)

		setTexto(textoActual)

		if (borrando) setDelta(prevDelta => prevDelta / 2)

		if (!borrando && textoActual === palabra) {
			setBorrando(true)
			setIndice(prevIndice => prevIndice - 1)
			setDelta(periodo)

		} else if (borrando && textoActual === "") {
			setBorrando(false)
			setNumCiclo(numCiclo + 1)
			setIndice(1)
			setDelta(500)
		} else setIndice(prevIndex => prevIndex + 1)
	}

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							{
								({ isVisible }) => {
									return (
										<div className={isVisible ? "animate_animated animate_zoomIn" : ""}>
											<img src={imagenPrincipal} alt="Banner Principal" />
										<img
            src={headerImg}
            alt="Decoración secundaria"
            className="img-fluid mt-3"
            style={{ maxWidth: "180px" }}
          />
        </div>
      );
    }}
  </TrackVisibility>
</Col>

					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{
								({ isVisible }) => {
									return (
										<div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
											<span className="tagline" >Bienvenido a mi portafolio Web Personal</span>
											<h1>{`Hola, soy Joshua Zaquiel Morales Bedolla `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Desarrollador", "Profesor", "Tlapanco" ]'>
												<span className="wrap">{texto}</span></span></h1>
											 <p>Hola a todos, mi nombre es <strong>Joshua Zaquiel Morales Bedolla</strong> y les doy la
        bienvenida a mi portafolio personal. Aquí comparto una parte importante de quién soy, mis intereses y lo que me apasiona.</p>
        <h1 className="mt-4">🎯 Objetivos</h1>
      <ul>
        <li>📌 Desarrollar soluciones tecnológicas que mejoren la vida de las personas.</li>
        <li>🚀 Especializarme en desarrollo web full stack y aplicaciones móviles.</li>
        <li>🌎 Participar en proyectos colaborativos de software libre.</li>
      </ul>

      <h1 className="mt-4">🎧 Musica</h1>
      <p>
        Me encanta la música y siempre estoy descubriendo nuevos artistas y géneros. En este portafolio también comparto mis artistas y canciones favoritas 🎶.
      </p>

      <p>
        Soy una persona dedicada, curiosa y con muchas ganas de seguir aprendiendo. Disfruto mucho trabajar en equipo, resolver problemas y crear cosas útiles.
      </p>

											<button onClick={() => console.log("Conectar")}>Conectemos <ArrowRightCircle size={25} /> </button>
										</div>
									)
								}
							}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	)


}


export default Banner