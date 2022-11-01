import React, { useContext } from 'react'
import Marquee from 'react-fast-marquee'

import { AptosContext } from '../context/aptosContext'

import BannerChicken from '../assets/images/ban-chicken.png'
import BannerTitle from '../assets/images/ban-cbg.png'
import BannerContent from '../assets/images/banner-cbg.png'
import IntroduceTitle from '../assets/images/int-title.png'
import IntroduceCurve from '../assets/images/int-curve.png'
import IntroduceLeft from '../assets/images/int-left.png'
import IntroduceRight from '../assets/images/int-right.png'
import RoadmapLeft from '../assets/images/rm-left.png'
import RoadmapRight from '../assets/images/rm-cbg.png'
import FooterRect from '../assets/images/ft-rect.png'
import RoadmapGroup from '../assets/images/rm-group.png'
import ContractLeft1 from '../assets/images/cont-rect.png'
import ContractRight from '../assets/images/ctr-cbg.png'
import ContractLeft2 from '../assets/images/ctr-left.png'
import FaqContent from '../assets/images/faq-cbg.png'
import FooterGiggle from '../assets/images/ft-giggle.png'
import ContactGroup from '../assets/images/ctr-group-1.png'

import ChickenNFT1 from '../assets/images/chicken-nft-1.png'
import ChickenNFT2 from '../assets/images/chicken-nft-2.png'
import ChickenNFT3 from '../assets/images/chicken-nft-3.png'
import ChickenNFT4 from '../assets/images/chicken-nft-4.png'
import ChickenNFT5 from '../assets/images/chicken-nft-5.png'
import ChickenNFT6 from '../assets/images/chicken-nft-6.png'
import ChickenNFT7 from '../assets/images/chicken-nft-7.png'
import ChickenNFT8 from '../assets/images/chicken-nft-8.png'
import ChickenNFT9 from '../assets/images/chicken-nft-9.png'
import ChickenNFT10 from '../assets/images/chicken-nft-10.png'

const ChickenNFTGroup = [
    ChickenNFT1,
    ChickenNFT2,
    ChickenNFT3,
    ChickenNFT4,
    ChickenNFT5,
    ChickenNFT6,
    ChickenNFT7,
    ChickenNFT8,
    ChickenNFT9,
    ChickenNFT10,
]

function Body() {
    const chickenList = [
        ChickenNFT1,
        ChickenNFT2,
        ChickenNFT3,
        ChickenNFT4,
        ChickenNFT5,
        ChickenNFT6,
        ChickenNFT7,
        ChickenNFT8,
        ChickenNFT9,
        ChickenNFT10,
        ChickenNFT7,
        ChickenNFT8,
        ChickenNFT9,
        ChickenNFT10,
        ChickenNFT10,
    ]

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

    return (
        <div className="overflow-hidden">
            <div className="banner xl-screen:flex lg-screen:flex md-screen:flex block justify-between xl-screen:mx-12 xl-desktop:mx-10 lg-screen:mx-8 md-screen:mx-6 mx-4 mt-10 relative xl-screen:h-[100vh] md-desktop:h-[100vh] md-laptop:h-[90vh] md-tablet:h-[80vh] sm-screen:h-[60vh] sm-desktop:h-[60vh] sm-laptop:h-[45vh] h-[30vh]">
                <div className="absolute bottom-0 left-0 z-10">
                    <img
                        src={BannerChicken}
                        alt="banner-chicken"
                        className="xl-screen:w-full xl-desktop:w-[98%] xl-laptop:w-[90%] xl-tablet:w-[85%] lg-screen:w-[80%] lg-desktop:w-[75%] lg-laptop:w-[70%] lg-tablet:w-[65%] md-screen:w-[60%] w-[75%]"
                    />
                </div>

                <div className="absolute left-[42%] xl-screen:top-[15.5%] lg-screen:top-[15.5%] md-screen:top-[15.5%] top-[5%]">
                    <img src={BannerTitle} alt="banner-title" />
                </div>

                <div className="absolute xl-screen:block md-screen:block hidden bottom-4 right-0 z-0">
                    <div className="banner-content relative">
                        <div className="flex justify-end">
                            <img
                                src={BannerContent}
                                alt="banner-content"
                                className="xl-screen:w-full xl-desktop:w-[98%] xl-laptop:w-[90%] xl-tablet:w-[85%] lg-screen:w-[80%] lg-desktop:w-[75%] lg-laptop:w-[70%] lg-tablet:w-[65%] md-screen:w-[60%]"
                            />
                        </div>

                        <div className="absolute xl-screen:left-[18%] xl-desktop:left-[20%] lg-screen:left-[30%] lg-laptop:left-[40%] md-screen:left-[50%] top-[35%]">
                            <p className="text-center xl:text-6xl lg:text-5xl text-4xl font-bold">
                                Stay&nbsp;Hungry,
                            </p>
                            <p className="text-center xl:text-6xl lg:text-5xl text-4xl font-bold">
                                Stay&nbsp;Foolish,
                            </p>
                            <div className="flex justify-center items-center pt-8">
                                {!isConnected ? (
                                    !window.aptos ? (
                                        <a
                                            href="https://chrome.google.com/webstore/detail/petra-aptos-wallet/ejjladinnckdgjemekebdpeokbikhfci"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="ml-4 px-6 py-2 wallet-btn xl:text-4xl lg:text-3xl md:text-2xl text-xl"
                                        >
                                            Wallet Connect
                                        </a>
                                    ) : (
                                        <button
                                            className="ml-4 px-6 py-2 wallet-btn xl:text-4xl lg:text-3xl md:text-2xl text-xl"
                                            onClick={HandleConnect}
                                        >
                                            Wallet Connect
                                        </button>
                                    )
                                ) : (
                                    <button
                                        className="ml-4 px-6 py-2 wallet-btn xl:text-4xl lg:text-3xl md:text-2xl text-xl"
                                        onClick={HandleDisconnect}
                                    >
                                        {address?.slice(0, 4) +
                                            '...' +
                                            address?.slice(-4)}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute 2xl-screen:left-[40%] left-[37.5%] z-20 xl-screen:-bottom-64 xl-desktop:-bottom-60 xl-laptop:-bottom-56 xl-tablet:-bottom-52 lg-screen:-bottom-48 lg-desktop:-bottom-44 lg-laptop:-bottom-40 md-screen:-bottom-40 md-tablet:-bottom-28 sm-desktop:-bottom-24 sm-laptop:-bottom-16 -bottom-10">
                    <img
                        src={IntroduceTitle}
                        alt="introduce-title"
                        className="xl-screen:w-full xl-desktop:w-[98%] xl-laptop:w-[90%] xl-tablet:w-[85%] lg-screen:w-[80%] lg-desktop:w-[75%] lg-laptop:w-[70%] lg-tablet:w-[65%] w-[60%]"
                    />
                </div>

                <div className="absolute -bottom-32 right-10 z-20 xl-screen:block lg-screen:block md-screen:block hidden">
                    <img src={IntroduceCurve} alt="introduce-title" />
                </div>
            </div>

            <div
                id="introduction"
                className="introduce xl:screen:pt-32 md-screen:pt-32 pt-10 xl-screen:flex lg-screen:flex md-screen:flex block justify-center xl-screen:px-16 md-screen:px-16 px-2"
            >
                <div className="introduce-left flex items-center xl-screen:flex md-screen:flex hidden">
                    <img src={IntroduceLeft} alt="introduce-left" />
                </div>
                <div className="introduce-right flex justify-center items-center">
                    <img src={IntroduceRight} alt="introduce-right" />
                </div>
            </div>

            <div
                id="roadmap"
                className="roadmap xl-screen:flex md-screen:flex block justify-center roadmap mt-24 py-5 px-6 relative"
            >
                <div className="relative left">
                    <img
                        src={RoadmapLeft}
                        alt="roadmap-left"
                        className="w-full"
                    />
                    <img
                        src={RoadmapGroup}
                        alt="Roadmap-Group"
                        className="w-full absolute left-[56%] -bottom-[24%] z-50 xl-screen:block md-screen:block hidden"
                    />
                </div>
                <div className="right">
                    <img
                        src={RoadmapRight}
                        alt="roadmap-left"
                        className="w-full"
                    />
                </div>
            </div>

            <div
                id="contract"
                className="contract relative xl:px-20 lg:px-16 md:px-8 px-2 py-40"
            >
                <div className="relative">
                    <img
                        src={ContractLeft1}
                        alt="ContractLeft1"
                        className="con-left z-0"
                    />
                    <img
                        src={ContractLeft2}
                        alt="ContractLeft2"
                        className="con-left absolute bottom-0 left-0 z-20"
                    />
                    <img
                        src={ContractRight}
                        alt="ContractRight"
                        className="absolute top-10 -right-[10%]"
                    />
                    <img
                        src={ContactGroup}
                        alt="ContractRight"
                        className="absolute top-10 -left-[5%] z-10 w-[60%] xl-screen:w-[40%] left-[10%]"
                    />
                </div>
                <div className="absolute top-0 -left-[200px] w-full h-[10%]">
                    {chickenList.map((ele, ind) => (
                        <img
                            src={ChickenNFTGroup[0]}
                            alt="asdf"
                            className={`absolute animate-${ind}`}
                            key={ind}
                        />
                    ))}
                </div>
            </div>

            <div id="faq" className="faq flex justify-center relative">
                <img src={FaqContent} alt="FaqContent" />
                <img
                    src={FooterGiggle}
                    alt="FooterGiggle"
                    className="absolute right-[40%] -bottom-[10%] xl-screen:block w-[25%]"
                />
            </div>

            <div className="footer pt-24">
                <div>
                    <Marquee className="flex" direction="left" speed="30">
                        {ChickenNFTGroup.map((i, k) => (
                            <div key={k} className="px-2">
                                <img key={k} src={i} alt={`nft${k}`} />
                            </div>
                        ))}
                    </Marquee>
                </div>
                <div className="">
                    <img
                        src={FooterRect}
                        alt="footerrect"
                        className="h-[50px] w-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Body
