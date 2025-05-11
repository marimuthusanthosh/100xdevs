
import './App.css'
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationCountSelector } from './atoms'
import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil";

function App(){

  return (
    <div>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </div>
  )
}

function MainApp() {

  const networkNotificationCount=useRecoilValue(networkAtom)
  const jobsNotificationCount=useRecoilValue(jobAtom)
  const [messageNotificationCount,setMessageNotificationCount]=useRecoilState(messagingAtom)
  const notificationCount=useRecoilValue(notificationAtom)   
  const totalNotificationCount=useRecoilValue(totalNotificationCountSelector)
  

  return (
    <div>

      <button>Home ()</button>
      <button>My Network({networkNotificationCount>=100 ? "+99" : networkNotificationCount})</button>
    
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Messaging ({messageNotificationCount})</button>
      <button>Notification ({notificationCount})</button>
      <button >Me  ({totalNotificationCount})</button>

      
    </div>
  )
}

export default App
