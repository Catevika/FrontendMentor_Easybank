import { reasons } from '../../data/data.js';

const Reasons = () => {
  return (
    <div className='reason-container'>
      {reasons.map((reason, i) => {
        const { src, title, description } = reason;
        return (
          <div key={i} className="card">
            <img src={src} alt={`${title} icon`} className='card-icon' />
            <h3 className='card-title'>{title}</h3>
            <p className='card-text'>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Reasons;