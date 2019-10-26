$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.parallax').parallax();
});

cordova.plugins.barcodeScanner.scan(
    function (result) {
        alert("A barcode has been scanned \n" +
              "Result: " + result.text + "\n" +
              "Format: " + result.format + "\n" +
              "Cancelled: " + result.cancelled);
    }, 
    function (error) {
        alert("Scanning failed: " + error);
    }
);
cordova.plugins.barcodeScanner.scan(
    function (result) {
         if(!result.cancelled){
                if(result.format == "QR_CODE"){
                     var value = result.text;
                     console.log(value);
                }else{
                   alert("Sorry, only qr codes this time ;)");
                }
         }else{
           alert("The user has dismissed the scan");
         }
      },
      function (error) {
           alert("An error ocurred: " + error);
      }
 );