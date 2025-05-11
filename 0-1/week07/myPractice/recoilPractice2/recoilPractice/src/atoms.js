import {atom, selector} from "recoil";

export const networkAtom =atom({
  key:"networkAtom",
  default:102
})

export const jobAtom=atom({
  key:"jobAtom",
  default:0
})
export const notificationAtom=atom({
  key:"notificationAtom",
  default:12
})
export const messagingAtom=atom({
  key:"messagingAtom",
  default:0
})

export const totalNotificationCountSelector=selector({
  key:"totalNotificationCountSelector",
  get:({get})=>{

    const total=get(networkAtom)+get(jobAtom)+get(notificationAtom)+get(messagingAtom)

    return total;
  }
})