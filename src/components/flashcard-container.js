import React, { Component } from 'react'
import axios from 'axios'

import Flashcard from "./flashcard"
import '../style/style'

export default class flashcardlist extends Component {
    constructor() {
        super();

        this.state = {
            flashcardData: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/notecards')
            .then(response => {
                console.log(response)
                this.setState({
                    flashcardData:
                        (response.data.map((item, index) => {
                            const answer = item.correct_answer
                            const options = [item.incorrect_answer1, item.incorrect_answer2, item.incorrect_answer3, answer]
                            return {
                                id: `${index}-${Date.now()}`,
                                question: item.question,
                                answer: answer,
                                options: options.sort(() => Math.random() - .5)
                            }
                        }))
                })
            })
    }


    render() {
        return (
            <div className="card-grid-wrapper">
                <div className="card-grid">
                    {this.state.flashcardData.map(flashcard => {
                        return <Flashcard flashcard={flashcard} key={flashcard.id} />
                    })}
                </div>
            </div>
        )
    }

}