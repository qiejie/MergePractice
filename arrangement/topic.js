let topicsArray=[
    "上課",
    "上課",
    "連假",
    "不上課",
    "上課",
    "不上課"
];

let startDate = new Date();

//函數建立
function setMonthAndDay(startMonth, startDay)
{
     //一次設定好月分與日期
     startDate.setMonth(startMonth - 1,startDay);
     //時間先忽略,設為0
     startDate.setHours(0);
     startDate.setMinutes(0);
     startDate.setSeconds(0);
}

//函數呼叫

//$("#datepicker1").datepicker();改成現在日期
//setMonthAndDay(3,7);//自己設定時間