function getCode(person) {
    if(person is not null){
        if (person.address is not null){
            return person.address.zipCode
        }
    }
}
/// alternative way
function getCode(person) {
return person?.address?.zipCode
}