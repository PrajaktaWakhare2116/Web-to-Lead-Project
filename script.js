let capchachecked = false;


function beforesubmit(event){
    if(capchachecked){
        let outputdate = document.querySelector(".outputdate");
        let inputdate = document.querySelector(".inputdate");
        console.log("inputdate.value" ,inputdate.value);

        let formatedDate = new Date(inputdate.value).toLocaleDateString("en-IN"); // this gives the date in indian  format
        outputdate.value = formatedDate;
    }else{
        alert("Please checked the reCAPTCHA box to submit the lead");
        event.preventDefault();
    }
    
}  

function timestamp() {
     var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(
            document.getElementsByName("captcha_settings")[0].value
        );
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    } }
     setInterval(timestamp, 500); 

function captchasuccess()  {
    capchachecked = true;
}   
