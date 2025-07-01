function buscarCep( ) {


  const cep = document.getElementById('cep').value.replace(/\D/g, '');

  if (cep.length !== 8) {
    alert('CEP inválido. Digite 8 números.');
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      return response.json();
    })
    .then(data => {
      if (data.erro) {
        alert('CEP não encontrado!');
        return;
      }

      // Preenche os campos com os dados da API
      document.getElementById('rua').value = data.logradouro;
      document.getElementById('bairro').value = data.bairro;
      document.getElementById('cidade').value = data.localidade;
      document.getElementById('estado').value = data.uf;
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Erro ao buscar o CEP.');
    });
}
