import json
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

# ======================
# Load dataset
# ======================
with open("data/mental_health/proper_conversational_dataset.json", "r", encoding="utf-8") as f:
    dataset = json.load(f)

# Extract patterns and labels
train_x = [item["pattern"] for item in dataset]
train_y = [item["intent"] for item in dataset]

print(f"Loaded {len(train_x)} training examples across {len(set(train_y))} intents")

# ======================
# Train vectorizer + classifier
# ======================
vectorizer = TfidfVectorizer()
X_train = vectorizer.fit_transform(train_x)

clf = LogisticRegression(max_iter=1000)  # allow more iterations for stability
clf.fit(X_train, train_y)

# ======================
# Save them
# ======================
with open("vectorizer.pkl", "wb") as f:
    pickle.dump(vectorizer, f)

with open("intent_model.pkl", "wb") as f:
    pickle.dump(clf, f)

print("✅ Model trained and saved with fine-grained intents!")