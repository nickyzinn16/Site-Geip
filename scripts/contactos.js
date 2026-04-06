document.getElementById("btn-topo").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!email.includes("@")) {
        alert("Por favor, insira um email válido.");
        event.preventDefault();
        return;
    }

    alert("Formulário enviado com sucesso!");
});