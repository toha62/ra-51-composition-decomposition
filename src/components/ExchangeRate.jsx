export default function ExchangeRate({ rates }) {
  return (
    <div className="exchange-rate">
      <ul>
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
      </ul>      
    </div>
  );
}