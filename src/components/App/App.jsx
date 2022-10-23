import { Game, Me, MeMe, PtnHl, Title } from './App.styled';
import { useEffect, useState } from 'react';

const App = () => {
	const [jump, setJump] = useState(false);
	const [enter, setEnter] = useState(false);
	const [welcome, setWelcome] = useState(true);

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
  },[]);

	useEffect(() => {
		
		const keyDown = e => {
			if (e.code === 'Space') {
				setJump(true);
			}
		}
		window.addEventListener('keydown', keyDown);
		setTimeout(() => { setJump(false) }, 700);
		return () => {
			window.removeEventListener('keydown', keyDown)
		};	
	});


	return (
    <main>
      {welcome && <Title>Чтобы начать, тыкни на Enter :)</Title>}

      {enter && (
        <>
          <Title>Тыкай пробел чтобы прыгнуть</Title>
          <Game>
            {jump && <MeMe></MeMe>}
            {!jump && <Me></Me>}
            <PtnHl></PtnHl>
          </Game>
        </>
      )}
    </main>
  );
};

export default App;
