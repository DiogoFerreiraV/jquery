$(document).ready(function(){
    $("#botao").click(function(){
        $("#texto").css("color","blue");
        $("#texto").css("text-decoration","underline");
        $("#texto").css("padding","10px");
        $("#texto").css("background-color","#ccc");
    });
});

/*Agora vamos entender um pouco do script. Primeiro
verificamos se o documento estava pronto em: $(document).
ready(). Se o resultado for positivo ele chama uma*/