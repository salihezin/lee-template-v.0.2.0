const BoxAliceIcon = ({ icon }) => {
  return (
    <div className="box-alice__aside">
      <div className="box-alice__icon-outer">
        <div className="icon-figure">
          <div className="box-triangle">
            <svg
              x="0px"
              y="0px"
              width="80px"
              height="80px"
              viewBox="0 0 100 100"
              style={{ fill: "#f7f7f7" }}
            >
              <path d="M20,93.301c-11,0-15.5-7.794-10-17.321l30-51.962c5.5-9.526,14.5-9.526,20,0l30,51.962 c5.5,9.526,1,17.321-10,17.321H20z" />
            </svg>
          </div>
          <span className={"box-alice__icon " + icon} />
        </div>
      </div>
    </div>
  );
}

export default BoxAliceIcon;
