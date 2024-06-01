/* eslint-disable indent */
import ClassRoom from './0-classroom';

export default function intializeRooms() {
    return [19, 20, 34].map((room) => new ClassRoom(room));
}
