describe("AddressBook",function(){
    it("It should be able to add contact",function(){
        var addressBook= new AddressBook();
        var thisContact = new Contact();
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    });
});