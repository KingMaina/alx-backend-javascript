import ClassRoom from './0-classroom';

export default function initializeRooms() {
  // Store classroom information
  const classRooms = {
    rooms: [],
    sizes: [19, 20, 34],
  };

  // Create a classrooms
  for (let room = 0; room < 3; room += 1) {
    const classRoom = new ClassRoom(classRooms.sizes[room]);
    classRooms.rooms.push(classRoom);
  }

  return classRooms.rooms;
}
