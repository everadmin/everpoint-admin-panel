import { css } from "astroturf";

export const styles = css`
  .default {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .earth {
    background-image: url(../../img/earth.svg);
  }
  .russia {
    background-image: url(../../img/russia.svg);
  }
  .moscow {
    background-image: url(../../img/moscow.svg);
  }
  .metro {
    background-image: url(../../img/address-1.svg);
  }
`;