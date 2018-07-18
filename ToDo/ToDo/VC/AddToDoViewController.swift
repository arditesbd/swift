//
//  AddToDoViewController.swift
//  ToDo
//
//  Created by Symbio on 17/7/18.
//  Copyright © 2018 person. All rights reserved.
//

import UIKit
import CoreData

class AddToDoViewController: UIViewController {
    
    //Mark: properties
    var managedContext: NSManagedObjectContext!
    //MARK: Outlets
    @IBOutlet weak var textView: UITextView!
    @IBOutlet weak var segmentedControl: UISegmentedControl!
    @IBOutlet weak var doneButton: UIButton!
    @IBOutlet weak var bottomConstraint: NSLayoutConstraint!
    //MARK: Actions
    @IBAction func cancel(_ sender: UIButton) {
        dismiss(animated: true)
        textView.resignFirstResponder()
    }
    
    @IBAction func done(_ sender: UIButton) {
        guard let title = textView.text, !title.isEmpty else {
            return
        }
        
            let todo = ToDo(context: managedContext)
            todo.title = title
            todo.priority = Int16(segmentedControl.selectedSegmentIndex)
            todo.date = Date()
        
        
        do {
            try managedContext.save()
            dismiss(animated: true)
        } catch {
            print("Error saving todo: \(error)")
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        NotificationCenter.default.addObserver(
                self,
                selector: #selector(keyboardWillShow(with:)), name: .UIKeyboardWillShow,
                object: nil)
        textView.becomeFirstResponder()
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
        
    }
    //MARK: Actions
    @objc func keyboardWillShow(with notification: Notification) {
        let key = "UIKeyboardFrameEndUserInfoKey"
        guard let keyboardFrame = notification.userInfo?[key] as? NSValue else { return }
        
        let keyboardHeight = keyboardFrame.cgRectValue.height + 16
        
        bottomConstraint.constant = keyboardHeight
        
        UIView.animate(withDuration: 0.3) {
            self.view.layoutIfNeeded()
        }
    
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */
        
       

}
}
extension AddToDoViewController: UITextViewDelegate {
    func textViewDidChangeSelection(_ textView: UITextView) {
        if doneButton.isHidden {
            textView.text.removeAll()
            textView.textColor = .white
            
            doneButton.isHidden = false
            
            UIView.animate(withDuration:0.3,animations: {
                self.view.layoutIfNeeded()
            })
        }
    }
}
