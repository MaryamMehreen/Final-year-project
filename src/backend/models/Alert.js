const videoLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  action: String,  // e.g., "video start", "stream disconnected"
  timestamp: { type: Date, default: Date.now },
  details: String
});
