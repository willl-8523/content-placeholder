const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" alt="laptop-img" />';

  title.innerHTML = 'Lorem ipsum dolor sit amet.';

  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, quam.';

  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/50.jpg" alt="profile-img" />';

  name.innerHTML = 'John Doe';

  date.innerHTML = 'Oct 08, 2020';

  animated_bgs.forEach((bg) => {
    bg.classList.remove('animated-bg');
  });

  animated_bg_texts.forEach((bg) => {
    bg.classList.remove('animated-bg-text');
  });
}
