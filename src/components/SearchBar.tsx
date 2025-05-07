export default function SearchForm() {
  return (
    <form>
      <div className="searchform-slot">
        <div className="form-group">
          <label className="aural" htmlFor="myInputField">
            Suchbegriff
          </label>
          <div className="searchterm">
            <div className="input-wrapper">
              <i className="bicon bicon-search lens" aria-hidden="true"></i>
              <input
                type="search"
                className="form-control search"
                placeholder="Search"
                name="myInputField"
                id="myInputField"
              />
            </div>
            <button className="submit" type="submit" title="Suchen">
              <span className="aural">Suchen</span>
              <i className="bicon bicon-arrow-right icon" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
