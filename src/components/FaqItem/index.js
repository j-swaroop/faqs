import "./index.css"
import {Component} from "react"

const plus_img_url = "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
const minus_img_url = "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"

class FaqItem extends Component{
    state = {
        isActive: false
    }
 
    onClickEmoji = () => {
        this.setState(prevState => ({isActive: !prevState.isActive}))
    }

    renderAnswer = () => {
        const {faq} = this.props
        const {id, questionText, answerText} = faq
        const {isActive} = this.state

        if (isActive){
            return(
                <>
                    <hr className="hr"/>
                    <p className="answer-text"> {answerText}</p>
                </>
            )
        }
    }

    renderActiveImg = () => {
        const {isActive} = this.state
        const img = isActive? minus_img_url: plus_img_url
        const altText = isActive? "minus": "plus"

        return(
            <button onClick={this.onClickEmoji} type="button">
                <img alt={altText} src={img}/>
            </button> 
        )
    }

    render(){
        const {faq} = this.props
        const {id, questionText, answerText} = faq
        
        return(
            <li className="faq"> 
                <div className="faq-container">
                    <h1 className="faq-question"> {questionText} </h1>
                    {this.renderActiveImg()}
                </div>
                {this.renderAnswer()}
            </li>
        )
    }
}

export default FaqItem