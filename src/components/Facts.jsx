import CountUp from 'react-countup';
import { stats } from '../data';

const Facts = () => (
  <section className="stats-section" id="estadisticas">
    <div className="container">
      <div className="row">
        {stats.map(({ id, number, suffix, decimals, title }) => (
          <div className="col-6 col-md-3" key={id}>
            <div className="stat-item">
              <div className="stat-number merriweather">
                <CountUp
                  end={number}
                  suffix={suffix}
                  decimals={decimals ?? 0}
                  separator=","
                />
              </div>
              <p className="stat-title lato mb-0">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Facts;
