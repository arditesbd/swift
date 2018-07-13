//
//  Concentration .swift
//  Concentration
//
//  Created by Symbio on 12/7/18.
//  Copyright © 2018 arditesbd. All rights reserved.
//

/*import Foundation
 class Concentration  // reference type
 {
 var cards = [Card]()
 
 var indexOfOneAndOnlyFaceUpCard: Int?
 func chooseCard(at index: Int){
 //  if cards[index].isFaceUp {
 //    cards[index].isFaceUp = false
 //  } else {
 //     cards[index].isFaceUp = true
 //  }
 if !cards[index].isMatched {
 if let matchIndex = indexOfOneAndOnlyFaceUpCard, matchIndex != index {
 // check if card match
 if cards[matchIndex].identifier == cards[index].identifier {
 cards[matchIndex].isMatched = true
 cards[index].isMatched = true
 }
 cards[index].isFaceUp = true
 indexOfOneAndOnlyFaceUpCard = nil
 }
 }
 
 else {
 for flipDownIndex in cards.indices {
 cards[flipDownIndex].isFaceUp = false
 }
 cards[index].isFaceUp = true
 indexOfOneAndOnlyFaceUpCard = index
 }
 }
 
 init(numberOfPairsOfCards: Int)
 
 {
 for _ in  1...numberOfPairsOfCards {
 let card = Card()
 cards+=[card,card]
 }
 //TODO: shuffle cards
 }
 }
 */
import Foundation

class Concentration {
    
    var cards = [Card]()
    var indexOfOneAndOnlyFaceUpCard: Int?
    
    func chooseCard(at index: Int) {
        if !cards[index].isMatched {
            if let matchIndex = indexOfOneAndOnlyFaceUpCard, matchIndex != index {
                // check if cards match
                if cards[matchIndex].identifier == cards[index].identifier {
                    cards[matchIndex].isMatched = true
                    cards[index].isMatched = true
                }
                cards[index].isFaceUp = true
                indexOfOneAndOnlyFaceUpCard = nil    // not one and only ...
                
                
            } else {
                // either no card or two cards face up
                for flipdownIndex in cards.indices {
                    cards[flipdownIndex].isFaceUp = false
                }
                cards[index].isFaceUp = true
                indexOfOneAndOnlyFaceUpCard = index
            }
            
        }
    }
    
    init(numberOfPairsOfCards: Int) {
        for _ in 1...numberOfPairsOfCards {
            let card = Card()
            cards += [card, card]
        }
        //    TODO: Shuffle the cards
    }
    
}
