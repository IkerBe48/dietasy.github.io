
function redirigeAIndex() {
    // Mira si el correo y la contraseña estan rellenados
    if (document.getElementById("email").value !== "" && document.getElementById("password").value !== "") {
        // Redirige a la pagina principal
        window.location.href = "../index.html";
        // Previene el submit
        return false;
    }
    // Si no estan rellenados, hace el submit
    return true;
}