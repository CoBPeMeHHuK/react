import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div class="top-dscr">
                    <div className="top-dscr__inner">
                        <h1 className="top-dscr__title">Конфигуратор корпоратива</h1>
                    </div>
                </div>

                <div className="page__breadcrumbs-line">
                    <ul className="breadcrumbs">
                        <li className="breadcrumbs__item" onClick={() => { this.props.updateIsActiveStep(1)}}>
                            <a className="breadcrumbs__link-wrap">
                                <span className="breadcrumbs__numer">1</span>
                                <span className="breadcrumbs__text">Первый шаг</span>
                            </a>
                        </li>
                        <li className="breadcrumbs__item" onClick={() => { this.props.updateIsActiveStep(2)}}>
                            <a className="breadcrumbs__link-wrap">
                                <span className="breadcrumbs__numer">2</span>
                                <span className="breadcrumbs__text">Второй шаг</span>
                            </a>
                        </li>
                        <li className="breadcrumbs__item" onClick={() => { this.props.updateIsActiveStep(3)}}>
                            <a className="breadcrumbs__link-wrap">
                                <span className="breadcrumbs__numer">3</span>
                                <span className="breadcrumbs__text">77 гостей</span>
                            </a>
                        </li>
                        <li className="breadcrumbs__item" onClick={() => { this.props.updateIsActiveStep(4)}}>
                            <a className="breadcrumbs__link-wrap">
                                <span className="breadcrumbs__numer">4</span>
                                <span className="breadcrumbs__text">Четвёртый шаг</span>
                            </a>
                        </li>
                        <li className="breadcrumbs__item" onClick={() => { this.props.updateIsActiveStep(5)}}>
                            <a className="breadcrumbs__link-wrap">
                                <span className="breadcrumbs__numer">5</span>
                                {/*<span className="breadcrumbs__text">Выбрано</span>*/}
                                <span className="breadcrumbs__text">Программы и услуги</span>

                            </a>
                        </li>
                    </ul>

                    <div className="flip-container">
                        <div className="flip-contain">
                            <div className="flipper__front  total-price">
                                <span className="total-price__total-word">Итого: </span>
                                <span className="total-price__text">от&nbsp;</span>
                                <span className="total-price__price">7 000</span>
                                <span className="total-price__ruble">&nbsp;₽</span>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="step">

                    {/*<a v-if="selectTab==2" class="step__link  step__link--prev" v-on:click="selectTab=1"><i class="step__arrow  step__arrow--prev"></i>назад</a>*/}
                    {/*<a v-if="selectTab==3" class="step__link  step__link--prev" v-on:click="selectTab=2"><i class="step__arrow  step__arrow--prev"></i>назад</a>*/}
                    {/*<a v-if="selectTab==4" class="step__link  step__link--prev" v-on:click="selectTab=3"><i class="step__arrow  step__arrow--prev"></i>назад</a>*/}
                    {/*<a v-if="selectTab==5" class="step__link  step__link--prev" v-on:click="selectTab=4"><i class="step__arrow  step__arrow--prev"></i>назад</a>*/}
                    {/*<div class="step__text-wrap">*/}
                    {/*    <span class="step__dscr">{{ stepsTitle[selectTab] }}</span>*/}
                    {/*</div>*/}
                    {/*<a class="step__link  step__link--next" v-if="selectTab==1" v-on:click="selectTab=2">пропустить<i class="step__arrow  step__arrow--next"></i></a>*/}
                    {/*<a class="step__link  step__link--next" v-if="selectTab==2" v-on:click="selectTab=3">пропустить<i class="step__arrow  step__arrow--next"></i></a>*/}
                    {/*<a class="step__link  step__link--next" v-if="selectTab==3" v-on:click="selectTab=4">пропустить<i class="step__arrow  step__arrow--next"></i></a>*/}
                    {/*<a class="step__link  step__link--next" v-if="selectTab==4" v-on:click="selectTab=5">пропустить<i class="step__arrow  step__arrow--next"></i></a>*/}

                </div>

                <div className="container" style={{display: 'none'}}>
                    <div className="item-1"></div>
                    <div className="item-2"></div>
                    <div className="item-3"></div>
                    <div className="item-4"></div>
                    <div className="item-5"></div>
                </div>
            </div>
        );
    }
}

export default Header;
