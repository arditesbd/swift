//
//  Card.swift
//  Concentration
//
//  Created by Symbio on 12/7/18.
//  Copyright © 2018 arditesbd. All rights reserved.
//

import Foundation

struct Card // no inheritence value types
    // copy on write semantic
{
     var isFaceUp = false
     var isMatched = false
    var identifier: Int
    private static var identifierFactory = 0
    private static func getUniqueIdentifier() -> Int {
        identifierFactory += 1
        return identifierFactory
    }
    init() {
        self.identifier = Card.getUniqueIdentifier()
    }
    
}
