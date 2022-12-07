import { ProcessingProgress } from '../../components/hand-viewer-page/ProcessingProgress';
import { CancelButton } from '../../components/hand-viewer-page/CancelButton';
export function CardSetErrorView(props: CardSetErrorViewProps) {
  const { error, onClosing, progress } = props;
  return (
    <div className="flex h-screen w-screen flex-col bg-slate-700 p-0">
      <div className="navbar items-center justify-center bg-transparent p-0">
        <div className="flex w-2/3 flex-row items-center justify-center bg-slate-700 p-0">
          <div className="flex w-fit items-start justify-start  bg-slate-700 p-0 text-white">
            <CancelButton callback={onClosing} />
          </div>
          <div className="flex w-full items-center justify-end bg-slate-700 pl-8">
            <ProcessingProgress progressPercent={progress} />
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-slate-700">
        <div className="flex h-2/3 w-2/3 items-center justify-center rounded-2xl bg-slate-700  shadow-lg">
          {/* <CardView
                cardData={crtCardData}
                rateCard={rateCard}
                key={crtCardId}
                prevScore={crtCardScore}
              /> */}
          <p>
            Error: <strong>{error.message}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}