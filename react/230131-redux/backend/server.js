const express = require('express');
const cors = require('cors');

const PORT = 8080;
const app = express();

// app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const data = [
  {
    title: '제목1',
    content: '내용1'
  }, 
  {
    title: '제목2',
    content: '내용2'
  }
]
app.get('/', (req, res) => {
  console.log("path : /, method : get")
  res.send( data );
});
app.post('/', (req, res) => {
  console.log("path : '/', method : post");
  console.log("req.body : ", req.body )
  data.push(req.body);

  res.send('추가 완료')
})

app.listen(PORT, () => {
  console.log(`백엔드 서버가 ${PORT}번에서 작동 중`);
});
