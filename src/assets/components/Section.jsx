const Section = ({ category, images }) => {
  return (
    <div className="section">
      <h2>{category}</h2>
      <div className="image-of-movies">
        {images.map((image, index) => {
          return <img src={image} alt="Affiche de film" key={index} />;
        })}
      </div>
    </div>
  );
};

export default Section;
