const uuid = require('uuid');

module.exports = ({
  db
}) => {
  const mailController = require('../mail/mail.controller')({
    db
  });

  const userController = {

    async validate(req) {
      let user = {};
      user.name = req.body.name;
      user.email = req.body.email;
      user.id = uuid.v4();
      user.result = this.verifyDiagnosis(req.body.data.responses); //função que verifica o estado
      await mailController.send(user);
      return db.user.create(user);
    },

    // verificação das respostas
    verifyDiagnosis(data) {
      const result = data.filter(x => x == true).length;
      if (result <= 2) {
        return 'baixo';
      } else if (result > 2 && result <= 8) {
        return 'medio';
      } else {
        return 'alto';
      }
    }

  };
  return userController;
};