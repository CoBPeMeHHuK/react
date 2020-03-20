import React, {Component} from 'react';

class Footer extends Component {

    render() {
        return (
            <footer className="page-footer">
                <div className="page-footer__top-row">

                    {this.renderButton(this.props.isActiveForm)}

                </div>

            </footer>
        );
    }

    renderButton = (props) =>{
       return  !props ? <button className="btn  btn--transparent" onClick={() => {
           this.props.updateIsActiveForm(true)
       }}>
           <span className="btn__text-hide-on-pc">Нажмите чтобы</span>
           <span className="btn__text-show-on-mobile"><span>получить</span>расчёт</span>
       </button> : null
    }


}

export default Footer;
