document.addEventListener("DOMContentLoaded", () => {
    const cinta = document.getElementById("cinta");
    const carrusel = document.getElementById("carrusel");
    
    if (cinta && carrusel) {
        const hijosOriginales = cinta.innerHTML;
        cinta.innerHTML += hijosOriginales;

        let posicionX = 0;
        const velocidadCarrusel = 1;
        let animacionID;
        let estaPausado = false;

        function moverCarrusel() {
            if (!estaPausado) {
                posicionX -= velocidadCarrusel;
                const mitadAncho = cinta.scrollWidth / 2;
                if (Math.abs(posicionX) >= mitadAncho) {
                    posicionX = 0;
                }
                cinta.style.transform = `translate3d(${posicionX}px, 0, 0)`;
            }
            animacionID = requestAnimationFrame(moverCarrusel);
        }
        carrusel.addEventListener("mouseenter", () => {
            estaPausado = true;
        });

        carrusel.addEventListener("mouseleave", () => {
            estaPausado = false;
        });

        // Activamos el carrusel
        moverCarrusel();
    }

    const textoTitulo = "DJ Black <br> Beat";
    const elementoTitulo = document.getElementById("titulo-maquina");
    const elementoParrafo = document.getElementById("parrafo-perfil");
    const elementoLink = document.getElementById("reserva");
    
    if (elementoTitulo) {
        let i = 0;
        const velocidadMaquina = 80;

        function escribirTitulo() {
            if (textoTitulo.substring(i, i + 4) === "<br>") {
                elementoTitulo.innerHTML += "<br>";
                i += 4;
            } else {
                elementoTitulo.innerHTML += textoTitulo.charAt(i);
                i++;
            }
            
            if (i < textoTitulo.length) {
                setTimeout(escribirTitulo, velocidadMaquina);
            } else {
                if (elementoParrafo) {
                    elementoParrafo.classList.remove("oculto");
                    elementoParrafo.classList.add("mostrar");
                }

                if (elementoLink) {
                    elementoLink.classList.remove("oculto");
                    elementoLink.classList.add("mostrar");
                }
            }
        }
        escribirTitulo();
    }

    const seccionPerfil = document.getElementById("perfil");

    if (seccionPerfil) {
        const opciones = {
            root: null,
            threshold: 0.25
        };

        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    seccionPerfil.classList.add("perfil-activo");
                } else {
                    seccionPerfil.classList.remove("perfil-activo");
                }
            });
        }, opciones);
        observador.observe(seccionPerfil);
    }
    
});