export default function News({ newsList }) {
  return (
    <div className="news-list">
      <ul>
        {newsList.map((item) => 
          <li key={item.id}>
            <a href="item.link" target="_blank" rel="noopener noreferrer">
              <div className="news-icon">
                <img src="item.imgUrl" alt="" />
              </div>
              <span>{item.title}</span>
            </a>
          </li>          
        )}
      </ul>      
    </div>
  );
}