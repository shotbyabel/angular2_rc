import {Injectable} from '@angular/core';

// injectable meta-data imported..
@Injectable()
//
export class DataService {
    private _data = ['Stark', 'Lannister', 'Fray', 'Baratheon', 'Tully', 'Targeryan', 'Greyjoy'];

    getRandomHouse() {
        let randomNum = Math.floor(Math.random() * this._data.length);//random number beween 0 and 4
        //return the result
        return this._data[randomNum];
    
    }
//insert a value
    insert(value: string)
    {
        this._data.push(value);
    }
}