import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key: "notificationsAtom",  // Better naming
    default: selector({
        key: "notificationsSelector",
        get: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})