import React, {Component} from 'react';
import Header from '../Header';
import FirstStep from "../FirstStep";
import SecondStep from "../SecondStep";
import ThirdStep from "../ThirdStep";
import FourthStep from "../FourthStep";
import FifthStep from "../FifthStep";
import Footer from "../Footer";
import Form from "../Form";

class AppComponent extends Component {
    render() {
        return (
            <div className="page">
                <div className="page__inner">
                    <div id="app">
                        <Header />

                        <div id="wrapper" className="page__wrap-main-content">

                        <FirstStep />

                        <SecondStep />

                        <ThirdStep />

                        <FourthStep />

                        <FifthStep />

                        </div>

                        <Footer />

                        <Form />

                    </div>
                </div>
            </div>
        );
    }
}

export default AppComponent;
