# backend.py

from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route('/api/products', methods=['GET'])
def get_products():
    # Retrieve and return the list of products from the database
    products = [
        {'id': 1, 'name': 'Product 1', 'price': 10.90},
        {'id': 2, 'name': 'Product 2', 'price': 19.99},
        {'id': 3, 'name': 'Product 3', 'price': 5.99}
    ]
    return jsonify(products)


@app.route('/api/checkout', methods=['POST'])
def process_checkout():
    # Process the checkout logic and return the order confirmation
    data = request.get_json()
    # Process the payment, update the order, etc.
    return jsonify({'message': 'Order placed successfully'})


if __name__ == '__main__':
    app.run()
