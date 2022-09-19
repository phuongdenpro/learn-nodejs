const express = require("express");
const multer = require('multer')
const data = require('./store');



const app = express();
const upload = multer();
app.use(express.static("./views"));
app.set("view engine", "ejs");
app.set("views", "./views");

//config aws dynamoDB
const AWS = require('aws-sdk');
const config = new AWS.Config({
    accessKeyId:'AKIA24OUMJ24BZYO4SDJ',
    secretAccessKey:'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',
    region:'ap-southeast-1'
});
AWS.config = config;
const docClient = new AWS.DynamoDB.DocumentClient();
const tableName = 'SanPhams';


app.get("/", (request, response) => {
    const params = {
        TableName : tableName,
    };
    docClient.scan(params,(err,data) =>{
        if(err){
            response.send('Internal Server Error');
        }else{
          return response.render('index',{sanPhams: data.Items});
        }
    });
});

app.post('/',upload.fields([]),(request, response)=>{
    const{ma_sp, ten_sp, so_luong} = request.body;
    const params = {
        TableName: tableName,
        Item:{
            "ma_sp":ma_sp,
            "ten_sp":ten_sp,
            "so_luong":so_luong
        }
    }
    docClient.put(params, (err, data)=>{
            if(err){
                return response.send('Internal Server Error');
            }else {
                return response.redirect("/");
            }
    })
});
    

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
