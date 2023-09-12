// commentController.js

// Create a comment
exports.create = async (req, res) => {
    try {
      // Your create logic here
      res.status(201).json({ status: "success", data: "Comment created successfully" });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  };
  
  // Read a comment
  exports.read = async (req, res) => {
    try {
      // Your read logic here
      res.status(200).json({ status: "success", data: "Comment read successfully" });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  };
  
  // Delete a comment
  exports.delete = async (req, res) => {
    try {
      // Your delete logic here
      res.status(200).json({ status: "success", data: "Comment deleted successfully" });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  };
  
  // Update a comment
  exports.update = async (req, res) => {
    try {
      // Your update logic here
      res.status(200).json({ status: "success", data: "Comment updated successfully" });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  };
  