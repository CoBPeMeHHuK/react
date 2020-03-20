import React, {Component} from 'react';


class Form extends Component {
    render() {
        return (
                <div>
                    <div className="hides page__row  page__row--fixed-width">
                        <div className="card  card--have-after">
                            <div className="card__top  card__top--pale  card__top--content-center">
                                <span className="card__top-text">Проверьте заказ</span>
                                <span className="card__top-text">Проверьте выбранные услуги</span>
                            </div>
                            <div className="card__content  card__order-content  card__content--fixed-default-height  card__content--no-indents  card__content--fixed-height-mobile">
                                <div className="card__total" >
                            <span className="card__total-text">
                                Итого: <span>77</span> гостей
                            </span>
                                    <span className="card__total-price">
                                от <span>7 000</span> ₽
                            </span>
                                </div>

                                <label className="card__dropdown">

                                    <div className="card__dropdown-btn">
                                        <i className="card__star-icon"/>
                                        <span className="card__dropdown-text"><span className="important_span">Внимание</span>: возможно, вы забыли выбрать услуги...</span>
                                        {/*<span className="card__dropdown-expand-btn bb_none"></span>*/}
                                        <i className="card__dropdown-arrow-icon"/>
                                    </div>

                                    <input type="checkbox" className="dd-input  card__dropdown-input" id="test" />
                                    <div className="card__drop">
                                        <ul className="card__drop-list">
                                        </ul>
                                        <span className="card__drop-item card-click bb_none">Нажмите сюда, если вы хотите добавить эти услуги</span>
                                    </div>
                                </label>

                        <ul className="card__list  card__list--scrolled">
                            <li className="card__list-item">
                                <span className="card__list-item-text  card__list-item-text--wide">
                                    <span className="card__medium-text">Сценарий: </span>
                                    <span></span>
                                </span>
                                <span className="card__list-item-text"><span>7 000</span>&nbsp;<span
                                    className="card__list-item-ruble">₽</span></span>
                            </li>
                            <li className="card__list-item">
                                <span className="card__list-item-text  card__list-item-text--wide">
                                    <span className="card__medium-text">Еда:</span>
                                    Фуршет
                                </span>
                                <span className="card__list-item-text">от <span>7 000</span>&nbsp;<span
                                    className="card__list-item-ruble">₽</span></span>
                            </li>
                            <li className="card__list-item">
                                <span className="card__list-item-text  card__list-item-text--wide">Фотограф</span>
                                <span className="card__list-item-text">от <span>7 000</span>&nbsp;<span
                                    className="card__list-item-ruble">₽</span></span></li>
                        </ul>
                    </div>
                </div>
        <div className="card  card--negative-top-indent">
            <div className="card__top  card__top--content-center  card__top--bright">
                <span className="card__top-text  card__top-text--white">Оформите заказ</span>
                <span className="card__top-text  card__top-text--white">Получить расчёт корпоратива</span>
                <button className="card__roll-up"/>
        </div>
        <div className="card__content  card__order-content  card__content--fixed-default-height">
            <div className="card__form">
                <input type="text" className="card__input user__name" placeholder="Ваше имя..." autoFocus />
                    <input type="tel" className="card__input user__phone" placeholder="Телефон..." />
                        <div className="card__line-wrapper">
                            <input type="text" className="card__input  card__input-phone  user__email" placeholder="E-mail..." />
                                <button className="card__btn-show-textarea" id="order-btn-show-textarea"/>
                        </div>
                        <textarea className="card__textarea" name="" id="order-textarea" cols="30" rows="10"
                                  placeholder="Пожелания..."/>
                        <button  className="btn  btn--big">Заказать!</button>
                    {/*<button className="btn  btn--big">Получить!</button>*/}
                </div>
        </div>
    </div>
    </div>
        <div className="help">

            <span className="help__text">Есть особые пожелания или опций конфигуратора не достаточно?</span>
            <a href="#modal-callback" className="help__link  popup-with-form">Помощь...</a>
            <div id="modal-callback" className=" card__form  white-popup-block   popup mfp-hide">
                <h3 className="popup__title">Оставьте ваш контакт</h3>
                <fieldset className="card__fieldset" style={{border:0}}>
                    <input className="card__input user__name_help" id="name" name="name" type="text" placeholder="Ваше имя..." />
                        <div className="card__line-wrapper">
                            <input className="card__input  card__input-phone  user__phone_help" id="phone" name="phone" type="tel"
                                   placeholder="Телефон..." />
                                <button className="card__btn-show-textarea" id="modal-btn-show-textarea"/>
                        </div>
                        <textarea className="card__textarea" id="modal-textarea" cols="30"
                                  rows="20"
                                  placeholder="Пожелания..."/>
                        <div className="popup__btn-alignment">
                            <button className="btn">Отправить</button>
            </div>
        </fieldset>
        <div className="popup__bottom-text">
            Всем заказчикам корпоративов предоставляется персональный менеджер, который сможет по телефону
            сконфигурировать заказ, учесть любые пожелания, рассказать о ньюансах каждой опции.
            <br />Оставьте ваш контакт или звоните +7 (921) 788-23-91
        </div>
    </div>
        {/*<div id="modal-mini-description" className="text-modal  white-popup-block  popup  mfp-hide">*/}
        {/*    <h3 className="popup__title"></h3>*/}
        {/*    <div className="text-modal__inner">*/}
        {/*        <div className="text-modal__text">*/}

        {/*        </div>*/}
        {/*        <div className="popup__btn-alignment">*/}
        {/*            <button className="modal-btn">Закрыть</button>*/}
        {/*        </div>*/}
        {/*    </div>*/}

        {/*</div>*/}
        <div id="modal-mini-description-step2" className="text-modal  white-popup-block  popup  mfp-hide">
            <h3 className="popup__title"></h3>
            <div className="text-modal__inner">
                <div className="text-modal__text">
                </div>
                <div className="popup__btn-alignment">
                    <button className="modal-btn">Закрыть</button>
                </div>
            </div>
        </div>
        </div>
                </div>
        );
    }
}

export default Form;
