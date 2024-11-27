import BoxChloeTitle from './BoxChloeTitle';
import BoxChloeExplanation from './BoxChloeExplanation';
import BoxChloeButton from './BoxChloeButton';

const BoxChloe = ({chloeData}) => {
  return (
    <div className="col-md-6 col-lg-4">
      <article className="box-chloe box-chloe_secondary">
        <div className={`box-chloe__icon ${chloeData.icon}`} />
        <div className="box-chloe__main">
          <BoxChloeTitle title={chloeData.title} />
          <BoxChloeExplanation explanation={chloeData.explanation} />
          <BoxChloeButton href={chloeData.href} buttonLabel={chloeData.buttonLabel} />
        </div>
      </article>
    </div>
  );
}

export default BoxChloe;
