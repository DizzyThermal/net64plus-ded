export const PACKET_TYPE = {
  MEMORY_WRITE: 0,
  CHAT_MESSAGE: 1,
  CHARACTER_SWITCH: 2,
  PING: 3
}

export default class Packet {
  static create (type, payload) {
    console.log(type)
    console.log(payload)
    type = Buffer.allocUnsafe(1)
    type.writeUInt8(type, 0)
    return Buffer.concat([type, payload])
  }
}
