import NewsHeader from './src/components/NewsHeader';
import News from './src/components/News';
import ExchangeRate from './src/components/ExchangeRate';
import SideAds from './src/components/SideAds';
import Card from './src/components/Card';
import Menu from './src/components/Menu';
import Search from './src/components/Search';
import AdsBlock from './App';

function App() {
  return (
    <>
      <NewsHeader date={date}>
        {mainNewsList.map( (item) => 
          <a href="item.link" target="_blank" rel="noopener noreferrer">{item.title}</a>
        )}        
      </NewsHeader> 
      
      <News>
        {newsList.map( (item) => 
          <li key={item.id}>
            <a href="item.link" target="_blank" rel="noopener noreferrer">
              <div className="news-icon">
                <img src="item.imgUrl" alt="" />
              </div>
              <span>{item.title}</span>
            </a>
          </li>          
        )}
      </News> 

      <ExchangeRate>
        {rates.map( (item) => 
            <li key={item.id}>
              <a href="item.link" target="_blank" rel="noopener noreferrer">
                <div className="rate-item">
                  <span>item.title</span>
                  <span>item.value</span>
                  <span>item.rate</span>
                </div>                
              </a>
            </li>          
          )}
      </ExchangeRate>

      <SideAds img={sideAds.img} link={sideAds.link}>        
        <Card title={sideAds.title}>
          <p>{sideAds.text}</p>
        </Card>          
      </SideAds>

      <Menu menuItems={menuItems} />
      <Search logo={search.logo} example={search.example} />
      <AdsBlock ads={ads} />

      <Card title={'Погода'}>
        <img src="#" alt="" />
        <div className="temperature">+17</div>
        <div>
          <p>Утром +17, днём +20</p>
        </div>
      </Card>

      <Card title={cardsData[0].title}>
        <ul>
          {cardsData[0].items.map( (item) => 
            <li>
              <a href={item.link}>
                <span>{item.mainText}</span>
                <span>{item.text}</span>
              </a>
            </li>
          )}
        </ul>        
      </Card>

      <Card title={cardsData[1].title}>
        <ul>
          {cardsData[0].items.map( (item) => 
            <li>
              <a href={item.link}>                
                <span>{item.text}</span>
              </a>
            </li>
          )}
        </ul>        
      </Card>

      <Card
        title={cardsData[2].title}
        headerImg={
          <a href={cardsData[2].link}>
            <img src={cardsData[2].imgUrl} alt="" />      
          </a>
        }
      >
        <ul>
          {cardsData[0].items.map( (item) => 
            <li>
              <a href={item.link}>
                <span>{item.time}</span>
                <span>{item.mainText}</span>
                <span>{item.text}</span>
              </a>
            </li>
          )}
        </ul>        
      </Card>

      <Card title={cardsData[3].title}>
        <ul>
          {cardsData[0].items.map( (item) => 
            <li>
              <a href={item.link}>
                <div className="icon">
                  <img src={item.icon} alt="" />
                </div>
                <span>{item.mainText}</span>
                <span>{item.text}</span>
              </a>
            </li>
          )}
        </ul>        
      </Card>
    </> 
    
);
}

export default App
