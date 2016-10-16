/*
 [x] 1. Create dispatcher
 [x] 4. Create store that tracks a list of messages and the new message
 [x] 5. Expose getter functions for state that store tracks

 [x] 2. Action creator: changeNewMessage
 [x] 3. Use action creator from view

 [x] 6. View-controller should get initial state from store
 [x] 7. View-controller owns ChatContainer, passes data as prop
 [x] 8. Store should register to dispatcher to handle actions

 [x] 9. Handle change-new-message action and emit change
 [x] 10. View controllers need to listen to the change event and need to handle the change
 [x] 11. Avoid memory leaks! Need to stop listening when no longer needed

 [x] 12. ChatContainer should now take newMessage as a prop
 [x] 13. ChatApp needs to render ChatController instead of ChatContainer

 [x] 14. Test it, make sure you can change the new-message input text box

 [x] 15. Move submitNewMessage to the flux pattern, remember that the store is already tracking the newMessage,
        also the store should have the business logic, it is easy to unit test the store

 [x] 16. Create a new component (owned by ChatController) that has chat metrics:
   - it shows number of characters in the new message
   - it shows the number of messages
   - It shows the time of the last message. Hint: use Date.toLocaleTimeString()
 */
