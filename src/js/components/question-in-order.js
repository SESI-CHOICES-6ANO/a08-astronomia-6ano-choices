export default {
  data() {
    return {
      orgaos: [
        "Boca",
        "Esôfago",
        "Estômago",
        "Faringe",
        "Intestino delgado",
        "Intestino grosso",
      ],
      respostaCorreta: [
        "Boca",
        "Faringe",
        "Esôfago",
        "Estômago",
        "Intestino delgado",
        "Intestino grosso",
      ],
      revelado: false,
    };
  },
  methods: {
    revelarResposta() {
      this.revelado = !this.revelado;
    },
  },

  
  template: //html
   `
   <div class="question-in-order container">
   <div class="row">
     <div class="col m6 s12">
       <p>
         Numere os órgãos de acordo com o caminho feito pelo alimento em
         nosso corpo:
       </p>
       <ul>
         <li v-for="(orgao, index) in orgaos" :key="index">
           <input type="number" min="1" max="6" /> {{ orgao }}
         </li>
       </ul>
       <a href="#/" class="btn btn-large filled waves-effect waves-light bubbly-button" @click="revelarResposta">
         Revelar <span class="ml-4" style="font-size: 24px;">
         👀
       </span>
       </a>
     </div>
     <div class="col m6 s12">
       <div
         v-if="revelado"
         class="card card--purple-shadow resposta-correta"
       >
         <div class="card-content">
           <p class="purple-text"><b>Resposta correta:</b></p>
           <ul >
             <li
               class="mb-12 purple-text"
               v-for="(correta, index) in respostaCorreta"
               :key="index"
             >
               ({{ index + 1 }}) {{ correta }}
             </li>
           </ul>
         </div>
       </div>
     </div>
   </div>
 </div>

  `,
};
