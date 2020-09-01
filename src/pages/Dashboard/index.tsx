import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/55854682?s=460&u=3bdc9c2aa804022a2ae3655edc23fe6cd640ab39&v=4"
            alt="Matheus Gaspar"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Código do nono módulo do Bootcamp LaunchBase rocket</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/55854682?s=460&u=3bdc9c2aa804022a2ae3655edc23fe6cd640ab39&v=4"
            alt="Matheus Gaspar"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Código do nono módulo do Bootcamp LaunchBase rocket</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/55854682?s=460&u=3bdc9c2aa804022a2ae3655edc23fe6cd640ab39&v=4"
            alt="Matheus Gaspar"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Código do nono módulo do Bootcamp LaunchBase rocket</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
