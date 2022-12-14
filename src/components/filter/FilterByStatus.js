import "../../styles/components/FilterByStatus.scss";

function FilterByStatus(props) {
  const handleByStatus = (ev) => {
    props.handleFilterByStatus(ev.target.value);
  };

  return (
    <fieldset className="form__radio">
      <legend className="form__radio--legend">By Status:</legend>
      <div className="form__radio--wrap">
        <label htmlFor="all" className="form__radio--name">
          <i class="fa-solid fa-thumbtack"></i>
          <input
            type="radio"
            id="all"
            name="status"
            value="all"
            className="form__radio--input"
            checked={props.filterByStatus === "all"}
            onChange={handleByStatus}
          />
          <span className="form__radio--icon"></span>
        </label>
        <label htmlFor="alive" className="form__radio--name">
          <i className="form__radio--icon fa-solid fa-heart"></i>
          <input
            type="radio"
            id="alive"
            name="status"
            value="alive"
            className="form__radio--input"
            checked={props.filterByStatus === "alive"}
            onChange={handleByStatus}
          />
        </label>
        <label htmlFor="dead" className="form__radio--name">
          <i className="form__radio--icon fa-solid fa-skull"></i>
          <input
            type="radio"
            id="dead"
            name="status"
            value="dead"
            className="form__radio--input"
            checked={props.filterByStatus === "dead"}
            onChange={handleByStatus}
          />
        </label>
        <label htmlFor="dead" className="form__radio--name">
          <i class="fa-sharp fa-solid fa-question"></i>
          <input
            type="radio"
            id="unknown"
            name="status"
            value="unknown"
            className="form__radio--input"
            checked={props.filterByStatus === "unknown"}
            onChange={handleByStatus}
          />
        </label>
      </div>
    </fieldset>
  );
}

export default FilterByStatus;
