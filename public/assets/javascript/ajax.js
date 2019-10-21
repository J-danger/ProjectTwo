function prices(){
    // Bitcoin price
    $.ajax({url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", success: function(response){
    console.log(response)    
    var btcLast = response.last    
        console.log("BTC average: " + btcLast)
      
       

    }});
}

prices();

// function prices(){
//     // Bitcoin price
//     $.ajax({url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", success: function(response){
//         var btcLast = response.last    
//         console.log(btcLast)
//         $("#bitcoinLast").html('$'+ btcLast);
//         var btcHigh = response.high    
//         console.log(btcHigh)
//         $("#bitcoinHigh").html('$'+ btcHigh);
//         var btcLow = response.low    
//         console.log(btcLow)
//         $("#bitcoinLow").html('$'+ btcLow);
//         var btcVol = response.volume    
//         console.log(btcVol + ' (BTC)')
//         $("#bitcoinVol").html('$'+ Math.round(btcVol * btcLast));
//         var btcAverageMonth = response.averages.month    
//         console.log(btcAverageMonth)
//         $("#btcAverageMonth").html('$'+ btcAverageMonth);
//         var btcAverageMonthPercentage = response.changes.percent.month    
//         console.log(btcAverageMonthPercentage)
//         if (btcAverageMonthPercentage > 0 ){
//         $("#btcAverageMonthPercentage").html(btcAverageMonthPercentage  + '%').css('color', 'green');
//         } else {
//         $("#btcAverageMonthPercentage").html(btcAverageMonthPercentage  + '%').css('color', 'red');
//         }
//         var today = new Date();
//         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();  
//         $("#btcTime").html(time)

//     }});
// }

// prices();