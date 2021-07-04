import React, {Fragment} from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>Não temos Serviços disponiveis no momento</p>;
  return (
    <Fragment>
      <h2 className='list-head'>Serviços Disponiveis</h2>
      <table className="table table-striped"  >
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Preço</th>
              <th />
            </tr>
          </thead>  
          <tbody>      
            {repos.map((repo) => {
                return (
                <tr key={repo.id}>
                    <td className='repo-text'>{repo.id} </td>
                    <td className='repo-description'>{repo.tipo}</td>
                    <td className='repo-description'>{repo.preco}</td>
                </tr>
                );
            })}      
        </tbody>
      </table>
    </Fragment>
  );
};
export default List;
