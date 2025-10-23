import random
import string

def generate_password(length):
    """Generate a strong password of given length."""
    if length < 4:
        return "Password length should be at least 4 characters."
    
    # Define character sets
    lower = string.ascii_lowercase
    upper = string.ascii_uppercase
    digits = string.digits
    symbols = string.punctuation
    
    # Ensure at least one character from each category
    all_chars = lower + upper + digits + symbols
    password = random.choice(lower) + random.choice(upper) + random.choice(digits) + random.choice(symbols)
    
    # Fill the rest of the password length with random choices from all characters
    password += ''.join(random.choice(all_chars) for _ in range(length - 4))
    
    # Shuffle the password to avoid predictable patterns
    password = ''.join(random.sampl5e(password, len(password)))
    
    return password

# User input for password length
try:
    length = int(input("Enter password length: "))
    print("Generated Password:", generate_password(length))
except ValueError:
    print("Please enter a valid number.")
