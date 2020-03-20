import React, {Component} from 'react';
import Holiday from "./holiday";

class FirstStep extends Component {
    render() {

        const renderHolidays = this.props.holidays.map((holiday, index) =>
            <li className="minicards__card first__block">
                <Holiday holiday={holiday}/>
            </li>
        );

        return (
            <div id="tab1" className="hides">
                <main className="minicards">
                    <span className="minicards__tooltip"></span>
                    <ul className="minicards__list  slider sliderstep1">

                        {renderHolidays}

                    </ul>
                </main>
            </div>
        );
    }




    chooseHoliday = () => {
        this.props.updateIsActiveStep(2);
    };
}

export default FirstStep;
