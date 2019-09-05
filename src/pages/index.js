import React, { Component } from 'react'
import Header from '../components/Header'
import TabCompomponent from '../components/TabComponent'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <TabCompomponent />
            </div>
        )
    }
}
