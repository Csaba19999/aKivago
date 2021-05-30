$(document).ready(function () {
    $("#gomb").click(function () {
        var szoveg = $("#szoveg").val();
        var tomb = [];
        
        for (var i = 0; i < szoveg.length; i++) {
            if (szoveg[i] !== 'a' && szoveg[i] !== 'A') {
                tomb.push(szoveg[i]);
            }
        }
        $('#resoult').append(tomb.toString());
        
    });
});
