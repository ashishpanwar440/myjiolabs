import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import Loader2 from './Components/Loader/Loader2'
import './Firebase/FirebaseConfig'

const App = React.lazy(() => import('./Components/Root/App'))

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback = {<Loader2 load = {true}/>}>
            <App />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
)


