export default function Menu({ menuItems }) {
  return (    
    <div className="menu">
      <ul>
        {menuItems.map( (item) => 
          <li key={item.id}>
            <a href="item.link" target="_blank" rel="noopener noreferrer">
              <div className="menu-item">
                {item.title}
              </div>                
            </a>
          </li>          
        )}
      </ul>      
    </div>
  );
}