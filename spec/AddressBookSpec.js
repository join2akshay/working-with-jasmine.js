describe("AddressBook",function(){
    var addressBook,
    thisContact;
    beforeEach(function(){
        addressBook= new AddressBook();
        thisContact = new Contact();

    });

    it("It should be able to add contact",function(){
      
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    });
    it("It should able to delete contact", function(){
      //  var addressBook= new AddressBook();
      //   thisContact = new Contact();
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);
        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

describe("Async Test",function(){
    var addressBook= new AddressBook();
    it("should grab initail value",function(){
        addressBook.getInitialContact();
        expect(addressBook.getIntialContact).toBe(true);
    });
});