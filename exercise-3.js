const documents = [
  { documentId: 201, version: 1, active: false, country: "PL" },
  { documentId: 201, version: 2, active: true, country: "PL" },

  { documentId: 202, version: 1, active: true, country: "DE" },
  { documentId: 202, version: 2, active: true, country: "DE" },

  { documentId: 203, version: 1, active: false, country: "UK" },
  { documentId: 203, version: 2, active: false, country: "UK" },

  { documentId: 204, version: 1, active: true, country: "PL" },
  { documentId: 204, version: 2, active: false, country: "PL" },
  { documentId: 204, version: 3, active: false, country: "PL" },

  { documentId: 205, version: 1, active: true, country: "FR" },
];

// Zwróć wszystkie dokumenty naruszające zasadę: "na dokument może przypadać maksymalnie jedna aktywna wersja".

function hasDocumentWithMultipleActiveVersions() {
  const uniqueDocumentIds = [
    ...new Set(documents.map((item) => item.documentId)),
  ];

  return uniqueDocumentIds
    .reduce((acc, curr) => {
      const currentDocumentGroup = documents.filter(
        (item) => item.documentId === curr,
      );

      return [
        ...acc,
        {
          documentId: curr,
          hasMoreThanOneActive:
            currentDocumentGroup.filter((item) => item.active).length > 1,
        },
      ];
    }, [])
    .some((item) => item.hasMoreThanOneActive);
}

console.log(doMagic2());
