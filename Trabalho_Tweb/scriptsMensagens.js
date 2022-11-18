$(document).ready(function () {

    $("#searchMessage").on("submit", function (event) {
        event.preventDefault();

        $("#mensagens").html("");

        var data = { aid: document.getElementById("search_bar").value }
        $.post({
            url: "http://alunos.di.uevora.pt/tweb/t1/mensagens", data, success: function (data) {

                if (data.resultado == "ok") {
                    $("#mensagens").append("<h2>Mensagens:</h2>");

                    var mensagens = data.msgs;
                    var mensagens_size = mensagens.length;

                    if (mensagens_size < 1) {
                        $("#mensagens").append("<p>Não há mensagens para ler</p>");
                    } else {
                        for (let i = 0; i < mensagens.length; i++) {
                            $("#mensagens").append("<div id=\"" + i + "\"></div>");

                            $("#" + i).append("Remetente: " + mensagens[i].remetente + "<br>");
                            $("#" + i).append("Mensagem: " + mensagens[i].msg + "<br>");

                            $("#" + i).css({
                                "color": "white",
                                "font-size": "18px",
                                "background-color": "rgba(56, 138, 170, 0.904)",
                                "border": "1px solid #000000",
                                "box-shadow": "0 4px 8px 0 black, 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                "margin": "2% 1% 1% 2%",
                                "display": "inline-block",
                                "width": "33%",
                                "text-align": "center",
                                "border-radius": "15px"
                            });


                        }
                    }
                }else{
                    alert("Erro na leitura das mensagens");
                }
            }
        });
    });

})