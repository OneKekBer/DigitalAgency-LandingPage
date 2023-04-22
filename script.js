// // Функция, которая проверяет, находится ли элемент на экране
// function isElementInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
  
//   // Функция, которая добавляет класс "animate" к элементу, если он находится на экране
//   function animateOnScroll() {
//     const animateElements = document.querySelectorAll('.animate-on-scroll');
//     animateElements.forEach((element) => {
//       if (isElementInViewport(element)) {
//         element.classList.add('animate');
//       } else {
//         element.classList.remove('animate');
//       }
//     });
//   }
  
//   // Вызов функции при загрузке страницы
//   document.addEventListener('DOMContentLoaded', () => {
//     animateOnScroll();
//   });
  
//   // Вызов функции при прокрутке страницы
//   window.addEventListener('scroll', () => {
//     setTimeout(() => {
//       animateOnScroll();
//     }, 300);
//   });
  

// Функция, которая проверяет, находится ли элемент на экране
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    console.log(rect);
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Функция, которая добавляет класс "animate" к элементу, если он находится на экране
  function animateOnScroll() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    });
  }
  
  // Вызов функции при загрузке страницы
  document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
  });
  
  // Вызов функции при прокрутке страницы или изменении размера окна
  window.addEventListener('scroll', () => {
    setTimeout(() => {
      animateOnScroll();
    }, 300);
  });
  
  window.addEventListener('resize', () => {
    animateOnScroll();
  });
  