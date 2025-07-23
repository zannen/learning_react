import { useNavigate } from "react-router-dom";

import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = (e) => {
    e.preventDefault();
    navigate("./products/");
  };

  return (
    <div className="landing-background">
      <div className="landing-row">
        <div className="landing-col left">
          <h1>Welcome to Paradise Nursery</h1>
          <p>
            Paradise Nursery is a place where you can find the best plants and
            flowers for your home and garden.
          </p>
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
        <div className="landing-col right">
          <p>
            Welcome to the future of shopping for plants and flowers. We are
            passionate about plants and flowers and we want to share our
            knowledge with you.
          </p>

          <p>
            We have a wide range of plants and flowers for you to choose from.
            We also have a range of gardening tools and equipment to help you
            look after your plants and flowers.
          </p>

          <p>
            We are a team of experienced gardeners who are passionate about
            plants and flowers. We are here to help you look after your plants
            and flowers.
          </p>

          <p>
            Join us on a journey of discovery and learning about plants and
            flowers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
