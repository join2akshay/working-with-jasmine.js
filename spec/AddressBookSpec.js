describe("AddressBook",function(){
    it("It should be able to add contact",function(){
        var addressBook= new AddressBook();
         thisContact = new Contact();
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    });
    it("It should able to delete contact", function(){
        var addressBook= new AddressBook();
         thisContact = new Contact();
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);
        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});