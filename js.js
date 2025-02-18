  const elementos = document.querySelectorAll('.exemploPS, .pPS, .pPSsobre, .exemploSP, .pSP, .Spotifysobre, .exemploLOGIN, .pLOGIN, .pLOGINsobre, .exemploMC, .pMC, .pMCsobre, .filhadaputa');

        // Configuração do Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show'); // Adiciona a classe quando entra na tela
                }
            });
        }, { threshold: 0.1 });

        // Observa cada elemento da lista
        elementos.forEach(elemento => observer.observe(elemento));


        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".sobre").addEventListener("click", function () {
                document.querySelector(".container-2").scrollIntoView({ behavior: "smooth" });
                
            });
        });
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".projet").addEventListener("click", function () {
                document.querySelector(".container-3").scrollIntoView({ behavior: "smooth" });
                
            });
        });
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".cntt").addEventListener("click", function () {
                document.querySelector(".container-4").scrollIntoView({ behavior: "smooth" });
                
            });
        });