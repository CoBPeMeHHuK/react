import React, {Component} from 'react';

class FifthStep extends Component {
    render() {
        return (
            <div id="tab5" className="hides">
                <main className="page__row page-main">

                    <div className="page__wrapper ">
                        <div className="page__right-side  photo-slider">
                            <div className="photo-slider__item">
                                <img className="page__img" src="//ilocked.ru/dev-conf/images/services_photo/photozone_2.jpg" alt="default" />
                                    <div className="page__text-container">
                                        <div className="page__text-wrap"></div>
                                    </div>
                            </div>
                            {/*<div className="photo-slider__item">*/}
                            {/*    <img className="page__img" src="//ilocked.ru/dev-conf/images/services_photo/photozone_2.jpg" alt="default" />*/}
                            {/*        <div className="page__text-container">*/}
                            {/*            <div className="page__text-wrap"></div>*/}
                            {/*        </div>*/}
                            {/*</div>*/}
                            {/*<div className="photo-slider__item">*/}
                            {/*    <img className="page__img" src="//ilocked.ru/dev-conf/images/services_photo/photozone_2.jpg" alt="default" />*/}
                            {/*        <div className="page__text-container">*/}
                            {/*            <div className="page__text-wrap"></div>*/}
                            {/*        </div>*/}
                            {/*</div>*/}
                        </div>

                        <div className="page__side-wrap">
                            <div className="page__choice-inner  page__choice-inner--fading">
                                <div className="page__choice-wrap  js-scrolling-div" id="scrolling-div">

                                <div className="field-checkbox">
                                <label className="field-checkbox__wrap">
                                    <input className="field-checkbox__input" type="checkbox" name="check0" />
                                        <span className="field-checkbox__text"><span>Название сервисе</span></span>
                                        <span className="field-checkbox__price"></span>
                                        <span className="field-checkbox__price">7 000</span>
                                </label>
                            </div>
                        </div>
                    </div>
            </div>
    </div>
    </main>
    </div>
        );
    }
}

export default FifthStep;
