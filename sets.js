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
}