document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;

    const resultado = `
        <p>Nome: ${nome}</p>
        <p>Email: ${email}</p>
        <p>Idade: ${idade}</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
});
