const https = require('https')
const cheerio = require('cheerio');
// const { json } = require('express');
// const { log } = require('console');
let url = 'https://www.tmall.com/?ali_trackid=2:mm_26632258_3504122_48284354:1595141333_143_517601430&clk1=37c7ef3c690cb13f67283729134adca1&upsid=37c7ef3c690cb13f67283729134adca1'

https.get(url, res=>{
    let chucks = [];
    size = 0;
    res.on('data', chuck=>{
        chucks.push(chuck)
        size += chuck.length
        // console.log(chunk.toString())
    })
    res.on('end', ()=>{
        console.log('数据传输结束')
        let data = Buffer.concat(chucks,size)
        // console.log(data);
        let html = data.toString();
        // console.log(html)

        let $ = cheerio.load(html)
        let $data = $('#J_defaultData').text()
        // console.log($data);
        // let reptile_data = JSON.parse($data)
        // console.log(JSON.parse($data))
        // console.log("mockPage:",JSON.parse($data).mockPage[100])
        // console.log(JSON.parse($data).page[100])

        let fs = require('fs')

        let mydata = JSON.parse($data).mockPage[100];

        for(let index in mydata){
            console.log(mydata[index])
        }



        // writeData('写入数据');
        // writeData('写入数据2');
        // clearData();
        function writeData(data){
            fs.appendFile('myData.txt', data,(err)=>{
                if(!err){
                    console.log("写入完成!")
                }else{
                    console.log(err)
                }
            })
            console.log('执行') 
        }
       
        function clearData(){
            fs.writeFile('myData.txt','',(err)=>{
                console.log("删除数据")
            })
        }
    })
})