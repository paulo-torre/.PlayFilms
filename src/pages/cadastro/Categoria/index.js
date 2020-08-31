import React, { useState, useEffect } from 'react';
import PageDefault3 from '../../../components/PageDefault/index3';
import FormField from '../../../components/FormField';
import ButtonCadastrar from '../../../components/Menu/components/ButtonLink/cadastrar';
import '../../../components/Menu/Menu.css';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'), 
      infosDoEvento.target.value
    );
  }

  useEffect(() => {
    // const URL_TOP = 'https://localhost:8080/categorias';
    // fetch(URL_TOP)            
    //   .then(async (respostaDoServidor) => {
    //     const resposta = await respostaDoServidor.json();
    //     setCategorias([
    //       ...resposta,
    //     ]);
    //   });

    setTimeout(() => {
      setCategorias([
        ...categorias,
          {
            "id": 1,
            "nome": "Front",
            "descricao": "qualquer coisa"
          },
          {
            "id": 2,
            "nome": "Back End",
            "descricao": "qualquer outra coisa"
          },
      ]);
    }, 1 * 1000);
  }, []);

  return(
    <PageDefault3>
      <h1>Cadastro de Categoria: <span>{values.nome}</span> </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
      }}>

        <FormField 
          label = "Nome da Categoria:"
          name = "nome"
          value = {values.nome}
          onChange = {handleChange}
        />

        <FormField 
          label = "Descrição:"
          type = "textarea"
          name = "descricao"
          value = {values.descricao}
          onChange = {handleChange}
        />

        <div>
          <ButtonCadastrar as="button" className="ButtonCadastrar">
            Cadastrar
          </ButtonCadastrar>
        </div>

        {categorias.length === 0 && (
          <div>
            Carregando...
          </div>
        )}

        <ul>
          {categorias.map((categoria) => {
            return(
              <li key={`${categoria.nome}`}>
                {categoria.nome}
              </li>
            );
          })}
        </ul>

      </form>
        

    </PageDefault3>  
  );
}


export default CadastroCategoria;