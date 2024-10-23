// Importando a biblioteca jsPDF, que será usada para gerar o PDF
const { jsPDF } = window.jspdf;

// Adicionando um evento de clique ao botão com o ID "criar"
document.getElementById("criar").addEventListener("click", function () {
  event.preventDefault(); // Prevenindo o comportamento padrão de envio do formulário
  // Capturando os valores dos campos do formulário pelo ID de cada campo
  const nome = document.getElementById("nome").value;
  const nascimento = document.getElementById("nascimento").value;
  const endereco = document.getElementById("endereco").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const linkedin = document.getElementById("linkedin").value;
  const periodotrabalho = document.getElementById("periodotrabalho").value;
  const objetivo = document.getElementById("objetivo").value;
  const ensinoescola = document.getElementById("ensinoescola").value;
  const nomeescola = document.getElementById("nomeescola").value;
  const periodoescola = document.getElementById("periodoescola").value;
  const conclusaoescola = document.getElementById("conclusaoescola").value;
  const ensinosenai = document.getElementById("ensinosenai").value;
  const nomesenai = document.getElementById("nomesenai").value;
  const periodosenai = document.getElementById("periodosenai").value;
  const conclusaosenai = document.getElementById("conclusaosenai").value;
  const experiencias = document.getElementById("experiencias").value;
  const cursos = document.getElementById("cursos").value;
  const habilidades = document.getElementById("habilidades").value;

  // Verificando se algum campo obrigatório não foi preenchido
  if (
    !nome || !nascimento || !endereco || !email || !telefone ||
    !periodotrabalho || !objetivo || !ensinoescola || !nomeescola ||
    !periodoescola || !conclusaoescola || !ensinosenai || !nomesenai ||
    !periodosenai || !conclusaosenai || !experiencias || !cursos || !habilidades
  ) {
    // Se algum campo estiver vazio, exibe um alerta e interrompe o processo
    alert("Por favor, preencha todos os campos obrigatórios!");
    return; // Interrompe o processo de criação do PDF
  }

  // Criando um novo documento PDF usando o jsPDF
  const doc = new jsPDF();

  // Obtendo a largura da página do PDF
  const pageWidth = doc.internal.pageSize.getWidth();

  // Calculando a largura do texto do nome
  const textWidth = doc.getTextWidth(nome);
 
  // Calculando a posição X para centralizar o texto do nome
  const xPosition = (pageWidth - textWidth) / 2;

  // Adicionando o conteúdo ao PDF

  // Definindo o tamanho da fonte como 15
  doc.setFontSize(15);

  // Definindo a fonte como Times e estilo negrito
  doc.setFont('Times', 'bold');

  // Adicionando o nome ao PDF, centralizado na posição calculada
  doc.text(nome, xPosition, 14);

  // Adicionando um cabeçalho "INFORMAÇÕES PESSOAIS"
  doc.text(`INFORMAÇÕES PESSOAIS`, 10, 27);

  // Definindo a espessura da linha
  doc.setLineWidth(0.5);

  // Desenhando uma linha abaixo do cabeçalho "INFORMAÇÕES PESSOAIS"
  doc.line(10, 29, 200, 29);

  // Definindo a fonte como Times normal e tamanho 12
  doc.setFont('Times', 'normal');
  doc.setFontSize(12);

  // Adicionando os detalhes pessoais ao PDF
  doc.text(`Data de nascimento: ${nascimento}`, 10, 35);
  doc.text(`Endereço: ${endereco}`, 10, 40);
  doc.text(`Email: ${email}`, 10, 45);
  doc.text(`Telefone: ${telefone}`, 10, 50);
  doc.text(`LinkedIn: ${linkedin}`, 10, 55);
  doc.text(`Período disponível para trabalhar: ${periodotrabalho}`, 10, 60);

  // Adicionando a seção "OBJETIVO" no PDF
  doc.setFont("Times", "bold");
  doc.setFontSize(12);
  doc.text("OBJETIVO:", 10, 73);

  // Adicionando o conteúdo do objetivo, alinhado à direita
  doc.setFont("Times", "normal");
  doc.text(`${objetivo}`, 40, 73); 

  // Adicionando a seção "FORMAÇÃO ACADÊMICA" no PDF
  doc.setFontSize(15);
  doc.setFont('Times', 'bold');
  doc.text(`FORMAÇÃO ACADÊMICA`, 10, 87);

  // Adicionando uma linha abaixo do cabeçalho "FORMAÇÃO ACADÊMICA"
  doc.setLineWidth(0.5); 
  doc.line(10, 89, 200, 89); 
  doc.setFont('Times', 'normal');
  doc.setFontSize(12);
  doc.text(`Ensino regular: ${ensinoescola}`, 10, 95);
  doc.text(`Nome da escola: ${nomeescola}`, 10, 100);
  doc.text(`Período: ${periodoescola}`, 10, 105);
  doc.text(`Conclusão: ${conclusaoescola}`, 150, 105);
  doc.text(`Ensino profissionalizante: ${ensinosenai}`, 10, 117);
  doc.text(`Escola SENAI: ${nomesenai}`, 10, 122);
  doc.text(`Período curso-SENAI: ${periodosenai}`, 10, 127);
  doc.text(`Conclusão: ${conclusaosenai}`, 150, 127);

  // Adicionando a seção "EXPERIÊNCIA / VOLUNTARIADO" no PDF
  doc.setFontSize(15);
  doc.setFont('Times', 'bold')
  doc.text(`EXPERIÊNCIA / VOLUNTARIADO`, 10, 142);

  // Desenhando uma linha abaixo do cabeçalho "EXPERIÊNCIA / VOLUNTARIADO"
  doc.setLineWidth(0.5); 
  doc.line(10, 144, 200, 144);

  // Adicionando as experiências e voluntariado
  doc.setFontSize(12);
  doc.setFont('Times', 'normal');
  doc.text(experiencias, 10, 150);

  // Adicionando a seção "OUTROS CURSOS" no PDF
  doc.setFontSize(15);
  doc.setFont('Times', 'bold')
  doc.text(`OUTROS CURSOS`, 10, 197);

  // Desenhando uma linha abaixo do cabeçalho "OUTROS CURSOS"
  doc.setLineWidth(0.5); 
  doc.line(10, 199, 200, 199); 

  // Adicionando outros cursos
  doc.setFontSize(12);
  doc.setFont('Times', 'normal');
  doc.text(cursos, 10, 205);

  // Adicionando a seção "HABILIDADES E COMPETÊNCIAS" no PDF
  doc.setFontSize(15);
  doc.setFont('Times', 'bold')
  doc.text(`HABILIDADES E COMPETÊNCIAS`, 10, 242);

  // Desenhando uma linha abaixo do cabeçalho "HABILIDADES E COMPETÊNCIAS"
  doc.setLineWidth(0.5); 
  doc.line(10, 244, 200, 244); 

  // Adicionando habilidades e competências
  doc.setFontSize(12);
  doc.setFont('Times', 'normal');
  doc.text(habilidades, 10, 250);

  // Salvando o PDF com o nome "formulario.pdf", usando o nome da pessoa
  const fileName = `${nome} - Currículo.pdf`;
  doc.save(fileName);
});



