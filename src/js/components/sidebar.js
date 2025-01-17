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
}