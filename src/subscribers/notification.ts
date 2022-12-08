import EventBusService from '../services/event-bus'
import NotificationService from '../services/notification'

class NotificationSubscriber {
    private readonly eventBusService_: EventBusService
    private readonly notificationService_: NotificationService

    constructor({ eventBusService, notificationService }) {
        this.notificationService_ = notificationService

        this.eventBusService_ = eventBusService

        this.eventBusService_.subscribe('*', this.onEvent as any)
    }

    onEvent = (data: Record<string, unknown>, eventName: string) => {
        return this.notificationService_.handleEvent(eventName, data)
    }
}

export default NotificationSubscriber
