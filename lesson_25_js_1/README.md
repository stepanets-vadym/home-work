# teamplate
teamplate for development

## Install projects
npm i
sass watcher
pug -w index.pug

# быстрый способ создать список
      nav.menu
        ul.menu__list
          each name in ['Главная', 'О компании', 'Услуги', 'Каталог', 'Контакты']
            li.list__item
              a(href="#")= name

# index.html in real time
pug --pretty -w index.pug