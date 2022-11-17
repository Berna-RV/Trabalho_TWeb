$(document).ready(function(){
    $.ajax({
        url:"http://alunos.di.uevora.pt/tweb/t1/mensagens", success: function(data){
            $("#principal").append(data);
        }
    });
})