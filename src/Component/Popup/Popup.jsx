import { Status } from '../../Constant'
import { useAppContext } from '../Contexts/Context'
import { closePopup } from '../Reducer/actions/popup'
import React from 'react'


const Popup=({children})=>{
    const {appState,dispatch}  = useAppContext()

    if (appState.status === Status.ongoing)
          return null 


          const onClosePopup=()=>{
            dispatch(closePopup())
          }

   return <div className="popup">
   {React.Children.toArray(children).map(child =>
     React.cloneElement(child, { onClosePopup })
   )}
 </div>

}


export default Popup

















