function caeserCipher(message, shift) {
    // Adjust the shift to be within the range of 0-25
    shift = shift % 26;
    
    // Hold the new message
    let newMessage = '';
    
    // Loop over each character in the message
    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        
        // Check if the character is a letter
        if (char.match(/[a-z]/i)) {
            // Get the character code of the letter
            const charCode = message.charCodeAt(i);
            
            // Handle uppercase letters
            if (charCode >= 65 && charCode <= 90) {
                newMessage += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
            }
            // Handle lowercase letters
            else if (charCode >= 97 && charCode <= 122) {
                newMessage += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
            }
        } else {
            // If not a letter, keep the character as is
            newMessage += char;
        }
    }
    return newMessage;
}
module.exports = caeserCipher;