
import { Link } from 'react-router-dom';
import missionImage from './mission-image.jpg';

const voteStyle =
  'px-8 py-2 rounded-lg text-[#FF7F11] font-bold ' +
  'bg-[#541388] mt-6 flex justify-between ' +
  'max-w-lg mx-auto';

const HomePage = () => {
  return (
    <div className="text-gold text-center bg-black pt-8">
      {/* Hero Section */}
      <section className="py-16">
        <h1 className="text-3xl md:text-5xl font-bold">KW Kenya Awards</h1>
        <h2 className="text-4xl md:text-6xl font-bold mt-2">2025</h2>

        <div className="mt-6 flex justify-center gap-4">
          <Link to="/vote" className={voteStyle}>Vote for Nominees</Link>
          <Link to="/register" className={voteStyle}>Register as Nominee</Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4">
        <h3 className="text-3xl font-bold">Our Mission</h3>
        <div className="bg-gold-dark p-6 rounded-lg mt-4 max-w-4xl mx-auto">
          <img src={missionImage} alt="Our Mission" className="w-full rounded-lg" />
          <h4 className="text-xl font-bold mt-4">What We Value</h4>
          <p className="text-gray-300 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales eget eros.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12">
        <h3 className="text-3xl font-bold">Our Partners</h3>
        <div className="flex justify-center gap-6 mt-6">
          {[...Array(4)].map((_, index) => (
            <img key={index} src="/partner-placeholder.svg" alt="Partner" className="w-20 h-20 rounded-full" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
