import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  distorter,
  propPadding,
  propAlignSelf,
  propWidth,
  propMinWidth,
  propFlex,
  propMinWidth1,
}) => {
  const shearSheetStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const anisaZahraStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propWidth, propMinWidth, propFlex]);

  const founderMilenialStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="reflector-wrapper">
      <div className="reflector">
        <div className="shear-sheet" style={shearSheetStyle}>
          <img className="distorter-icon" alt="" src={distorter} />
        </div>
        <div className="flipper">
          <div className="anisa-zahra-wrapper" style={frameDivStyle}>
            <b className="anisa-zahra1" style={anisaZahraStyle}>
              Anisa Zahra
            </b>
          </div>
          <div className="founder-milenial1" style={founderMilenialStyle}>
            Founder milenial
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
