$(document).ready(
    function () {
        $.ajax({
            url: "http://alunos.di.uevora.pt/tweb/t1/roomsearch", method: "POST", data: { tipo: 'oferta' }, success: function (data) {
                var ofertas = Object.keys(data.resultados).map(v => ({ [v]: { ...data.resultados[v] } }));
                var ofertas_size = ofertas.length;

                var index = ofertas_size - 3;
                index = index.toString();

                var myJSON = ofertas[ofertas_size - 3][index];

                $("#primeira_oferta .tipo_alojamento").append(myJSON.tipo_alojamento);
                $("#primeira_oferta .detalhes").append(myJSON.detalhes);
                $("#primeira_oferta .zona").append(myJSON.zona);
                $("#primeira_oferta .genero").append(myJSON.genero);
                $("#primeira_oferta .preco").append(myJSON.preco + "€");
                $("#primeira_oferta .anunciante").append(myJSON.anunciante);
                $("#primeira_oferta .contacto").append(myJSON.contacto);
                $("#primeira_oferta .data").append(myJSON.data);
                $("#primeira_oferta .estado").append(myJSON.estado);
                $("#primeira_oferta .aid").append(myJSON.aid);

                index = ofertas_size - 2;
                index = index.toString();
                myJSON = ofertas[ofertas_size - 2][index]

                $("#segunda_oferta .tipo_alojamento").append(myJSON.tipo_alojamento);
                $("#segunda_oferta .detalhes").append(myJSON.detalhes);
                $("#segunda_oferta .zona").append(myJSON.zona);
                $("#segunda_oferta .genero").append(myJSON.genero);
                $("#segunda_oferta .preco").append(myJSON.preco + "€");
                $("#segunda_oferta .anunciante").append(myJSON.anunciante);
                $("#segunda_oferta .contacto").append(myJSON.contacto);
                $("#segunda_oferta .data").append(myJSON.data);
                $("#segunda_oferta .estado").append(myJSON.estado);
                $("#segunda_oferta .aid").append(myJSON.aid);

                index = ofertas_size - 1;
                index = index.toString();
                myJSON = ofertas[ofertas_size - 1][index]

                $("#terceira_oferta .tipo_alojamento").append(myJSON.tipo_alojamento);
                $("#terceira_oferta .detalhes").append(myJSON.detalhes);
                $("#terceira_oferta .zona").append(myJSON.zona);
                $("#terceira_oferta .genero").append(myJSON.genero);
                $("#terceira_oferta .preco").append(myJSON.preco + "€");
                $("#terceira_oferta .anunciante").append(myJSON.anunciante);
                $("#terceira_oferta .contacto").append(myJSON.contacto);
                $("#terceira_oferta .data").append(myJSON.data);
                $("#terceira_oferta .estado").append(myJSON.estado);
                $("#terceira_oferta .aid").append(myJSON.aid);
            }
        });
    }
);

$(document).ready(
    function () {
        $.ajax({
            url: "http://alunos.di.uevora.pt/tweb/t1/roomsearch", method: "POST", data: { tipo: 'procura' }, success: function (data) {

                var procuras = Object.keys(data.resultados).map(v => ({ [v]: { ...data.resultados[v] } }));
                var procuras_size = procuras.length;

                var index = procuras_size - 3;
                index = index.toString();

                var myJSON = procuras[procuras_size - 3][index];

                $("#primeira_procura .tipo_alojamento").append(myJSON.tipo_alojamento);
                $("#primeira_procura .detalhes").append(myJSON.detalhes);
                $("#primeira_procura .zona").append(myJSON.zona);
                $("#primeira_procura .genero").append(myJSON.genero);
                $("#primeira_procura .preco").append(myJSON.preco + "€");
                $("#primeira_procura .anunciante").append(myJSON.anunciante);
                $("#primeira_procura .contacto").append(myJSON.contacto);
                $("#primeira_procura .data").append(myJSON.data);
                $("#primeira_procura .estado").append(myJSON.estado);
                $("#primeira_procura .aid").append(myJSON.aid);

                index = procuras_size - 2;
                index = index.toString();
                myJSON = procuras[procuras_size - 2][index]

                $("#segunda_procura .tipo_alojamento").append(myJSON.tipo_alojamento);
                $("#segunda_procura .detalhes").append(myJSON.detalhes);
                $("#segunda_procura .zona").append(myJSON.zona);
                $("#segunda_procura .genero").append(myJSON.genero);
                $("#segunda_procura .preco").append(myJSON.preco + "€");
                $("#segunda_procura .anunciante").append(myJSON.anunciante);
                $("#segunda_procura .contacto").append(myJSON.contacto);
                $("#segunda_procura .data").append(myJSON.data);
                $("#segunda_procura .estado").append(myJSON.estado);
                $("#segunda_procura .aid").append(myJSON.aid);

                index = procuras_size - 1;
                index = index.toString();
                myJSON = procuras[procuras_size - 1][index]

                $("#terceira_procura .tipo_alojamento").append(myJSON.tipo_alojamento);
                $("#terceira_procura .detalhes").append(myJSON.detalhes);
                $("#terceira_procura .zona").append(myJSON.zona);
                $("#terceira_procura .genero").append(myJSON.genero);
                $("#terceira_procura .preco").append(myJSON.preco + "€");
                $("#terceira_procura .anunciante").append(myJSON.anunciante);
                $("#terceira_procura .contacto").append(myJSON.contacto);
                $("#terceira_procura .data").append(myJSON.data);
                $("#terceira_procura .estado").append(myJSON.estado);
                $("#terceira_procura .aid").append(myJSON.aid);
            }
        });
    }
);

function validateSearchBar() {
    var input = document.getElementById("search_bar").value;

    if (input == "") {
        alert("Introduza o que pretende procurar.");
        return false;
    } else {
        return true;
    }
}


var anuncios = null;
var anuncios_size = null;

$(document).ready(function () {
    $("#search").on("submit", function (event) {
        event.preventDefault();

        if (validateSearchBar()) {
            var input = $(this).serialize();

            $.post("http://alunos.di.uevora.pt/tweb/t1/roomsearch", input, function (data) {
                anuncios = data.resultados;
                anuncios_size = anuncios.length;

                var page_number = Math.ceil(anuncios_size / 4);

                $("#principal").html("");
                $("#principal").append("<br>");
                $("#principal").append("<div id=\"pagination\"></div>");

                for (let i = 1; i <= page_number; i++) {
                    $("#pagination").append("<a id=\" " + i + " \"  onclick=\"showPage(" + i + ")\">" + i + "</a>");
                }

                $("#pagination").css({
                    "display": "inline-block",
                    "display": "flex",
                    "flex-direction": "row",
                    "margin-left": "3%"
                })

                $("#pagination a").css({
                    "color": "white",
                    "float": "left",
                    "padding": "8px 16px",
                    "text-decoration": "none",
                    "border-radius": "5px",
                    "background-color": "rgba(56, 138, 170, 0.904)",
                    "margin": "0 4px"
                })

                $("#principal").append("<div id= \"anuncios\" ></div>");

                showPage(1);

                $("#principal").append("<div class=\"detalhes\"></div>");
            })
        }
    })
});

function showPage(page_number) {

    $("#anuncios").html("");
    $("#anuncios").append("<br>");

    for (let i = 0, j = anuncios_size - (page_number - 1) * 4 - 1; j >= 0 && i < 4; j--, i++) {
        $("#anuncios #" + i + "").text("");

        var anuncio = anuncios[j];

        $("#anuncios").append("<a onclick=\"showDetails(" + anuncio.aid + ")\"><div id=\"" + i + "\" ></div></a>");

        $("#anuncios #" + i + "").append("<img src=\"images/logo.svg\" alt=\"some text\" width=220 height=120> <br>");
        $("#anuncios #" + i + "").append("Tipo de alojamento: " + anuncio.tipo_alojamento + "<br>");
        $("#anuncios #" + i + "").append("Detalhes: " + anuncio.detalhes + "<br>");
        $("#anuncios #" + i + "").append("Zona: " + anuncio.zona + "<br>");
        $("#anuncios #" + i + "").append("Genero: " + anuncio.genero + "<br>");
        $("#anuncios #" + i + "").append("Preço: " + anuncio.preco + "€" + "<br>");
        $("#anuncios #" + i + "").append("Anunciante: " + anuncio.anunciante + "<br>");
        $("#anuncios #" + i + "").append("Contacto: " + anuncio.contacto + "<br>");
        $("#anuncios #" + i + "").append("Data: " + anuncio.data + "<br>");
        $("#anuncios #" + i + "").append("Estado: " + anuncio.estado + "<br>");
        $("#anuncios #" + i + "").append("Aid: " + anuncio.aid + "<br><br>");

        $("#principal #" + i + "").css({
            "color": "white",
            "font-size": "17px",
            "background-color": "rgba(56, 138, 170, 0.904)",
            "border": "1px solid #000000",
            "box-shadow": "0 4px 8px 0 black, 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            "margin": "0% 1% 1% 3%",
            "display": "inline-block",
            "width": "45%",
            "text-align": "center"
        });

    }
}

function showDetails(adNumber) {

    $(".detalhes").text("");
    $(".detalhes").append("<h1 id=\"tituloDetalhes\">Detalhes</h1>");
    $("#tituloDetalhes").css({ "margin-left": "3%" });
    $(".detalhes").append("<div id=\"atributos\"></div>");

    $.ajax({
        url: "http://alunos.di.uevora.pt/tweb/t1/anuncio", method: "POST", data: { aid: adNumber }, success: function (data) {

            $(".detalhes #atributos").append("<img src=\"images/logo.svg\" alt=\"some text\" width=220 height=120> <br>");
            $(".detalhes #atributos").append("Tipo de alojamento: " + data.anuncio.tipo_alojamento + "<br>");
            $(".detalhes #atributos").append("Detalhes: " + data.anuncio.detalhes + "<br>");
            $(".detalhes #atributos").append("Zona: " + data.anuncio.zona + "<br>");
            $(".detalhes #atributos").append("Genero: " + data.anuncio.genero + "<br>");
            $(".detalhes #atributos").append("Preço: " + data.anuncio.preco + "€" + "<br>");
            $(".detalhes #atributos").append("Anunciante: " + data.anuncio.anunciante + "<br>");
            $(".detalhes #atributos").append("Contacto: " + data.contacto + "<br>");
            $(".detalhes #atributos").append("Data: " + data.anuncio.data + "<br>");
            $(".detalhes #atributos").append("Estado: " + data.anuncio.estado + "<br><br>");

            $(".detalhes #atributos").css({
                "color": "white",
                "font-size": "17px",
                "background-color": "rgba(56, 138, 170, 0.904)",
                "border": "1px solid #000000",
                "box-shadow": "0 4px 8px 0 black, 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                "margin": "0% 1% 1% 3%",
                "width": "45%",
                "float": "left",
                "text-align": "center"
            });

            $(".detalhes").append("<h1>Contactar</h1>");
            $(".detalhes").append("<form id=\"mensagem\"> <p>Aid:  <input type=\"number\" name=\"aid\" maxlenght=\"3\"></p> <p>Remetente:  <input type=\"text\" name=\"remetente\"></p> <p>Mensagem:  <input type=\"text\" name=\"msg\"></p> <input type=\"submit\" value=\"Submeter\"></form>");

            submit();
        }
    });
}

function submit() {

    $("#mensagem").on("submit", function (event) {
        event.preventDefault();

        var formValues = $(this).serialize();

        $.post("http://alunos.di.uevora.pt/tweb/t1/contactar", formValues, function (data) {
            if (data.resultado == "ok") {
                alert("A mensagem foi enviada");
            } else {
                alert("A mensagem não foi enviada");
            }
        });
    });

}