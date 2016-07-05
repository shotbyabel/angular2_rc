import {Injectable} from '@angular/core';

// injectable meta-data imported..
@Injectable()
//
export class CalculatorService {
    //2 functions needed, add and multiply
    add(num1: number, num2: number) {
        return num1 + num2;
    }

    multiply(num1: number, num2: number) {
        return num1 * num2;
    }

}