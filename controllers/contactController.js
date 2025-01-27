//@dec Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" })
};

//@dec Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  res.status(201).json({ message: "Create contacts" })
};

//@dec Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` })
};

//@dec Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` })
};

//@dec Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` })
}


module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact
}