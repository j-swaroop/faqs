// Write your code here.
// Write your code here.
import "./index.css"
import {Component} from "react"
import FaqItem from "../FaqItem"

class Faqs extends Component{

    render(){
        const {faqsList} = this.props

        return(
            <div className="bg-container">
                <div className="faqs-bg-container">
                    <h1 className="faqs-heading"> FAQs</h1>
                    <ul className="faqs-lists">
                        {faqsList.map(eachFaq => <FaqItem key={eachFaq.id} faq={eachFaq}/>)}
                    </ul>
                </div>
            </div>
            )
        }
    }


export default Faqs