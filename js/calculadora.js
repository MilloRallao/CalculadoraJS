var count = 0;
var operacion = 0;
var op1 = 0;
var op2 = 0;
var result = 0;

$(document).ready(function () {
    // Escribir numero
    $(".input").click(function () {
        if ($("div").hasClass("output2")) {
            if (count <= 6) {
                $(".output2").text($(".output2").text() + $(this).text());
                count++;
            }
        } else {
            if (count <= 6) {
                $(".output").text($(".output").text() + $(this).text());
                count++;
            }
        }
    });

    // Escribir coma
    $(".key-dot").click(function () {
        if ($("div").hasClass("output2")) {
            if (count <= 6) {
                $(".output2").text($(".output2").text() + ".");
                $(".key-dot").addClass("disabled").attr("disabled", true);
            }
            count++;
        } else {
            if (count <= 6) {
                $(".output").text($(".output").text() + ".");
                $(".key-dot").addClass("disabled").attr("disabled", true);
            }
            count++;
        }
    });

    // Borrar numero
    $(".key-delete").click(function () {
        if (($(".output").text().length) > 0) {
            if ($("div").hasClass("output2")) {
                if ($(".output2").text().substr($(".output2").text().length - 1).includes(",")) {
                    $(".output2").text($(".output2").text().substring(0, $(".output2").text().length - 1));
                    $(".key-dot").removeClass("disabled").attr("disabled", false);
                } else {
                    $(".output2").text($(".output2").text().substring(0, $(".output2").text().length - 1));
                }
                count = count - 1;
            } else {
                if ($(".output").text().substr($(".output").text().length - 1).includes(",")) {
                    $(".output").text($(".output").text().substring(0, $(".output").text().length - 1));
                    $(".key-dot").removeClass("disabled").attr("disabled", false);
                } else {
                    $(".output").text($(".output").text().substring(0, $(".output").text().length - 1));
                }
                count = count - 1;
            }
        }

    });

    // Borrar todo
    $(".key-clear").click(function () {
        $(".output").text("");
        $("div[class='output2']").remove();
        $("div[class='output']").children().remove();
        $(".output").css("transform", "scale(1, 1)");
        $(".output").css("transform-origin", "right");
        $(".output").css("padding", "0 30px");
        $(".output").css("float", "none");
        count = 0;
        operacion = 0;
        $("div[class='operator-keys']").children().removeClass("disabled").attr("disabled", false);
        $("div[class='digit-keys']").children().removeClass("disabled").attr("disabled", false);
        $(".key-delete").removeClass("disabled").attr("disabled", false);
    });

    // Escribir dividir
    $(".key-divide").click(function () {
        if (count > 0 && operacion < 1) {
            count = 0;
            operacion = 1;
            op1 = $(".output").text().substring(0, $(".output").text().length - 1);
            $(".output").css("transform", "scale(0.4, 0.4)");
            $(".output").css("transform-origin", "top right");
            $(".output").css("padding", "0 60px");
            $(".output").css("float", "right");
            $(".output").append("<br><p class='signo' style='transform: scale(0.6, 0.6); transform-origin: right top; float: right;'>%</p><br>");
            $(".calculator-display").append("<div class='output2' style='display: inline-block !important; transform: scale(0.4, 0.4); transform-origin: bottom right; padding: 0 60px; float: right'></div>");
            $(".key-divide").addClass("disabled").attr("disabled", true);
            $(".key-dot").removeClass("disabled").attr("disabled", false);
        } else {
            if (operacion > 1) {
                switch (operacion) {
                    case 2:
                        $(".key-multiply").removeClass("disabled").attr("disabled", false);
                        $(".key-divide").addClass("disabled").attr("disabled", true);
                        $(".signo").text("%");
                        operacion = 1;
                        break;
                    case 3:
                        $(".key-subtract").removeClass("disabled").attr("disabled", false);
                        $(".key-divide").addClass("disabled").attr("disabled", true);
                        $(".signo").text("%");
                        operacion = 1;
                        break;
                    case 4:
                        $(".key-add").removeClass("disabled").attr("disabled", false);
                        $(".key-divide").addClass("disabled").attr("disabled", true);
                        $(".signo").text("%");
                        operacion = 1;
                        break;
                }
            } else {
                alert("Escribe algún número");
            }
        }
    });

    // Escribir multiplicar
    $(".key-multiply").click(function () {
        if (count > 0 && operacion < 1) {
            count = 0;
            operacion = 2;
            op1 = $(".output").text().substring(0, $(".output").text().length - 1);
            $(".output").css("transform", "scale(0.4, 0.4)");
            $(".output").css("transform-origin", "top right");
            $(".output").css("padding", "0 60px");
            $(".output").css("float", "right");
            $(".output").append("<br><p class='signo' style='transform: scale(0.6, 0.6); transform-origin: right top; float: right;'>X</p><br>");
            $(".calculator-display").append("<div class='output2' style='display: inline-block !important; transform: scale(0.4, 0.4); transform-origin: bottom right; padding: 0 60px; float: right'></div>");
            $(".key-multiply").addClass("disabled").attr("disabled", true);
            $(".key-dot").removeClass("disabled").attr("disabled", false);
        } else {
            if (operacion != 2 && operacion != 0) {
                switch (operacion) {
                    case 1:
                        $(".key-divide").removeClass("disabled").attr("disabled", false);
                        $(".key-multiply").addClass("disabled").attr("disabled", true);
                        $(".signo").text("X");
                        operacion = 2;
                        break;
                    case 3:
                        $(".key-subtract").removeClass("disabled").attr("disabled", false);
                        $(".key-multiply").addClass("disabled").attr("disabled", true);
                        $(".signo").text("X");
                        operacion = 2;
                        break;
                    case 4:
                        $(".key-add").removeClass("disabled").attr("disabled", false);
                        $(".key-multiply").addClass("disabled").attr("disabled", true);
                        $(".signo").text("X");
                        operacion = 2;
                        break;
                }
            } else {
                alert("Escribe algún número");
            }
        }
    });

    // Escribir restar
    $(".key-subtract").click(function () {
        if (count > 0 && operacion < 1) {
            count = 0;
            operacion = 3;
            op1 = $(".output").text().substring(0, $(".output").text().length - 1);
            $(".output").css("transform", "scale(0.4, 0.4)");
            $(".output").css("transform-origin", "top right");
            $(".output").css("padding", "0 60px");
            $(".output").css("float", "right");
            $(".output").append("<br><p class='signo' style='transform: scale(0.6, 0.6); transform-origin: right top; float: right;'>-</p><br>");
            $(".calculator-display").append("<div class='output2' style='display: inline-block !important; transform: scale(0.4, 0.4); transform-origin: bottom right; padding: 0 60px; float: right'></div>");
            $(".key-subtract").addClass("disabled").attr("disabled", true);
            $(".key-dot").removeClass("disabled").attr("disabled", false);
        } else {
            if (operacion != 3 && operacion != 0) {
                switch (operacion) {
                    case 1:
                        $(".key-divide").removeClass("disabled").attr("disabled", false);
                        $(".key-subtract").addClass("disabled").attr("disabled", true);
                        $(".signo").text("-");
                        operacion = 3;
                        break;
                    case 2:
                        $(".key-multiply").removeClass("disabled").attr("disabled", false);
                        $(".key-subtract").addClass("disabled").attr("disabled", true);
                        $(".signo").text("-");
                        operacion = 3;
                        break;
                    case 4:
                        $(".key-add").removeClass("disabled").attr("disabled", false);
                        $(".key-subtract").addClass("disabled").attr("disabled", true);
                        $(".signo").text("-");
                        operacion = 3;
                        break;
                }
            } else {
                alert("Escribe algún número");
            }
        }
    });

    // Escribir sumar
    $(".key-add").click(function () {
        if (count > 0 && operacion < 1) {
            count = 0;
            operacion = 4;
            op1 = $(".output").text().substring(0, $(".output").text().length - 1);
            $(".output").css("transform", "scale(0.4, 0.4)");
            $(".output").css("transform-origin", "top right");
            $(".output").css("padding", "0 60px");
            $(".output").css("float", "right");
            $(".output").append("<br><p class='signo' style='transform: scale(0.6, 0.6); transform-origin: right top; float: right;'>+</p><br>");
            $(".calculator-display").append("<div class='output2' style='display: inline-block !important; transform: scale(0.4, 0.4); transform-origin: bottom right; padding: 0 60px; float: right'></div>");
            $(".key-add").addClass("disabled").attr("disabled", true);
            $(".key-dot").removeClass("disabled").attr("disabled", false);
        } else {
            if (operacion != 4 && operacion != 0) {
                switch (operacion) {
                    case 1:
                        $(".key-divide").removeClass("disabled").attr("disabled", false);
                        $(".key-add").addClass("disabled").attr("disabled", true);
                        $(".signo").text("+");
                        operacion = 4;
                        break;
                    case 2:
                        $(".key-multiply").removeClass("disabled").attr("disabled", false);
                        $(".key-add").addClass("disabled").attr("disabled", true);
                        $(".signo").text("+");
                        operacion = 4;
                        break;
                    case 3:
                        $(".key-subtract").removeClass("disabled").attr("disabled", false);
                        $(".key-add").addClass("disabled").attr("disabled", true);
                        $(".signo").text("+");
                        operacion = 4;
                        break;
                }
            } else {
                alert("Escribe algún número");
            }
        }
    });

    // Calcular Resultado
    $(".key-equals").click(function () {
        op1 = $(".output").text().substring(0, $(".output").text().length - 1);
        op2 = $(".output2").text().substring(0, $(".output2").text().length);
        switch (operacion) {
            case 1:
                result = parseFloat(op1) / parseFloat(op2);
                $(".output").text(result);
                $("div[class='output2']").remove();
                $("div[class='output']").children().remove();
                $(".output").css("transform", "scale(1, 1)");
                $(".output").css("transform-origin", "right");
                $(".output").css("padding", "0 30px");
                $(".output").css("float", "none");
                $("div[class='operator-keys']").children().addClass("disabled").attr("disabled", true);
                $("div[class='digit-keys']").children().addClass("disabled").attr("disabled", true);
                $(".key-delete").addClass("disabled").attr("disabled", true);
                break;
            case 2:
                result = parseFloat(op1) * parseFloat(op2);
                $(".output").text(result);
                $("div[class='output2']").remove();
                $("div[class='output']").children().remove();
                $(".output").css("transform", "scale(1, 1)");
                $(".output").css("transform-origin", "right");
                $(".output").css("padding", "0 30px");
                $(".output").css("float", "none");
                $("div[class='operator-keys']").children().addClass("disabled").attr("disabled", true);
                $("div[class='digit-keys']").children().addClass("disabled").attr("disabled", true);
                $(".key-delete").addClass("disabled").attr("disabled", true);
                break;
            case 3:
                result = parseFloat(op1) - parseFloat(op2);
                $(".output").text(result);
                $("div[class='output2']").remove();
                $("div[class='output']").children().remove();
                $(".output").css("transform", "scale(1, 1)");
                $(".output").css("transform-origin", "right");
                $(".output").css("padding", "0 30px");
                $(".output").css("float", "none");
                $("div[class='operator-keys']").children().addClass("disabled").attr("disabled", true);
                $("div[class='digit-keys']").children().addClass("disabled").attr("disabled", true);
                $(".key-delete").addClass("disabled").attr("disabled", true);
                break;
            case 4:
                result = parseFloat(op1) + parseFloat(op2);
                $(".output").text(result);
                $("div[class='output2']").remove();
                $("div[class='output']").children().remove();
                $(".output").css("transform", "scale(1, 1)");
                $(".output").css("transform-origin", "right");
                $(".output").css("padding", "0 30px");
                $(".output").css("float", "none");
                $("div[class='operator-keys']").children().addClass("disabled").attr("disabled", true);
                $("div[class='digit-keys']").children().addClass("disabled").attr("disabled", true);
                $(".key-delete").addClass("disabled").attr("disabled", true);
                break;
        }
    });
});
