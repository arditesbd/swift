//
//  CoreDataStack.swift
//  ToDo
//
//  Created by Symbio on 18/7/18.
//  Copyright © 2018 person. All rights reserved.
//

import Foundation
import CoreData

//class CoreDataStack {
//    var container: NSPersistentContainer
//        let container = NSPersistentContainer(name: "Todos")
//        container.loadPersistentStores { (description, error) in
//            guard error == nil else {
//                print("Error: \(error!)")
//                return
//            }
//        }
//        return container
//    }
//    var managedContext: NSManageObjectContext {
//        return container.viewContext
//    }
//
//}

// import Foundation
//import CoreData

class CoreDataStack {
    var container: NSPersistentContainer {
        let container = NSPersistentContainer(name: "ToDos")
        container.loadPersistentStores { (description, error) in
            guard error == nil else {
                print("Error: \(error!)")
                return
            }
        }
        
        return container
    }
    
    var managedContext: NSManagedObjectContext {
        return container.viewContext
    }
}

