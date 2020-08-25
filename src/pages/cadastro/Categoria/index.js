import React from 'react';
import PageDefault3 from '../../../components/PageDefault/index3';

function CadastroCategoria() {
  return(
    <PageDefault3>
      <h1>Cadastro de Categoria:</h1>

      <form>
        <label>
          Nome da Categoria:
          <input 
            type="text"
          />
        </label>

        
        <button>
          Cadastrar
       </button>

      </form>
    </PageDefault3>  
  );
}


export default CadastroCategoria;