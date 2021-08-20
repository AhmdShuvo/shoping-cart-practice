const books =['You Dont Know JS: Scope & Closures',
'Eloquent JavaScript: A Modern Introduction to Programming',
'JavaScript: The Good Parts',
'Javascript: The Definitive Guide, 5th edition David Flanagan',
'JavaScript and JQuery: Interactive Front-End Web Development']
const search="javascript";
let javascriptbooks=[];
for(const book of books ){
    if(book.toLowerCase().indexOf(search.toLowerCase())!=-1)
    {
        javascriptbooks.push(book);
        console.log(javascriptbooks);
    }
}

array2=[1,2,3,4,10,11,33,55,565,576,11,9]
array2.sort(function(a,b){
    return a-b;
})
 console.log(array2);