import React, { Component } from 'react'

import Header from './header';
import Flashcardlist from './flashcard-container';

import '../style/header';

export default class FlashcardHome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: this.props.status,
            token: this.props.token
        }
    }

    render() {
        return (
            <div className='flashcard-home-wrapper'>
                <Header />
                <Flashcardlist />
            </div>
        )
    }
}