import { useAtomValue } from "jotai"
import { Navigate } from "react-router-dom"
import { saveAtom, isConnectedAtom } from "../../atoms/token.atom"
import { useState, useEffect } from "react"

export const ProtectedPage = ({ children }) => {
    const token = useAtomValue(saveAtom)
    const isConnected = useAtomValue(isConnectedAtom)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [token])

    if (isLoading) return null

    if (!isConnected) {
        console.log('You are not logged in')
        return <Navigate to='/auth/login' replace />
    }

    console.log('You are logged in')
    return children;
}