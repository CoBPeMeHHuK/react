import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="page-footer__top-row">

                    {/*<button  className="btn  btn--transparent">*/}
                    {/*    <span className="btn__text-hide-on-pc">Нажмите чтобы</span>*/}
                    {/*    <span className="btn__text-show-on-mobile"><span>оформить</span> заказ</span>*/}
                    {/*</button>*/}

                    <button className="btn  btn--transparent">
                        <span className="btn__text-hide-on-pc">Нажмите чтобы</span>
                        <span className="btn__text-show-on-mobile"><span>получить</span>расчёт</span>
                    </button>

                </div>

            </footer>
        );
    }
}

export default Footer;
