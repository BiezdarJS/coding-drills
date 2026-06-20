const purchases = [
  { userId: 1, country: "PL", hour: 8 },
  { userId: 1, country: "DE", hour: 9 },
  { userId: 1, country: "PL", hour: 10 },
  { userId: 1, country: "JP", hour: 11 },

  { userId: 2, country: "PL", hour: 12 + 3 },
  { userId: 2, country: "DE", hour: 13 },
  { userId: 2, country: "DE", hour: 14 },

  { userId: 3, country: "US", hour: 15 },
  { userId: 3, country: "CA", hour: 16 },
  { userId: 3, country: "MX", hour: 20 },
];

// Zadanie: sprawdź, czy użytkownik kupował z więcej niż 2 krajów w ciągu 3 godzin.

function allowedThresholdCheck(purchases, allowedThreshold) {
  const uniqueUserIds = [...new Set(purchases.map((item) => item.userId))];

  return uniqueUserIds.reduce((acc, curr) => {
    let result;
    result = [
      ...acc,
      {
        // if next and previus has less than 3 hours lets compare countries
        userId: curr,
        allowedThresholdHasBeenCrossed: purchases
          .filter((item) => item.userId === curr)
          .sort((a, b) => a.hour - b.hour)
          .some((item, idx, array) => {
            // zwróć wszystkie których godzina jest mniejszą lub równa godzinie item+allowedThreshold
            // najpierw przefiltrować i wtedy zrobić porównywarkę
            const filteredXYZ = array.filter(
              (test) => item.hour + allowedThreshold >= currFiltered.hour,
            );
            return (currFiltered) =>
              item.hour + allowedThreshold >= currFiltered.hour;
          }),
      },
    ];
    return result;
  }, []);
}

console.log(allowedThresholdCheck(purchases, 3));
