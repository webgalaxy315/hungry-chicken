import React, { useContext } from 'react'
import { Link } from 'react-scroll'

import { AptosContext } from '../context/aptosContext'

import TwitterIcon from '../assets/images/hd-twitter.png'
import LogoIcon from '../assets/images/hd-logo.png'

function Header() {
    const aptosContext = useContext(AptosContext)

    const address = aptosContext?.address
    const handleDisconnect = aptosContext?.handleDisconnect
    const handleConnect = aptosContext?.handleConnect
    const isConnected = aptosContext?.isConnected

    const HandleConnect = () => {
        handleConnect(true)
    }
    const HandleDisconnect = () => {
        handleDisconnect(false)
    }

    function openNav() {
        document.getElementById('mySidenav').style.width = '250px'
    }
    function closeNav() {
        document.getElementById('mySidenav').style.width = '0'
    }

    return (
        <div className="header flex items-center justify-between py-4 xl-screen:px-12 xl-desktop:px-10 lg-screen:px-8 md-screen:px-6 px-4">
            <ul className="flex xl-screen:text-3xl xl-desktop:text-2xl xl-tablet:text-xl lg-screen:text-lg md-screen:text-md text-sm xl-screen:flex md-screen:flex hidden">
                <li className="xl:px-4 px-2">
                    <Link
                        className="hd-content"
                        activeClass="active"
                        to="introduction"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        style={{ cursor: 'pointer' }}
                    >
                        Introduce
                    </Link>
                </li>
                <li className="xl:px-4 px-2">
                    <Link
                        className="hd-content"
                        activeClass="active"
                        to="roadmap"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        style={{ cursor: 'pointer' }}
                    >
                        Roadmap
                    </Link>
                </li>
                <li className="xl:px-4 px-2">
                    <Link
                        className="hd-content"
                        activeClass="active"
                        to="contract"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        style={{ cursor: 'pointer' }}
                    >
                        Contract
                    </Link>
                </li>
                <li className="xl:px-4 px-2">
                    <Link
                        className="hd-content"
                        activeClass="active"
                        to="faq"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        style={{ cursor: 'pointer' }}
                    >
                        Q&A
                    </Link>
                </li>
            </ul>

            <div>
                <button
                    className="xl-screen:hidden md-screen:hidden flex items-center text-xl"
                    onClick={() => openNav()}
                >
                    &#9776;
                </button>
            </div>

            <div className="flex items-center">
                <img
                    src={TwitterIcon}
                    alt="twitter"
                    className="rounded-full mx-2 w-10 h-10 xl-screen:flex md-screen:flex hidden"
                />
                <img
                    src={LogoIcon}
                    alt="logo"
                    className="rounded-full mx-2 w-10 h-10 xl-screen:flex md-screen:flex hidden"
                />
                {!isConnected ? (
                    !window.aptos ? (
                        <a
                            href="https://chrome.google.com/webstore/detail/petra-aptos-wallet/ejjladinnckdgjemekebdpeokbikhfci"
                            target="_blank"
                            rel="noreferrer"
                            className="wallet-btn xl-screen:hidden md-screen:hidden flex px-4"
                        >
                            Connect
                        </a>
                    ) : (
                        <button
                            className="wallet-btn xl-screen:hidden md-screen:hidden flex px-4"
                            onClick={HandleConnect}
                        >
                            Connect
                        </button>
                    )
                ) : (
                    <button
                        className="wallet-btn xl-screen:hidden md-screen:hidden flex px-4"
                        onClick={HandleDisconnect}
                    >
                        {address?.slice(0, 4) + '...' + address?.slice(-4)}
                    </button>
                )}
            </div>

            <div id="mySidenav" className="sidenav">
                <button className="closebtn" onClick={() => closeNav()}>
                    &times;
                </button>
                <ul>
                    <li className="xl:px-4 px-2">
                        <Link
                            className="hd-content"
                            activeClass="active"
                            to="introduction"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            style={{ cursor: 'pointer' }}
                        >
                            Introduce
                        </Link>
                    </li>
                    <li className="xl:px-4 px-2">
                        <Link
                            className="hd-content"
                            activeClass="active"
                            to="roadmap"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            style={{ cursor: 'pointer' }}
                        >
                            Roadmap
                        </Link>
                    </li>
                    <li className="xl:px-4 px-2">
                        <Link
                            className="hd-content"
                            activeClass="active"
                            to="contract"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            style={{ cursor: 'pointer' }}
                        >
                            Contract
                        </Link>
                    </li>
                    <li className="xl:px-4 px-2">
                        <Link
                            className="hd-content"
                            activeClass="active"
                            to="faq"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            style={{ cursor: 'pointer' }}
                        >
                            Q&A
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
