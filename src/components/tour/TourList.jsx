import TourItem from "./TourItem";
import "./TourList.css";

const TourList = ({ toursList }) => {
  return (
    <section className="tour-section">
      <div className="tour-list">
        {toursList.map((item) => (
          <TourItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default TourList;
