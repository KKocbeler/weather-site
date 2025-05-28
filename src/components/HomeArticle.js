import './HomeArticle.css';

const articles = [
  {
    title: 'Mars could be driving ‘giant whirlpools’ in the Earth’s deep oceans',
    time: '10 minutes ago',
    img: 'Images/home-article/article-1.webp',
    alt: 'Mars causing whirlpools in Earth oceans',
  },
  {
    title: 'Oldest ‘dead’ galaxy spied by Webb may cause astronomers to revise their understanding of the early universe',
    time: '4 hours ago',
    img: 'Images/home-article/article-2.webp',
    alt: 'Dead galaxy seen by Webb telescope',
  },
  {
    title: 'Nearly 30,000 objects are hurtling through near-Earth orbit. That’s not just a problem for space',
    time: '2 days ago',
    img: 'Images/home-article/article-3.webp',
    alt: 'Space debris orbiting near Earth',
  },
  {
    title: 'How to see the International Space Station from your backyard',
    time: '7 days ago',
    img: 'Images/home-article/article-4.webp',
    alt: 'ISS visible from backyard',
  },
  {
    title: 'A 5,000-pound satellite is expected to fall to Earth this week',
    time: '11 days ago',
    img: 'Images/home-article/article-5.webp',
    alt: 'Satellite expected to fall to Earth',
  },
];

const HomeArticle = () => {
  return (
    <div className="home-article container">
      <h2>Space and Astronomy</h2>
      <div className="article-cards">
        {articles.map((article, index) => (
          <article className="article-card" key={index}>
            <div className="article-card-image">
              <img src={article.img} alt={article.alt} />
            </div>
            <div className="article-card-body">
              <h3 className="article-text">
                <p className="overflow-text">{article.title}</p>
              </h3>
              <div className="article-time">
                <span>{article.time}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default HomeArticle;
