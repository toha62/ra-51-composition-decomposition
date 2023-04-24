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
      /** 
       * Header. Main news.
       * @param {array} mainNewsList list of news
       * @param {string} date current date
       */
      <NewsHeader mainNewsList={mainNewsList} date={date} />   
      
      /** 
       * News list.
       * @param {array} newsList list of news
       */
      <News newsList={newsList} />
        
      /** 
       * Exchange rate list.
       * @param {array} rates list of exchange rates
       */
      <ExchangeRate rates={rates} />

      /** 
       * Side ads.
       * @param {object} sideAds object contain data of ads
       */
      <SideAds img={sideAds.img} link={sideAds.link}>        
        <Card title={sideAds.title}>
          <p>{sideAds.text}</p>
        </Card>          
      </SideAds>

      /** 
       * Main menu.
       * @param {array} menuItems list of menu items
       */
      <Menu menuItems={menuItems} />

      /** 
       * Search block.
       * @param {string} logo url og logo
       * @param {string} example some text
       * @param {function} handleSubmit callback function
       */
      <Search logo={search.logo} example={search.example} handleSubmit={handleSubmit}/>

      /** 
       * Main ads.
       * @param {object} ads object contain data of ads
       */
      <AdsBlock ads={ads} />

      /** 
       * Base card.
       * @param {string} title title of card
       */
      <Card title={'Погода'}>
        <img src="#" alt="" />
        <div className="temperature">+17</div>
        <div>
          <p>Утром +17, днём +20</p>
        </div>
      </Card>

      /** 
       * Base card.
       * @param {string} title title of card
       */
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

      /** 
       * Base card.
       * @param {string} title title of card
       */
      <Card title={cardsData[1].title}>
        <ul>
          {cardsData[0].items.map( (item) => 
            <li key={item.id}>
              <a href={item.link}>                
                <span>{item.text}</span>
              </a>
            </li>
          )}
        </ul>        
      </Card>

      /** 
       * Base card.
       * @param {string} title title of card
       * @param {component} headerImg html of header image
       */
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
            <li key={item.id}>
              <a href={item.link}>
                <span>{item.time}</span>
                <span>{item.mainText}</span>
                <span>{item.text}</span>
              </a>
            </li>
          )}
        </ul>        
      </Card>

      /** 
       * Base card.
       * @param {string} title title of card
       */
      <Card title={cardsData[3].title}>
        <ul>
          {cardsData[0].items.map( (item) => 
            <li key={item.id}>
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
