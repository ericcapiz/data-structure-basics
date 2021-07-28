// #### Sets ####

function mySet(){
    var collection = [];
    //will check for element and will return true/false
    this.has = function(element){
        return(collection.indexOf(element) !== -1)
    }

    //returns all values in the set
    this.values = function(){
        return collection;
    }

    //add element to set, if not already in set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true
        }
        return false
    }

    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element)
            collection.splice(index,1)
            return true
        }
        return false
    }
    //will return size of collection
    this.size = function(){
        return collection.length;
    }
    //will return union of 2 sets
    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e)
        })
        secondSet.forEach(function(e){
            unionSet.add(e)
        })
        return unionSet
    }
    //will return the intersection of 2 sets as a new set
    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
        })
        return intersectionSet;
    }

    //will return difference of 2 sets as a new set
    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        })
        return differenceSet;
    }

    //test if set is a subset of a diff set
    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value)
        })
    }
}

var setA = new mySet();
var setB = new mySet();
setA.add("a")
setB.add("b")
setB.add("c")
setB.add("a")
setB.add("d")
console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())
console.log(setB.difference(setA).values())


var setC = new Set();
var setD = new Set();
setC.add("a")
setD.add("b")
setD.add("c")
setD.add("a")
setD.add("d")
console.log(setD.values());
setD.delete("a")
console.log(setD.has("a"));
console.log(setD.add("d"))