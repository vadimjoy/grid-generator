# grid-generator

{
  "desktop": [ - prefix -d (first letter of key)
    1900, - d1 (index of array)
    1600, ..d2
    1440, ..d3
    1366  ..d4
  ],
  "laptop": [ -l
    1280, -l1
    1024 ..l2
  ],
  "tablet": [ -t
    800, -t1
    600 ..t2
  ],
  "mobile": [ -m
    480, -m1
    360 ..m2
  ],
  "other" : [] -o
  ..and for other
}

Grid

.grid-full {
    width: 100%;
}

.grid-auto {
    width: auto;
}

.grid-float > .row > .col {
    float: left;
}

.grid-float-r > .row > .col {
    float: right;
}

.grid-no-float > .row > .col {
    float: none;
}

.grid-block > .row > .col {
    display: block;
}

.grid-inline > .row > .col {
    display: inline-block;
}

.grid-inline > .row {
    font-size: 0;
}

.grid-table {
    display: table;
}

.grid-table > .row {
    display: table-row;
}

.grid-table > .row > .col {
    display: table-cell;
}

.grid-table > .row.row-top > .col,
.grid-inline > .row.row-top > .col {
    vertical-align: top;
}

.grid-table > .row.row-middle > .col,
.grid-inline > .row.row-middle > .col {
    vertical-align: middle;
}

.grid-table > .row.row-middle > .col,
.grid-inline > .row.row-middle > .col {
    vertical-align: bottom;
}

.grid-table > .row.row-base > .col,
.grid-inline > .row.row-base > .col {
    vertical-align: baseline;
}

.grid-flex {
    display: block;
}

.grid-flex > .row {
     width: 100%;
     display: -webkit-flex;
     display: flex;
 }

.grid-inline-flex > .row {
    display: -webkit-inline-flex;
    display: inline-flex
}

.grid-flex > .row.row-start {
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
}

.grid-flex > .row.row-end {
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
}

.grid-flex > .row.row-center {
    -webkit-justify-content: center;
    justify-content: center;
}

.grid-flex > .row.row-s-b {
    -webkit-justify-content: space-between;
    justify-content: space-between;
}

.grid-flex > .row.row-s-a {
    -webkit-justify-content: space-around;
    justify-content: space-around;
}

.grid-flex > .row.row-ai-str {
    -webkit-align-items: stretch;
    align-items: stretch;
}

.grid-flex > .row.row-ai-start {
    -webkit-align-items: flex-start;
    align-items: flex-start;
}

.grid-flex > .row.row-ai-end {
    -webkit-align-items: flex-end;
    align-items: flex-end;
}

.grid-flex > .row.row-ai-center {
    -webkit-align-items: center;
    align-items: center;
}

.grid-flex > .row.row-ai-base {
    -webkit-align-items: baseline;
    align-items: baseline;
}

.grid-flex > .row.row-d {
    -webkit-flex-direction: row;
    flex-direction: row;
}

.grid-flex > .row.row-d-rev {
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
}

.grid-flex > .row.row-d-col {
    -webkit-flex-direction: column;
    flex-direction: column;
}

.grid-flex > .row.row-d-c-rev {
    -webkit-flex-direction: column-reverse;
    flex-direction: column-reverse;
}

.grid-flex > .row.row-w {
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
}

.grid-flex > .row.row-w-no {
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
}

.grid-flex > .row.row-w-rev {
    -webkit-flex-wrap: wrap-reverse;
    flex-wrap: wrap-reverse;
}

/* With flex-direction & flex-wrap*/
.grid-flex > .row.row-ac-start {
    -webkit-align-content: flex-start;
    align-content: flex-start;
}

.grid-flex > .row.row-ac-end {
    -webkit-align-content: flex-end;
    align-content: flex-end;
}

.grid-flex > .row.row-ac-center {
    -webkit-align-content: center;
    align-content: center;
}

.grid-flex > .row.row-ac-s-b {
    -webkit-align-content: space-between;
    align-content: space-between;
}

.grid-flex > .row.row-ac-s-a {
    -webkit-align-content: space-around;
    align-content: space-around;
}

.grid-flex > .row.row-ac-str {
    -webkit-align-content: stretch;
    align-content: stretch;
}

Columns

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