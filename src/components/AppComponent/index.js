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

    state = {
        isActiveStep:1,
        isActiveForm:false
    };
    render() {

        return (
            <div className="page">
                <div className="page__inner">
                    <div id="app">
                        <Header updateIsActiveStep={this.updateIsActiveStep} />

                        <div id="wrapper" className="page__wrap-main-content">

                            { this.state.isActiveStep === 1 && <FirstStep updateIsActiveStep={this.updateIsActiveStep}  /> }

                            {  this.state.isActiveStep === 2 && <SecondStep updateIsActiveStep={this.updateIsActiveStep} /> }

                            {  this.state.isActiveStep === 3 && <ThirdStep updateIsActiveStep={this.updateIsActiveStep} /> }

                            {  this.state.isActiveStep === 4 && <FourthStep updateIsActiveStep={this.updateIsActiveStep} />  }

                            {  this.state.isActiveStep === 5 && <FifthStep updateIsActiveStep={this.updateIsActiveStep} />  }

                        </div>

                        <Footer isActiveForm={this.state.isActiveForm} updateIsActiveForm={this.updateIsActiveForm} />

                        {  this.state.isActiveForm && <Form />  }

                    </div>
                </div>
            </div>
        );

    }

    updateIsActiveStep = (value) => {
        this.setState({ isActiveStep : value})
    };

    updateIsActiveForm = (value) => {
        this.setState({ isActiveForm : value})
    };
}

export default AppComponent;
