import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import me from 'img/me.png';
import ptnhl from 'img/putin-huilo.png';

export const huiloMove = keyframes`
 0% { left: 700px }
 100% { left: -80px }
`;
export const jumpHero = keyframes`
 0% { top: 150px }
 50% {top: 0px}
 100% { top: 150px }
`;

export const Title = styled.div`
text-align: center;
font-weight: 900;
font-size: 50px;
width: 800px;
margin: 50px auto 0px auto;
`;

export const Game = styled.div`
width: 800px;
height: 350px;
border-bottom: 2px solid black;
margin: auto;
`;

export const Me = styled.div`
width: 450px;
height: 350px;
background-image: url(${me});
background-size: 450px 250px;
background-repeat: no-repeat;
position: relative;
top: 150px;
left: -100px;
`;

export const PtnHl = styled.div`
width: 80px;
height: 80px;
background-image: url(${ptnhl});
background-size: 80px 80px;
background-repeat: no-repeat;
position: relative;
top: -80px;
left: 700px;
 animation-name: ${huiloMove};
 animation-duration: 2s;
 animation-iteration-count: infinite;
`;

export const Jump = styled.div`
 animation-name: ${jumpHero};
 animation-duration: 1s;
`;

export const MeMe = styled.div`
width: 450px;
height: 350px;
background-image: url(${me});
background-size: 450px 250px;
background-repeat: no-repeat;
position: relative;
top: 100px;
left: -100px;
 animation-name: ${jumpHero};
 animation-duration: 1s;
`;