const drivers = [
  { driverId: 4, currentZone: "Centrum", availableFromMinute: 600 },
  { driverId: 8, currentZone: "Mokotow", availableFromMinute: 610 },
];

const transportOrders = [
  { requestId: 101, pickupZone: "Centrum", requestedPickupMinute: 605 },
  { requestId: 102, pickupZone: "Wola", requestedPickupMinute: 612 },
  { requestId: 103, pickupZone: "Ursynow", requestedPickupMinute: 620 },
  { requestId: 104, pickupZone: "Lotnisko", requestedPickupMinute: 630 },
];

const travelTimes = [
  { fromZone: "Centrum", toZone: "Centrum", minutes: 0 },
  { fromZone: "Centrum", toZone: "Wola", minutes: 8 },
  { fromZone: "Centrum", toZone: "Ursynow", minutes: 22 },
  { fromZone: "Centrum", toZone: "Lotnisko", minutes: 28 },

  // { fromZone: 'Mokotow', toZone: 'Centrum', minutes: 12 },
  // { fromZone: 'Mokotow', toZone: 'Wola', minutes: 18 },
  // { fromZone: 'Mokotow', toZone: 'Ursynow', minutes: 10 },
  // { fromZone: 'Mokotow', toZone: 'Lotnisko', minutes: 20 }
];

// Zadanie
// Sprawdź, które zlecenia są realnie osiągalne dla kierowcy w czasie.

function reachableOrdersForTheDriver(
  drivers,
  driverId,
  transportOrders,
  travelTimes,
) {
  const currentDriver = drivers.find((driver) => driver.driverId === driverId);
  // Sprawdź, które zlecenia są realnie osiągalne dla kierowcy w czasie.
  const availableMinutesForTheDestination = transportOrders.map((order) => {
    return {
      requestId: order.requestId,
      pickupZone: order.pickupZone,
      availableMinutesForTheDestination:
        order.requestedPickupMinute - currentDriver.availableFromMinute,
    };
  });
  // teraz trzeba porównać availableMinutesForTheDestination z travelTimes
  return availableMinutesForTheDestination.filter((item) => {
    let mega = travelTimes.find(
      (travelTimesItem) => travelTimesItem.toZone === item.pickupZone,
    );
    return mega.minutes <= item.availableMinutesForTheDestination;
  });
}

console.log(
  reachableOrdersForTheDriver(drivers, 4, transportOrders, travelTimes),
);
