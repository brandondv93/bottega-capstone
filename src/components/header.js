import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../style/header';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

library.add(faSignOutAlt, faArrowRightFromBracket);

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className='header-wrapper'>
                <div className='left-item'>
                    Brandon's flipnotes
                </div>

                <div className='right-item'>
                    <div className='sign-out-wrapper'>
                        <div className='signout-button'>
                            Sign out
                        </div>
                        <Link to="/" className='link'>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}