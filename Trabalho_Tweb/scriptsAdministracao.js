var ativos=null;
var inativos=null;

$(document).ready(function(){
    $.post("http://alunos.di.uevora.pt/tweb/t1/gereanuncios", function(data){
        ativos=data['ativo'];
        inativos= data['inativo'];

        $(".pagination").append("<a onclick=\"showAtivos()\">Ativos</a><a onclick=\"showInativos()\">Inativos</a>");
        $("#tituloAdministracao").css({"margin-left":"2%"});
        $("#botoesPaginacao").css({"margin-left":"2%"});
    })
})

function showAtivos(){
    $(".ads").html("");
    $(".ads").append("<br>");

    for(let i=ativos.length-1; i>=0; i--){

        $(".ads").append("<div id=\"" + i + "\"></div>");

        let aid= ativos[i];

        $(".ads #" + i + "").append("<br>"+"Aid: " + aid );
        $(".ads #" + i + "").append("<a onclick=\"modifyAdStateFromInativo(" + aid  + ")\">- Alterar -</a>");
        $(".ads #" + i + "").append("<br><br>");

        $(".ads #" + i + "").css({
            "color": "white",
            "font-size": "18px",
            "background-color": "rgba(56, 138, 170, 0.904)",
            "border": "1px solid #000000",
            "box-shadow": "0 4px 8px 0 black, 0 6px 20px 0 rgba(0, 0, 0, 0.19)", 
            "margin": "2% 1% 1% 2%",
            "display":"inline-block",
            "width": "11%",
            "text-align": "center",
            "border-radius": "15px"
        });

        $(".ads a").css({
            "color": "black",
            "font-size": "17px",
            "background-color": "white",
            "border": "1px solid #000000",
            "width": "75%",
            "margin": "0% 0% 0% 0%",
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

        $(".ads #" + i + "").append("<br>"+"Aid: " + aid );
        $(".ads #" + i + "").append("<a onclick=\"modifyAdStateFromInativo(" + aid  + ")\">- Alterar -</a>");
        $(".ads #" + i + "").append("<br><br>");

        $(".ads #" + i + "").css({
            "color": "white",
            "font-size": "18px",
            "background-color": "rgba(56, 138, 170, 0.904)",
            "border": "1px solid #000000",
            "box-shadow": "0 4px 8px 0 black, 0 6px 20px 0 rgba(0, 0, 0, 0.19)", 
            "margin": "2% 1% 1% 2%",
            "display":"inline-block",
            "width": "11%",
            "text-align": "center",
            "border-radius": "15px"
        });

        $(".ads a").css({
            "color": "black",
            "font-size": "17px",
            "background-color": "white",
            "border": "1px solid #000000",
            "width": "75%",
            "margin": "0% 0% 0% 0%",
            "display":"inline-block",
            "text-align": "center",
            "border-radius": "5px"
        });
    }
}

function modifyAdStateFromAtivo(aid){
    var descricao= prompt("Descrição:");
    var data= {aid: aid, estado:'ativo', descricao: descricao};

    $.post({url:"http://alunos.di.uevora.pt/tweb/t1/controloanuncio", data, success: function(data){
        alert(data);
        if(data.resultado =="ok"){
            alert("Alteração feita com sucesso");
        }else{
            alert("Erro na execução da alteração (não inclua caracteres acentuados na descrição)");
        }
    }});
}

function modifyAdStateFromInativo(aid){
    var descricao= prompt("Descrição:");
    var data= {aid: aid, estado:'inativo', descricao: descricao};

    $.post({url:"http://alunos.di.uevora.pt/tweb/t1/controloanuncio", data, success: function(data){
        alert(data);
        if(data.resultado =="ok"){
            alert("Alteração feita com sucesso");
        }else{
            alert("Erro na execução da alteração (não inclua caracteres acentuados na descrição)");
        }
    }});
}
