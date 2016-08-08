// verifica se o objeto possui alguma propriedade
var checkObjectIsEmpty = function(obj) {

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        } //  end if
    } // end for

    return true;

}; // end checkObjectIsEmpty

var padding = function(padArgs) {

    var result = "";

    // Verifica se os argumentos mínimos foram configurados e,
    // na ausência, define os valores padrões

    if (padArgs === undefined || checkObjectIsEmpty(padArgs)) {
        return "";
    } // end if

    if (typeof(padArgs.padInput) !== "string") {
        padArgs.padInput = "";
    } // end if

    if (isNaN(parseInt(padArgs.padLength, 10))) {
        padArgs.padLength = 0;
    } // end if

    if (typeof(padArgs.padString) !== "string" ||
        padArgs.padString.trim() === "") {
        padArgs.padString = " ";
    } // end if

    // define o valor de padSide para RIGHT se não for encontrado um valor
    // válido

    if (typeof(padArgs.padSide) !== "string" || padArgs.padSide === "" || 
        (padArgs.padSide.trim().toUpperCase() !== "RIGHT" && 
        padArgs.padSide.trim().toUpperCase() !== "LEFT" &&
        padArgs.padSide.trim().toUpperCase() !== "BOTH")) {
        padArgs.padSide = "RIGHT";
    } // end if
    
    // converte padString em um array e insere um caractere por vez 
    // observando o valor de padSide
    
    result = padArgs.padInput;
    
    for (var i = 0, count = 1, chars = padArgs.padString.split(""),
        total = padArgs.padLength - padArgs.padInput.trim().length;
        count <= total; i++, count++) {
        
        if (i > (chars.length - 1)) {
            i = 0;
        } // end if
        
        if (padArgs.padSide === "RIGHT" || 
            (padArgs.padSide === "BOTH" && i % 2 === 0)) {
            result += chars[i];
        } // end if
        
        if (padArgs.padSide === "LEFT" || 
            (padArgs.padSide === "BOTH" && i % 2 > 0)) {
            result = chars[i] + result;
        } // end if
        
    } // end for

    return result;
    
}; // end padding
