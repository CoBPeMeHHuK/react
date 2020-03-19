import React, {Component} from 'react';


class FourthStep extends Component {
    render() {
        return (
            <div id="tab4" className="hides">
                <main className="page__row page-main">

                    <div className="page__wrapper ">

                        <div className="page__right-side">
                            <img className="page__img" src="//ilocked.ru/conf/images/newfoods/foorshet.png" alt="default" />
                                <div className="page__text-container">
                                    <div className="page__text-wrap">
                                    </div>
                                </div>
                        </div>

                        <div className="page__side-wrap">
                            <div className="page__choice-inner">
                                <div className="page__choice-wrap  page__choice-wrap--fixed-height">
                                    <div className="field-radio  field-radio--bottom-indent" v-for="food in foods">
                                    <div className="field-radio__input-wrap">
                                        <label className="field-radio__name">
                                            <input className="field-radio__input" type="radio" name="radio" />
                                                <span className="field-radio__name-text">Название еды</span>
                                                <span className="field-radio__price-text"></span>
                                                <span className="field-radio__price-text">7 000</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                            <button onClick={this.chooseHoliday}  className="btn  btn--top-indent">Далее</button>

                    </div>
                    </div>
                </main>
            </div>
        );
    }

    chooseHoliday = () =>{
        this.props.updateIsActiveStep(5);
    }
}

export default FourthStep;
