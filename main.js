
$(document).ready(function () {

    let valL = $("#longueur").val();
    let valH = $("#hauteur").val();


    $("#form").on('submit', function () {
        //e.preventDefault();

        console.log(valH);

        if(Number.isInteger(valH)) {
            console.log("ok");
        } else {

        }

        //console.log(valH);

    });

});






class Main {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    test() {
        console.log(this.height);
    }

}
