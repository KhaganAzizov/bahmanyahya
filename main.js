function sendmail(){
    alert("sendmailq");
    alert(document.getElementById("mailname").value);
    if( document.getElementById("mailname").value !=='' && document.getElementById("mailemail").value !== ''&&document.getElementById("mailtext").value){
        alert("perfect");
        var txt=document.getElementById("mailtext").value +"%0D%0A"+document.getElementById("mailname").value ;
        window.open('mailto:azizovkhgn@gmail.com?subject=WebContact'+'&body='+txt);
    }
}
