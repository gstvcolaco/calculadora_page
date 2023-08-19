let displayvalue="";

function inserirvalor(value){
    displayvalue += value;  
    document.getElementById('display').value=displayvalue;
}
function limpar(){
    displayvalue="";
    document.getElementById('display').value="";
}
function calculate(){
    try{
        const result=
        eval(displayvalue);
        document.getElementById("display").value=result;
        displayvalue=
        result.toString();
    }catch(error){
        document.getElementById("display").value=Error
    }
    }