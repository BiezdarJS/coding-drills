const seats = [
  { seat: '1A', occupied: true },
  { seat: '1B', occupied: false },
  { seat: '1C', occupied: true }
];


// Zadanie:
// Sprawdź czy istnieją dwa wolne miejsca obok siebie.

function hasNeighbouringSeatsAvailable() {
  const availableRows = [...new Set(seats.map(item => item.seat).map(item => parseInt(item, 10)))];
  // przefiltruj seats zawierające obecnie iterowany integer
  availableRows.forEach(rowNumber => {
    return seats
      .filter(item => item.seat.includes(rowNumber))
      .map(item => )
  })
}


console.log(seats.filter(item => item.seat.includes(1)).map(item => item.split(1).slice(-1)));