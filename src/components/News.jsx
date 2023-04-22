export default function News({ children }) {
  return (
    <div className="news-list">
      <ul>
        {children}
      </ul>      
    </div>
  );
}