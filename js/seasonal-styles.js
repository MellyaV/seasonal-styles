$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);

        switch(season){
        
            case "Spring":{
                $("html").css("background-color","#2B7129");
                $("#wear").attr("src","images/spring-wear.jpg");
                $("#logo").attr("src","images/spring.gif");
                $("header h3").text("CHERRY BLOSSOM SEASON <3S");
            };
            break; 

            case "Summer":{
                $("html").css("background-color","#EBA52B");
                $("#wear").attr("src","images/summer-wear.jpg");
                $("#logo").attr("src","images/summer.gif");
                $("header h3").text("Stay Cool This Summner in Style!");
            };
            break; 

            case "Fall":{
                $("html").css("background-color","#A81124");
                $("#wear").attr("src","images/fall-wear.jpg");
                $("#logo").attr("src","images/fall.gif");
                $("header h3").text("Earth Tones to Match the Changing of Leaves");
            };
            break; 

            case "Winter":{
                $("html").css("background-color","#005393");
                $("#wear").attr("src","images/winter-wear.jpg");
                $("#logo").attr("src","images/winter.gif");
                $("header h3").text("Layer up This Winter Time!");
            };
            break; 


            case "Default":{
                $("html").css("background-color","brown");
                $("#wear").attr("src", "https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2016/09/EddieBauer-Originals-Collection-Lead-Full.jpg?crop=0.6701030927835051xw:1xh;center,top&resize=768:*");
                $("#logo").attr("src","images/four-seasons.gif");
                $("header h3").text("Style is Never Out Of Season!");
            };
            break; 


        }
    });
});