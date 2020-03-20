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
                    {this.getButtonBack()}
                    <div className="step__text-wrap">
                        <span className="step__dscr">{ this.props.titleSteps[0] }</span>
                    </div>
                    {this.getButtonSkip()}
                </div>

                {this.getPreloader()}
            </div>
        );
    }








    getButtonBack = ()=>{
        const isActiveStep = this.props.isActiveStep;

        return (isActiveStep !== 1) ?
            <a className="step__link  step__link--prev" onClick={() => { this.props.updateIsActiveStep(isActiveStep - 1)}}><i className="step__arrow  step__arrow--prev"/>назад</a> :
            null;

    };

    getButtonSkip = ()=>{
        const isActiveStep = this.props.isActiveStep;

        return (isActiveStep !== 5) ?
            <a className="step__link  step__link--next" onClick={() => { this.props.updateIsActiveStep(isActiveStep + 1)}}>пропустить<i className="step__arrow  step__arrow--next" /></a> :
            null;
    };

    getPreloader =()=>{
        return  <div className="container" style={{display: 'none'}}>
            <div className="item-1" />
            <div className="item-2" />
            <div className="item-3" />
            <div className="item-4" />
            <div className="item-5" />
        </div>
    }
}

export default Header;
