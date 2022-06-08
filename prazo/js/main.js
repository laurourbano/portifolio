    var data = Array.prototype.slice.call(document.querySelectorAll('.data'));
    var prazo = Array.prototype.slice.call(document.querySelectorAll('.prazo'));
    console.log(data);
    console.log(prazo);
    function calculaPrazo(data, prazo){
        var dataFim = data + prazo;
        return dataFim;
    }
    calculaPrazo(data, prazo);
   