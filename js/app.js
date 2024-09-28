// 41 mashq
{
    const books = [
        {
          title: "Halqa",
          author: "Akrom Malik",
          read: false
        },
        {
          title: "Dunyoning ishlari",
          author: "O'tkir Hoshimov",
          read: true
        },
        {
          title: "Iymon",
          author: "Shayx Muhammad Sodiq Muhammad Yusuf",
          read: true
        }
      ];
      books.forEach(book => {
        if(book.read === true){
            console.log(`${book.author} ning ${book.title} kitobi o’qilgan`);
        }else{
            console.log(`${book.author} ning ${book.title} kitobi o’qilmagan`);
        }
      });
}

// 42 mashq
{
    const strings = ["text", "world", "laptop"];
    const result = {};
    
    for (let i = 0; i < strings.length; i++) {
      if (strings[i]) {
        result[strings[i]] = strings[i].length;
      } else {
        console.log("Invalid string encountered");
      }
    }
    
    console.log(result);
    
}

// 43 mashq
{
    const obj = { a: 2, b: 3, c: 4 };
    const n = 3;
    const res = {};
    
    for (let key in obj) {
      res[key] = obj[key] * n;
    }
    
    console.log(res);
    
}

// 44 mashq
{
    function getLevel(n) {
        const result = [];
        for (let i = 1; i <= n; i++) {
          result.push(2 ** i);
        }
        return result;
      }
      
      console.log(getLevel(4));     
}

// 45 mashq
{
    const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
    const count = {};
    
    for (let i = 0; i < animals.length; i++) {
      const animal = animals[i];
      count[animal] = count[animal] ? count[animal] + 1 : 1;
    }
    
    console.log(count);
}

// 47 mashq
{
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map(num => num ** 2);
    console.log(squares);    
}

// 48 mashq
{
    const arr = [1, -4, 12, 0, -3, 29, -150];
    const sum = arr.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
    console.log(sum);    
}

// 49 mashq
{
    const str = 'George Raymond Richard Martin';
    const initials = str.split(' ').map(word => word[0]).join('');
    console.log(initials);    
}

// 50 mashq
{
    const people = [
        { name: 'John', age: 13 },
        { name: 'Mark', age: 56 },
        { name: 'Rachel', age: 45 },
        { name: 'Nate', age: 67 },
        { name: 'Jeniffer', age: 65 }
      ];
      
      const ages = people.map(person => person.age);
      const ageDifference = Math.max(...ages) - Math.min(...ages);
      console.log(ageDifference);      
}


// misc
const output = document.getElementById('output')
function showImg(){
    output.style.width = "450px"
}
function closeImg(){
    output.style.width = "0"
}
