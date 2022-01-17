let from=document.querySelector('#book_list');
let book =document.querySelector('#book');


from.addEventListener('submit',booklist);
book.addEventListener('click',removeBook);


class Book{
    constructor(id,author,title,isbn){
        this.id=id;
        this.author=author;
        this.title=title;
        this.isbn=isbn;

       
    }
}

class UI{

    addToBookList(book){
        let booklist=document.querySelector('#book');

        let row=document.createElement('tr');
        row.innerHTML=`
            <td>${book.id}</td>
            <td>${book.author}</td>
            <td>${book.title}</td>
            <td>${book.isbn}</td>
            <td><a href='#'>X</a></td>
        `
        booklist.appendChild(row)
        
    }
    
    clrinputs(){
        document.querySelector('#author').value =" ";
        document.querySelector('#title').value =" ";
        document.querySelector('#id').value =" ";
        document.querySelector('#isbn').value =" ";
    }

    showAlert(mgs,className){
        let div =document.createElement('div');
        div.className=`alert bg-${className}`;
        div.appendChild(document.createTextNode(mgs));
        let container = document.querySelector('.container');
        let from = document.querySelector('#book_list');
        container.insertBefore(div,from);

        setTimeout(function (){
            document.querySelector('.alert').remove();
        },3000);
        console.log(div);
    }

    deleteFromBook(target){
        if(target.hasAttribute('href')){
           target.parentElement.parentElement.remove();
        }
        
    }

}


function booklist(e){

    let author = document.querySelector('#author').value,
    title = document.querySelector('#title').value,
    id=document.querySelector('#id').value,
    isbn=document.querySelector('#isbn').value;

    let ui =new UI();

    if(author ===""||title===''||id=== ''||isbn ===''){
        
        
        ui.showAlert("please fill up all fields","danger");
    }
    else{
        let book =new Book(id,author,title,isbn);
        // console(book);
        
        ui.addToBookList(book);
        ui.clrinputs();
        ui.showAlert('book added success','success');
    }
    e.preventDefault();
}

function removeBook(e){
    let ui = new UI();

    ui.deleteFromBook(e.target);
    ui.showAlert('remove book','info');

    e.preventDefault();
}