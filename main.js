
const boton = document.querySelector('#boton').addEventListener('click', captura );
const h2 =document.querySelector('#name');
const h3 =document.querySelector('#price');

function captura() {
    const ID = document.querySelector('#campo').value;
    const IdNumber = parseInt (document.querySelector('#campo').value);
    comida.forEach (element =>{
      //console.log('valor ingresado',ID);
      
     if (IdNumber === element.id)
               {h2.textContent = element.nombre; 
               h3.textContent = element.precio;}
     else if (ID=== '') 
               {h2.textContent = 'ERROR'; 
               h3.textContent = 'NO INGRESO VALOR';}
     else if (ID > element.id) 
              {h2.textContent = 'ERROR'; 
               h3.textContent = 'VALOR INVALIDO';}
          })
  }


////////////////////////////////////////////////////////////////////////////////////

    class Pizza {
        constructor (id,nombre,[...ingredientes],precio){  
          this.id = id;
          this.nombre = nombre;
          this.ingredientes = [ingredientes];
          this.precio = precio;
        }
      }
    
      const muzza = new Pizza(1,'muzzarella',["queso","salsa","aceitunas"],1000);
      const napo = new Pizza(2,'napolitana',["queso","salsa","tomatesEnRodajas","aceitunas"],1200);
      const fuga = new Pizza(3,'fugazzeta',["queso","salsa","cebolla","aceitunas"],1500);
      const cala = new Pizza(4,'calabresa',["queso","salsa","cantimpalo","aceitunas"],2000);
      const jaMorron = new Pizza(5,'jamonMorrones',["queso","jamon","morrones","aceitunas"],1800);
      const especial = new Pizza(6,'especial',["queso","salsa","milanesa"],2000);
      
     let comida = [muzza,napo,fuga,cala,jaMorron,especial];

// a) Las pizzas que tengan  un id impar.

 comida.forEach(element => {
    elementoActual= element;
       if (element.id % 2 !== 0){
         // console.log ("Las pizzas con ID impar son: " + element.nombre);
          }
      });

//b) ¿ Hay alguna pizza que valga menos de $600?

comida.forEach(element => {
  elementoActual= element;
     if (element.precio < 600){
       // console.log (element);
        }
    });

//c) El nombre de cad pizza con su respectivo precio.

comida.forEach(element => {
  elementoActual= element;
    //  console.log (`La pizza tipo ${element.nombre} cuesta ${element.precio} pesos`);
    });

// d)  Todos los ingredientes de cada pizza (En cada iteración imprimir
//     los ingredientes de la pizza actual). Ayuda: van a tener que 
//     realizar dos recorridos, ya que cada pizza del array de pizzas
//     tiene un array de ingredientes.

