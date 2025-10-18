from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import json
import pickle

app = Flask(__name__)
CORS(app)

# ======================
# Load dataset (from /data folder)
# ======================
with open("data/mental_health/proper_conversational_dataset.json", "r", encoding="utf-8") as f:
    dataset = json.load(f)

# ======================
# Load pre-trained model
# ======================
with open("vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

with open("intent_model.pkl", "rb") as f:
    clf = pickle.load(f)

# ======================
# Chat memory
# ======================
chat_history = []


def classify_intent(user_query):
    """Predict the intent of the user query"""
    X = vectorizer.transform([user_query])
    intent = clf.predict(X)[0]
    return intent


def get_response(user_query):
    """Get a chatbot response based on intent"""
    intent = classify_intent(user_query)

    # Filter dataset for that intent
    candidates = [d["response"] for d in dataset if d["intent"] == intent]

    if not candidates:
        return "I’m here for you 💙 Can you tell me more?"

    return random.choice(candidates)


# ======================
# Flask Routes
# ======================
@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message", "").strip()

    # Save user message in history
    chat_history.append({"user": user_message})

    # Get bot reply
    bot_reply = get_response(user_message)

    # Save bot reply in history
    chat_history.append({"bot": bot_reply})

    return jsonify({
        "response": bot_reply,
        "history": chat_history
    })


@app.route("/")
def index():
    return jsonify({"message": "✅ Mental Health Chatbot is running!"})


if __name__ == "__main__":
    app.run(debug=True)