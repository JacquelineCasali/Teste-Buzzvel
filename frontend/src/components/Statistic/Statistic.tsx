import "./Statistic.css";

import statisticItem from "../../services/statisticItem.json";

import { StatisticItemType } from "../../interface/StatisticItemType";
export default function Statistic() {
  const stats: StatisticItemType[] = statisticItem;
  if (!stats?.length) return null;
  return (
    <section className="statistic-container">
      {stats.map((item) => (
        <div className="statistic" key={item.id}>
          <img
            src={item.icon}
            alt={item.alt}
            className="statistic-card-img"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <span className="number">{item.number}</span>
          <span className="statistic-text">{item.text}</span>
        </div>
      ))}
    </section>
  );
}
