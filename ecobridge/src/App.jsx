
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import AppRouters from './AppRouters';

import './App.css';


function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: 3,
                // refetchOnMount: false,
                staleTime: Infinity // can also be a number in millisecond
            },
        },
    })
    return (
        <QueryClientProvider client={queryClient}>
            <AppRouters />
        </QueryClientProvider>
    );
}

export default App;












// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import LoginPage from './views/LoginPage'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <LoginPage />
//     </>
//   )
// }
//
// export default App
