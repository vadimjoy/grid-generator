const config = require('./config.json');
const path = require('path');
const fs = require('fs');

class Generator {
    constructor(config) {
        this.config = config;
        this.display = {};
        this.output = 'grid.css';

        let temp = fs.readFileSync(path.resolve('./source/grid.css'));
        fs.writeFileSync(this.output, temp);

        this.model_media = (res, prefix) => {
            return `

@media (min-width: ${res + 1}px) {
    .h-gte${prefix} {
        display: none!important;
    }
}

@media (max-width: ${res}px) {
    .grid-full${prefix} {
        width: 100%;
    }

    .grid-auto${prefix} {
        width: auto;
    }

    .grid-float${prefix} > .row > .col {
        float: left;
    }

    .grid-float-r${prefix} > .row > .col {
        float: right;
    }

    .grid-no-float${prefix} > .row > .col {
        float: none;
    }

    .grid-block${prefix} > .row > .col {
        display: block;
    }

    .grid-inline${prefix} > .row > .col {
        display: inline-block;
    }

    .grid-inline${prefix} > .row {
        font-size: 0;
    }

    .grid-table${prefix} {
        display: table;
    }

    .grid-table${prefix} > .row {
        display: table-row;
    }

    .grid-table${prefix} > .row > .col {
        display: table-cell;
    }

    .grid-table${prefix} > .row.row-top > .col {
        vertical-align: top;
    }

    .grid-table${prefix} > .row.row-middle > .col {
        vertical-align: middle;
    }

    .grid-table${prefix} > .row.row-bottom > .col {
        vertical-align: bottom;
    }

    .grid-table${prefix} > .row.row-base > .col {
        vertical-align: baseline;
    }

    .grid-flex${prefix} {
        display: block;
    }

    .grid-flex${prefix} > .row {
        display: -webkit-flex;
        display: flex;
    }

    .grid-flex > .row.row-start${prefix} {
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
    }

    .grid-flex > .row.row-end${prefix} {
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
    }

    .grid-flex > .row.row-center${prefix} {
        -webkit-justify-content: center;
        justify-content: center;
    }

    .grid-flex > .row.row-s-b${prefix} {
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }

    .grid-flex > .row.row-s-a${prefix} {
        -webkit-justify-content: space-around;
        justify-content: space-around;
    }

    .grid-flex > .row.row-ai-str${prefix} {
        -webkit-align-items: stretch;
        align-items: stretch;
    }

    .grid-flex > .row.row-ai-start${prefix} {
        -webkit-align-items: flex-start;
        align-items: flex-start;
    }

    .grid-flex > .row.row-ai-end${prefix} {
        -webkit-align-items: flex-end;
        align-items: flex-end;
    }

    .grid-flex > .row.row-ai-center${prefix} {
        -webkit-align-items: center;
        align-items: center;
    }

    .grid-flex > .row.row-ai-base${prefix} {
        -webkit-align-items: baseline;
        align-items: baseline;
    }

    .grid-flex > .row.row-d${prefix} {
        -webkit-flex-direction: row;
        flex-direction: row;
    }

    .grid-flex > .row.row-d-rev${prefix} {
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
    }

    .grid-flex > .row.row-d-col${prefix} {
        -webkit-flex-direction: column;
        flex-direction: column;
    }

    .grid-flex > .row.row-d-c-rev${prefix} {
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
    }

    .grid-flex > .row.row-w${prefix} {
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .grid-flex > .row.row-w-no${prefix} {
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }

    .grid-flex > .row.row-w-rev${prefix} {
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
    }

    .grid-flex > .row.row-ac-start${prefix} {
        -webkit-align-content: flex-start;
        align-content: flex-start;
    }

    .grid-flex > .row.row-ac-end${prefix} {
        -webkit-align-content: flex-end;
        align-content: flex-end;
    }

    .grid-flex > .row.row-ac-center${prefix} {
        -webkit-align-content: center;
        align-content: center;
    }

    .grid-flex > .row.row-ac-s-b${prefix} {
        -webkit-align-content: space-between;
        align-content: space-between;
    }

    .grid-flex > .row.row-ac-s-a${prefix} {
        -webkit-align-content: space-around;
        align-content: space-around;
    }

    .grid-flex > .row.row-ac-str${prefix} {
        -webkit-align-content: stretch;
        align-content: stretch;
    }

    .h-lte${prefix} {
        display: none !important;;
    }

    .grid > .row > .col.col-0${prefix} {
        width: 100%;
    }

    .grid > .row > .col.col-90${prefix} {
        width: 90%;
    }

    .grid > .row > .col.col-80${prefix} {
        width: 80%;
    }

    .grid > .row > .col.col-70${prefix} {
        width: 70%;
    }

    .grid > .row > .col.col-60${prefix} {
        width: 60%;
    }

    .grid > .row > .col.col-2${prefix} {
        width: 50%;
    }

    .grid > .row > .col.col-45${prefix} {
        width: 45%;
    }

    .grid > .row > .col.col-40${prefix} {
        width: 40%;
    }

    .grid > .row > .col.col-35${prefix} {
        width: 35%;
    }

    .grid > .row > .col.col-3${prefix} {
        width: 33.33333333%
    }

    .grid > .row > .col.col-30${prefix} {
        width: 30%;
    }

    .grid > .row > .col.col-4${prefix} {
        width: 25%;
    }

    .grid > .row > .col.col-5${prefix} {
        width: 20%
    }

    .grid > .row > .col.col-6${prefix} {
        width: 16.66666667%;
    }

    .grid > .row > .col.col-7${prefix} {
        width: 14.28571429%;
    }

    .grid > .row > .col.col-8${prefix} {
        width: 12.5%;
    }

    .grid > .row > .col.col-9${prefix} {
        width: 11.11111111%;
    }

    .grid > .row > .col.col-10${prefix} {
        width: 10%;
    }

    .grid > .row > .col.col-11${prefix} {
        width: 9.09090909%;
    }

    .grid > .row > .col.col-12${prefix} {
        width: 8.33333333%;
    }

    .grid > .row > .col.col-13${prefix} {
        width: 7.69230769%;
    }

    .grid > .row > .col.col-14${prefix} {
        width: 7.14285714%;
    }

    .grid > .row > .col.col-15${prefix} {
        width: 6.66666667%;
    }

    .grid > .row > .col.col-16${prefix} {
        width: 6.25%;
    }
}`
        }
    }

    generate() {
        let i = 1;
        for (let res of this.display.res) {
            fs.appendFileSync(this.output, this.model_media(res, this.display.prefix + i));
            i++;
        }
    }

    init() {
        this.display.res = this.config['desktop'];
        this.display.prefix = '-d';
        this.generate();

        this.display.res = this.config['laptop'];
        this.display.prefix = '-l';
        this.generate();

        this.display.res = this.config['tablet'];
        this.display.prefix = '-t';
        this.generate();

        this.display.res = this.config['mobile'];
        this.display.prefix = '-m';
        this.generate();
    }
}

var generator = new Generator(config).init();

