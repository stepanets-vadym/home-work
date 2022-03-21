# 
+icon("vectorpaint","test test1")
##  
- const linkHref = args && args.href ? args.href : "#"

## быстрый способ создать список
      nav.menu
        ul.menu__list
          each name in ['Главная', 'О компании', 'Услуги', 'Каталог', 'Контакты']
            li.list__item
              a(href="#")= name

# index.html in real time
pug --pretty -w index.pug