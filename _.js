_ = {
  clamp(number, lower, upper){
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end ){
    console.log(`end ${end}`);
    if (end ===  undefined){
      console.log(`inside hi ${start} ${end}`);
      end = start;
      start = 0;
    }
    if(start > end){

      let temp = start;
      start = end;
      end = temp;
    }
    let isInRange = true ;
    if(number >= start && number <= end ){
      return  isInRange
    }else{
      isInRange = false;
      return isInRange;
    }
  },

  words(string){
    let words = string.split(" ");
  	return words;
  },

  pad(string, length){
    if (string.length >= length){
      return string;
    }
    let start = Math.floor((length - string.length)/2);
  	let end = length - start - string.length;
    let paddedString = ' ';
    console.log(`${ paddedString.repeat(start) + string + paddedString.repeat(end)}`);
     return  paddedString.repeat(start) + string + paddedString.repeat(end);
  },
  has(object, key){
    let hasValue = object[key] != undefined ;
    return hasValue;
  },
  invert(object){
    const invertedObject = {};
    for (var key in  object){
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, predicate){
    for(var key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue){
        return key;
      }
        }
    return undefined;
  },
  drop(array, n){
    if (n === undefined){
      n = 1;
    }
    let droppedArray = array.slice(n, array.length);
		return droppedArray;
  },
  dropWhile(array, predicate){
    let dropNumber = array.findIndex((element, index)=>{
      return !predicate(element, index, array);
    });
  	let droppedArray =  this.drop(array, dropNumber);
		return droppedArray;
  },
  chunk(array, size){
    if(size === undefined){
      size = 1;
    }
    let arrayChunks = [];
    let counter = array.length;
    let i = 0;
    for( i  ; i < array.length ; i += size){
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }




};




// Do not write or modify code below this line.
module.exports = _;
