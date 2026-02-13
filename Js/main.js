$(document).ready(function () {

    // Mensaje motivador
    $("#btnMotivar").click(function () {
        $("#mensaje").fadeToggle();
    });

    // Noticias
    $("#btnNoticias").click(function () {

        let noticias = [
            "Nuevo reto de 30 días",
            "Competencia regional abierta",
            "Rutina HIIT avanzada",
            "Plan nutricional deportivo"
        ];

        $("#listaNoticias").empty();

        noticias.forEach(function (n) {

            $("#listaNoticias").append(
                "<li class='list-group-item bg-dark text-white'>" + n + "</li>"
            );

        });

    });

    // Formulario
    $("#formContacto").submit(function (e) {

        e.preventDefault();

        let nombre = $("#nombre").val();

        $("#respuesta")
            .text("Gracias " + nombre + ", pronto te contactamos 💪")
            .show();

        this.reset();

    });

});
// Modo claro / oscuro
$("#btnTema").click(function () {

    $("body").toggleClass("light-mode");

});

