const changeDiv = (opc) => {
    $('.div').css('display', 'none')
    $(opc).css('display', 'block');
}

function validations(num){
    let correct=num;
    if($("#pass").val() != $("#passConfirm").val()){
        $(".rPass").html("Las contraseñas no coinciden")
    }else{
        $(".rPass").html("")
        correct++
    }
    if(correct==2){
        registerClient()
    }
    correct=0
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