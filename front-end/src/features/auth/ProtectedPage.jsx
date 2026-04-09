import { useAtomValue } from "jotai"
import { Navigate } from "react-router-dom"
import { isConnectedAtom} from "../../atoms/token.atom"

export const ProtectedPage = ({ children }) => {

    const isConnected = useAtomValue(isConnectedAtom)


    if (!isConnected) {
          console.log('You are not logged in')
        return <Navigate to='/auth/login' replace />
    }
    console.log('You are logged in')
    return children;
}