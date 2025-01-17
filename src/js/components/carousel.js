// Só funciona 1 componente por página
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: "src/img/kepler-01.png",
          alt: "Lua Nova",

          //html
          html: `
            <p class="body1 purple-text"><b>Primeira Lei (Lei das órbitas)</b></p>
            <br />
            <p>Os planetas não seguem um caminho circular ao redor do Sol. Em vez disso, eles viajam em órbitas ovaladas, chamadas de elipses. 
            Imagine um caminho alongado, como uma pista oval de corrida, onde o Sol fica num ponto não exatamente no meio, mas em um lugar especial chamado de foco.
            </p>
            
            `,
        },
        {
          id: 2,
          img: "src/img/kepler-02.png",
          alt: "Lua Crescentes",

          //html
          html: `
         
            <p class="body1 purple-text"><b>Segunda Lei (Lei das áreas)</b></p>
            <br />
            <p>Quando um planeta se move em sua órbita, ele não se move sempre na mesma velocidade. Às vezes, ele se move mais rápido e, em outras 
            partes da órbita, mais devagar. Por exemplo, quando está mais perto do Sol, ele se move mais rápido e quando está mais longe, mais devagar. 
            Mas, mesmo assim, a quantidade de espaço que ele percorre em um certo tempo é sempre a mesma.
            </p>
            
            `,
        },
        {
          id: 3,
          img: "src/img/kepler-03.png",
          alt: "Lua Cheia",

          //html
          html: `
         
            <p class="body1 purple-text"><b>Terceira Lei (Lei dos períodos)</b></p>
            <br />
            <p>Esta lei mostra uma relação entre o tempo que um planeta leva para dar uma volta ao redor do Sol (seu período orbital) e o tamanho da 
            sua órbita. Quanto maior for a órbita do planeta, mais tempo ele leva para dar uma volta completa ao redor do Sol. Essa relação é bem específica 
            e é como uma fórmula matemática que mostra como essas duas coisas estão conectadas.
            </p>
            
            `,
        },
        
      ],
      carousel: {
        class: "carousel-01",
        key: 0,
        elemento: null,
        qtdSlides: 0,
        ordem: 1,
        ordemAnterior: 99,
      },

      instances: null, // Declare instances as a reactive variable
    };
  },
  methods: {
    next() {
      this.carousel.elemento.querySelector(".previous").style.display = "flex";
      this.instances[this.carousel.key].next(); // Access the first carousel instance
    },
    previous() {
      this.instances[this.carousel.key].prev();
    },
  },
  mounted() {
    this.carousel.elemento = document.querySelector("." + this.carousel.class);

    let elems = document.querySelectorAll(".carousel." + this.carousel.class);
    this.instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      shift: 20,
      numVisible: 1,
      onCycleTo: (slide) => {
        // this.qtdSlides = slide.parentNode.querySelectorAll(".carousel-item").length;

        // Lógica para saber o slide atual
        let search = slide.parentNode;
        let slideIndex = [...search.children].indexOf(slide);
        this.carousel.ordem = slideIndex;
        this.carousel.ordemAnterior = this.ordem - 1;

        // Se for o primeiro slide, não mostrar o botão anterior
        if (this.carousel.ordem == 1) {
          this.carousel.elemento.querySelector(".previous").style.display =
            "none";
        } else {
          this.carousel.elemento.querySelector(".previous").style.display =
            "flex";
        }
      },
    });
    this.carousel.elemento.querySelector(".previous").style.display = "none";
  },

  //html
  template: `
    <!-- Carousel -->
    <div class="carousel carousel-slider center" :class="[carousel.class]">
    <!-- Arrows -->
      <div class="carousel-fixed-item center">
        <a @click="previous" class="previous flex--align-center card card--purple-shadow">
          <span class="material-symbols-rounded">
            chevron_left
          </span>
        </a>
        <a @click="next" class="next flex--align-center card ml-4 card--purple-shadow">
          <span class="material-symbols-rounded">
            chevron_right
          </span>
        </a>
      </div>

      <!-- slides -->
      <!-- item -->
      <div v-for="item in items" :key="item.id" class="carousel-item card">
        <div class="row card-content">
        <div class="col s12 m6 img--round">
          <img :src="item.img" :alt="item.alt" class="img--round">
          </div>
          <div class="col s12 m6 left-align" v-html="item.html"></div>
        </div>
      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `,
};
