//Tomar datos por api. Esta implementacion devuelve 1 resultado random
//solo informacion genero, nombre, ubicacion, email, foto y celular.

fetch('https://randomuser.me/api/?inc=gender,name,location,email,cell,picture')
  .then((response) => response.json())
  .then((data) => {
    for (const persona of data.results) {
        
        //Establecemos nombre
        document.getElementById("nombre").innerHTML = persona.name.first;

        //Establecemos apellido
        document.getElementById("apellido").innerHTML = persona.name.last;

        //Establecemos genero
        document.getElementById("genero").innerHTML = persona.gender;

        //Establecemos email
        document.getElementById("email").innerHTML = persona.email;

        //Establecemos direccion
        document.getElementById("direccion").innerHTML = persona.location.street.name + ' ' + persona.location.street.number;

        //Establecemos contacto
        document.getElementById("contacto").innerHTML = persona.cell;

        //Establecemos la foto
        document.getElementById("foto_perfil").src = persona.picture.large;

        }
  });

//Funcion click para botones por clase
let elements = document.getElementsByClassName("btn btn-primary");
for (var i = 0 ; i < elements.length; i++) {
      elements[i].addEventListener('click' , click , false ) ; 
   };

function click(){
        if(this.id == "tecnologia" || this.id == "cursos")
        {
                document.getElementById("exp_descripcion").className = "card invisible";
                document.getElementById("puesto").innerHTML = "";
                document.getElementById("habilidades_descripcion").className = "card visible";
        }
        else
        {
                document.getElementById("exp_descripcion").className = "card visible";
                document.getElementById("habilidades_descripcion").className = "card invisible";
                document.getElementById("habilidades").innerHTML = "";
        }
        switch(this.id)
        {  
                case "2022":
                        document.getElementById("puesto").innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";  
                break;
                case "2019":
                        document.getElementById("puesto").innerHTML = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";
                break;

                case "2018":
                        document.getElementById("puesto").innerHTML = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.";
                break;

                case "2011":
                        document.getElementById("puesto").innerHTML = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.";
                break;

                case "tecnologia":
                        document.getElementById("habilidades").innerHTML = "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem";
                break;

                case "cursos":
                        document.getElementById("habilidades").innerHTML = "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.";
                break;
        }
  }
