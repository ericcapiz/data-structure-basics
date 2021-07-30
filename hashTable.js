// #### HASH TABLE ####


//hash function takes a string and max (number of buckets in hash table to store value)
var hash = (string, max) => {
    var hash = 0;
    // add charCodeAt for each character in the string-- each string as a numerical value--
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    // takes the has divded by number of buckets in table, then return remainder which will tell what index to store data
    return hash % max;
  };
  
  let HashTable = function() {
  
    let storage = [];
    const storageLimit = 14;
    
    this.print = function() {
      console.log(storage)
    }
  
    this.add = function(key, value) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [
          [key, value]
        ];
      } else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([key, value]);
        }
      }
    };
  
    this.remove = function(key) {
      var index = hash(key, storageLimit);
      if (storage[index].length === 1 && storage[index][0][0] === key) {
        delete storage[index];
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            delete storage[index][i];
          }
        }
      }
    };
  
    this.lookup = function(key) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            return storage[index][i][1];
          }
        }
      }
    };
  
  };
  


console.log(hash("rizzo", 10))

let ht = new HashTable()
ht.add("anthony", "yankees")
ht.add("bryant", "chicubs")
ht.add("zach", "bulls")
ht.add("justin", "chicagobears")

console.log(ht.lookup("justin"))

ht.print()