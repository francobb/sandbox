/**
 * Q: Design a deck of cards
 *
 */

enum Suit {
    Hearts,
    Diamonds,
    Clubs,
    Spades
}

const cardRanks =
    [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K'];

type CardRank = typeof cardRanks[number]

interface IHand {
    readonly cards: Card[];
    getScore(): number;
    addCard(card: Card): void;
}
interface ICard {
   readonly suit: Suit;
   readonly rank: CardRank;
   toString(): string;
}


class Card implements ICard{
    constructor(readonly suit: Suit,  readonly rank: CardRank) {
        this.suit = suit;
        this.rank = rank;
    }

    toString(): string {
        return `${this.rank} of ${this.suit}`
    }
}

class Deck {
    private readonly cards: ICard[] = [];

    constructor() {
        this.reset();
    }

    deal(): Card {
        return this.cards.pop() as Card;
    }

    remainingCards(): number {
        return this.cards.length;
    }

    reset(): void {
        const suits = Object.values(Suit).filter(v => typeof v === 'number') as Suit[];
        for (const suite of suits) {
            for (const cardElement of cardRanks) {
                this.cards.push(new Card(suite, cardElement))
            }

        }
    }
}

class PlayerHand implements IHand{
    readonly cards: Card[];

    constructor() {
        this.cards = [];
    }

    getScore(): number {
        if(this.cards.length === 0) return 0;
        return this.cards.map(c => Number.isNaN(Number(c.rank)) ? 10 : Number(c.rank))
            .reduce((score, value) => score + value, 0);
    }

    addCard(card: Card) {
        this.cards.push(card);
    }

}