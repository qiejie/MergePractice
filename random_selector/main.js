/*window.onload=function()
{
    //this.document.write("Hello JavaScript");\

   
}*/
$(document).ready(function()
{//若有人按按鈕,執行這些動作
    $("input").click(function()
    {
        //Math.random():0~0.9999xxx
        //0~0.999xxx*3 = 0~2.9999
        //變成整數 =>0,1,2
        //alert("Hi");
        //$("H1").text("Hello");
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);//向下整數
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());//get
        $("#random-pic").attr("src", pictures[randomChildNumber]);//attr() 抓取圖片的屬性以及改變圖片的路徑
    });
});