import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
//import 'swiper/css/pagination';

import 'normalize.css';

import '../scss/main.scss';



// import Swiper and modules styles


// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination]
  
});
