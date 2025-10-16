import React from "react";

import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="landing">
      <div class="container px-2 py-4 my-5">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-4 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
              AI-Powered Imagery: Where Technology Meets Imagination
            </h1>
            <p class="lead">
              Unleash your imagination and let our cutting-edge technology bring
              your visions to life with pixel-perfect precision. Discover the
              limitless possibilities of AI-powered image creation today
            </p>

            <div class="d-grid gap-2 col-6 mt-5">
              <button class="btn btn-success " type="button">
                <Link
                  to="/Images"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Button
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              class="rounded-lg-3"
              src="https://www.techrepublic.com/wp-content/uploads/2023/07/tr71123-ai-art.jpeg"
              alt="Loading"
              width="720"
            />
          </div>
        </div>
      </div>
      <div class="container px-4 py-5 mt-5" id="featured-3">
        <h2 class="pb-2 border-bottom">Details of our Project</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
            <h3 class="fs-2 text-body-emphasis">API</h3>
            <p>
              We have integrated ChatGPT, powered by OpenAI's GPT-3.5
              architecture, into our platform using the OpenAI API. This allows
              us to provide you with a seamless and responsive conversational
              experience. ChatGPT Dell API enables natural language
              understanding and generation, enhancing our platform's
              capabilities to understand and respond to your queries
              effectively, making interactions more human-like and intelligent.
            </p>
            <a href="#" class="icon-link">
              Call to action
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
            <h3 class="fs-2 text-body-emphasis">Frame work</h3>
            <p>
              We've harnessed the power of React as our frontend framework to
              build a dynamic and user-friendly interface for our platform.
              React's component-based architecture has enabled us to create
              modular and reusable UI elements, resulting in a smoother
              development process and enhanced maintainability. With React's
              efficient rendering and state management, we've crafted a
              responsive and interactive user experience that seamlessly adapts
              to your needs, ensuring a fast, engaging, and reliable frontend
              for our platform.
            </p>
            <a href="#" class="icon-link">
              Call to action
            </a>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
            <h3 class="fs-2 text-body-emphasis">Database</h3>
            <p>
              We've leveraged Google Firebase Cloud Service as our database
              solution, providing a robust and scalable foundation for our
              platform. Firebase offers real-time data synchronization, ensuring
              that your information is always up-to-date. With its secure
              authentication and effortless integration, we've built a seamless
              and reliable data storage and retrieval system that guarantees a
              smooth and secure experience for our users.
            </p>
            <a href="#" class="icon-link">
              Call to action
            </a>
          </div>
        </div>
      </div>

      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
        </ul>
        <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
      </footer>
    </div>
  );
}

export default Home;
