// class Person{
//     constructor(name,surname,age){
//         this.name=name;
//         this.surname=surname;
//         this.age=age

//     }
//     Sayhi(){
//         return console.log(`Salam ${this.name}`);
        
//     }
// }
// class Person2 extends Person{
//     constructor(name,surname,age,hobby){
//         super(name,surname,age)
//         this.hobby=hobby;
//     }

// }
// let elvin= new Person2("Elvin","Memmmedov",14,["codding","programming"])
// elvin.Sayhi()


// classwork
// task1
// class FootBall {
//     constructor(teamName, totalPlayers, kbok) {
//         this.teamName = teamName;
//         this.totalPlayers = totalPlayers;
//         this.kbok = kbok;
//     }

//     calcReservePlayer() {
        
//         return console.log(`Reserve Players: ${this.totalPlayers - 11}`);
//     }
// }
// class EuroTeam extends FootBall{
//     constructor(teamName,totalPlayers,kbok,country){
// super(teamName,totalPlayers,kbok);
// this.country=country;
//     }
// }
// let myTeam = new EuroTeam ("Real Madrid", 25, 15,"Ispanya");
// myTeam.calcReservePlayer()
// homework
// task1
let kitab=0;
let kitaplar = [
];

class Book {
    constructor(book, price, author,topic) {
        this.book = book;
        this.price= price;
        this.author = author;
        this.topic=topic;
    }
   
}
function fo() {
  
    kitab= new Book (document.getElementById("book-name").value,document.getElementById("book-price").value,document.getElementById("book-author").value,document.getElementById("book-topic").value);
   
     
    kitaplar.push(kitab);
     return console.log(kitaplar);
   
}
function fr() {
    let  authorsay=0;

  kitaplar.forEach(kit => {
        if (kit.author==document.getElementById("author-search").value) {
            authorsay++
 } 
    });
  
        console.log(`${document.getElementById("author-search").value}-in ${authorsay}-qeder eseri sistemde var`)    
    }

