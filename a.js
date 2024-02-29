
arr_a = [1,2,3,4,5];
arr_b = ['a', 'b', 'c'];
function iterator(arr){
    this.f_iter = 0;
    this.l_iter = arr.length;
    this.arr = arr;
    this.hasNext = function (){// return true if the iteration has more element
        return this.f_iter < this.l_iter;
    }
    this.next = function (){ //// return next element in the iteration
        return this.arr[this.f_iter++];
    }
}

it1 = new iterator(arr_a);
it2 = new iterator(arr_b);

Array.prototype.iterator = function (){
    return new Iterable(this);
}


while(it1.hasNext()){
    console.log(it1.next());
}

while(it2.hasNext()){
    console.log(it2.next());
}