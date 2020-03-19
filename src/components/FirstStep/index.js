import React, {Component} from 'react';

class FirstStep extends Component {
    render() {
        return (
            <div id="tab1" className="hides">
                <main className="minicards">
                    <span className="minicards__tooltip"></span>
                    <ul className="minicards__list  slider sliderstep1">

                        <li className="minicards__card first__block">
                                <span className="minicards__icon"
                                      href="#modal-mini-description">
                                    </span>
                            <div className="overlay"></div>
                            <div className="minicards__card-inner">
                                <img className="minicards__img" alt="default" src="//ilocked.ru/dev-conf/images/step1/btl-miiin.jpg" />
                                <div className="minicards__card-container">
                                    <div className="minicards__content">
                                        <h3 className="minicards__title"></h3>
                                        <div className="minicards__dscr ">
                                            <p className="minicards__text "></p>
                                        </div>
                                        <button onClick={this.chooseHoliday} className="btn">
                                            <span>Выбрать</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="minicards__card first__block">
                                <span className="minicards__icon"
                                      href="#modal-mini-description">
                                    </span>
                            <div className="overlay"></div>
                            <div className="minicards__card-inner">
                                <img className="minicards__img" alt="default" src="//ilocked.ru/dev-conf/images/step1/btl-miiin.jpg" />
                                <div className="minicards__card-container">
                                    <div className="minicards__content">
                                        <h3 className="minicards__title"></h3>
                                        <div className="minicards__dscr ">
                                            <p className="minicards__text "></p>
                                        </div>
                                        <button onClick={this.chooseHoliday} className="btn">
                                            <span>Выбрать</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="minicards__card first__block">
                                <span className="minicards__icon"
                                      href="#modal-mini-description">
                                    </span>
                            <div className="overlay"></div>
                            <div className="minicards__card-inner">
                                <img className="minicards__img" alt="default" src="//ilocked.ru/dev-conf/images/step1/btl-miiin.jpg" />
                                <div className="minicards__card-container">
                                    <div className="minicards__content">
                                        <h3 className="minicards__title"></h3>
                                        <div className="minicards__dscr ">
                                            <p className="minicards__text "></p>
                                        </div>
                                        <button onClick={this.chooseHoliday} className="btn">
                                            <span>Выбрать</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="minicards__card first__block">
                                <span className="minicards__icon"
                                      href="#modal-mini-description">
                                    </span>
                            <div className="overlay"></div>
                            <div className="minicards__card-inner">
                                <img className="minicards__img" alt="default" src="//ilocked.ru/dev-conf/images/step1/btl-miiin.jpg" />
                                <div className="minicards__card-container">
                                    <div className="minicards__content">
                                        <h3 className="minicards__title"></h3>
                                        <div className="minicards__dscr ">
                                            <p className="minicards__text "></p>
                                        </div>
                                        <button onClick={this.chooseHoliday} className="btn">
                                            <span>Выбрать</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </main>
            </div>
        );
    }
    chooseHoliday = () =>{
        this.props.updateIsActiveStep(2);
    }
}

export default FirstStep;