var fs = require('fs');
const { connect } = require('http2');

var HTMLParser = require('node-html-parser');
var root = HTMLParser.parse('<ul id="list"><li>Hello World</li></ul>');


var count = 0 
fs.readdir('./questions', (err, files) => {
    files.forEach(file => {
        // console.log(file)
    var content = fs.readFileSync(`./questions/${file}` ).toString();
    var question = content.split('<h2>Question</h2>')[1].split("<h2 style='margin-top: 1em'>Markscheme</h2>")[0] ;
    // console.log(question)
    var root = HTMLParser.parse(question);
    // console.log(root.toString())
    var markschems = content.split("<h2 style='margin-top: 1em'>Markscheme</h2>")[1].split("<h2 style='margin-top: 1em'>Examiners report</h2>")[0];
    var topic = content.split("<div class='syllabus_section' style='margin-bottom: 1em;'>")[1].split('<a class="js-show_related_questions_control btn"')[0];
    var topic0 = topic.split('>')[2].split('<')[0];  // Main topic e.g calculus
    var topic1 = topic.split('>')[4].split('<')[0];// sub topic number e.g 4.3
    var topic2 = topic.split('>')[6]?  topic.split('>')[6].split('<')[0] : "Nan";  // topic name detail e.g circular funtion
    var ReferenceCode =   content.split('Reference code</td>')[1].split('>')[1].split('<')[0];

    //  Seperate Paper 1 and 2

    // if(ReferenceCode.split('.')[1] == 1){
    //     fs.writeFileSync( `./paper1/ib${count}.txt` , content )

    // }else{
    //     fs.writeFileSync( `./paper1/ib${count}.txt` , content ) ; 
    // }

    //  Main Topic  e.g Function , calculus ,   

    if( topic0 == "Topic 5 - Statistics and probability" ){
        fs.writeFileSync( `./statProb/ib${count}.txt` , question+'$$$$'+ markschems + '$$$$' + topic0 + '$$$$' + topic1 + '$$$$' + topic2 + '$$$$' + ReferenceCode )
    }
    else if( topic0 == "Topic 1 - Algebra" ){
        fs.writeFileSync( `./algebra/ib${count}.txt` ,   question+'$$$$'+ markschems  + '$$$$' + topic0 + '$$$$' + topic1 + '$$$$' + topic2 + '$$$$' + ReferenceCode ) ; 
    }
    else if( topic0 == "Topic 2 - Functions and equations" ){
        fs.writeFileSync( `./function/ib${count}.txt` ,   question+'$$$$'+ markschems  + '$$$$' + topic0 + '$$$$' + topic1 + '$$$$' + topic2 + '$$$$' + ReferenceCode ) ; 
    }
    else if( topic0 == "Topic 3 - Circular functions and trigonometry" ){
        fs.writeFileSync( `./circular/ib${count}.txt` ,   question+'$$$$'+ markschems  + '$$$$' + topic0 + '$$$$' + topic1 + '$$$$' + topic2 + '$$$$' + ReferenceCode ) ; 
    }
    else if( topic0 == "Topic 4 - Vectors" ){
        fs.writeFileSync( `./vector/ib${count}.txt` ,   question+'$$$$'+ markschems  + '$$$$' + topic0 + '$$$$' + topic1 + '$$$$' + topic2 + '$$$$' + ReferenceCode ) ; 
    }
    else if( topic0 == "Topic 6 - Calculus" ){
        fs.writeFileSync( `./calculus/ib${count}.txt` ,   question+'$$$$'+ markschems  + '$$$$' + topic0 + '$$$$' + topic1 + '$$$$' + topic2 + '$$$$' + ReferenceCode ) ; 
    }
 
    count = count + 1 ;
})});


// Things to do 
    //  1. sort differntly for paper 1  and paper 2
    //  2. the sort with topic  ( 6 topics ) { number , functon ,calculus ...}



    