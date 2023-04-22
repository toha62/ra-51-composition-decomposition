export default function Card({ children, title, headerImg = '' }) {
  return (
    <div className="card">    
      <div className="card-body">
        <div className="card-header">
          <h5 className="card-title">{title}</h5> 
          {headerImg}
        </div>             
        <div>{children}</div>  
      </div>
    </div>
  );
}