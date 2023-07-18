const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/src/assets/photo.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold">
              Unleash Your Literary Passion! Explore Our Vast{" "}
              <span className="text-primary">"Book Collection"</span>
            </h1>
            <p className="py-6">
              A book collection is a treasure trove of knowledge and
              imagination, where pages upon pages hold the power to transport
              readers to different worlds and expand their horizons. Each book
              in a collection is a window into unique stories, ideas, and
              perspectives, forming a tapestry of literary exploration.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
