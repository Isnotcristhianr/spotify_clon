import{j as n,P as p,a as g}from"./player.1Cndimv7.js";import{u as y}from"./playerStore.C_Wwg2uk.js";import"./index.DHQ29l5n.js";import"./index.CqpTcRZB.js";function j({id:t}){const{currentMusic:i,isPlaying:a,setIsPlaying:o,setCurrentMusic:l}=y(s=>s),r=a&&i.playlistId===t,u=()=>{if(r){o(!1);return}fetch(`/api/get-info-playlist.json?id=${t}`).then(s=>s.json()).then(s=>{const{songs:e}=s,c=e[0];l({playlistId:t,songId:c.id,songs:e}),o(!0)})};return n.jsx("button",{onClick:u,className:"card-play-button rounded-full bg-green-500 p-2",children:r?n.jsx(p,{}):n.jsx(g,{})})}export{j as CardPlayButton};