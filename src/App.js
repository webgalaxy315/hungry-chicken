import React from 'react'

import { AptosContextProvider } from '../src/context/aptosContext'

import Header from './components/Header'
import Container from './pages/Container'

import './App.css'
import './styles.scss'

function App() {
    return (
        <AptosContextProvider>
            <Header />
            <Container />
        </AptosContextProvider>
    )
}

export default App
