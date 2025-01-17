import {
  onMounted,
  nextTick,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

// Só funciona 1 componente por página
export default {
  setup() {
    onMounted(() => {


      // Scrollspy -------------------------------------
      // para funcionar mobile no t2k e no geral
      const menuItens = document.querySelectorAll(".sidenav a[href^='#']");

      menuItens.forEach((link) => {
        link.addEventListener("click", scrollToIdOnClick);
      });

      function scrollToIdOnClick(event) {
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute("href");
        const to = document.querySelector(id).offsetTop;

        window.scroll({
          top: to - 60,
          behavior: "smooth",
        });
      }


      // Use nextTick to ensure DOM updates are finished
      nextTick(() => {
        // Sidenav initialization
        var elems = document.querySelectorAll(".sidenav");
        var instances = M.Sidenav.init(elems, {
          // specify options here
        });
      });
    });

    return {};
  },

  
  template://html 
  `

  <ul id="slide-out" class="sidenav">
    <li>
      <div class="user-view">
        <img src="src/img/core/logo-choices.webp" alt="Logo Choices" />
        <p class="sidenav__general-title">Choices 6º ano | Astronomia</p>
        <h3 class="sidenav__specific-title">
        Aula 08 | Que padrão é esse que se repete?
        </h3>
        <div class="progress-box">
          <div class="progress">
            <div class="determinate"></div>
          </div>
          <p class="body1">
            <span class="progress-box__number">1%</span> concluído
          </p>
        </div>
      </div>
    </li>

    <li>
      <a href="#hero">01: 😊Início</a>
    </li>
    <li>
      <a href="#intro">02: 😀Introdução</a>
    </li>
    <li>
      <a href="#missao">03: 🚀Missão</a>
    </li>
    <li>
      <a href="#tycho">04: 🧔🏼‍♂️Tycho</a>
    </li>
    <li>
    <a href="#uraniborg">05: 🔭Uraniborg</a>
  </li>
    <li>
    <a href="#leis-de-kepler">06: 📋As 3 leis de Kepler</a>
    </li>
    <li>
      <a href="#video">07: ▶️Hora do vídeo</a>
    </li>
    <li>
    <a href="#resumo">08: 🤔Resumindo...</a>
    </li>
    <li>
      <a href="#relatorio">09: 📝Relatório de Missão</a>
    </li>
    <li>
      <a href="#concluir">10: 😀Conclusão</a>
    </li>
  </ul>
  `,
};
