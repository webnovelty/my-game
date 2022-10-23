import safe from 'img/safeme.png';
import gameover from 'img/gameover.png';
import { useEffect, useState } from 'react';
import { Footer, Game, Me, PtnHl, Title } from './App.styled';

const App = () => {
  const meSelf = document.getElementsByClassName('meHero');
  const putinHuilo = document.getElementsByClassName('huilo');

  const [enter, setEnter] = useState(false);
  const [welcome, setWelcome] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const jump = () => {
    if (meSelf[0].classList !== 'jump') {
      meSelf[0].classList.add('jump');
    }
    setTimeout(() => {
      meSelf[0].classList.remove('jump');
    }, 600);
  };

  useEffect(() => {
    const keyDown = e => {
      if (e.code === 'Enter') {
        setEnter(true);
        setWelcome(false);
      }
    };
    window.addEventListener('keydown', keyDown);
    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, []);

  useEffect(() => {
    const keyDown = e => {
      if (e.code === 'Space') {
        jump();
      }
    };
    window.addEventListener('keydown', keyDown);
    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  });

  useEffect(() => {
    setInterval(function () {
      const meSelfTop = parseInt(
        window.getComputedStyle(meSelf[0]).getPropertyValue('top')
      );
      const putinHuiloTop = parseInt(
        window.getComputedStyle(putinHuilo[0]).getPropertyValue('left')
      );
      console.log(putinHuiloTop);
      if (putinHuiloTop === 70 && putinHuiloTop > 0 && meSelfTop >= 140) {
        setGameOver(true);
      }
    }, 10);
  });

  useEffect(() => {
    if (!gameOver) {
      return;
    }
    const keyDown = e => {
      if (e.code === 'Enter') {
        setGameOver(false);
        setEnter(true);
        setWelcome(false);
      }
    };
    window.addEventListener('keydown', keyDown);
    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [gameOver]);

  return (
    <>
      <main>
        {gameOver && (
          <>
            <Title>НЕ СПИ!, хочешь еще? ЖМИ Enter! :)</Title>
            <img src={gameover} alt="safe" />
          </>
        )}
        {welcome && !gameOver && (
          <>
            <Title>Чтобы начать, тыкни на Enter :)</Title>
            <img src={safe} alt="safe" />
          </>
        )}

        {enter && !gameOver && (
          <>
            <Title>Тыкай пробел чтобы прыгнуть</Title>
            <Game>
              <Me className="meHero"></Me>
              <PtnHl className="huilo"></PtnHl>
            </Game>
          </>
        )}
      </main>
      <Footer>v1.2 Спасти рядового Анатолия &#169; 2022</Footer>
    </>
  );
};

export default App;
