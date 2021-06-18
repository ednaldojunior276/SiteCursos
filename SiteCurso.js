function Entrar(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha");
    let sen = Number(senha.value);

        if(sen <= 0 && email.length == ""){
            alert("PREENCHA OS CAMPOS!!");
        }
        else if(sen <=  0){
            alert("PREENCHA A SENHA!");

        }
        else if (email.length == ""){
            alert("PREECHA O E-MAIL!");

        }
    }

        function mudafoto(foto){
         document.getElementById("im").src = foto;

        }
       
        







