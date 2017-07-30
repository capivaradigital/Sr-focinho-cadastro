//Codigo de cadastro de dados no firebase
$(document).ready(function () {
    $('#btn-save').on('click', function () {
        let name = $('#name-input').val();
        let urlfb = $('#input-fb').val();
        let urlinsta = $('#input-insta').val();
        let urltt = $('#input-tt').val();
        let cidade = $('#city-input').val();
        let estado = $('#state-input').val();
        let phone_1 = $('#phone-1').val();
        let phone_2 = $('#phone-2').val();
        setValues(name, cidade, estado, phone_1, phone_2, urlfb, urlinsta, urltt);
    });
});
//Setando os valores e condições
function setValues(name, cidade, estado, phone_1, phone_2, fbURL, instaURL, ttURL) {

    if (name == "" || cidade == "" || estado == "" || phone_1 == "" || phone_2 == "") {
        $("#myAlert1").show();
        $("#myAlert1").fadeTo(2000, 500).slideUp(500, function () {
            $("#myAlert1").slideUp(500);
        });
    }
    else {
        ref.child('usuarios/' + name).set({
            nome: name,
            cidade: cidade,
            estado: estado,
            telefone: phone_1,
            celular: phone_2,
            facebook: fbURL,
            instagram: instaURL,
            twitter: ttURL
        })
        $("#myAlert2").show();
        clearInput();
    }
};

//Funcão que limpa os campos após um cadastro.
function clearInput() {
    $('input').each(function () {
        $(this).val('');
    })
};