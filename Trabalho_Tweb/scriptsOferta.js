function opcaoCasa() {
    value = document.getElementById("tipoAlojamento").value;
    if (value == "2") {

        document.getElementById("opcaoDeCasa").style.display = "";
    } else {
        document.getElementById("opcaoDeCasa").style.display = "none";
    }
}

$(document).ready(function(){
    $("form").on("submit", function (event) {
        event.preventDefault();

        var formValues = $(this).serialize();

        $.post("http://alunos.di.uevora.pt/tweb/t1/registaoferta", formValues, function (data) {
            if (data.resultado == "ok") {
                alert("O registo foi feito com sucesso.")
            } else {
                alert("O registo não foi feito com sucesso.")
            }
        });
    });
});