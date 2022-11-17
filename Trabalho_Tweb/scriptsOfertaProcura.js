function opcaoCasa() {
    value = document.getElementById("tipoAlojamento").value;
    if (value == "2") {

        document.getElementById("opcaoDeCasa").style.display = "";
    } else {
        document.getElementById("opcaoDeCasa").style.display = "none";
    }
}