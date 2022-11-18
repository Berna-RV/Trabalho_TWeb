var ativos=null;
var inativos=null;

$(document).ready(function(){
    $.post("http://alunos.di.uevora.pt/tweb/t1/gereanuncios", function(data){
        ativos=data['ativo'];
        inativos= data['inativo'];

        $(".pagination").append("<a onclick=\"showAtivos()\">Ativos</a><a onclick=\"showInativos()\">Inativos</a>");
    })
})

function showAtivos(){
    $(".ads").html("");
    $(".ads").append("<br>");

    for(let i=ativos.length-1; i>=0; i--){

        $(".ads").append("<div id=\"" + i + "\"></div>");

        let aid= ativos[i];

        $(".ads #" + i + "").append("Aid:" + aid + "<br>");
        $(".ads #" + i + "").append("<a onclick=\"modifyAdStateFromAtivo(" + aid  + ")\">Alterar</a>");
        $(".ads #" + i + "").append("<br><br>");

        $(".ads #" + i + "").css({
            "color": "white",
            "font-size": "17px",
            "background-color": "rgba(56, 138, 170, 0.904)",
            "border": "1px solid #000000",
            "box-shadow": "0 4px 8px 0 black, 0 6px 20px 0 rgba(0, 0, 0, 0.19)", 
            "margin": "0% 1% 1% 3%",
            "display":"inline-block",
            "width": "10%",
            "text-align": "center"
        });

        $(".ads a").css({
            "color": "black",
            "font-size": "17px",
            "background-color": "white",
            "border": "1px solid #000000",
            "margin": "0% 1% 1% 3%",
            "display":"inline-block",
            "text-align": "center",
            "border-radius": "5px"
        });
    }
}

function showInativos(){
    $(".ads").html("");
    $(".ads").append("<br>");

    for(let i=inativos.length-1; i>=0; i--){

        $(".ads").append("<div id=\"" + i + "\"></div>");

        let aid=inativos[i];

        $(".ads #" + i + "").append("Aid:" + aid + "<br>");
        $(".ads #" + i + "").append("<a onclick=\"modifyAdStateFromInativo(" + aid  + ")\">Alterar</a>");
        $(".ads #" + i + "").append("<br><br>");

        $(".ads #" + i + "").css({
            "color": "white",
            "font-size": "17px",
            "background-color": "rgba(56, 138, 170, 0.904)",
            "border": "1px solid #000000",
            "box-shadow": "0 4px 8px 0 black, 0 6px 20px 0 rgba(0, 0, 0, 0.19)", 
            "margin": "0% 1% 1% 3%",
            "display":"inline-block",
            "width": "10%",
            "text-align": "center"
        });

        $(".ads a").css({
            "color": "black",
            "font-size": "17px",
            "background-color": "white",
            "border": "1px solid #000000",
            "margin": "0% 1% 1% 3%",
            "display":"inline-block",
            "text-align": "center",
            "border-radius": "5px"
        });
    }
}
function modifyAdStateFromAtivo(aid){
    alert(JSON.stringify(aid));
}

function modifyAdStateFromInativo(aid){
    alert(JSON.stringify(aid));
}
