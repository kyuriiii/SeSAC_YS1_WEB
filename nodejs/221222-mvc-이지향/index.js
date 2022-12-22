const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

const models = require("./model");

// async / await 이용하기
app.get("/", async (req,res) => {
    console.log( "path : /, method : get" );
    // user 테이블에 존재하는 사용자들 가져와 index.ejs 로 전달하기
    let recipes = await models.Recipe.findAll();
    await res.render("index", { result: recipes });
});

app.patch("/", async (req,res) => {
    console.log( "path : /, method : patch" );
    console.log( "req.body : ", req.body );

    var sql = `UPDATE recipe SET recipe_ingd=REPLACE(recipe_ingd,',${req.body.b_ingd},' ,',${req.body.a_ingd},');`
    const result = await models.sequelize.query(sql, { type: models.Sequelize.QueryTypes.UPDATE });
    res.send({return: true, data: result});
});
app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});
