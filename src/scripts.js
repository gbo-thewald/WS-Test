/**
 * Created by Guido Bothe on 09.03.2015.
 */
function moveOn(){
    $(".d1").animate({
        left: "+=200",
        top: "+=200",
        width: "+=100",
        height: "+=100"
    }, 800);
}

$(".btn1").click(function(){
    moveOn();
});
