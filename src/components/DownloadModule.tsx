import React from "react";
import "../styles/DownloadModule.css";

interface Props {
  macUrl: string;
  windowsUrl: string;
  linuxUrl: string;
}

const DownloadModule = () => {
  const handleDownload = (url: string) => {
    // TODO: Register url click here
    window.location.href = url;
  };
  return (
    <div className="download-module">
      <span className="download-text">Download:</span>
      <div className="dl-buttons">
        <div className="download-button" onClick={() => handleDownload('https://github.com/open-source-labs/SeeQR/releases/download/v9.0.1/SeeQR-9.0.1.dmg')}>
          <img src="/media/dl_icons/mac.png" alt="Download for Mac" />
        </div>
        <div className="download-button" onClick={() => handleDownload("https://github.com/open-source-labs/SeeQR/releases/download/v9.0.1/SeeQR-9.0.1-win.zip")}>
          <img src="/media/dl_icons/windows.png" alt="Download for Windows" />
        </div>
        <div className="download-button" onClick={() => handleDownload("https://github.com/open-source-labs/SeeQR/releases/download/v9.0.1/SeeQR-9.0.1.AppImage")}>
          <img src="/media/dl_icons/linux.png" alt="Download for Linux" />
        </div>
      </div>
    </div>
  );
};

export default DownloadModule;
