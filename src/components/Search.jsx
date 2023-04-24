export default function Search({ logo, example, handleSubmit }) {
  return (
    <div className="search-block">    
      <div className="search-block_logo">
        <img src={logo} alt="" />  
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="search-field" id="" />
        <input type="button" value="Найти" />
        <label htmlFor="search-field">
          <span>Найдётся всё. Например, </span>
          <span>{example}</span>
        </label>
      </form>
    </div>
  );
}