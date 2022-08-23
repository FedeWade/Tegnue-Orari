import React from "react";

class GoogleSquareAd extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9838764637658937"
        data-ad-slot="2735325386"
        data-ad-format="auto"
        data-adtest="on"
        data-full-width-responsive="true"
      />
    );
  }
}
export default GoogleSquareAd;
