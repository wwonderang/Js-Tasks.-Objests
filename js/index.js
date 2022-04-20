//Task 1 У нас есть следующий объект:
/* let user = {
  name: "John",
  age: 30
};
Проверьте, что этот объект не пустой и что в нем есть ключ age.  */
/*let user = {
  name: "John",
  age: 30
};
alert('age' in user);*/

/*function isEmpty() {
  for (let key in obj) {
    return false;
  }
  return true;
}*/

//Task 2 Получите из объекта obj значение id в константу id не используя выражение obj.id

/*const obj = {
id: 5,
token: 12343423
}; 
const {id} = obj;
console.log(id);*/

//Task 3 Получите из объекта obj значение id и разместите его в константу userId.

/*const obj = {
id: 5,
token: 12343423
};

const userId = obj["id"];
console.log(userId);*/


  //Task 4
/*const city1 = {
  name: "Город N",
  population: 1000000,
 };

const city2 = {
  name: "Город M",
  population: 1e6,
};

  function getName() {
    return this.name;
  }

city1.getName = getName;
city2.getName = getName;
console.log(city1.getName());
console.log(city2.getName());

function exportStr() {
  return `name=${this.name}, population=${this.population}`;
}
  city1.exportStr = exportStr;
  city2.exportStr = exportStr;
  console.log(city1.exportStr());
  console.log(city2.exportStr());

  function getObj() {
    return this;
  }

  function getCity() {
    return getObj.apply(this).name;
  }
  city1.getCity = getCity;
  city2.getCity = getCity;
  console.log(city1.getCity());
  console.log(city2.getCity()); */

  //Task 7
const obj = {

  method1: function() {
    return this;

  },
  method2: function() {
    return this;
  },
  method3: function() {
    console.log('метод 3');
  }
};
obj.method1().method2().method3();

