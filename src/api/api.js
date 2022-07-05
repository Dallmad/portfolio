import {instance} from './instance'

export const api = {
    sendMessage(data) {
        return instance.post('sendMessage', data)
    }
}

