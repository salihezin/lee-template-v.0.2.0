import BoxAliceIcon from "./BoxAliceIcon";
import BoxAliceTitle from './BoxAliceTitle';
import BoxAliceExplanation from './BoxAliceExplanation';

const BoxAlice = ({boxAliceData}) => {
  return (
    <div className="col-md-6 col-lg-4">
      <article className="box-alice">
        <div className="box-alice__inner">
          <BoxAliceIcon icon={boxAliceData.icon} />
          <div className="box-alice__main">
            <BoxAliceTitle title={boxAliceData.title} />
            <BoxAliceExplanation explanation={boxAliceData.explanation} />
          </div>
        </div>
      </article>
    </div>
  );
}

export default BoxAlice;
