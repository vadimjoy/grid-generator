const config = require('./config.json');
const path = require('path');
const fs = require('fs');

class Generator {
    constructor(config) {
        this.config = config;
        this.output = './dist/grid.css';

        let temp = fs.readFileSync(path.resolve('./src/grid.css'));
        fs.writeFileSync(this.output, temp);

        this.model_media = (bp) => {
            return `

@media (min-width: ${bp + 1}px) {
    .fx-gt-hidden-${bp} {
        display: none!important;
    }
}

@media (max-width: ${bp}px) {
    .fx-lt-hidden-${bp} {
        display: none!important;
    }

    .fx-row-${bp} {
        display: -webkit-flex;
        display: flex;
    }

    .fx-row.fx-inline-${bp} {
        display: -webkit-inline-flex;
        display: inline-flex
    }

    .fx-row.fx-start-${bp} {
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
    }

    .fx-row.fx-end-${bp} {
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
    }

    .fx-row.fx-center-${bp} {
        -webkit-justify-content: center;
        justify-content: center;
    }

    .fx-row.fx-sp-between-${bp} {
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }

    .fx-row.fx-sp-around-${bp} {
        -webkit-justify-content: space-around;
        justify-content: space-around;
    }

    .fx-row.fx-ai-stretch-${bp} {
        -webkit-align-items: stretch;
        align-items: stretch;
    }

    .fx-row.fx-ai-start-${bp} {
        -webkit-align-items: flex-start;
        align-items: flex-start;
    }

    .fx-row.fx-ai-end-${bp} {
        -webkit-align-items: flex-end;
        align-items: flex-end;
    }

    .fx-row.fx-ai-center-${bp} {
        -webkit-align-items: center;
        align-items: center;
    }

    .fx-row.fx-ai-base-${bp} {
        -webkit-align-items: baseline;
        align-items: baseline;
    }

    .fx-row.fx-dir-row-${bp} {
        -webkit-flex-direction: row;
        flex-direction: row;
    }

    .fx-row.fx-dir-row-rev-${bp} {
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
    }

    .fx-row.fx-dir-col-${bp} {
        -webkit-flex-direction: column;
        flex-direction: column;
    }

    .fx-row.fx-dir-col-rev-${bp} {
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
    }

    .fx-row.fx-wrap-${bp} {
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .fx-row.fx-nowrap-${bp} {
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }

    .fx-row.fx-wrap-rev-${bp} {
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
    }

    .fx-row.fx-ac-start-${bp} {
        -webkit-align-content: flex-start;
        align-content: flex-start;
    }

    .fx-row.fx-ac-end-${bp} {
        -webkit-align-content: flex-end;
        align-content: flex-end;
    }

    .fx-row.fx-ac-center-${bp} {
        -webkit-align-content: center;
        align-content: center;
    }

    .fx-row.fx-ac-between-${bp} {
        -webkit-align-content: space-between;
        align-content: space-between;
    }

    .fx-row.fx-ac-around-${bp} {
        -webkit-align-content: space-around;
        align-content: space-around;
    }

    .fx-row.fx-ac-stretch-${bp} {
        -webkit-align-content: stretch;
        align-content: stretch;
    }

    .col-auto-${bp} {
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }

    .fx-col-1-${bp} {
        -ms-flex: 0 0 8.333333%;
        flex: 0 0 8.333333%;
        max-width: 8.333333%;
    }

    .fx-col-2-${bp} {
        -ms-flex: 0 0 16.666667%;
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }

    .fx-col-3-${bp} {
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }

    .fx-col-4-${bp} {
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }

    .fx-col-5-${bp} {
        -ms-flex: 0 0 41.666667%;
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }

    .fx-col-6-${bp} {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .fx-col-7-${bp} {
        -ms-flex: 0 0 58.333333%;
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }

    .fx-col-8-${bp} {
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }

    .fx-col-9-${bp} {
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }

    .fx-col-10-${bp} {
        -ms-flex: 0 0 83.333333%;
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }

    .fx-col-11-${bp} {
        -ms-flex: 0 0 91.666667%;
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
    }

    .fx-col-12-${bp} {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
}`
        }
    }

    generate() {
        for (let bp of this.config['breakpoints']) {
            fs.appendFileSync(this.output, this.model_media(bp));
        }
    }
}

var generator = new Generator(config).generate();

