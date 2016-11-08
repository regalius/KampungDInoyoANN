function changeContent(content){
    $("#loading").show();
    $("#loading").css({opacity:1});
    $("#main").load(content,function(){
        $("#loading").animate({opacity:1},1500,function(){
            $("#loading").hide();
        });
    });
}

$(document).ready(function(){
    $("#formNav").addClass("active");
    changeContent("form.php");
});
$("header nav a").click(function(e){
    e.preventDefault();
    changeContent($(this).attr("href"));
    $("header nav a").removeClass("active");
    $(this).addClass("active");
});

$(document).on("submit","#formAnalisis",function(e){
    e.preventDefault();
    $("#loading").show();
    $("#loading").css({opacity:1});
    var tipeKerajinan = $("#tipeKerajinan").val();
    var tahun         = $("#tanggal").val().split("-")[0], bulan = $("#tanggal").val().split("-")[1];
    if(tahun !=null && bulan !=null){
        $.post("result.php",
               {tipeKerajinan   : tipeKerajinan,
                tahun           : tahun,
                bulan           : bulan
               },
               function(data){
                   $("#main").empty().append(data);
                   $("#loading").animate({opacity:0},1500,function(){
                        $("#loading").hide();
                   });
               }
              );
    }
/*$("#main").load("result.php","data",function(responseText,textSattus,XMLHttpRequest){
        
    });*/
});