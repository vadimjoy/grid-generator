# grid-generator

1) В консоли: ```node grid-generator ```
2) Cкопировать файл grid.css в проект

Первая буква в ключе массива будет префиксом для группы медиазапросов.
Например desktop: -d

Конкретное разрешение будет соответствовать порядку в массиве.
Например: 1900: -d1; 1440: -d3

#### config.json
```json
{
  "desktop": [
    1900,
    1600,
    1440,
    1366
  ],
  "laptop": [
    1280,
    1024
  ],
  "tablet": [
    800,
    600
  ],
  "mobile": [
    480,
    360
  ]
}
```

## **Grid**
```html
<div class=""></div>

<div class="grid grid-full">
    ...width 100%;
</div>

<div class="grid grid-auto">
    ...width auto;
</div>

<div class="grid grid-float">
    <div class="row">
        <div class="col">
            ...float left
        </div>
    </div>
</div>

<div class="grid grid-float-r">
    <div class="row">
        <div class="col">
            ...float right
        </div>
    </div>
</div>

<div class="grid grid-no-float">
    <div class="row">
        <div class="col">
            ...float none
        </div>
    </div>
</div>

<div class="grid grid-block">
    <div class="row">
        <div class="col">
            ...display block
        </div>
    </div>
</div>

<div class="grid grid-inline">
    <div class="row">
           ..font-size 0
        <div class="col">
            ...display inline-block
        </div>
    </div>
</div>

<div class="grid grid-table">
    ...display table
    <div class="row">
        ...display table-row
        <div class="col">
            ...display table-cell
        </div>
    </div>
</div>

<div class="grid grid-table"> ..or inline
    ...display table
    <div class="row row-top">
        ...display table-row
        <div class="col">
            ...display table-cell
            ..vertical-align top
        </div>
    </div>
</div>

<div class="grid grid-table"> ..or inline
    ...display table
    <div class="row row-middle">
        ...display table-row
        <div class="col">
            ...display table-cell
            ..vertical-align middle
        </div>
    </div>
</div>

<div class="grid grid-table"> ..or inline
    ...display table
    <div class="row row-bottom">
        ...display table-row
        <div class="col">
            ...display table-cell
            ..vertical-align bottom
        </div>
    </div>
</div>

<div class="grid grid-table"> ..or inline
    ...display table
    <div class="row row-base">
        ...display table-row
        <div class="col">
            ...display table-cell
            ..vertical-align baseline
        </div>
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row">
        ...width 100%
        ...display flex
    </div>
</div>

<div class="grid grid-flex grid-inline-flex">
    ...display block
    <div class="row">
        ...width 100%
        ...display inline-flex
    </div>
</div>
```
## For flex grid
### justify-content
```html
<div class="grid grid-flex">
    ...display block
    <div class="row row-start">
        ...justify-content flex-start
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-start">
        ...justify-content flex-start
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-end">
        ...justify-content flex-end
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-center">
        ...justify-content center
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-s-a">
        ...justify-content space-around
    </div>
</div>
```
### align-items
```html
<div class="grid grid-flex">
    ...display block
    <div class="row row-ai-str">
        ...align-items stretch
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-ai-start">
        ...align-items flex-start
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-ai-end">
        ...align-items flex-end
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-ai-center">
        ...align-items center
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-ai-base">
        ...align-items baseline
    </div>
</div>
```
### flex-direction
```html
<div class="grid grid-flex">
    ...display block
    <div class="row row-d">
        ...flex-direction row
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-d-rev">
        ...flex-direction row-reverse
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-d-col">
        ...flex-direction column
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-d-c-rev">
        ...flex-direction column-reverse
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-d-c-rev">
        ...flex-direction column-reverse
    </div>
</div>
```
### flex-wrap
```html
<div class="grid grid-flex">
    ...display block
    <div class="row row-w">
        ...flex-wrap wrap
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-w-no">
        ...flex-wrap nowrap
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-w-rev">
        ...flex-wrap wrap-reverse
    </div>
</div>
```
### align-content
```html
<div class="grid grid-flex">
    ...display block
    <div class="row row-ac-start">
        ...align-content flex-start
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-ac-end">
        ...align-content flex-end
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-ac-center">
        ...align-content flex-center
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-ac-s-b">
        ...align-content space-between
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-ac-s-a">
        ...align-content space-around
    </div>
</div>

<div class="grid grid-flex">
    ...display block
    <div class="row row-ac-str">
        ...align-content stretch
    </div>
</div>
```


## **Columns**
```html
<div class="grid">
    <div class="row">
        <div class="col col-*index*">
            ...width
        </div>
    </div>
</div>
```
```css
.grid > .row > .col.col-0 {
    width: 100%;
}

.grid > .row > .col.col-90 {
    width: 90%;
}

.grid > .row > .col.col-80 {
    width: 80%;
}

.grid > .row > .col.col-70 {
    width: 70%;
}

.grid > .row > .col.col-60 {
    width: 60%;
}

.grid > .row > .col.col-2 {
    width: 50%;
}

.grid > .row > .col.col-45 {
    width: 45%;
}

.grid > .row > .col.col-40 {
    width: 40%;
}

.grid > .row > .col.col-35 {
    width: 35%;
}

.grid > .row > .col.col-3 {
    width: 33.33333333%
}

.grid > .row > .col.col-30 {
    width: 30%;
}

.grid > .row > .col.col-4 {
    width: 25%;
}

.grid > .row > .col.col-5 {
    width: 20%
}

.grid > .row > .col.col-6 {
    width: 16.66666667%;
}

.grid > .row > .col.col-7 {
    width: 14.28571429%;
}

.grid > .row > .col.col-8 {
    width: 12.5%;
}

.grid > .row > .col.col-9 {
    width: 11.11111111%;
}

.grid > .row > .col.col-10 {
    width: 10%;
}

.grid > .row > .col.col-11 {
    width: 9.09090909%;
}

.grid > .row > .col.col-12 {
    width: 8.33333333%;
}

.grid > .row > .col.col-13 {
    width: 7.69230769%;
}

.grid > .row > .col.col-14 {
    width: 7.14285714%;
}

.grid > .row > .col.col-15 {
    width: 6.66666667%;
}

.grid > .row > .col.col-16 {
    width: 6.25%;
}
```