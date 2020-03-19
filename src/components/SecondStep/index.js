import React, {Component} from 'react';

class SecondStep extends Component {
    render() {
        return (
            <div id="tab2" className="hides">
                <main className="minicards">
                    <span classname="minicards__tooltip"></span>
                    <div>
                        <ul id="#exampleSlider" className="minicards__list  sliderstep2 ">
                            <div className="MS-content">
                                <li className="item  minicards__card">
                                    <span className="minicards__icon" href="#modal-mini-description-step2"></span>
                                    <div className="overlay">
                                    </div>
                                    <span className="minicards__price">
        <span className="minicards__price-numeral">7 000</span> ₽</span>
                                    <div className="minicards__card-inner">
                                        <img className="minicards__img" src="//ilocked.ru//conf/images/btl/test-drive.jpg" alt="default"/>
                                        <div className="minicards__card-container">
                                            <div className="minicards__content">
                                                <h3 className="minicards__title">День рождения</h3>
                                                <div className="minicards__dscr">
                                                    <p className="minicards__text"></p>
                                                </div>
                                                <button className="btn  btn--small-indents">
                                                    <span>Выбрать : 7 000 ₽</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div className="MS-controls">
                                <button className="MS-left"></button>
                                <button className="MS-right">
                                </button>
                            </div>
                        </ul>
                    </div>
                </main>
            </div>
        );
    }
}

export default SecondStep;