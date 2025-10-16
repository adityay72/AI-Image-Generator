import { useEffect, useState } from "react";
import "./History.css";

function History() {
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem("imageData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setImageData(parsedData);
    }
    setIsLoading(false);
  }, []);

  // Reset history handler
  const handleResetHistory = () => {
    localStorage.removeItem("imageData");
    setImageData([]);
  };

  // Only show items with valid images array
  const filteredImageData = imageData.filter(
    (item) => Array.isArray(item.images) && item.images.length > 0
  );

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ marginBottom: "20px" }}>History</h2>
      <button onClick={handleResetHistory} style={{ marginBottom: "20px" }}>
        Reset History
      </button>
      {isLoading || filteredImageData.length === 0 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ul>
          {filteredImageData.map((item, index) => (
            <li key={index}>
              <p>Prompt: {item.value}</p>
              <div className="imageContainer">
                {item.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="imageItem">
                    <img src={image.url} alt={`Generated image`} />
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;