const config = require('./config.json');
const path = require('path');
const fs = require('fs');

class Generator {
    constructor(config) {
        this.config = config;
        this.output = './dist/grid.css';

        let temp = fs.readFileSync(path.resolve('./src/grid.css'));
        fs.writeFileSync(this.output, temp);

        this.model_max = (bp) => {
            return `

@media (max-width: ${bp}px) {
    .fx-row-${bp} {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
    }

    .fx-inline-${bp} {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex
    }

    .fx-start-${bp} {
        -ms-justify-content: flex-start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
    }

    .fx-end-${bp} {
        -ms-justify-content: flex-end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
    }

    .fx-center-${bp} {
        -ms-justify-content: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .fx-sp-between-${bp} {
        -ms-justify-content: space-between;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }

    .fx-sp-around-${bp} {
        -ms-justify-content: space-around;
        -webkit-justify-content: space-around;
        justify-content: space-around;
    }

    .fx-ai-stretch-${bp} {
        -ms-align-items: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
    }

    .fx-ai-start-${bp} {
        -ms-align-items: flex-start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
    }

    .fx-ai-end-${bp} {
        -ms-align-items: flex-end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
    }

    .fx-ai-center-${bp} {
        -ms-align-items: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .fx-ai-base-${bp} {
        -ms-align-items: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
    }

    .fx-ai-initial-${bp} {
        -ms-align-items: initial;
        -webkit-align-items: initial;
        align-items: initial;
    }

    .fx-ai-inherit-${bp} {
        -ms-align-items: inherit;
        -webkit-align-items: inherit;
        align-items: inherit;
    }

    .fx-dir-row-${bp} {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
    }

    .fx-dir-row-rev-${bp} {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
    }

    .fx-dir-col-${bp} {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
    }

    .fx-dir-col-rev-${bp} {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
    }

    .fx-dir-initial-${bp} {
        -ms-flex-direction: initial;
        -webkit-flex-direction: initial;
        flex-direction: initial;
    }

    .fx-dir-inherit-${bp} {
        -ms-flex-direction: inherit;
        -webkit-flex-direction: inherit;
        flex-direction: inherit;
    }

    .fx-wrap-${bp} {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .fx-nowrap-${bp} {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }

    .fx-wrap-rev-${bp} {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
    }

    .fx-ac-start-${bp} {
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
    }

    .fx-ac-end-${bp} {
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
    }

    .fx-ac-center-${bp} {
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
    }

    .fx-ac-between-${bp} {
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
    }

    .fx-ac-around-${bp} {
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
    }

    .fx-ac-stretch-${bp} {
        -ms-align-content: stretch;
        -webkit-align-content: stretch;
        align-content: stretch;
    }

    .fx-col-auto-${bp} {
        -ms-flex: 0 0 auto;
        -webkit-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }

    .fx-col-1-${bp} {
        -ms-flex: 0 0 8.333333%;
        -webkit-flex: 0 0 8.333333%;
        flex: 0 0 8.333333%;
        max-width: 8.333333%;
    }

    .fx-col-2-${bp} {
        -ms-flex: 0 0 16.666667%;
        -webkit-flex: 0 0 16.666667%;
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }

    .fx-col-3-${bp} {
        -ms-flex: 0 0 25%;
        -webkit-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }

    .fx-col-4-${bp} {
        -ms-flex: 0 0 33.333333%;
        -webkit-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }

    .fx-col-5-${bp} {
        -ms-flex: 0 0 41.666667%;
        -webkit-flex: 0 0 41.666667%;
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }

    .fx-col-6-${bp} {
        -ms-flex: 0 0 50%;
        -webkit-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .fx-col-7-${bp} {
        -ms-flex: 0 0 58.333333%;
        -webkit-flex: 0 0 58.333333%;
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }

    .fx-col-8-${bp} {
        -ms-flex: 0 0 66.666667%;
        -webkit-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }

    .fx-col-9-${bp} {
        -ms-flex: 0 0 75%;
        -webkit-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }

    .fx-col-10-${bp} {
        -ms-flex: 0 0 83.333333%;
        -webkit-flex: 0 0 83.333333%;
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }

    .fx-col-11-${bp} {
        -ms-flex: 0 0 91.666667%;
        -webkit-flex: 0 0 91.666667%;
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
    }

    .fx-col-12-${bp} {
        -ms-flex: 0 0 100%;
        -webkit-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }

    .fx-hidden-${bp} {
        display: none!important;
    }
}`
        };

        this.model_min = (bp, prefix) => {
            return `

@media (min-width: ${bp + 1}px) {
    .fx-row-${prefix}-${bp} {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
    }

    .fx-inline-${prefix}-${bp} {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex
    }

    .fx-start-${prefix}-${bp} {
        -ms-justify-content: flex-start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
    }

    .fx-end-${prefix}-${bp} {
        -ms-justify-content: flex-end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
    }

    .fx-center-${prefix}-${bp} {
        -ms-justify-content: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .fx-sp-between-${prefix}-${bp} {
        -ms-justify-content: space-between;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }

    .fx-sp-around-${prefix}-${bp} {
        -ms-justify-content: space-around;
        -webkit-justify-content: space-around;
        justify-content: space-around;
    }

    .fx-ai-stretch-${prefix}-${bp} {
        -ms-align-items: stretch;
        -webkit-align-items: stretch;
        align-items: stretch;
    }

    .fx-ai-start-${prefix}-${bp} {
        -ms-align-items: flex-start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
    }

    .fx-ai-end-${prefix}-${bp} {
        -ms-align-items: flex-end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
    }

    .fx-ai-center-${prefix}-${bp} {
        -ms-align-items: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .fx-ai-base-${prefix}-${bp} {
        -ms-align-items: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
    }

    .fx-ai-initial-${prefix}-${bp} {
        -ms-align-items: initial;
        -webkit-align-items: initial;
        align-items: initial;
    }

    .fx-ai-inherit-${prefix}-${bp} {
        -ms-align-items: inherit;
        -webkit-align-items: inherit;
        align-items: inherit;
    }

    .fx-dir-row-${prefix}-${bp} {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
    }

    .fx-dir-row-rev-${prefix}-${bp} {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
    }

    .fx-dir-col-${prefix}-${bp} {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
    }

    .fx-dir-col-rev-${prefix}-${bp} {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
    }

    .fx-dir-initial-${prefix}-${bp} {
        -ms-flex-direction: initial;
        -webkit-flex-direction: initial;
        flex-direction: initial;
    }

    .fx-dir-inherit-${prefix}-${bp} {
        -ms-flex-direction: inherit;
        -webkit-flex-direction: inherit;
        flex-direction: inherit;
    }

    .fx-wrap-${prefix}-${bp} {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .fx-nowrap-${prefix}-${bp} {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }

    .fx-wrap-rev-${prefix}-${bp} {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
    }

    .fx-ac-start-${prefix}-${bp} {
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
    }

    .fx-ac-end-${prefix}-${bp} {
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
    }

    .fx-ac-center-${prefix}-${bp} {
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
    }

    .fx-ac-between-${prefix}-${bp} {
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
    }

    .fx-ac-around-${prefix}-${bp} {
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
    }

    .fx-ac-stretch-${prefix}-${bp} {
        -ms-align-content: stretch;
        -webkit-align-content: stretch;
        align-content: stretch;
    }

    .fx-col-auto-${prefix}-${bp} {
        -ms-flex: 0 0 auto;
        -webkit-flex: 0 0 auto;
        flex: 0 0 auto;
        width: auto;
        max-width: none;
    }

    .fx-col-1-${prefix}-${bp} {
        -ms-flex: 0 0 8.333333%;
        -webkit-flex: 0 0 8.333333%;
        flex: 0 0 8.333333%;
        max-width: 8.333333%;
    }

    .fx-col-2-${prefix}-${bp} {
        -ms-flex: 0 0 16.666667%;
        -webkit-flex: 0 0 16.666667%;
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
    }

    .fx-col-3-${prefix}-${bp} {
        -ms-flex: 0 0 25%;
        -webkit-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }

    .fx-col-4-${prefix}-${bp} {
        -ms-flex: 0 0 33.333333%;
        -webkit-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }

    .fx-col-5-${prefix}-${bp} {
        -ms-flex: 0 0 41.666667%;
        -webkit-flex: 0 0 41.666667%;
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }

    .fx-col-6-${prefix}-${bp} {
        -ms-flex: 0 0 50%;
        -webkit-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .fx-col-7-${prefix}-${bp} {
        -ms-flex: 0 0 58.333333%;
        -webkit-flex: 0 0 58.333333%;
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }

    .fx-col-8-${prefix}-${bp} {
        -ms-flex: 0 0 66.666667%;
        -webkit-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }

    .fx-col-9-${prefix}-${bp} {
        -ms-flex: 0 0 75%;
        -webkit-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
    }

    .fx-col-10-${prefix}-${bp} {
        -ms-flex: 0 0 83.333333%;
        -webkit-flex: 0 0 83.333333%;
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
    }

    .fx-col-11-${prefix}-${bp} {
        -ms-flex: 0 0 91.666667%;
        -webkit-flex: 0 0 91.666667%;
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
    }

    .fx-col-12-${prefix}-${bp} {
        -ms-flex: 0 0 100%;
        -webkit-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }

    .fx-hidden-${prefix}-${bp} {
        display: none!important;
    }
}`
        }
    }

    generateMax() {
        for (let bp of this.config['breakpoints']) {
            fs.appendFileSync(this.output, this.model_max(bp));
        }
    }

    generateMin() {
        const prefix = 'gt';
        for (let bp of this.config['breakpoints'].reverse()) {
            fs.appendFileSync(this.output, this.model_min(bp, prefix));
        }
    }
}

let generator = new Generator(config);
generator.generateMax();
generator.generateMin();

