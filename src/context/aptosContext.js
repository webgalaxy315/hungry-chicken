import React, { useEffect, useState, createContext } from 'react'

export const AptosContext = createContext(null)
export const AptosContextProvider = ({ children, ...props }) => {
    const [address, setAddress] = useState(null)
    const [isConnected, setIsConnected] = useState(false)
    const [isPetra, setIsPetra] = useState(false)

    useEffect(() => {
        if (isConnected && isPetra) {
            window?.aptos.account().then((data) => {
                setAddress(data.address)
            })
        } else if (isConnected && !isPetra) {
            window?.martian.account().then((data) => {
                setAddress(data.address)
            })
        } else {
            setAddress(null)
        }
    }, [isConnected, isPetra])

    const handleConnect = async (isPetraConnect) => {
        try {
            if (isPetraConnect) {
                await window.aptos.connect()
            } else {
                await window.martian.connect()
            }
            setIsPetra(isPetraConnect)
            checkIsConnected(isPetraConnect)
        } catch (e) {
            console.log(e)
        }
    }
    const handleDisconnect = async (isPetraConnect) => {
        try {
            if (isPetra) await window.aptos.disconnect()
            else await window.martian.disconnect()
            setIsPetra(isPetraConnect)
            checkIsConnected(isPetraConnect)
        } catch (e) {
            console.log(e)
        }
    }
    const checkIsConnected = async (isPetraConnect) => {
        if (isPetraConnect) {
            const x = await window.aptos.isConnected()
            setIsConnected(x)
        } else {
            const x = await window.martian.isConnected()
            setIsConnected(x)
        }
    }

    const datacontext = {
        handleConnect: handleConnect,
        handleDisconnect: handleDisconnect,
        address: address,
        isConnected: isConnected,
    }

    return (
        <AptosContext.Provider value={datacontext}>
            {children}
        </AptosContext.Provider>
    )
}
