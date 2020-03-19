import React, {Component} from 'react';

class ThirdStep extends Component {
    render() {
        return (
            <div id="tab3" className="hides">
                <main className="page-main">

                    <div className="range">
                        <label className="field-range">
            <span className="field-range__input-wrap">
              <input className="field-range__input" id="js-amount-range" type="range" />
            </span>
                            <div className="field-range__value">
                                <span>5</span> <span>10</span> <span>20</span> <span>50</span> <span>200</span>
                                <span>800</span>
                            </div>
                        </label>
                        <div className="field-range__wrap-value">
                            <input type="number" id="js-amount-input" className="field-range__show-value-input" min="5" max="800" />
                                <span className="field-range__value-text">человек</span>
                        </div>
                    </div>

                    <div className="btn-wrap">
                        <button className="btn">Далее</button>
                    </div>
                </main>
            </div>
        );
    }
}

export default ThirdStep;