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
      respostaAluno: [
        {
          orgao: "Boca",
          resposta: { carboidrato: 0, proteina: 0, lipidio: 0 },
        },
        {
          orgao: "Faringe e esôfago",
          resposta: { carboidrato: 0, proteina: 0, lipidio: 0 },
        },
        {
          orgao: "Estômago",
          resposta: { carboidrato: 0, proteina: 0, lipidio: 0 },
        },
        {
          orgao: "Intestino delgado",
          resposta: { carboidrato: 0, proteina: 0, lipidio: 0 },
        },
        {
          orgao: "Intestino grosso",
          resposta: { carboidrato: 0, proteina: 0, lipidio: 0 },
        },
      ],
      respostaCorreta: [
        {
          orgao: "Boca",
          resposta: { carboidrato: 1, proteina: 0, lipidio: 0 },
        },
        {
          orgao: "Faringe e esôfago",
          resposta: { carboidrato: 0, proteina: 0, lipidio: 0 },
        },
        {
          orgao: "Estômago",
          resposta: { carboidrato: 0, proteina: 1, lipidio: 0 },
        },
        {
          orgao: "Intestino delgado",
          resposta: { carboidrato: 1, proteina: 1, lipidio: 1 },
        },
        {
          orgao: "Intestino grosso",
          resposta: { carboidrato: 0, proteina: 0, lipidio: 0 },
        },
      ],
      revelado: false,
      correto: true,
    };
  },
  methods: {
    marcar(event, ordem, orgao) {
      if (event.target.innerHTML == "✅") {
        event.target.innerHTML = "";
        // Tira resposta da variavel
      } else {
        event.target.innerHTML = "✅";
        // Guarda resposta na variavel
        let orgaoRowAluno = this.respostaAluno.find(g => g.orgao === orgao).resposta;
        let orgaoRowCorreta = this.respostaCorreta.find(g => g.orgao === orgao).resposta;

        console.log(this.respostaAluno[0]);
        
        
        if(ordem == 1){
          orgaoRowAluno.carboidrato = 1;
        }
        if(ordem == 2){
          orgaoRowAluno.proteina = 1;
        }
        if(ordem == 3){
          orgaoRowAluno.lipidio = 1;
        }

        
      }
    },
    verificaQuestao() {
      this.revelado = !this.revelado;

      for (let i = 0; i < this.respostaCorreta.length; i++) {
        let gabarito = this.respostaCorreta[i].resposta;
        let aluno = this.respostaAluno[i].resposta;

        if (gabarito.carboidrato != aluno.carboidrato) {
          this.correto = false;
          console.log(123);
          
        }
        if (gabarito.proteina != aluno.proteina) {
          this.correto = false;
                    console.log(1234);

        }
        if (gabarito.lipidio != aluno.lipidio) {
          this.correto = false;
                    console.log(1235);

        }
      }

      let correto = `
        <div class="question-result question-result__correto">
        <p class="body1 flex--align-center">
          <b>Acertou</b>
          <span class="material-symbols-rounded ml-16 mb-4">sentiment_very_satisfied</span>
        </p>
      </div>
      `;
      let incorreto = `
        <div class="question-result question-result__incorreto">
          <p class="body1 flex--align-center">
             <span class="material-symbols-rounded mx-16">sentiment_very_dissatisfied</span>
            <b>Ops! Tente novamente</b>
          </p>
        </div>
      `;

      if (this.correto) {
        document
          .querySelector("#qMatriz")
          .querySelector(".feedback").innerHTML = correto;
      } else {
        document
          .querySelector("#qMatriz")
          .querySelector(".feedback").innerHTML = incorreto;
      }
    },
  },

  //html
  template: `
  <div id="qMatriz">
  <table class="mt-40">
  <thead>
    <tr>
      <th>Orgão</th>
      <th>Carboidrato</th>
      <th>Proteína</th>
      <th>Lipídio</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(orgao, index) in respostaCorreta" :key="index">
      <td class="name">{{ orgao.orgao }}</td>
      <td @click="marcar($event, 1, orgao.orgao)" class="clicavel"></td>
      <td @click="marcar($event, 2, orgao.orgao)" class="clicavel"></td>
      <td @click="marcar($event, 3, orgao.orgao)" class="clicavel"></td>
    </tr>
  </tbody>
</table>

<div class="py-40 scrollspy flex--justify-center" >
       
<a href="#/" class="btn btn-large filled waves-effect waves-light bubbly-button" @click="verificaQuestao">
Revelar <span class="ml-4" style="font-size: 24px;">
👀
</span>
</a>
        
    </div>
<div class="feedback"></div>
    </div>

`,
};
