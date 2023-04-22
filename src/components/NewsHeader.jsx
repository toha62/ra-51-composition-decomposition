export default function NewsHeader({ date, children }) {
  return (
    <div className="news-header-block">
      {children}
      <div>{date}</div>
    </div>
  );
}