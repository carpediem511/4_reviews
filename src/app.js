let reviews = [
  {
    title: "Лендинг для школы английского языка",
    stack: "Адаптивная вёрстка с использованием html5, css3",
    text: "У тебя всё очень хорошо получается, видно прогресс. Молодец, что дополнительно разобралась с формой - это очень полезный и важный навык уметь самостоятельно находить информацию. Отличное форматирование кода и хорошая вёрстка! Очень здорово, что используешь семантические теги, огромный плюс!",
    author: "Сапожникова Лилия Евгеньевна, основатель онлайн-школы программирования BitByBit",
    date: "февраль, 2022 год",
  },

  {
    title: "Вёрстка формы",
    stack: "Адаптивная вёрстка с использованием html5, css3 и BEM",
    text: "Посмотрела форму. В целом мне нравится, всё логично и понятно. Наверное, хотелось бы чуть понятнее названия классов, но понимаю, что это сложно подбирать. Нравится, что используешь переменные и псевдоклассы, получились кастомные чекбоксы. И, главное, форма работает и корректно отправляются значения!",
    author: "Сапожникова Лилия Евгеньевна, основатель онлайн-школы программирования BitByBit",
    date: "март, 2022 год",
  },

  {
    title: "Сайт для стоматологической клиники",
    stack: "Адаптивная вёрстка с использованием html, css и BEM",
    text: "Понравилась структура вёрстки и форматирование. Отлично получились градиенты и тени. Всё отлично выровнено по сетке - тут вообще нет замечаний по выравниваю элементов, идеально! Отдельный плюс за использование git, вижу много коммитов. И огромный плюс, конечно, за кастомный домен. Очень аккуратно и хорошо вышла адаптивная вёрстка, учитывая ещё то, что её надо было придумать самостоятельно. Сделать отдельную папку для стилей и изображений - тоже правильное решение. Работа одна из лучших, очень здорово получилось! Молодец!",
    author: "Сапожникова Лилия Евгеньевна, основатель онлайн-школы программирования BitByBit",
    date: "апрель, 2022 год",
  },

  {
    title: "Сайт для школы танцев",
    stack: "Адаптивная вёрстка с использованием html, css и BEM",
    text: "Всё получилось настолько идеально, что у меня даже почти нет замечаний! И на любых экранах тоже всё отлично работает. Получилась лучшая работа, я очень довольна результатом!! Вижу и коммиты, и свой домен, и на сайте всё аккуратно оформлено по макету. Мобильная версия тоже отличная! Можно перетягивать размер экрана в Chrome и наслаждаться!",
    author: "Сапожникова Лилия Евгеньевна, основатель онлайн-школы программирования BitByBit",
    date: "май, 2022 год",
  },
]

const content = document.getElementById("project-reviews")

let currentIndex = 0

let buttonRight = document.getElementById("button-right")

let buttonLeft = document.getElementById("button-left")

buttonRight.addEventListener("click", () => {
  
  let review = reviews[0]

  let currentReview = reviews[currentIndex]

  currentIndex = currentIndex + 1

  content.innerHTML = ` 
  
    <div class="review">
  
                      <div class="review-image"><img class="review-person" src="/images/photo-person.png"/></div>
      
                      <div class="review-list">
  
                        <div> <img class="review-point" src="/images/points.png"/> </div>
                        <div class="review-title">${review.title}</div>
                        <div class="review-stack">${review.stack}</div>
                        <div class="review-text">${review.text}</div>
                        <div class="review-author">${review.author}</div>
      
                        <div class="reviewDateArray">
                          <div class="review-date">${review.date}</div>
                          <button id="button-right"> <img class="review-button" src="/images/icon-right.png" /> </button>
                          <button id="button-left"> <img class="review-button" src="/images/icon-left.png" /> </button>
                        </div>
                      </div>
                  </div>
  `
})
