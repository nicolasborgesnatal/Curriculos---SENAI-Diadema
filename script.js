// Declaração das variáveis que irão armazenar os dados fornecidos pelo usuário
var nomeV, nascimentoV, emailV, enderecoV, telefoneV, linkedinV, periodotrabalhoV, objetivoV, ensinoescolaV, nomeescolaV, periodoescolaV, conclusaoescolaV, ensinosenaiV, nomesenaiV, periodosenaiV, conclusaosenaiV, experienciasV, cursosV, habilidadesV; // Variáveis que irão receber os dados cadastrados

// Função que coleta os dados dos campos do formulário e armazena nas variáveis declaradas
function readFom() {
  // Captura os valores dos campos de input e os armazena nas variáveis correspondentes
  nomeV = document.getElementById("nome").value;
  nascimentoV = document.getElementById("nascimento").value;
  emailV = document.getElementById("email").value;
  enderecoV = document.getElementById("endereco").value;
  telefoneV = document.getElementById("telefone").value;
  linkedinV = document.getElementById("linkedin").value;
  periodotrabalhoV = document.getElementById("periodotrabalho").value;
  objetivoV = document.getElementById("objetivo").value;
  ensinoescolaV = document.getElementById("ensinoescola").value;
  nomeescolaV = document.getElementById("nomeescola").value;
  periodoescolaV = document.getElementById("periodoescola").value;
  conclusaoescolaV = document.getElementById("conclusaoescola").value;
  ensinosenaiV = document.getElementById("ensinosenai").value;
  nomesenaiV = document.getElementById("nomesenai").value;
  periodosenaiV = document.getElementById("periodosenai").value;
  conclusaosenaiV = document.getElementById("conclusaosenai").value;
  experienciasV = document.getElementById("experiencias").value;
  cursosV = document.getElementById("cursos").value;
  habilidadesV = document.getElementById("habilidades").value;

  // Exibe no console os valores capturados para verificação
  console.log(nomeV, nascimentoV, emailV, enderecoV, telefoneV, linkedinV, periodotrabalhoV, objetivoV, ensinoescolaV, nomeescolaV, periodoescolaV, conclusaoescolaV, ensinosenaiV, nomesenaiV, periodosenaiV, conclusaosenaiV, experienciasV, cursosV, habilidadesV);
}

// Atribui uma função ao botão de inserção quando clicado
document.getElementById("insert").onclick = function () {
  event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
  readFom(); // Chama a função para capturar os dados
  // Verifica se algum campo obrigatório está vazio
   if (
    !nomeV ||
    !nascimentoV ||
    !emailV ||
    !enderecoV ||
    !telefoneV ||
    !periodotrabalhoV ||
    !objetivoV ||
    !ensinoescolaV ||
    !nomeescolaV ||
    !periodoescolaV ||
    !conclusaoescolaV ||
    !ensinosenaiV ||
    !nomesenaiV ||
    !periodosenaiV ||
    !conclusaosenaiV ||
    !experienciasV ||
    !cursosV ||
    !habilidadesV
  ) {
    // Exibe um alerta solicitando o preenchimento de todos os campos
    alert("Por favor, preencha todos os campos obrigatórios!");
    return; // Impede o envio dos dados se algum campo estiver vazio
  }

  // Captura o arquivo de upload (currículo)
  var file = document.getElementById("fileUpload").files[0];

  if (file) {
    // Captura o arquivo de upload (currículo)
    var storageRef = firebase.storage().ref('Currículos - SENAI Diadema' + '/' + file.name);
    // Realiza o upload do arquivo
    var uploadTask = storageRef.put(file);

    // Monitoramento do estado do upload
    uploadTask.on(
      'state_changed', // Chama essa função enquanto o upload está em andamento
      function (snapshot) {
      // Acompanhamento do progresso do upload (pode ser adicionado código aqui)
      },
      function (error) {
         // Caso ocorra um erro durante o upload, exibe no console
        console.error("Erro ao fazer upload do arquivo: ", error);
      },
      function () {
        // Quando o upload for concluído com sucesso
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          // Salva os dados do formulário e a URL do arquivo no Realtime Database
          firebase.database().ref("Candidatos/" + nomeV).set({
            aNome: nomeV,
            bNascimento: nascimentoV,
            cEndereco: enderecoV,
            dEmail: emailV,
            eTelefone: telefoneV,
            fLinkedin: linkedinV,
            gPeriodoTrabalho: periodotrabalhoV,
            hObjetivo: objetivoV,
            iEnsinoEscola: ensinoescolaV,
            jNomeEscola: nomeescolaV,
            kPeriodoEscola: periodoescolaV,
            lConclusaoEscola: conclusaoescolaV,
            mEnsinoSenai: ensinosenaiV,
            nNomeSenai: nomesenaiV,
            oPeriodoSenai: periodosenaiV,
            pConclusaoSenai: conclusaosenaiV,
            qExperiencias: experienciasV,
            rCursos: cursosV,
            sHabilidades: habilidadesV,
            tCurriculo: downloadURL // Adiciona a URL do currículo
          });
          // Exibe uma mensagem de sucesso e limpa os campos do formulário
          alert("Dados e currículo enviados com sucesso!");
          document.getElementById("nome").value = "";
          document.getElementById("nascimento").value = "";
          document.getElementById("email").value = "";
          document.getElementById("endereco").value = "";
          document.getElementById("telefone").value = "";
          document.getElementById("linkedin").value = "";
          document.getElementById("periodotrabalho").value = "";
          document.getElementById("objetivo").value = "";
          document.getElementById("ensinoescola").value = "";
          document.getElementById("nomeescola").value = "";
          document.getElementById("periodoescola").value = "";
          document.getElementById("conclusaoescola").value = "";
          document.getElementById("ensinosenai").value = "";
          document.getElementById("nomesenai").value = "";
          document.getElementById("periodosenai").value = "";
          document.getElementById("conclusaosenai").value = "";
          document.getElementById("experiencias").value = "";
          document.getElementById("cursos").value = "";
          document.getElementById("habilidades").value = "";
          document.getElementById("fileUpload").value = ""; // Limpa o campo de upload
        });
      }
    );
  } else {
    // Caso o arquivo não tenha sido selecionado, exibe um alerta
    alert('Por favor, selecione o seu currículo para upload!');
  }
};

// Atribui uma função ao botão "read" para ler os dados do banco de dados
document.getElementById("read").onclick = function () {
  event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
  readFom(); // Captura os dados inseridos (nesse caso, apenas o nome)

  // Lê os dados do Realtime Database com base no nome
  firebase
    .database()
    .ref("Candidatos/" + nomeV)
    .on("value", function (snap) {
      // Preenche os campos do formulário com os dados recuperados
      document.getElementById("nome").value = snap.val().aNome;
      document.getElementById("nascimento").value = snap.val().bNascimento;
      document.getElementById("endereco").value = snap.val().cEndereco;
      document.getElementById("email").value = snap.val().dEmail;
      document.getElementById("telefone").value = snap.val().eTelefone;
      document.getElementById("linkedin").value = snap.val().fLinkedin;
      document.getElementById("periodotrabalho").value = snap.val().gPeriodoTrabalho;
      document.getElementById("objetivo").value = snap.val().hObjetivo;
      document.getElementById("ensinoescola").value = snap.val().iEnsinoEscola;
      document.getElementById("nomeescola").value = snap.val().jNomeEscola;
      document.getElementById("periodoescola").value = snap.val().kPeriodoEscola;
      document.getElementById("conclusaoescola").value = snap.val().lConclusaoEscola;
      document.getElementById("ensinosenai").value = snap.val().mEnsinoSenai;
      document.getElementById("nomesenai").value = snap.val().nNomeSenai;
      document.getElementById("periodosenai").value = snap.val().oPeriodoSenai;
      document.getElementById("conclusaosenai").value = snap.val().pConclusaoSenai;
      document.getElementById("experiencias").value = snap.val().qExperiencias;
      document.getElementById("cursos").value = snap.val().rCursos;
      document.getElementById("habilidades").value = snap.val().sHabilidades;
    });
};

document.getElementById("update").onclick = function () {
  event.preventDefault(); // Evita que a página recarregue ao clicar no botão de deletar
  readFom(); // Chama a função `readFom()` para coletar os dados inseridos pelo usuário

  // Remove os dados do usuário no Realtime Database
  firebase.database().ref("Candidatos/" + nomeV).update({
      aNome: nomeV,
      bNascimento: nascimentoV,
      cEndereco: enderecoV,
      dEmail: emailV,
      eTelefone: telefoneV,
      fLinkedin: linkedinV,
      gPeriodoTrabalho: periodotrabalhoV,
      hObjetivo: objetivoV,
      iEnsinoEscola: ensinoescolaV,
      jNomeEscola: nomeescolaV,
      kPeriodoEscola: periodoescolaV,
      lConclusaoEscola: conclusaoescolaV,
      mEnsinoSenai: ensinosenaiV,
      nNomeSenai: nomesenaiV,
      oPeriodoSenai: periodosenaiV,
      pConclusaoSenai: conclusaosenaiV,
      qExperiencias: experienciasV,
      rCursos: cursosV,
      sHabilidades: habilidadesV,
      // Remover tCurriculo: downloadURL
  });

  // Alerta para o usuário que os dados foram excluídos
  alert("Dados atualizados com sucesso!");
  // Limpa todos os campos do formulário após a exclusão dos dados
  document.getElementById("nome").value = "";
  document.getElementById("nascimento").value = "";
  document.getElementById("email").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("linkedin").value = "";
  document.getElementById("periodotrabalho").value = "";
  document.getElementById("objetivo").value = "";
  document.getElementById("ensinoescola").value = "";
  document.getElementById("nomeescola").value = "";
  document.getElementById("periodoescola").value = "";
  document.getElementById("conclusaoescola").value = "";
  document.getElementById("ensinosenai").value = "";
  document.getElementById("nomesenai").value = "";
  document.getElementById("periodosenai").value = "";
  document.getElementById("conclusaosenai").value = "";
  document.getElementById("experiencias").value = "";
  document.getElementById("cursos").value = "";
  document.getElementById("habilidades").value = "";
};

document.getElementById("delete").onclick = function () {
  event.preventDefault(); // Evita que a página recarregue ao clicar no botão de deletar
  readFom(); // Chama a função `readFom()` para coletar os dados inseridos pelo usuário

  // Remove os dados do usuário no Realtime Database
  firebase
    .database()
    .ref("Candidatos/" + nomeV)
    .remove();
    // Alerta para o usuário que os dados foram excluídos
  alert("Dados excluídos com sucesso!");
  // Limpa todos os campos do formulário após a exclusão dos dados
  document.getElementById("nome").value = "";
  document.getElementById("nascimento").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("linkedin").value = "";
  document.getElementById("periodotrabalho").value = "";
  document.getElementById("objetivo").value = "";
  document.getElementById("ensinoescola").value = "";
  document.getElementById("nomeescola").value = "";
  document.getElementById("periodoescola").value = "";
  document.getElementById("conclusaoescola").value = "";
  document.getElementById("ensinosenai").value = "";
  document.getElementById("nomesenai").value = "";
  document.getElementById("periodosenai").value = "";
  document.getElementById("conclusaosenai").value = "";
  document.getElementById("experiencias").value = "";
  document.getElementById("cursos").value = "";
  document.getElementById("habilidades").value = "";
};

