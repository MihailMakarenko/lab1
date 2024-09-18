import { Component } from "react";
import './person.css';

const Card = [
    {
        src: '..//img/second-container-first-img-card.png',
        title: "Treatments online",
        text: "We’ll ask you a couple of quick medical questions. Tick the boxes and a clinician will review your answers and issue you a prescription."
    },
    {
        src: '..//img/second-container-second-img-card.png',
        title: "Free fast delivery",
        text: "Your selected treatments will be delivered for free in discreet packaging. There’ll be some helpful info included to make sure you get the best out of it."
    },
    {
        src: '..//img/second-container-third-img-card.png',
        title: "Clinician support",
        text: "Chat with a medical expert whenever you need. On the phone or via email. With support throughout your treatment."
    }
];

class PersonCard extends Component {
    render() {
        return (
            <div className="card">
                <img
                    className="card-img"
                    src={this.props.src}
                    alt={this.props.title}
                />
                <h3 className="lng-treatments-online">{this.props.title}</h3>
                <p className="lng-well-ask-you">{this.props.text}</p>
            </div>
        );
    }
}

class PersonCardSection extends Component {
    render() {
        return (
            <div className="main-container-card">
                {Card.map((item, index) => (
                    <PersonCard
                        key={index}
                        src={item.src}
                        title={item.title}
                        text={item.text}
                    />
                ))}
              
            </div>
        );
    }
}

export default PersonCardSection;