function prices(){
    // Bitcoin price
    $.ajax({url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", success: function(response){
        var btcLast = response.last    
        console.log("BTC average: " + response.last)
      
       

    }});
}