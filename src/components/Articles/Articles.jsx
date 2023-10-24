import { articles } from '../../data/data';

const Articles = () => {
  return (
    <div className='article-container'>
      {articles.map((article, i) => {
        const { src, title, subtitle, content } = article;
        return (
          <div key={i} className="card-article">
            <img src={src} alt={title} className='card-img' />
            <h4 className='card-article-title'>{title}</h4>
            <h5 className='card-article-subtitle'>{subtitle}</h5>
            <p className='card-article-text'>{content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;