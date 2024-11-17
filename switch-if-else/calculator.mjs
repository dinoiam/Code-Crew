import { somma, divisione } from './add.mjs';

export function sasiFunction(){
    const A = 10;
    const B = 30;

    return { somma:somma(A,B), dvisione:divisione(A,B)}
}