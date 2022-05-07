// *Створити сторінку, що показує нумерований список пісень:
const createElement = (tagName) => document.createElement(tagName);

var playList = [
  {
    author: 'LED ZEPPELIN',
    song: 'STAIRWAY TO HEAVEN',
  },
  {
    author: 'QUEEN',
    song: 'BOHEMIAN RHAPSODY',
  },
  {
    author: 'LYNYRD SKYNYRD',
    song: 'FREE BIRD',
  },
  {
    author: 'DEEP PURPLE',
    song: 'SMOKE ON THE WATER',
  },
  {
    author: 'JIMI HENDRIX',
    song: 'ALL ALONG THE WATCHTOWER',
  },
  {
    author: 'AC/DC',
    song: 'BACK IN BLACK',
  },
  {
    author: 'QUEEN',
    song: 'WE WILL ROCK YOU',
  },
  {
    author: 'METALLICA',
    song: 'ENTER SANDMAN',
  },
];

const playListList = document.getElementById('js-playList-list');
const showPlayList = () => {
  
  // let test = '';
  playList.forEach((item) => {
    // li.innerText = item.author
    let li = createElement('li');
    li.innerText = item.song
    playListList.appendChild(li);
    
  });
};
showPlayList();

export { playList };
