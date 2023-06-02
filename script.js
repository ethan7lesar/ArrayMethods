let array1 = [];

function add() {
  // value = document.getElementById("input").innerHTML;
  // array1.push(document.getElementById("input").value);
  // console.log(array1);

  // document.write("Theis is the array ", array1.values)
  let input = document.getElementById("input").value;
  array1.push(input);
  //     document.write("Theis isthe array ", array1)
  document.getElementById("display").innerHTML = array1;

  // document.write("This is the array " , array1 )
}

let array2 = [];

function addObject() {
  let Value = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
  };

  array2.push(Value);

//   document.getElementById("display1").innerHTML += Object.values(Value);

  console.log(array2);

  let table = document.querySelector(".tableInfo");
  table.innerHTML = "";
  array2.forEach((data) => {
    table.innerHTML += 
    ` 
    <tbody>
    <tr>
      <td>${data.name}</td>
      <td>${data.surname}</td>
    </tr>
    <tr>
    </tbody>
    `;
  
});

}

// function clear
function restart() {
  window.location.reload();
}


