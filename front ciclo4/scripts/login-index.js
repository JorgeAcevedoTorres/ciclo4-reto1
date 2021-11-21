const changeDiv = (opc) => {
    $('.div').css('display', 'none')
    $(opc).css('display', 'block');
}

const verifyUser = () => {
    $.ajax({
        url: "http://localhost:8080/api/User/"+$("#email1").val()+"/"+$("#pass1").val(),
        method: "GET",
        dataType: "json",
        success: function (datos) {
            if(datos.id==null){
                alert("Email o contraseña incorrectos")
            }/* else{
                let cont=0
                ter(cont, datos.name)
            } */
        }
    })
}

const verifyEmail = () => {
    $.ajax({
        url: "http://localhost:8080/api/User/"+$("#email").val(),
        method: "GET",
        dataType: "json",
        success: function (datos) {
            if(datos){
                $(".rEmail").html("El email ya existe")
                validations(0)
            }else{
                $(".rEmail").html("")
                validations(1)
            }
        }
    })
}

const validations = (num) => {
    let correct=num;
    if($("#pass").val().length<6){
        $(".rPass").html("La contraseña debe tener minimo 6 caracteres")
    }else{
        $(".rPass").html("")
        correct++
    }

    if($("#pass").val() != $("#passConfirm").val()){
        $(".rConfirmPass").html("Las contraseñas no coinciden")
    }else{
        $(".rConfirmPass").html("")
        correct++
    }

    if(correct==3){
        registerClient()
    }
    correct=0
}

const registerClient = () =>{
    myData={ 
        email:$("#email").val(),
        password:$("#pass").val(),
        name:$("#name").val()
    };
    $.ajax({
        url: "http://localhost:8080/api/User/new",
        type:"POST",
        data: JSON.stringify(myData),
        contentType:'application/JSON',
        success: function(respuesta){
            alert("Registro exitoso")
            /* window.location.href="index.html" */
        }
    });
}