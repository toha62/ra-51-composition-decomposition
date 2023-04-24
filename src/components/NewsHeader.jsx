export default function NewsHeader({ mainNewsList, date }) {
  return (
    <div className="news-header-block">
      {mainNewsList.map( (item) => 
          <a href="item.link" target="_blank" rel="noopener noreferrer">{item.title}</a>
      )}      
      <div>{date}</div>
    </div>
  );
}