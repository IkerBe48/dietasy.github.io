//NO FUNCIONA
function f_monocromatico() {
    const button = document.getElementById("btnaccesibilidad");

    button.addEventListener("click", () => {
        const cuerpo = document.body;
        const temaActual = cuerpo.dataset.theme;
        cuerpo.dataset.theme = temaActual === "dark" ? "light" : "dark";
        button.setAttribute("aria-pressed", true);

        setTimeout(() => {
            button.setAttribute("aria-pressed", false);
        }, 1000);
    });

    button.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === "Space") {
            event.preventDefault();
            button.click();
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
        const cuerpo = document.body;
        const tema =
            window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light";
        cuerpo.dataset.theme = tema;
        button.setAttribute("aria-pressed", tema === "dark");
    });
}

const button = document.getElementById("btnaccesibilidad");
button.addEventListener("click", f_monocromatico);