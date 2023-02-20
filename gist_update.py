import json

import requests

books_api_response = requests.get("https://www.gwenwindflower.com/api/books")

books = json.loads(books_api_response.text)

for book in books:
    book_data = book["meta"]
    if book_data["status"] == "reading":
        print(f"Reading '{book_data['title']}' by {book_data['author']}")
