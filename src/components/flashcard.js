import React, { Component } from 'react'

export default class Flashcard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flipped: false
        }

        this.setFlip = this.setFlip.bind(this)
    }

    setFlip() {
        this.setState(prevState => ({
            flipped: !prevState.flipped
        }))
    }

    render() {
        return (
            <div
                className={`card ${this.state.flipped ? 'flipped' : ''}`}
                onClick={this.setFlip}>

                <div className='front'>
                    {this.props.flashcard.question}
                    <div className="flashcard-options">
                        {this.props.flashcard.options.map(option => {
                            return <div className="flashcard-option" key={option}>{option}</div>
                        })}
                    </div>
                </div>

                <div className='back'>{this.props.flashcard.answer}</div>
            </div>
        )
    }
}