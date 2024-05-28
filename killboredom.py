import string
import random

def generate_random():
    res = ''.join(random.choices(string.ascii_letters, k=3))
    return res
    
def encode(string):
    if len(string)>=3:
        string = string[1:len(string)] + string[0]
        random_str_start = generate_random()
        random_str_end = generate_random()
        string = random_str_start + string + random_str_end
        return string
    else:
        return string[:-1]
        
def decode(string):
    if len(string)>=3:
        string = string[3:-3]
        string = string[-1] + string[0:-1]
        return string
    else:
        return string[:-1]
        
encoded_string = encode("Musaib")   
print(encoded_string)
print(decode(encoded_string))
