import React, { useState } from 'react';
import './App.css';

const Botao = () => {

  const [botoes, setBotoes] = useState(Array(9).fill(''));
  const [turno, setTurno] = useState('X');


  const handleClick = (index) => {

    if (botoes[index] !== '') return;


    const novosBotoes = [...botoes];
    // Atualiza o botão clicado com o valor do turno atual
    novosBotoes[index] = turno;
    
    // Atualiza o estado dos botões
    setBotoes(novosBotoes);
    
    // Altera o turno para o próximo jogador
    setTurno(turno === 'X' ? 'O' : 'X');
  };

  return (
    <div>
      <h2>Jogo da Velha</h2>
      <h3>agora é a vez do {turno}!</h3>
      <h4>O jogo ainda não tem como ganhar :(</h4>
      <div className="grid-container">
        {botoes.map((texto, index) => (
          <button 
            key={index} 
            onClick={() => handleClick(index)} 
            className="grid-item"
          >
            {texto}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Botao;
