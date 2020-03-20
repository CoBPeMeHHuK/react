import React, {Component} from 'react'

class Holiday extends Component {

    constructor(props) {
        super(props);

        this.state = {
            holiday: props.holiday,
        }
    }


    render() {
        return (
            <div>
                <span className="minicards__icon"
                      href="#modal-mini-description">
                </span>
                <div className="overlay"/>
                <div className="minicards__card-inner">
                    <img className="minicards__img" alt="default"
                         src="//ilocked.ru/dev-conf/images/step1/btl-miiin.jpg"/>
                    <div className="minicards__card-container">
                        <div className="minicards__content">
                            <h3 className="minicards__title">{this.state.holiday.name}</h3>
                            <div className="minicards__dscr ">
                                <p className="minicards__text " dangerouslySetInnerHTML={{__html: this.state.holiday.description}}/>
                            </div>
                            <button className="btn">
                                <span>Выбрать</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Holiday;
