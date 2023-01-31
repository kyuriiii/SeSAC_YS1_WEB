const Sequelize = require('sequelize');

const info = {
    "development": {
        "username": "bunny",
        "password": "letter123",
        "database": "test",
        "host": "115.85.180.209",
        "dialect": "mysql"
      }
}
const config = info["development"]

const sequelize = new Sequelize(config.database, config.username, config.password, config);


sequelize.sync({ force: false }) // 서버 실행시마다 테이블을 재생성할건지에 대한 여부
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });