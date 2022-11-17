$(document).ready(function(){
    $.get("http://alunos.di.uevora.pt/tweb/t1/gereanuncios", function(data){
        alert(data);
    })
})