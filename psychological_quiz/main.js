//主要程式運作
$(document).ready(function()
{
    //建立currentQuiz,儲存目前作答到第幾題
    let currentQuiz = null;

    //當按下按鈕後,要做的事情放在這裡面
    $("#startButton").click(function()
    {
        //如果還沒作答
        if(currentQuiz == null)
        {
            currentQuiz = 0;
            //顯示題目
            $("#question").text(questions[0].question);

            //清空選項區域(不加這行玩第一次不會有問題)
            $("#options").empty();

            //加入選項
            for(let x = 0; x < questions[0].answers.length; x++)
            {
                $("#options").append(//用append 把選項內容放到options
                    "<input name = 'options' type = 'radio' value ="+x+"> "+//點擊選擇這個按鈕 裡面的選擇的內容x
                    "<label>"+questions[0].answers[x][0]+//第零題的第x個選項的內容
                    "</label><br><br>"//br->空行(換行)
                );
            }
            //將按鈕文字換成Next 或 下一題
            $("#startButton").attr("value", "Next");//.attr-->更動按鈕的屬性 把value(開始作答)改成next
        }
        else
        {//若已開始作答
            
            //確認每個選項是否有被選取
            $.each(//每一個屬性為radio的input抓過來看看
                $(":radio"),function(i, val)//val 
                {
                    if(val.checked)//如果被勾選到 val__check為true
                    {
                        //分成是否已產生最終結果A~D
                        if(isNaN(questions[currentQuiz].answers[i][1]))//is_not_a_number 
                        {
                            //通往最終成果
                            let finalResult = questions[currentQuiz].answers[i][1];

                            //顯示最終成果的標題
                            $("#questions").text(finalAnswers[finalResult][0]);

                            //清空選項區域
                            $("#options").empty();

                            //顯示最終成果的內容
                            $("#options").append(finalAnswers[finalResult][1] +　"<br><br>");

                            //將目前作答到第幾題的變數清空
                            currentQuiz = null;

                            //修改按鈕重新開始
                            $("#startButton").attr("value","Restart");
                        }
                        else
                        {
                            //下一個顯示的題目,原始資料是從1開始,所以-1
                            currentQuiz = questions[currentQuiz].answers[i][1] - 1;//下一題的數字

                            //顯示新題目
                            $("#question").text(questions[currentQuiz].question);

                            //清空舊的選項內容
                            $("#options").empty();

                            //顯示新的選項內容
                            for(let x = 0; x < questions[currentQuiz].answers.length; x++)
                            {
                                $("#options").append(
                                    "<input name = 'options' type = 'radio'  value ="+
                                    x+
                                    "<label>"+questions[currentQuiz].answers[x][0]+
                                    "</label><br><br>"
                                );
                            }
                        }
                        //完成後便可跳離迴圈
                        return false;
                    }
                }
            );

        }
    });
});