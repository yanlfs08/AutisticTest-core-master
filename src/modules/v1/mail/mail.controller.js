const sgMail = require("@sendgrid/mail");
const config = require("../../../config/common");
sgMail.setApiKey(config.sendGridApiKey);

module.exports = ({
  db
}) => {
  const mailController = {
    send(user) {

      var firtName = user.name.split(" ")[0];

      const msg = {
        to: user.email,
        from: "yanlfs@hotmail.com",
        subject: "Resultado Triagem M-Chart",
        html: `Olá ${firtName}!<br>` +
          `Com base nas respostas fornecidas verificamos que o risco da criança pertencer ao espectro autista é <strong>${user.result}</strong>.<br><br>` +
          `Importante lembrar que é necessário que um profissional faça os testes adequados para verificar se a criança realmente pertence ao espectro autista.<br>` +
          `Gostariasmo de indicar a leitura de 2 artigos informativos sobre o <strong>Autismo:</strong><br><br>` +
          `<a href="https://autismoerealidade.org.br/o-que-e-o-autismo/"><strong>O que é o autismo - © 2020 Autismo e Realidade.</strong></a><br>` +
          `<a href="http://www.fiocruz.br/biosseguranca/Bis/infantil/autismo.htm"><strong>Informações sobre o autismo - © 2020 Fundação Oswaldo Cruz.</strong></a><br><br><br><br>` +
          `<strong>Triagem M-chart - Projeto PI 5º Período</strong><br>` +
          `<strong>Centro Universitario UNA</strong>`,
      };
      return sgMail.send(msg);
    },
  };
  return mailController;
};