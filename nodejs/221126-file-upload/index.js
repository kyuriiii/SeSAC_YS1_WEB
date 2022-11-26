const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// const upload = multer({
//     dest: "uploads/"
// });
const upload = multer({
    storage: multer.diskStorage({
        destination(req,file,done){
            done( null, 'uploads/');
        },
        filename(req,file,done){
            console.log( "filename : ",  req.body );
            const ext = path.extname(file.originalname); // 바나나.jpg
            const filename = req.body.name + ext; // 123123123123.jpg
            done( null, filename );
        }
    })
});
app.get("/file", (req,res) => {
    res.render("file");
});
app.post("/upload-single", upload.single("userfile"), (req,res) => {
    console.log( req.file );
    console.log( req.body );
    res.send( "Upload Complete" );
});
app.post("/upload-array", upload.array("userfile"), (req,res) => {
    console.log( req.files );
    console.log( req.body );
    res.send( "Upload Complete" );
});
app.post("/upload-fields", upload.fields([{name:'userfile1'}, {name:'userfile2'}, {name:'userfile3'}]), (req,res) => {
    console.log( req.files );
    console.log( req.body );
    res.send( "Upload Complete" );
});
app.get("/", test, test2, (req,res) => {
    console.log( "req.name : ", req.name);
    console.log("Hello");
    res.send("Hello");
});
function test(req, res, next) {
    req.name = "12345";
    console.log( req.query );
    console.log("test 함수입니다.");
    next(); // test 미들웨어 함수가 끝났고, 그 다음을 진행해라.
}
function test2(req,res,next) {
    console.log("test2 함수입니다.");
    next();
}
app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});