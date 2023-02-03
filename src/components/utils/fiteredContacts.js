export const fiteredContacts = (filter, contacts) => {
  const normalizeFilter = filter.toLowerCase().trim();

  const fiteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return fiteredContacts.sort((a, b) => a.name.localeCompare(b.name));
};
