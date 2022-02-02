import '../styles/globals.css'
import  store  from '../utils/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'


let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
	
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate> 
    </Provider>
  
  
  ) 
}

export default MyApp
