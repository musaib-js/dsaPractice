class Library:
    
    def __init__(self):
        self.books = ["DEF", "GHI"]
        self.number_of_books = len(self.books)
        self.records = {'ABC': 'Musaib'}
        
    def current_stats(self):
        print(f"We currently have {self.number_of_books} books available. The books we have are as {self.books}")
        
    def assign_book(self, book_name, person_name):
        if book_name in self.books:
            self.records[book_name] = person_name 
            print(f"Assigning you {book_name}")
            self.books.remove(book_name)
        else:
            print("Sorry we don't have that book available right now. Please check back later")
    
    def collect_book(self, book_name, person_name):
        if self.records.get(book_name):
            del self.records[book_name]
            self.books.append(book_name)
            print("Thank you for returning the book")
        else:
            print("Sorry, this book has not been assigned to you.")
    
    def check_my_books(self, person_name):
        if person_name in self.records.values():
            print("Yes, you have a book.")
            user_book = [book_name for book_name, owner in self.records.items() if owner == person_name]
            print(f"Book Name: {user_book} ")
        else:
            print("Looks like you've not taken any book from us")
def checkin():
    name = input("Please enter your name: ")
    action = input("Please enter 1 for checking in, 2 for checking out and 3 for checking your books: ")
    lib = Library()
    if action=="1":
        book_name = input("Please enter the name of the book you want to take: ")
        lib.assign_book(book_name, name)
        print(books)
    elif action=="2":
        book_name = input("Please enter the name of the book you want to submit: ")
        lib.collect_book(book_name, name)
        print(lib.books)
    elif action=="3":
        lib.check_my_books(name)
    else:
        print("Please enter a valid input")
        checkin()
       
if __name__ == "__main__":
    checkin()
